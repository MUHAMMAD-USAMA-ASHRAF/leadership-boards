import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet.js';
import Subscribe from './Components/Subscribe.js';
import Stylesheet from './Components/Stylesheet.js';
import InlineStyle from './Components/inlineStyle.js';
import CSSModule from './Components/CSSModule.js';
import Counter from './Components/Counter.js';
import Student from './Components/Student.js';
function App() {
  return (
    <div className="App">
    <h1 className="leadersboardHeading">LeadersBoard</h1>
   <Student name="MOHIB KHAN" university="NUST " scores={100}/>
   <Student name="ASGHAR ALI" university="NED " scores={99}/>
   <Student name="ALI RAZA" university="UET" scores={98}/>
   <Student name="HANNAN" university="GC " scores={97}/>
   <Student name="ARYAAN KHAN" university="FAST" scores={96}/>
   <Student name="REHYAAN KHAN" university="LUMS " scores={95}/>
   
    </div>
  );
}

export default App;