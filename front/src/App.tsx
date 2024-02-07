import { Routes, Route, BrowserRouter } from "react-router-dom";
import React from "react";

import Home from "./components/Home";
import Board from "./components/Board";
import Write from "./components/Write";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />

          <Route path="Board">
            <Route path="" element={<Board />} />
            <Route path="Write" element={<Write />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
