// import { useState } from 'react'
import "./App.css";
import Markdown from "marked-react";
import { useState } from "react";

function App() {
  const [text, setText] = useState("");

  return (
    <>
      <div className="wrapper">
        <div className="editorWrap">
          <div className="toolbar">Editor</div>
          <textarea
            id="editor"
            onChange={(e) => setText(e.target.value)}
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="previewWrap">
          <div className="toolbar">Preview</div>
          <div id="preview">
            <Markdown>{text}</Markdown>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
