import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">ExamDemo</Navbar.Brand>
    <Nav className="me-auto header">
      <Link to="/">Home</Link>
      <Link to='/teacher'>Teacher</Link>
      <Link to='/student'>Student</Link>
     <Link to='/signUp'>SignUp</Link>
     <Link to='/login'>Login</Link>
     
     </Nav>
    </Navbar>
    </div>
  )
}

export default React.memo(NavBar);  