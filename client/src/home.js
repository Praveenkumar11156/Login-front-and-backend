import "./App.css";
import { useNavigate } from "react-router-dom";

import team from "./team.jpg";

export default function Img(){
  const navigate=useNavigate();
  async function reg(){
      navigate('/register')
  }
  async function log(){
      navigate('/login')
  }

  return(<>
  <p class="bg">ABC</p>
      <img alt="bl" class="img" src={team}/>
      <div class="sign">
      <button class="home" onClick={reg}>Sign Up</button>
      <button  class="home" onClick={log}>Sign In</button>
      </div><br/>
      
    
  </>)
};