import React,{ useState} from 'react'
import InputField from '../Reusable/InputField'
import NavBar  from './Navbar'
import axios from 'axios';
const NewPassword = () => {
    const[password,setPassword] =useState("");
    const [confirm ,setConfirm] = useState("");
    const [user,setUser] = useState();
    let apiKey=process.env.REACT_APP_BASE_URL  

        const handleSubmit = async (e) => {
            try{
              e.preventDefault();
          let user = { password,confirm };
         let response = await axios.post(`${apiKey}/users/ForgotPassword`,user);
          setUser(response.data)
          localStorage.setItem('user', response.data.data.token)
          console.log(response.data)
            }catch(err) {
                console.log("Failed To Login",err);
            }
            setPassword("");
            setConfirm("");
            
      };
      

  return (
      <>
      <form  onSubmit={handleSubmit}>
          <NavBar/>
      <div className="col-sm-6 offset-sm-3">
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
        <label>Confirm Password:</label>
        <InputField
          type="password"
          value={confirm}
          className="form-control"
          placeholder="Confirm Password"
          onChange={(e)=>setConfirm(e.target.value)}
        />
      </div><br/>
      <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      </form>
      </>
    
  )
}

export default React.memo(NewPassword);