import React ,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


import {Container,Row,Col ,Navbar,NavLink,NavDropdown,Nav} from 'react-bootstrap'





export default function NavBarCustom() {

    const [isStudent , setIsStudent] = useState(false)
    const [isStaff , setIsStaff] = useState(false)

    useEffect(()=>{
        let role =  localStorage.getItem("af-userrole")

        if(role==="STUDENT"){
            setIsStudent(true)
        }
        if(role==="STAFF"){
            setIsStaff(true)
        }

    },[])
    return (
    
            <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">RMS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="./">Home</Nav.Link>
        <Nav.Link href="./studentRegister">Register</Nav.Link>
        <NavDropdown title="Student Grroup" id="basic-nav-dropdown" hidden={!isStudent}>
          <NavDropdown.Item href="./stdgroups" >Add Group</NavDropdown.Item>
          <NavDropdown.Item href="./getgroup">My Group</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Submission" id="basic-nav-dropdown" >
          <NavDropdown.Item href="./subtype" hidden={!isStaff} >Add Submission type</NavDropdown.Item>
          <NavDropdown.Item href="./allsubtype" >View Submission type</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Request" id="basic-nav-dropdown">
          <NavDropdown.Item href="./send" hidden={!isStudent}>Send new request</NavDropdown.Item>
          <NavDropdown.Item href="./req/all" hidden={!isStaff}>Recived request</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
       
    )
}


