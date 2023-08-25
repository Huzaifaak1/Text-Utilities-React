
import './App.css';
import React,{ useState } from 'react';

import Navbar from './components/Navbar';
import Form from './components/Form';
import Alert from './components/Alert';
// import About from './components/About';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode] = useState("light");
  const [alert,setAlert] = useState(null);


  const showAlert = (msg,type)=>{
    setAlert({
      msg :msg,
      type:type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#0E1419';
      showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");


    }
  }

  return (
   <>
   {/* <BrowserRouter> */}
      <Navbar heading="TextUtils" aboutText = "About" toggle = {toggleMode} mode= {mode}/>
      <Alert alert = {alert}/>
      <Form text="Enter Your Text Below" mode= {mode} showAlert = {showAlert}/>
    {/* <Routes> */}
        {/* <Route exact path='/about' element={<About mode={mode}/>}/> */}
        {/* <Route exact path='/' element={<Form text="Enter Your Text Below" mode= {mode} showAlert = {showAlert}/>}/> */}
       
        
    {/* </Routes> */}
         
    {/* </BrowserRouter> */}

    
   
   </>
  );
}

export default App;
