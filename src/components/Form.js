import React, { useState } from 'react';


export default function Form(props){
    const [text,setText] = useState("");

    //Upper case logic
    const toUpper = ()=>{
        if(text === ""){
            props.showAlert("Please write something first",'error');

        }
        else{ 
            let str = text.toUpperCase();
            setText(str);
            props.showAlert("Converted To Upper Case",'success');
        }

    }



    //On Change Handler
    const onChangeHandler = (e)=>{
        setText(e.target.value);
    }

    //Remove Extra Spaces Logic
    const removeExtraSpace = ()=>{
        if(text === ""){
            props.showAlert("Please write something first",'error');

        }
        else {
            let arr = text.trim().split("\n");
        
            let cleanedArr = arr.map((line) => {
                if (line === '') {
                    return line;
                } else {
                    let words = line.split(/\s+/);
                    let cleanWords = words.map((word) => word.replace(/\s+/g, " "));
                    return cleanWords.join(" ");
                }
            });
        
            let cleanedText = cleanedArr.join("\n");
            setText(cleanedText);
            props.showAlert("Extra spaces has been removed",'success');
        }

          
    }

    //To lower case logic
    const toLower = ()=>{
        if(text === ""){
            props.showAlert("Please write something first",'error');
        }
        else{
            let lower = text.toLowerCase();
            setText(lower);
            props.showAlert("Converted To Lower Case",'success');
            

        }
        
    }

    //Copy to clip board logic
    const copyToClipBoard = ()=>{
        if(text === ""){
            
            props.showAlert("Nothing To Copy",'error');
        }
        else{
            navigator.clipboard.writeText(text);
            props.showAlert("Copied To Clipboard",'success');
        }
    }

    //Clear logic
    const clear = ()=>{
        if(text === ""){
            props.showAlert("Nothing To Clear",'error');
        }
        else{
            setText("");
            props.showAlert("Text Has Been Cleared",'success');

        }
        
    }

    //firstCharacterUpper logic
    const firstCharacterUpper = ()=>{
        if(text === ""){
            props.showAlert("Please write something first",'error');

        }
        else{

        
        let lines = text.split("\n");
        let filteredLines = lines.map((line) => {
            let words = line.split(/\s+/);
            let filteredWord = words.map((word) => {
                let myWord = word.charAt(0).toUpperCase() + word.slice(1);
                return myWord;
            });
            return filteredWord.join(" "); // Join the filtered words into a line
        });
        let cleanText = filteredLines.join('\n'); // Join the lines into clean text
        setText(cleanText);
        props.showAlert("First Character Has Been Converted To Upper Case!",'success');

    }
        
    }
    return(
        <>
        <div className="container my-5">
        <div className="mb-3">
           <h3 style={{color : props.mode === 'dark' ? 'white' : 'black'}}>{props.text} </h3>
            <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? '#0E1419':'white',
            color : props.mode === 'dark' ? 'white' : 'black'}}  value={text} onChange={onChangeHandler} id="exampleFormControlTextarea1" rows="7"></textarea>

        </div>
        <div className="container buttonCont">

      
            <div className="button btn btn-primary " onClick={toUpper}>Convert To Upper</div>
            <div className="button btn btn-primary " onClick={toLower}>Convert To Lower</div>
            <div className="button btn btn-primary " onClick={removeExtraSpace}>Remove Extra Spaces</div>
            <div className="button btn btn-primary " onClick={copyToClipBoard}>Copy To ClipBoard</div>
            <div className="button btn btn-primary " onClick={firstCharacterUpper}>First Letter Upper</div>
            <div className="button btn btn-primary " onClick={clear}>Clear</div>

         </div>

         <div className="container">
         <p className='my-4' style={{color: props.mode === 'dark' ? 'white' : 'black'}}><strong>Words Count: {text.length === 0 ? text.trim().split(" ").length =0: text.trim().split(/\s+/).length} </strong></p>
        <p className='my-1 ' style={{color: props.mode === 'dark' ? 'white' : 'black'}}><strong>Character Count: {`${text.trim().length}`} </strong></p>
         </div>
            
        </div>
        </>

    )

}