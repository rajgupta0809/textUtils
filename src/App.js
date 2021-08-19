import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from 'react'
import Alert from "./components/Alert";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message , type) =>{
    setAlert({
    msg: message,
    type: type
    });

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // const royalMode = () =>{
  //   if(mode === 'light'){
  //     setMode('blue')
  //     document.body.style.backgroundColor = '#042743';
  //     showAlert("Dark mode has been enabled" , "Success");
  //   }else{
  //     setMode('light')
  //     document.body.style.backgroundColor = 'white';
  //     showAlert("Dark mode has been disabled" , "Success");
  //   }
  // }

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Royal mode has been enabled" , "Success");
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Royal mode has been disabled" , "Success");
    }
  }
  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3" >
        <Textform heading="Enter Your text" showAlert = {showAlert} mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
