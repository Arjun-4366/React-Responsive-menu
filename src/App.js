import { useState } from "react";
import "./App.css";

function App() {
  let [pstatus, setPStatus] = useState(false);
  let [login,setLogin] = useState(false)

  return (
    <div className="App ">
      <button className="reg-btn" onClick={()=>setLogin(!login)}>Register here</button>
      <div className={`overlay ${login ?"showOverLay":''}`}></div>
      <div className={`loginModal ${login ?"showLogin":''}`}>
        <div className="title-div">
        <h1>Register Here</h1>
        <button className="cross-btn" onClick={()=>setLogin(!login)}>&times;</button>
        </div>
        <div className="login-form">
          <form action="">
          <input type="text" placeholder="Enter email here"/>
          <input type="password" placeholder="Enter your password"/>
          <div className="submit-btn-div">
          <button className="submit-btn">submit</button>
          </div>
          
          </form>
        
        </div>
      
    
      </div>
      <button className="micon" onClick={()=>setPStatus(!pstatus)}>
        {
         pstatus?<span>&times;</span>:<span>&#9776;</span>
        }
        </button>
     <div className={`menu ${pstatus?'activeMenu':''}`}>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Course</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
     </div>
     
    </div>
  );
}

export default App;
