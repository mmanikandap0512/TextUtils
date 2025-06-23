import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    if (text === "") {
      props.showAlert(
        "There is no Text to Convert. Please Enter the Text",
        "danger"
      );
    } else {
      setText(text.toUpperCase());
      props.showAlert("Converted to Uppercase", "success");
    }
  };

  const handleLoClick = () => {
    if (text === "") {
      props.showAlert(
        "There is no Text to Convert. Please Enter the Text",
        "danger"
      );
    } else {
      setText(text.toLowerCase());
      props.showAlert("Converted to Lowercase", "success");
    }
  };

  const handleClearClick = () => {
    if (text === "") {
      props.showAlert(
        "There is no Text to Convert. Please Enter the Text",
        "danger"
      );
    } else {
      setText("");
      props.showAlert("Text has been Cleared", "success");
    }
  };

  const handleReverseClick = () => {
    if (text === "") {
      props.showAlert(
        "There is no Text to Convert. Please Enter the Text",
        "danger"
      );
    } else {
      setText(text.split("").reverse().join(""));
      props.showAlert("Text has been Reversed", "success");
    }
  };

  const handleCopyClick = () => {
    if (text === "") {
      props.showAlert(
        "There is no Text to Convert. Please Enter the Text",
        "danger"
      );
    } else {
      let text = document.querySelector("#textarea");
      navigator.clipboard.writeText(text.value);
      props.showAlert("Text is copied to Clipboard", "success");
    }
  };

  const captilizeWords = (text) => {
    return text
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const handleCapClick = () => {
    if (text === "") {
      props.showAlert(
        "There is no Text to Convert. Please Enter the Text",
        "danger"
      );
    } else {
      let conText = captilizeWords(text);
      setText(conText);
      props.showAlert("Text is Captilized", "success");
    }
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="container my-3">
        <h1 style={{ color: props.color.color }}>{props.heading}</h1>
        <div className="form-floating mb-3">
          <textarea
            className="form-control active"
            id="textarea"
            placeholder="Enter Text"
            value={text}
            onChange={handleChange}
            style={props.color}
          ></textarea>
        </div>
        <button
          className={`btn btn-${props.btnText} mx-1 my-1`}
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          className={`btn btn-${props.btnText} mx-1 my-1`}
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          className={`btn btn-${props.btnText} mx-1 my-1`}
          onClick={handleCapClick}
        >
          Convert to Captilize
        </button>
        <button
          className={`btn btn-${props.btnText} mx-1 my-1`}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
        <button
          className={`btn btn-${props.btnText} mx-1 my-1`}
          onClick={handleReverseClick}
        >
          Reverse Text
        </button>
        <button
          className={`btn btn-${props.btnText} mx-1 my-1`}
          onClick={handleCopyClick}
        >
          Copy Text
        </button>
      </div>
      <div className="container my-3">
        <h1 style={{ color: props.color.color }}>Your Text Summary</h1>
        <p style={{ color: props.color.color }}>
          Text Contains{" "}
          <b>
            {
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
            }
          </b>{" "}
          Words <b>{text.length}</b> Characters
        </p>
      </div>
    </>
  );
}
