import "./Navbar.css" 
import { FaPercentage } from "react-icons/fa";
import { AiTwotoneHeart,AiTwotoneShopping } from "react-icons/ai";
import {Link} from "react-router-dom"

export const Navbar=()=>{
return (
<>
<div className="navbar-container">
      <div >
        <Link to="/">
        <img src="https://in.sugarcosmetics.com/desc-images/pride-logo-option.gif" alt="logo.png" style={{width:"120px",height:"40px"}} />
        </Link>
      
      </div>
       <div className="input-bar"  >
         <input  type="text" placeholder='Try "Liquid Lipsticks"' style={{height:"40px"}}></input>
         <button className="btn">Search</button>
       </div>
       <div className="login-div">
      
           <Link className="nav-link" to="/login">  <span className="register">Login/
           <Link to="/register">Register</Link></span></Link>
       </div>
       <div className="icons-div">
       
            <span onClick={()=>{
              alert("you liked this")
            }} className="icons-modify"><AiTwotoneHeart/></span>
             <Link   to="/cart" className="icons-modify nav-link"><AiTwotoneShopping/></Link>
             <Link  to="/cart" className="icons-modify nav-link"><FaPercentage/></Link>
 </div>
    </div>
   
    </>
)
}

 