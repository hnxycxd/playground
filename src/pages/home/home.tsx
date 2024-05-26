import { Link } from "react-router-dom";
import { routes } from "@/route";

function Home() {
  const renderRoutes = (routes, parentPath?: string) => {
    return routes.map((route) => {
      if (route.children) return renderRoutes(route.children, route.path);
      if (!route.path || route.path === "*") return null;

      const path = parentPath ? `${parentPath}/${route.path}` : route.path;
      return (
        <li key={path}>
          <Link to={path}>{path}</Link>
        </li>
      );
    });
  };

  return (
    <div>
      <ul>{renderRoutes(routes)}</ul>

      <div
        className="border-t border-solid border-red-500"
        // style={{ borderWidth: 1, borderColor: 'red', borderTopStyle: 'solid' }}
      >
        ss
      </div>
    </div>
  );
}

export default Home;
