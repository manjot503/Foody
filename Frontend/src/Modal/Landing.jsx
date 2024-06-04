import React from 'react';
import Home from '../Pages/Home';
import { useRecoilState } from 'recoil';
import { PageState } from '../../State';
import Navbar from '../Component/Navbar';
import Cart from '../Pages/Cart';
// import Auth from '../Pages/Auth';


export default function Landing() {
    const [page] = useRecoilState(PageState)
    if(page === "home") return(<><Navbar /><Home /></>)
    if(page === "cart") return(<><Navbar /><Cart /></>)
    // if(page === "auth") return(<><Navbar /><Auth /></>)


  return (
    <Home />
  )
}
