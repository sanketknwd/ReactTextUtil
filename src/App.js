import React, { useState} from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  const[mode,setMode]=useState('light');
  const[alert,setAlert]=useState(null);
  const[modeName,setModeName]=useState('Enable Darkmode');
  const showAlert=(message,type)=>{
    setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1000);
  }
  const toggleMode=()=>{
    if(mode==='light')
    {
      setMode('dark');
      setModeName('Enable Lightmode');
      document.body.style.backgroundColor='gray';
      showAlert("Dark Mode is Enable","success");
      document.title='TextUtil-DarkMode';
      // setInterval(()=>{
      //   document.title='TextUtil is best';
      // },2000)
      // setInterval(()=>{
      //   document.title='Install TextUtil';
      // },1500)
    }
    else{
      setMode('light');
      setModeName('Enable Darkmode');
      document.body.style.backgroundColor='white';
      showAlert("light Mode is Enable","success");
      document.title='TextUtil-LightMode';
    }
    
  }
  return (
  <>
  <Router>
  {/* <Navbar title="Sanket" /> */}
  <Navbar title="TextUtil" mode={mode} toggleMode={toggleMode} modeName={modeName}/>
  <Alert alert={alert}/>
  <div className="container my-3">
  <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <TextForm heading="Enter Your Text" mode={mode} showAlert={showAlert}/> 
          </Route>
  </Switch>
  </div>
  </Router>
  </>
  );
}

export default App;
