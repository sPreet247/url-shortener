import Clipboard from "clipboard";
import React, { useState } from "react";
import "./App.css";
import Form from "./Form";
import Output from "./Output";

function App() {
  const [url, setUrl] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const getLink = async function (link) {
    try {
      const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ long_url: `${link}`, domain: "bit.ly" }),
      });
      if (!response.ok) throw new Error("Failed!  Please enter a valid url...");

      const data = await response.json();
      setNewUrl(data.link);
      //
    } catch (err) {
      console.log(err);
      setNewUrl(err.message);
      setUrl("");
    }
  };

  const handleSubmit = function (e) {
    e.preventDefault();
    getLink(url);
  };

  const [clipboardMessage, setClipboardMessage] = useState("");
  const clippy = new Clipboard(".copy");
  clippy.on("success", () => {
    setClipboardMessage("Copied to clipboard");
  });

  return (
    <div className="App">
      <>
        <div className="header">
          <h1>Url Shortener</h1>
        </div>
        <Form handleSubmit={handleSubmit} url={url} setUrl={setUrl} />
        <Output
          newUrl={newUrl}
          setNewUrl={setNewUrl}
          clipboardMessage={clipboardMessage}
          setClipboardMessage={setClipboardMessage}
        />

        <div className="footer">
          <h5>Made by Sukhpreet Singh &copy; 2022</h5>
        </div>
      </>
    </div>
  );
}

export default App;
