import "./App.css";
import {HashRouter,Route,Routes} 
from "react-router-dom";
import Nav from "./nav";
import Home from "./home";
import Register from "./register";
import userContext from "./context";
import Login from './login';

export default function App() {
  return (
    <>
      <HashRouter>
        <div>
          <Nav />          
          <userContext.Provider
            value={{
              users: [
                {
                   name: "Anu",
                   email: "anu@gmail.com",
                   password: "anu@05"
                  
                }
              ]
            }}>
           
            <Routes>
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/register" element={<Register />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/nav" element={<Nav/>}/>
            </Routes>
          </userContext.Provider>
        </div>
      </HashRouter>
    </>
  );
}
