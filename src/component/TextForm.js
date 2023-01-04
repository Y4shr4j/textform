import React, {useState}  from 'react';

function TextForm(props) {
    

    
    const handleupclick =() => {
        console.log("uppercase is clicked "+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success");
    }
    const handlelowclick =() => {
        console.log("uppercase is clicked "+text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowerCase", "success");
    }
    const handleonchange = (e)=>{
        console.log("on change");
        setText(e.target.value)
    }
    const removeSpace = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed", "success");
    }
    const handleCapitalize = () => {
        let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
        setText(newText);
        props.showAlert("Capitalized the text", "success");
    }
    
    const handleCopy = () => {
        console.log("copied text");
        var text = document.getElementById("myBox");
        // text.setSelectionRange(0, 9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied", "success");
    }
    
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(msg);
        const toogle = document.getElementById('toggle')
        if (toogle.textContent === "🔊") {
            toogle.innerHTML = "🔇"
        }
        else {
            toogle.innerHTML = "🔊"
            
            if (toogle.innerHTML === "🔊"){
                window.speechSynthesis.cancel()
            }
            toogle.innerHTML = "🔊"
        }
        props.showAlert("audio playing", "warning");
    }
    const handleclearclick = (e)=>{
        console.log("on change");
        setText("")
        props.showAlert("Text cleared", "danger");
    }


    
    const [text, setText] = useState("");
    

  return (
    <div>
    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" placeholder='ENTER YOUR TEXT' id="myBox" value ={text} 
        style={{backgroundColor: props.mode==='dark'?'#191970':'#F0B27A', color: props.mode==='dark'?'white':'#042743'}}
        onChange={handleonchange} rows="10" ></textarea>
        </div>
        <button  disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>UpperCase</button>
        <button  disabled = {text.length===0} className="btn btn-success mx-1 my-1" onClick={handlelowclick}>LowerCase</button>
        <button  disabled = {text.length===0} className="btn btn-danger mx-1 my-1" my-1 onClick={handleclearclick}>Clear</button>
        <button  disabled = {text.length===0} className="btn btn-warning mx-1" onClick={handleCapitalize}>Capitallize</button>
        <button  disabled = {text.length===0} className="btn btn-info mx-1 my-1" onClick={removeSpace}>extra space</button>
        <button  disabled = {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy</button>
        
        <button disabled = {text.length===0} type="submit" onClick={speak} className="btn btn-secondary mx-2 my-2" id="toggle" mx-1>🔊</button>
        

        
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1 >your text summary</h1>
        <p>{0.008*text.split(' ').filter(value=>value!=="").length} <b>Minutes read</b> </p>
        <p>{text.trim().length } <b>only characters</b></p>
        <p>{text.replace(/\n/g, " ").split(' ').filter(value => value !== "").length} <b>only words</b></p>
        {/* <h1000>{text.split(" ").length} words and {text.length} characters</h1000> */}
        <h2>Preview: </h2>
        <p>{text.length>0?text: "Nothing to preview ."} </p>
    </div>
    </div>
  )
}

export default TextForm
