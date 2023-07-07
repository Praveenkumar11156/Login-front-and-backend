import "./App.css"
import React from "react";
import { useNavigate,Link } from "react-router-dom";
import axios from 'axios';
export default function CreateAccount() {
     const [show, setShow] = React.useState(true);
     const [firstname, setFirstname] =  React.useState("");
     const [lastname, setLastname] =  React.useState("");
     const [email, setEmail] =  React.useState("");
     const [password, setPassword] =  React.useState("");
    
     const navigate=useNavigate()
     
     const handleCreate=async()=>{
      try {
       axios.post("http://localhost:4000/api/abc/register",{
        firstname:firstname,
        lastname:lastname,
        email:email,
        password:password
       })
       .then(res=>{
        if(res.status===200){
          alert("Account Created Sucessfully")
          navigate('/login')
        }
       
         }   )
       .catch(err=>console.warn(err))
    
      } catch (error) {
       console.error(error);
      }
   
    }
   

  return (
    <>
    {""} 
     {show ? (
    <div className="box">
      <h3  className="heading">REGISTER</h3>
      <hr></hr>
    <form class="row g-3 needs-validation" novalidate>
  <div class="cform">
    <label for="validationCustom01" class="form-label">First Name</label>
    <input type="text" class="form-control" id="firstname" placeholder="Enter FirstName" required
     value={firstname}
     onChange={(e) => setFirstname(e.target.value)}/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="cform">
    <label for="validationCustom02" class="form-label">Last Name</label>
    <input type="text" class="form-control" id="lastname" placeholder="Enter LastName" required
     value={lastname}
     onChange={(e) => setLastname(e.target.value)}/>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>

  <div class="cform">
    <label for="validationCustom02" class="form-label">Email Address</label>
    <input type="email" class="form-control" id="email" placeholder="Enter Mail-Id" required
     value={email}
     onChange={(e) => setEmail(e.target.value)}/>
    <div class="valid-feedback">
      Looks good!
    </div>
    
  </div>
  
  <div class="cform">
    <label for="validationCustom03" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" required
    value={password}
    onChange={(e) => setPassword(e.target.value)}/>
    <div class="invalid-feedback">
      Please provide a max 8 chacter.
    </div>
  </div>
    <div class="col-12">
    <button class="btn btn-danger" type="submit" onClick={handleCreate}>Create Account</button>
  </div> 
  <Link to="/login" class="link">
  Already have an account ? <span>Sign In</span> 
</Link>
</form>
</div>
 ) : (
   <>
  
  <h5 class="success">Successfully Created!</h5>
 </>
 )
 }

    </>
  )
}
