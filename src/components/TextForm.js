import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };
  const handleLoClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };
  const handleCopy = () => {
    var copyText = document.getElementById("myBox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied to Clipboard!", "success");
  };
  const handleClearText = () => {
    let newText = " ";
    setText(newText);
    props.showAlert("Text Cleared!", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div>
        <div
          className="container"
          style={{ color: props.mode === "dark" ? "white" : "#042743" }}
        >
          <h1 className="mb-4">{props.heading}</h1>
          <div className="mb-3 my-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              style={{
                backgroundColor: props.mode === "dark" ? "#13466e" : "white",
                color: props.mode === "dark" ? "white" : "#042743",
              }}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleUpClick}
          >
            Convert to Uppercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleLoClick}
          >
            Convert to Lowercase
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleExtraSpaces}
          >
            Remove Extra spaces
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleCopy}
          >
            Copy Text
          </button>
          <button
            disabled={text.length === 0}
            className="btn btn-primary mx-1 my-1"
            onClick={handleClearText}
          >
            Clear Text
          </button>
        </div>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "#042743" }}
      >
        <h2>Text Summary</h2>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes required to Read
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </>
  );
}
