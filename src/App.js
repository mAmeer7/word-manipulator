import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
import React, { useState } from 'react'
import Alert from './component/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode]=useState('light');
  // Another state creation
  const [alert,setAlert]=useState(null)

  let showAlert=(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(function(){setAlert(null)},2000)


  }


  let darkmode=()=>{
    let btnn= document.querySelector('#btnn');
if(mode === 'light'){
  setMode('dark');
  btnn.innerText='Light Mode'
  document.body.style.backgroundColor='#081B33'
  showAlert("Success! The mode is Dark","success")
}else{
  setMode('light')
  btnn.innerText='Dark Mode'
  document.body.style.backgroundColor='#fff'
  showAlert("Success! The mode is Light","success")
}
  }


  return (
    <>
    <Router>
      
    

    <Navbar mode={mode} darkmode={darkmode}/>   {/*  darkmode is function */}
    <Alert alertp={alert}/>
<div className="container-sm pt-5" >
  <Routes>
  <Route exact path="/" element={<TextForm mode={mode} showAlert={showAlert}/>}/>
  <Route exact path="/about" element={<About mode={mode}/>}/>
          
          
          
  </Routes>

</div>
</Router>
</>
    
  );
}

export default App;
