import React, { useState } from 'react'

export default function Signup() {
  const [auth,setAuth] =  useState({
    username:"",
    email:"",
    password:""
  });

  
  return (
    <div>Signup</div>
  )
}
