import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  interface title {
    title: string;
  }

  interface content {
    content: string;
  }

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handlePost = () => {
    if (title === "" || content === "") {
      alert("Please fill in the title and content");
      return;
    } else if (title !== "" && content !== "") {
      axios.post("http://localhost:8000/post", {
        title: title,
        content: content,
      });
      alert("Post complete");
      navigate("/board");
    }
  };

  return (
    <div className="Write">
      <h1>Write</h1>
      <form>
        <label>
          Title:
          <br></br>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <br></br>
        <label>
          Body:
          <br></br>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </label>
        <br></br>
        <button onClick={handlePost}>Post</button>
      </form>
    </div>
  );
}

export default App;
