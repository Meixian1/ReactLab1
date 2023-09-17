import { useState } from 'react'; 
import './App.css';
import HelloWorld from './components/HelloWorld'; 
import ColorChanger from './components/ColorChanger'; // Corrected import path


function App() {

  return (
    <>
      <div>
        <HelloWorld/> {/*Display the HelloWorld component */}
        <ColorChanger/> {/*Display the ColorChanger component */}
      </div>
    </>
  ); 
  }
export default App;
