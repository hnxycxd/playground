import { useEffect, useRef } from "react";
import { useSetState } from "ahooks";
import "./style.less";
import { create, createTimeCell } from "./data";

const startDate = new Date("2023-01-31");
const endDate = new Date("2024-01-01");

interface State {
  time: Partial<ReturnType<typeof create>>;
  timeCells: ReturnType<typeof createTimeCell>;
}
function TimeLine() {
  const tlRef = useRef<HTMLDivElement>(null);
  const [state, setState] = useSetState<State>({
    time: {},
    timeCells: createTimeCell(startDate, endDate),
  });

  const onResize = () => {
    const time = create({
      start: startDate,
      end: endDate,
      zoom: 200,
      viewportWidth: (tlRef.current as HTMLDivElement).offsetWidth,
    });
    setState({ time });
  };

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize, false);
    return () => window.removeEventListener("resize", onResize, false);
  }, []);

  console.log("state", state);
  return (
    <div className="bg-white" ref={tlRef}>
      <div className="header">
        <div style={{ width: state.time.timelineWidthStyle }}>
          {state.timeCells.map((cell) => (
            <div
              key={cell.id}
              className="header-cell"
              style={state.time.toStyleLeftAndWidth?.(
                new Date(cell.startYmd),
                new Date(cell.entYmd),
              )}
            >
              {cell.title}
            </div>
          ))}
        </div>
      </div>
      <div className="body">body</div>
    </div>
  );
}

export default TimeLine;
