import {useEffect,useState} from "react";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar";
import { Category} from "./Category";

import { AiOutlineHeart} from 'react-icons/ai';
 import './product.css'
export const Makeup=()=>{
    const [makeup,setMakeup]=useState([]);
   const getData=async()=>{
        const data=await fetch("https://sugarcosmetic.herokuapp.com/makeups")
          .then((d)=>
            d.json()
           );
           setMakeup(data.makeup);
          }
      useEffect(()=>{
            getData();
             
        },[]);
return(
    <>
          <Navbar/>
        <Category/>
        <div>
          <img src="https://d32baadbbpueqt.cloudfront.net/Collection/6a68d77f-80b5-4860-9a4d-6005844c937d.jpg" alt="" style={{height:"300px",width:"100%"}} />

        </div>
        <p style={{color:"gray",fontSize:"20px",marginLeft:"100px"}}>Total Item 16</p>
        <div className="grid" >
        < AiOutlineHeart/>
            <div style={{}}>
              {makeup.map((t)=>(
             <div className="Apsara">
                 <img className="imagekasize" src={t.imgSrc} alt="" />
                 <h4> {t.Name}</h4>
                 <p>Rs{t.price}</p>
                 <p>{t.ratingNum}<span>
               
                 ({t.amount})</span></p>
                 <br/>
                 <button  onClick={()=>{
                  console.log("clicked")
                  alert("Product added to cart")
                 
                const data=t;
               fetch("https://sugarcosmetic.herokuapp.com/carts",{
                   method:"POST",
                 headers:{
                     "content-type":"application/json"
                 },
                 body:JSON.stringify(data)
               })

            }}>ADD TO CART</button>
                
             </div>
          
         ))}
        </div>
         </div>
<Footer/>
</>


         )}
