 import React, { useState } from "react";
import InputField from '../Reusable/InputField'
import NavBar  from './Navbar'
import axios from 'axios'
const SignUp = () => {
    const [name ,setName]=useState("");
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    const [role ,setRole] = useState("");
    const [user ,setUser] = useState();
    let apiKey=process.env.REACT_APP_BASE_URL
   
    
   const SignUp = async (e) => {
      try{
        e.preventDefault();
    let user = { name, email, password, role };
   let response = await axios.post(`${apiKey}/users/SignUp`,user);
    setUser(response.data)
    localStorage.setItem('user', response.data.data.token)
   
  
    console.log(response.data)
      }catch(err) {
          console.log("Failed To Login",err);
      }
};

  if (user){
    return <div><b>{user.name} User SignUp Success!</b></div>;
  }


  return (
    <form >
      <NavBar/>
        <h1>SignUp</h1>
        <div className="col-sm-6 offset-sm-3">
        <div className="form-group">
        <label>Name:</label>
        <InputField
          type="text"
          value={name}
          className="form-control"
          placeholder="Enter Name"
          onChange={(e)=>setName(e.target.value)}
        />
       
      </div>
      <div className="form-group">
        <label>Email:</label>
        <InputField
          type="email"
          value={email}
          className="form-control"
          placeholder="Enter Email"
          onChange={(e)=>setEmail(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <InputField
          type="password"
          value={password}
          className="form-control"
          placeholder="Enter Password"
          onChange={(e)=>setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
    <label>Role:</label>
    <select onChange={(e)=>setRole(e.target.value)}className="form-control" >
      <option>Select Role</option>
      <option>Teacher</option>
      <option>Student</option>
     </select>
    </div><br/>
      <button type="submit" onClick={SignUp} className="btn btn-primary">SignUp</button>
      </div>
    </form>
  );
};

export default React.memo(SignUp);



