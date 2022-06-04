import React,{useState} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Api from '../../service/Api'
import {Container,Row,Col} from 'react-bootstrap'

import '../../App.css'

import BackgroundImage from '../../assets/images/signup2.jpg'
import NavBarCustom from '../Nav'

export default function StudentSignUpPage() {

    const [data, setData] = useState([])

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let copyData = { ...data }
        copyData.role="STUDENT"
        Api.post("/auth/signup",copyData).then((res)=>{
            
            return <Link to="/login"></Link>
        }).catch(err=>{console.log(err)})
    }


    return (
        
<div className="text-center m-5-auto">
<Container>
    <Row>
        <Col>
        <h2>Join us</h2>
<h5>Create your personal account</h5>
        
<form onSubmit={handleSubmit}>
                <p>
                    <label>First Name</label><br/>
                    <input type="text" name="fname" required onChange={handleChange} />
                </p>
                <p>
                    <label>Last Name</label><br/>
                    <input type="text" name="lname" required onChange={handleChange} />
                </p>
                <p>
                    <label>Student Id</label><br/>
                    <input type="text" name="studentId" required onChange={handleChange} />
                </p>
                <p>
                    <label>Batch</label><br/>
                    <input type="text" name="batch" required onChange={handleChange} />
                </p>
                <p>
                    <label>Email address</label><br/>
                    <input type="email" name="email" required onChange={handleChange} />
                </p>
                <p>
                    <label>Password</label><br/>
                    <input type="password" name="password" required onChange={handleChange}/>
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
                <a href='./register'>Are you Staff</a><br></br>
                <a href='./login'>Login</a>
            </form>
        </Col>
        <Col>
        <header style={ HeaderStyle }>

</header>
        </Col>
    </Row>
</Container>


</div>
    )

}

const HeaderStyle = {
    width: "100%",
    height: "80vh",
    background: `url(${BackgroundImage})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}

