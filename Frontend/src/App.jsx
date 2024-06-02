import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Pages/Home"
import Auth from "./Pages/Auth";
import Landing from "./Modal/Landing";
import { RecoilRoot } from "recoil";
import Cart from "./Pages/Cart";

function App() {

  return (
    <>
    <RecoilRoot>
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Landing/>} />

      <Route path="home" element={<Home/>} />
      <Route path="cart" element={<Cart/>} />

      <Route path="auth" element={<Auth/>} />

     </Routes>
     
     </BrowserRouter>
    </RecoilRoot>

    </>
  )
}

export default App
