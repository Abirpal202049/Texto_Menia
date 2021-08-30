import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { Aboutus } from './components/Aboutus';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('Enable Dark Mode')


  const [alert, setAlert] = useState(null);
  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggle = ()=>{
    if(mode === 'dark'){
      setMode('light');
      setText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#1f1f1f'
      showAlert("Light mode has been enabled" , "success");
      
    }
    else{
      setMode('dark');
      setText('Enable Light Mode')
      document.body.style.backgroundColor = '#1f1f1f'
      document.body.style.color = 'white'
      showAlert("Dark mode has been enabled" , "success");
    }
  }


  return (
    <>
    <Router>
      <Navbar titleText = "Texto_Menia" mode ={mode} change={toggle} toggletext = {text}/> 
      <Alert alert = {alert}/>
      

      <Switch>
          <Route exact path="/about">
            
            <Aboutus mode ={mode} change={toggle}  heading="Let's Know About Us"/>
          </Route>

          <Route path="/">

            <Textform AlertMessage={showAlert} boxheading="Enter Your Text Below To Analyse" mode = {mode} change={toggle}/>
          </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;