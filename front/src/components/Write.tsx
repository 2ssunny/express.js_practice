import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const submitTest = () => {
    axios.get("http://localhost:8000/", {});
    alert("등록 완료!");
    navigate("/board");
  };
  return (
    <div className="Write">
      <h1>Write</h1>
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Body" />
        <button onClick={submitTest}>Submit</button>
        <button>cancel</button>
      </form>
    </div>
  );
}

export default App;
