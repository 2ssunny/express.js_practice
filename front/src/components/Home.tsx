import React from "react";
import { Link } from "react-router-dom";

import "./home.css";

function App() {
  return (
    <div className="home">
      <Link to="/board">Board</Link>
    </div>
  );
}
export default App;
