import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { PageState } from '../../State';
import "./Nav.css";
import { SiSwiggy } from "react-icons/si";
import { HiOutlineMenu } from "react-icons/hi";



export default function Navbar() {
    const[page,setPage]= useRecoilState(PageState);
    const[mobile,setMobile]= useState(false);

    const handleclick=()=>{
        setMobile(!mobile);
    }
  return (
    <>
    <div className='navbar'>
    <div>
        <h1 className='logo'>Swiggy<span className='icon'>< SiSwiggy /></span></h1>
     </div>
     <div>
        <ul className='ultext'>
        <li className='linavbar'>avter</li>
       

            <li className={`linavbar  ${page === "home"?"active":null}`} onClick={()=>{setPage("home"); handleclick()}}>Home</li>
            <li className={`linavbar  ${page === "cart"?"active":null}`} onClick={()=>{setPage("cart"); handleclick()}}>Cart</li>
            <li className={`linavbar  ${page === "auth"?"active":null}`} onClick={()=>{setPage("auth"); handleclick()}}>Login/Signup</li>
        
        </ul>
     </div>
     <div>
        <button className='button' >Logout</button>
        
     <button className='menuu' onClick={()=>setMobile(!mobile)}><HiOutlineMenu /></button>
     </div>
    </div>

    {
        mobile && 
        <div className='mobile'>
            <ul className='mobile-link'>
            <li className={`linavbar  ${page === "home"?"active":null}`} onClick={()=>{setPage("home"); handleclick()}}>Home</li>
            <li className={`linavbar  ${page === "cart"?"active":null}`} onClick={()=>{setPage("cart"); handleclick()}}>Cart</li>
            <li className={`linavbar  ${page === "auth"?"active":null}`} onClick={()=>{setPage("auth"); handleclick()}}>Login/Signup</li>

           
            </ul>
        </div>
    }
    </>
  )
}
