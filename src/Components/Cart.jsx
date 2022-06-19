
// import { useEffect, useState } from "react"
// import "./Cart.css"
// import { Navbar } from "./Navbar";
// import { Category} from "./Category";
// import { Footer } from "./Footer/Footer";
// import {Link} from "react-router-dom"
// import {MdDelete } from "react-icons/md";

// export const Cart =()=>{
// const [data,setData] = useState([]);

// useEffect(()=>{
// getData();
// },[]);

//     const getData=async()=>{
//         const data=await fetch("https://sugarcosmetic.herokuapp.com/carts")
//           .then((d)=>
//             d.json()
//            );
//            setData(data.cart);}
//          const total = data.map(pro => pro.price).reduce((prev, curr) => prev + curr, 0); 

//           return(
//          <>
//         <Navbar/>
//         <Category/>
//         <div className="cart"> 
//         <div className="left">
//             <div  className="details">
//                 <img src="https://in.sugarcosmetics.com/desc-images/shopping_cart.svg" alt="amount" />
//                 <p>Order Summary</p>
//                 <div className="crt">
//                   <p>Cart Total:</p><p>Rs:{total}</p>
//                 </div>
//             </div>
//             {data.map(d=>
//             <div className="product" >
//                 <img src= {d.imgSrc} alt="product" className="imgprd"/>
//                 <div style={{display:"flex", justifyContent:"space-evenly"}}>
//                  <p style={{marginRight:"30px",marginLeft:"20px",fontSize:"13px"}}>{d.Name}</p>
//                  <MdDelete style={{marginRight:"40px",color:"gray",marginTop:"10px"}}></MdDelete>
//                  <p style={{marginRight:"20px"}}>₹{d.price}</p>
               
//                 </div>
//             </div>
//             )}
//         </div>
//         <div className="right">
//             <div  className="details">
//                 <img src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg" alt="amount" />
//                 <p>Offers and Price Details</p>
//             </div>
//             <div className="priceamount">
//             <div className="details">
//                 <img src="https://in.sugarcosmetics.com/desc-images/PriceDetails.svg" alt="details" />
//                 <p>Price Details</p>
//             </div>
              
//                <div className="amount">
                   
//                <div className="details">
//                 <img src="https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg" alt="cart" />
//                 <p >Cart Sub Total:</p><p key={total}>₹{total}</p>
//             </div>
            
//             <div  className="details">
//                 <img src="https://in.sugarcosmetics.com/desc-images/Shipping_Cost.svg" alt="shipping" />
//                 <p>Shipping Cost:</p><p>₹49</p>
//             </div>
//             <div  className="details">
//                 <img src="https://in.sugarcosmetics.com/desc-images/Discount.svg" alt="discount" />
//                 <p>Discount Applied:</p><p>₹0.00</p>
//             </div>
//             <div  className="details">
//                 <img src="https://in.sugarcosmetics.com/desc-images/AmountPayable.svg" alt="amount" />
//                 <p>Amount Payable:</p><p>₹{total+49}</p>
//             </div>
//                </div>
//                <Link to="/checkout"> <button className="pay">Delivery Information</button></Link>
               
//             </div>
//         </div>
//     </div>
//     <Footer/>
//     </>)
// }

import { useEffect, useState } from "react"
import "./Cart.css"
import { Navbar } from "./Navbar";
import { Category} from "./Category";
import { Footer } from "./Footer/Footer";
import {Link} from "react-router-dom"
import {MdDelete } from "react-icons/md";



export const Cart =()=>{
const [data,setData] = useState([]);

useEffect(()=>{
getData();
return function cleanup(){
}},[]);

    const getData=async()=>{
        const data=await fetch("https://sugarcosmetic.herokuapp.com/carts")
          .then((d)=>
            d.json()
           );
           setData(data.cart);}

      const total = data.map(pro => pro.price).reduce((prev, curr) => prev + curr, 0); 

      const Deletedata=async(id)=>{
    
        await fetch(`https://sugarcosmetic.herokuapp.com/carts/${id}`, {
               method: "DELETE",
          })
        
          getData()   
      }
  
     return(
        <>
        <Navbar/>
        <Category/>
        <div className="cart"> 
        <div className="left">
            <div  className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/shopping_cart.svg" alt="amount" />
                <p>Order Summary</p>
                <div className="crt">
                  <p>Cart Total:</p><p>Rs:{total}</p>
                </div>
            </div>
            {data.map(d=>
            <div className="product" >
                <img src= {d.imgSrc} alt="product" className="imgprd"/>
                <div style={{display:"flex", justifyContent:"space-evenly"}}>
                 <p style={{marginRight:"30px",marginLeft:"20px",fontSize:"13px"}}>{d.Name}</p>
                 <MdDelete style={{marginRight:"40px",color:"grey",marginTop:"10px"}} onClick={()=>Deletedata(d._id)}></MdDelete>
                 <p style={{marginRight:"20px"}}>₹{d.price}</p>
               
                </div>
            </div>
            )}
        </div>
        <div className="right">
            <div  className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg" alt="amount" />
                <p>Offers and Price Details</p>
            </div>
            <div className="priceamount">
            <div className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/PriceDetails.svg" alt="details" />
                <p>Price Details</p>
            </div>
              
               <div className="amount">
                   
               <div className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg" alt="cart" />
                <p >Cart Sub Total:</p><p key={total}>₹{total}</p>
            </div>
            
            <div  className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/Shipping_Cost.svg" alt="shipping" />
                <p>Shipping Cost:</p><p>₹49</p>
            </div>
            <div  className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/Discount.svg" alt="discount" />
                <p>Discount Applied:</p><p>₹0.00</p>
            </div>
            <div  className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/AmountPayable.svg" alt="amount" />
                <p>Amount Payable:</p><p>₹{total+49}</p>
            </div>
               </div>
               <Link to="/checkout"> <button className="pay">Delivery Information</button></Link>
               
            </div>
        </div>
    </div>
    <Footer/>
    </>)
}


















    
