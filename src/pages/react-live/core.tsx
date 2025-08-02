import React, {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { transform } from "@babel/standalone";

interface LiveContextType {
  code: string;
  scope: Record<string, any>;
  error: string | null;
}

interface LiveProviderProps {
  code: string;
  scope?: Record<string, any>;
  children: ReactNode;
}

interface LivePreviewProps {
  style?: React.CSSProperties;
}

// 创建 Context
const LiveContext = createContext<LiveContextType | null>(null);

// 简单的代码执行函数
function executeCode(code: string, scope: Record<string, any>) {
  const scopeKeys = Object.keys(scope);
  const scopeValues = Object.values(scope);

  let executableCode: any = `${code}createRoot(document.getElementById('live-preview-container')).render(<App />)`;
  try {
    const result = transform(executableCode, {
      presets: [["react", { runtime: "classic" }]],
      plugins: [],
    });
    executableCode = result.code;
  } catch (error) {
    return { error: error instanceof Error ? error.message : "代码执行错误" };
  }

  console.log("executableCode", executableCode);

  // 创建函数并执行
  const func = new Function(...scopeKeys, ` ${executableCode}`);
  func(...scopeValues);
  return { error: null };
}

// LiveProvider 组件
export const SimpleLiveProvider: React.FC<LiveProviderProps> = ({
  code,
  scope = {},
  children,
}) => {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const { error: execError } = executeCode(code, scope);
    setError(execError);
  }, [code, scope]);

  const contextValue: LiveContextType = {
    code,
    scope,
    error,
  };

  return (
    <LiveContext.Provider value={contextValue}>{children}</LiveContext.Provider>
  );
};

// LivePreview 组件
export const SimpleLivePreview: React.FC<LivePreviewProps> = ({ style }) => {
  const context = useContext(LiveContext);

  if (!context) {
    return (
      <div style={style}>错误：LivePreview 必须在 LiveProvider 内使用</div>
    );
  }

  const { error } = context;

  if (error) {
    return (
      <div
        style={{
          ...style,
          color: "red",
          padding: "10px",
          borderRadius: "6px",
          backgroundColor: "#ffe6e6",
        }}
      >
        <pre style={{ margin: "5px 0", fontSize: "12px" }}>{error}</pre>
      </div>
    );
  }

  return <div style={style}>加载中...</div>;
};

// 导出默认组件
export default {
  Provider: SimpleLiveProvider,
  Preview: SimpleLivePreview,
};
