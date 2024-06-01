import {BrowserRouter,Route,Routes}from 'react-router-dom';
import {RecoilRoot} from 'recoil';
import Landing from './Modal/Landing';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';


export default function App(){
  return(
    <RecoilRoot>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Landing />}></Route>
        <Route path='home' element={<Home />}></Route>
        <Route path='login' element={<Login />}></Route>
        <Route path='signup' element={<Signup />}></Route>

        



      </Routes>
      </BrowserRouter>
    </RecoilRoot>
  )
}