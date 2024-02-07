import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Board.css";

function App() {
  interface boardData {
    BOARD_ID: number;
    BOARD_TITLE: string;
    REGISTER_ID: string;
    REGISTER_DATE: string;
  }

  const [boardData, setBoardData] = useState<boardData[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/list", {}).then((res) => {
      setBoardData(res.data);
    });
  }, []);

  return (
    <div className="Board">
      <h1>Board</h1>

      <Link to="/">Home</Link>
      <div className="BoardList">
        <div className="BoardItem">
          {boardData.map((data, index) => {
            return (
              <div key={index} className="boardList">
                <div className="BoardList_contents">
                  <input type="checkbox" />
                  <p className="boardListId">{data.BOARD_ID}</p>
                  <p className="boardListTitle">{data.BOARD_TITLE}</p>
                  <p className="boardListId">{data.REGISTER_ID}</p>
                  <p className="boardListDate">
                    Uploaded at {data.REGISTER_DATE}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Link to="./write">
        <button>Write</button>
      </Link>

      <button>Edit</button>
      <button>Delete</button>
    </div>
  );
}

export default App;
