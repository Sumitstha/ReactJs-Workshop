
import './assets/css/Header.css';
import {paraStyle,btnStyle} from "./Paragraph.js"
import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import girlImage from "./assets/images/research.png"

function App() {
  return (
    <>
    {/* REACT HAS CAMEL CASE */}
    {/* INLINE CSS */}
      {/* <header style={{color:"blue", backgroundColor:"wheat"}}>sumit</header> */}

      {/* EXTERNAL CSS */}
      <header >sumit</header>

      {/* SEPERATED STYLE OBJECT FILE CSS */}
      <p style={paraStyle}>This is react course</p>
      <button style={btnStyle}>Click me!</button>

{/* BOOTSTRAP */}
    <button className="btn btn-primary">bootstrap button</button>

<img src={girlImage} alt="girl" style={{height:"200px", width:"200px"}}/>

    </>
  );
}

export default App;
