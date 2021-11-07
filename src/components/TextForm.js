import {useState} from 'react';

export default function TextForm(props) {

    const capitalize = (someText) => {
        let wordsArray = text.toLowerCase().split('. ');
        let capsArray = [];

        wordsArray.forEach(someText => {
            capsArray.push(someText[0].toUpperCase() + someText.slice(1));
        });
        return capsArray.join(' ');
    };

    // text is a variable and setText is function to change text
    const [text, setText] = useState("");
    const [emails, setEmails] = useState("0");

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase", "success");
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase", "success");
    };

    // for clearing the screen-
    const handleClearClick = () => {
        setText("");
        setEmails(0);
        props.showAlert("cleared the textbox", "success");
    };

    // This function was made as assaignment
    const getEmailsFromText = () => {
        if(text.length!==0){
            // Should learn regular expressions
            let foundEmails = (text.match(/([a-zA-Z0-9._+-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi));
            setEmails(foundEmails + " ");
            props.showAlert("the emails found are shown below", "success");
        } else {
            props.showAlert('No text supplied', 'danger');
        }
    };

    // copying text to clipboard
    const handleCopyText = () => {
        // copying the text
        navigator.clipboard.writeText(text);
        props.showAlert("text copied to clipboard", "success");
    };

    const handleCapitalize = () => {
        if(text.length!==0){
            let capitalizedText = capitalize(text);
            setText(capitalizedText);
        } else {
            props.showAlert('No text supplied', 'danger');
        }
    };
    
    const handleOnChange = (event) => {
        // whenever the function is ran, new event would be created
        setText(event.target.value);
    };
    
    return (
        <>
          <div className="container">
            <h1 className="mt-3 mb-3">{props.heading}</h1>
            <textarea className="form-control mb-3" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            <button className={`btn btn-${props.greenMode===true?'success':'primary'} m-2`} onClick={handleUpClick}>Convert to Upper Case</button>
            <button className={`btn btn-${props.greenMode===true?'success':'primary'} m-2`} onClick={handleLowClick}>Convert to lower Case</button>
            <button className={`btn btn-${props.greenMode===true?'success':'primary'} m-2`} onClick={handleCapitalize}>Capitalize</button>
            <button className={`btn btn-${props.greenMode===true?'success':'primary'} m-2`} onClick={handleClearClick}>Clear text</button>
            <button className={`btn btn-${props.greenMode===true?'success':'primary'} m-2`} onClick={handleCopyText}>Copy text</button>
            <button className={`btn btn-${props.greenMode===true?'success':'primary'} m-2`} onClick={getEmailsFromText}>Check for emails</button>
          </div>
          <div className="container my-3">
            <h1>Your Text Summary</h1>
            <p><b>{text===""?0:text.trim().split(" ").length}</b> words, <b>{text.length}</b> characters</p>
            <p><b>{text===""?0:0.008 * text.split(" ").length}</b> Minutes to read</p>
            <p><b>{text===""?0:text.split(".").length}</b> sentences are in the text</p>
            <p>{emails==null?0:emails} emails found</p>
          </div>
        </>
    );
}

/*
  In this file:
  Look at the onchange function passing
  Look at the way to declare states and to import the useState from react
*/
