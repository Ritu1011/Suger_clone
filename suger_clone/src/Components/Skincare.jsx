import {useEffect,useState} from "react";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar";
import { Category} from "./Category";
import './product.css'
export const Skincare=()=>{
    const [skincare,setSkincare]=useState([]);
  
    useEffect(()=>{
        getData();
         },[]);

    const getData=async()=>{
        const data=await fetch("https://sugarcosmetic.herokuapp.com/skincares")
          .then((d)=>
            d.json()
           );
           setSkincare(data.skincare);
}
return(
    <>
    <Navbar/>
    <Category/>
    <div className="grid" >
        <div>
           
              {skincare.map((t)=>(
             <div className="Apsara">
                 <img className="imagekasize" src={t.imgSrc} alt="" />
                 <h4> {t.Name}</h4>
                 <p>Rs{t.price}</p>
                 <p>{t.ratingNum}<span>
               
                 ({t.amount})</span></p>
                 <br/>
                 <button onClick={()=>{
                  console.log("clicked")
                  alert("Product added to cart")
                 
                const data=t;
               fetch("https://sugarcosmetic.herokuapp.com/carts",{
                   method:"POST",
                 headers:{
                     "content-type":"application/json"
                 },
                 body:JSON.stringify(data.skincare)
               })

            }}>ADD TO CART</button>
             </div>
         ))}
         </div>
         </div>
         <Footer/>
         </>)}
