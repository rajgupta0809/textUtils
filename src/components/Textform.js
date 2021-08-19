import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase" , "Success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase" , "Success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Successfully cleared All" , "Success");
  };

  const handleCopy = () => {
    var text = document.getElementById("myBox");
    text.select();
    // text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Succesfully copied to Clipboard" , "Success");
  };

  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Successfully removed all extra spaces" , "Success");
  };
  
  const capitalizeFirstLetter = () =>{
    let newText =  text.charAt(0).toUpperCase() + text.slice(1);
    setText(newText);
    props.showAlert("Capatalized first letter" , "Success");
  };

  
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
    <div className = "container" style={{color: props.mode === 'dark' ? 'white': '#042743'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text} onChange={handleOnChange} placeholder="Enter text here" id="myBox" rows="6" style={{backgroundColor: props.mode === 'dark' ? 'grey': 'white' , color: props.mode === 'dark' ? 'white': '#042743'}}></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear All</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy All</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-1" onClick={capitalizeFirstLetter}>Capatilize First</button>
      
    </div>
    <div className="container my-3" style={{color: props.mode === 'dark' ? 'white': '#042743'}}>
      <h2>Your text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} charachters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text.length>0 ? text : "Enter Text in the textbox above to preview it here."}</p>
    </div>

    </>
  );
}
