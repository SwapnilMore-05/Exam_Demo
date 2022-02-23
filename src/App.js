import './App.css';
import React from 'react'
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './Users/Home'
import SignUp from './Users/SignUp'
import Login from './Users/Login'
import ForgetPassword from './Users/ForgetPassword'
import Teacher from './Teacher/Teacher'
import Student from './Student/Student';
//import NavBar from './Users/Navbar'
const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      {/* <NavBar/> */}
      <Routes>
      <Route  exact path="/" element={<Home/>} ></Route>
      <Route exact path='/signUp' element={< SignUp/>}></Route>
      <Route exact path='/login' element={< Login/>}></Route>
      <Route exact path='/forget' element={< ForgetPassword/>}></Route>
      <Route exact path='/teacher' element={< Teacher/>}></Route>
      <Route exact path='/student' element={< Student/>}></Route>
      </Routes>
     </div>
    </BrowserRouter>
  );
};

export default React.memo(App);
