import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { PageState } from '../../State';
import "./Nav.css";
import { SiSwiggy } from "react-icons/si";
import { HiOutlineMenu } from "react-icons/hi";
import { Link, useNavigate } from 'react-router-dom';



export default function Navbar() {
    const navigate =  useNavigate();
    const[page,setPage]= useRecoilState(PageState);
    const[mobile,setMobile]= useState(false);
    const [login,setLogin] = useState(false)
   
    const handleclick=()=>{
        setMobile(!mobile);
    }

    useEffect(()=>{
        if(localStorage.getItem('token')!==null){
            setLogin(true)
        }
    })
    const avtar = localStorage.getItem("name")?.slice(0, 1).toUpperCase();
     
    function logout(){
        localStorage.removeItem("token")
        setLogin(false)
        navigate("/")
    }
  return (
    <>
    <div className='navbar'>
    <div>
        <h1 className='logo'>Swiggy<span className='icon'>< SiSwiggy /></span></h1>
     </div>
     <div>
        <ul className='ultext'>
        {
            login?(
                <li className='avterfoody'>{avtar}</li>
            ):null
        }
       

            <li className={`linavbar  ${page === "home"?"active":null}`} onClick={()=>{setPage("home"); handleclick()}}>Home</li>
            <li className={`linavbar  ${page === "cart"?"active":null}`} onClick={()=>{setPage("cart"); handleclick()}}>Cart</li>
          
        
        </ul>
     </div>
     <div>
       {
        login?(
            <button className='button' onClick={logout} >Logout</button>
        ): <Link to="/auth" ><button className="linavbarlink">Login/Signup</button></Link>
       }
        
     <button className='menuu' onClick={()=>setMobile(!mobile)}><HiOutlineMenu /></button>
     </div>
    </div>

    {
        mobile && 
        <div className='mobile'>
            <ul className='mobile-link'>
            {
            login?(
                <li className='avterfoodylink'>{avtar}</li>
            ):null
        }
            <li className={`linavbar  ${page === "home"?"active":null}`} onClick={()=>{setPage("home"); handleclick()}}>Home</li>
            <li className={`linavbar  ${page === "cart"?"active":null}`} onClick={()=>{setPage("cart"); handleclick()}}>Cart</li>
            {
        login?(
            <button className='buttonmoblie' onClick={logout} >Logout</button>
        ): <Link to="/auth" ><button className="linavbarlinkmo">Login/Signup</button></Link>
       }

           
            </ul>
        </div>
    }
    </>
  )
}
