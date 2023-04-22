import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        //console.log("UpperCase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowerClick=()=>{
        //console.log("UpperCase was clicked" + text);
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower","success");
    }
    const handleOnChange=(event)=>{
        //console.log("onchange");
        setText(event.target.value);
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text Removed","success");
    }
    const handleCopy=()=>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied","success");
    }
    const handleRemoveSpace=()=>{
        //using regex
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space are removed","success");
    }
    const [text, setText] = useState(" ");
  return (
    <>
    <div className='container'>
        <h1 className={`text-${props.mode==='light'?'darak':'light'}`}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control"  value={text} style={{backgroundColor:props.mode==='light'?'white':'gray',color:props.mode==='light'?'black':'white'}} onChange={handleOnChange} id="myBox" rows="8"></textarea> 
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleRemoveSpace}>Remove Extra Space</button>
    </div>
    <div className={`container my-2 text-${props.mode==='light'?'darak':'light'}`}>
        <h2>Your text summary</h2>
        <p><b>{(text.split(" ").length)-1}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{0.008 * ((text.split(" ").length)-1)}</b> Minuts to read.</p>
        <h2>Priview</h2>
        <p>{text.length>0?text:"Enter Your Text To priview...."}</p>
    </div>
    </>
  )
}
