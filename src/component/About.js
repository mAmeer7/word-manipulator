import React from 'react'

export default function About(props) {
  return (
    
    <div className='container pt-5'>
<div className="accordion" id="accordionExample">
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" >
        What does this app do?
      </button>
    </h2>
    <div id="collapseOne" className={`accordion-collapse collapse`} aria-labelledby="headingOne" data-bs-parent="#accordionExample"  >
      <div className={`accordion-body bg-${props.mode} text-${props.mode === 'light'?'dark':'light'} `}>
        <strong>Let me help you.</strong> This application generally accepts text input, which is subsequently transformed to UpperCase upon submission. This web app also assists in counting the amount of words and characters.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" >
       Why tf this app exists?
      </button>
    </h2>
    <div id="collapseTwo" className={`accordion-collapse collapse`} aria-labelledby="headingTwo" data-bs-parent="#accordionExample" >
      <div className={`accordion-body bg-${props.mode} text-${props.mode === 'light'?'dark':'light'} `}>
        <strong>I understand your frustration,</strong> however as a developer, this is my first REACT app. While developing this functioning software, I learned a lot. I realize it's not too attractive, but my main goal was to master javascript control.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'light'?'dark':'light'}`}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" >
        So what you learned?
      </button>
    </h2>
    <div id="collapseThree" className={`accordion-collapse collapse`} aria-labelledby="headingThree" data-bs-parent="#accordionExample" >
      <div className={`accordion-body bg-${props.mode} text-${props.mode === 'light'?'dark':'light'} `}>
      I learned how to install react using NPM, as well as the bundles and relationships of src, public, node modules, package.json, and many other things. The most significant thing I learnt was how to use props, states, and react routing dom.
      </div>
    </div>
  </div>
</div>
</div>
  )
}
