import {Routes,Route} from "react-router-dom"
import { Makeup } from '../Makeup'
import { Brush } from '../Brushes'
import { Trending } from '../Trending'
import { Skincare } from '../Skincare'
import { Cart } from '../Cart'
import RegisterPage from '../SignIn/Register'
import HomePage from '../HomePage'
import { Checkout } from '../Checkout'
import { PaymentOption } from '../Payment'
import{ SignInPage }from "../SignIn/LoginPage"
import Offers from "../offers"

function AllRoutes() {
    return (
    <div >
       <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/makeup' element={ <Makeup/>}></Route>
        <Route path='/brush' element={ <Brush/>}></Route>
        <Route path='/trending' element={ <Trending/>}></Route>
        <Route path='/skincare' element={<Skincare/>}></Route>
        <Route path='/cart' element={<Cart/>}> </Route>
        <Route path="/login" element={<SignInPage/>}></Route>
        <Route path='/Register' element={<RegisterPage/>}> </Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/payment' element={<PaymentOption/>}></Route>
        <Route path='/offers' element={<Offers/>}></Route>
      </Routes> 
    </div>
  )
}


export default AllRoutes
