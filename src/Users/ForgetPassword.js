import React,{ useState} from 'react'
import InputField from '../Reusable/InputField'
import NavBar  from './Navbar'
import axios from 'axios';
const ForgetPassword = () => {
    const[email,setEmail]= useState("");
    const [user,setUser] = useState();
    let apiKey=process.env.REACT_APP_BASE_URL  

        const handleSubmit = async (e) => {
            try{
              e.preventDefault();
          let user = { email };
         let response = await axios.post(`${apiKey}/users/ForgotPassword`,user);
          setUser(response.data)
          localStorage.setItem('user', response.data.data.token)
          console.log(response.data)
            }catch(err) {
                console.log("Failed To Login",err);
            }
            setEmail("");
            
      };
      if (user){
        return <div><b>{user.name} Password Forget Sucessfully!</b></div>;
      }

  return (
      <>
      <form  onSubmit={handleSubmit}>
          <NavBar/>
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
      </div><br/>
      <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      </form>
      </>
    
  )
}

export default React.memo(ForgetPassword);