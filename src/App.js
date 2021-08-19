import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar titleText = "Texto_Menia" /> {/* [titleText = "Texto_Menia"] is called as Props  */}
      <Textform boxheading="Enter Your Text Below To Analyse"/>
      
    </>
  );
}

export default App;