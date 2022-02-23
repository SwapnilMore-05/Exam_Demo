import React,{useState} from 'react'
import InputField from '../Reusable/InputField'
import NavBar  from './Navbar'
import {useNavigate,Link} from "react-router-dom"
import axios from 'axios'
const Login = () => {
    const [email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    const [user,setUser]=useState();
    const history=useNavigate();
    let apiKey=process.env.REACT_APP_BASE_URL

    const Login = async (e) => {
      try{
        e.preventDefault();
    let user = { email,password };
   let response = await axios.post(`${apiKey}/users/Login`,user);
    setUser(response.data)
    localStorage.setItem('user', response.data.data.token)
    console.log(response.data)
    history("/student");
    
      }catch(err) {
          console.log("Failed To Login",err);
      }
      setEmail("");
      setPassword("");
};

  if (user){
    return <div><b>{user.name} User Login Success!</b></div>;
  }


  return (
      <form>
        <NavBar/>
         <h1>Login</h1>
           <div className="col-sm-6 offset-sm-3">
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
        <p className="text-right">
      <Link to={'/forget'}>Forget Password?</Link>
      </p>
      </div>
      <button type="submit" onClick={Login} className="btn btn-primary">Login</button>
      
      </div>
      </form>
  )
}

export default React.memo(Login);