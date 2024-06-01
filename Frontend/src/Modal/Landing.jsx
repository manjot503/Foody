import React from 'react'
import { useRecoilState } from 'recoil'
import { PageState } from '../../State'
import Navbar from '../Component/Navbar'
import Home from '../Pages/Home'

export default function Landing() {
    const [page] = useRecoilState(PageState)
    if(page === "home")return(<><Navbar /><Home /></>)
  return (
    <Home />
  )
}
