import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import userContext from "./context";
import {useContext,useState} from 'react';


export default function Nav(){
  let ctx = useContext(userContext);
// const [userName,setUserName]=useState("")
const [data,setData]=useState([]);
let token=localStorage.getItem('x-auth');

 const config = {
    headers: {
        'Content-type':'application/json',
        'Accept':'application/json',
        'x-auth':token
         
    }
  };

 
 
  


  return(<>
  <nav class="navbar ">
    <ul class="nav">
     <li class="nav-item">
      <a class="nav-link active" aria-current="page" href="#/home">Home</a>
     </li>
     <li class="nav-item">
      <a class="nav-link" href="#/register">Register</a>
     </li> 
     <li class="nav-item">
      <a class="nav-link" href="#/login">Login</a>
     </li> 
     </ul>
  </nav>
  </>
  )}