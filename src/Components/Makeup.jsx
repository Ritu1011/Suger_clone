import {useEffect,useState} from "react";
import { Footer } from "./Footer/Footer";
import { Navbar } from "./Navbar";
import { Category} from "./Category";

import { AiOutlineHeart} from 'react-icons/ai';
 import './product.css'
export const Makeup=()=>{
    const [makeup,setMakeup]=useState([]);

    const [originaldata,setoriginaldata]=useState([]);
    
   const getData=async()=>{
        const data=await fetch("https://sugarcosmetic.herokuapp.com/makeups")
          .then((d)=>
            d.json()
           );
           setMakeup(data.makeup);
           setoriginaldata([...data.makeup])
          }
      useEffect(()=>{
            getData();
             
        },[]);

        const SortbyPrice=(e)=>{
         
          if(e.target.value==="high"){
           let high= makeup.sort((a,b)=>{
              return +b.price-(+a.price)
            }) 
            setMakeup([...high])
          }
          else if(e.target.value==="low"){
            let low= makeup.sort((a,b)=>{
               return +a.price-(+b.price)
             }) 
             setMakeup([...low])
           }
           else if(e.target.value===""){
            setMakeup([...originaldata])
           }

        }
       
return(
    <>
          <Navbar/>
        <Category/>
        <div className="grid" >
        < AiOutlineHeart/>
        <div style={{margin:"30px",}}>
            <select onChange={SortbyPrice} style={{margin:"30px",height:"30px"}} >
               <option value="">sort by price</option>
                <option value="high">High</option>
                <option value="low">Low</option>

            </select>
        </div>
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