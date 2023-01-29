import React, { useState } from 'react'



export default function TextForm(props) {


    const handleClick=()=>{
        console.log("Submit button clicked")
        let values= document.querySelector('#mybox').value;
        if(values === ''){
          props.showAlert("Enter Something","danger")
        }
        setText(values.toUpperCase())
        

        
    }
    const handleOnchange=(e)=>{
        console.log('Onchange')
        setText(e.target.value)
    }
    const [text,setText]= useState("");
  return (
    <div className='container-sm'>
<div className="mb-3">
  <label htmlFor="mybox" className={`form-label text-${props.mode === 'light'?'dark':'light'}`}>Enter Text</label>
  <textarea className="form-control" id="mybox" rows="6" placeholder='Some Text Here Please' onChange={handleOnchange} value={text} style={{backgroundColor: props.mode==='light'?'white':'#152642', color : props.mode==='light'?'black':'white'}}></textarea>
</div>
<button type="button" className="btn btn-primary" onClick={handleClick}>Submit</button>

<p id="count" className={`text-${props.mode === 'light'?'dark':'light'}`}> Character count is {text.split(" ").join("").length}</p>
<p id="word" className={`text-${props.mode === 'light'?'dark':'light'}`}> Words is {text===""?"0":text.split(" ").length}</p>

</div>
  );
}
