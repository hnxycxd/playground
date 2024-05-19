import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Link to="/list">/list</Link>
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
