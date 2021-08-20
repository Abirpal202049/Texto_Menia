import Navbar from './components/Navbar';
import Textform from './components/Textform';
import React, { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light')
  const [text, setText] = useState('Enable Dark Mode')
  const toggle = ()=>{
    if(mode === 'dark'){
      setMode('light');
      setText('Enable Dark Mode')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#1f1f1f'
    }
    else{
      setMode('dark');
      setText('Enable Light Mode')
      document.body.style.backgroundColor = '#1f1f1f'
      document.body.style.color = 'white'
    }
  }


  return (
    <>
      <Navbar titleText = "Texto_Menia" mode ={mode} change={toggle} toggletext = {text}/> {/* [titleText = "Texto_Menia"] is called as Props  */}
      <Textform boxheading="Enter Your Text Below To Analyse" mode = {mode} change={toggle}/>
      
    </>
  );
}

export default App;