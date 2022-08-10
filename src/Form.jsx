import React from "react";
import "./Form.css";

const Form = ({ url, setUrl, handleSubmit }) => {
  return (
    <form className="input" onSubmit={handleSubmit}>
      <label htmlFor="url" className="label"></label>
      <input
        placeholder="Paste Url"
        id="url"
        type="text"
        required
        autoFocus
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit" className="btn">
        Shorten
      </button>
    </form>
  );
};

export default Form;
