import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'
import Alert from './components/Alert';






function App() {
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('Enable Dark Mode')
  const [alert, setAlert] = useState('Light Mode Enabled Successfully')
  const toggle = ()=>{
    if(mode === 'dark'){
      setMode('light');
      setText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#1f1f1f'
      setAlert('Light Mode Enabled Successfully')
      
    }
    else{
      setMode('dark');
      setText('Enable Light Mode')
      document.body.style.backgroundColor = '#1f1f1f'
      document.body.style.color = 'white'
      setAlert('Dark Mode Enabled Successfully')
    }
  }


  return (
    <>
      <Navbar titleText = "Texto_Menia" mode ={mode} change={toggle} toggletext = {text}/> 
      <Alert mode ={mode} text = {alert}/>
      <Textform boxheading="Enter Your Text Below To Analyse" mode = {mode} change={toggle}/>
    </>
  );
}

export default App;