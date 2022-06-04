import React,{useState , useEffect} from 'react'
import { Link, NavLink, Redirect } from 'react-router-dom'
import Api from '../../service/Api'

import '../../App.css'
import NavBarCustom from '../Nav'

export default function StdGroups() {

    const [data, setData] = useState([])
    const [haveGroup, setHaveGroup] = useState(false)

    useEffect(()=>{
       if(localStorage.getItem("af-group") !== undefined){
           setHaveGroup(false)

           Api.post("/studentgroups/byId" ,{groupId : localStorage.getItem("af-group")}).then((res)=>{
               setData(res.data)
               setHaveGroup(true)
               console.log(res.data)
           }).catch((err)=>{
               console.error(err)
           })
       } 


    },[])

    const handleChange = (e) => {
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const copyData = { ...data }
        Api.post("/studentgroups/create",data).then((res)=>{
            
            return <Link to="/login"></Link>
        }).catch(err=>{console.log(err)})
    }


    return (
        <div className="text-center">
            <NavBarCustom/>
            <h2>Join us</h2>
            <h5>Create Student Group</h5>
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Topic</label><br/>
                    <input type="text" name="topic" required onChange={handleChange} />
                </p>
                <p>
                    <label>Member 1</label><br/>
                    <input type="text" name="member1Id" required onChange={handleChange} />
                </p>
                <p>
                    <label>Member 2</label><br/>
                    <input type="text" name="member2Id" required onChange={handleChange} />
                </p>
                <p>
                    <label>Member 3</label><br/>
                    <input type="text" name="member3Id" required onChange={handleChange} />
                </p>
                <p>
                    <label>Member 4</label><br/>
                    <input type="text" name="member4Id" required onChange={handleChange} />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Register</button>
                </p>
            </form>


            
        </div>
    )

}
