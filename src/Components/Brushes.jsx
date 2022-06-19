import {useEffect,useState} from "react";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar";
import { Category } from "./Category";
import './product.css'
export const Brush=()=>{
    const [brush,setBrush]=useState([]);
      useEffect(()=>{
        getData();
},[]);


    const getData=async()=>{
        const data=await fetch("https://sugarcosmetic.herokuapp.com/brushes")
          .then((d)=>
            d.json()
           );
           setBrush(data.brush)}
           
return(
    <>
    <Navbar/>
        <Category/>
        <div>
          <img src="https://d32baadbbpueqt.cloudfront.net/Collection/39da2bc6-d83c-4350-a2b1-0c0ec7a721a8.jpg" alt="" style={{width:"100%",height:"300px",alignItems:"center"}} />
        </div>
    <div className="grid" style={{marginLeft:"300px"}}>
      <h3 style={{marginBottom:"10px",textAlign:"left",marginTop:"20px" ,color:"gray"}}>Skin Care Products 6 items</h3>
        <div>
        
           
              {brush.map((t)=>(
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
                 body:JSON.stringify(data)
               })

            }}>ADD TO CART</button>
                
             </div>
         ))}
         </div>
         <div>
        
           
        {brush.map((t)=>(
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
           body:JSON.stringify(data)
         })

      }}>ADD TO CART</button>
          
       </div>
   ))}
   </div>
         </div>
         
         <Footer/>
         </>)}
