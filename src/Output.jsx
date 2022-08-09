import React from "react";
import { FiCopy } from "react-icons/fi";
import "./Output.css";

const Output = ({ newUrl, clipboardMessage }) => {
  return (
    <div className="output">
      <p>Shortened Url:</p>
      <blockquote className="newUrl">
        {newUrl}
        <button
          className="copy"
          data-clipboard-target=".newUrl"
          style={{ display: `${newUrl ? "block" : "none"}` }}
        >
          <FiCopy />
        </button>
      </blockquote>
      <p className="message">{clipboardMessage}</p>
    </div>
  );
};

export default Output;
