

import { Footer } from "./Footer/Footer"
import { Navbar } from "./Navbar"
import { Category} from "./Category"
import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useState } from "react"
import * as slide from "./Slider"

import "./Homepage.css"
const HomePage = () => {
 
return (
    <>
      <Navbar/>
      <Category/>
      
    <div style={{width:"100%",textAlign: "center"}} >
    <slide.Slider1/>
    

    <p style={{fontSize:"35px",color:"rgb(57, 56, 56)",marginBottom:"30px",marginTop:"40px"}}>REFER YOUR FRIENDS</p>
    <div style={{width:"90%",textAlign: "center",margin:"auto"}}>
     <img src="https://sugar-mobile-application.s3-ap-south-1.amazonaws.com/f53f2d67-ea43-4959-abca-eba6d87fd598.jpg"  alt="sugar.png" style={{width:"100%",height:"350px"}}/>
     </div>
   
     <p style={{fontSize:"35px",color:"rgb(57, 56, 56)",marginBottom:"30px",marginTop:"40px"}}>METTLE PRIMING BALM</p>
    <div style={{width:"90%",textAlign: "center",margin:"auto"}}>
    <iframe width="1230" height="452" src="https://www.youtube.com/embed/_TTJmiTiiOQ" title="YouTube video player"  alt="sugar.png" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style={{width:"90%",height:"350px",marginTop:"10px"}}></iframe>
     </div>

     <Box style={{width:"100%",height:"500px" }}>
     <p style={{fontSize:"35px",color:"rgb(57, 56, 56)",marginBottom:"30px",marginTop:"40px"}}>Beauty Product</p>
     <div style={{display:"flex", justifyContent:"space-evenly",width:"100%"}}>
           
       <div className="Apsara">
              <img  src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-citrus-got-real-daily-moisturizer-28038347292755.jpg?v=1619155748" alt="" />
              <h4> Daily Mask</h4>
              <p>Rs 400</p>
            
      <button>ADD TO CART</button>
          </div>
          <div className="Apsara">
              <img  src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_c30a9b16-ef13-44c3-af41-04b227c62419.jpg?v=1642434141" alt="" />
              <h4> Daily Mask</h4>
              <p>Rs 400</p>
         <button>ADD TO CART</button>
          </div>
          <div className="Apsara">
              <img  src=" https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771" alt="" />
              <h4> Daily Mask</h4>
              <p>Rs 400</p>
         <button>ADD TO CART</button>
          </div>
          <div className="Apsara">
              <img  src="https://cdn.shopify.com/s/files/1/0906/2558/products/AirKissPowderPoweredByImagesArtboard1.jpg?v=1644813116" alt="" />
              <h4> Lipstic</h4>
              <p>Rs 400</p>
             
         <button>ADD TO CART</button>
          </div>
     
      </div>
      </Box>
      <p style={{fontSize:"35px",color:"rgb(57, 56, 56)",marginBottom:"20px",marginTop:"0px"}}>QUICK BEAUTY TIPS WITH SUGAR</p>
      <div>
     <slide.Slider2/>
     </div>
     
     <Box style={{marginBottom:"10px"}}>
<p style={{fontSize:"35px",color:"rgb(57, 56, 56)",marginBottom:"30px",marginTop:"20px"}}>THIS OR THAT</p>
   <div style={{display:"flex", justifyContent:"space-evenly",width:"100%"}}>
      <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/af81e750-621b-4248-ab67-9e1c9a542343.jpg" alt="" />
      <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/7507b940-7f4b-478e-9e9f-5d8faf43f599.jpg" alt="" />
    
   </div>
</Box>
 <Box style={{width:"100%",height:"500px" }}>
     <p style={{fontSize:"35px",color:"rgb(57, 56, 56)",marginBottom:"30px",marginTop:"40px"}}>Newly Launch</p>
     <div style={{display:"flex", justifyContent:"space-evenly",width:"100%"}}>
           
       <div className="Apsara">
              <img  src="https://cdn.shopify.com/s/files/1/0906/2558/products/1_37e8dc88-a720-44ed-a5f3-1e0f0e95bc17.jpg?v=1649692645" alt="" />
              <h4> Daily hand bag</h4>
              <p>Rs 400</p>
            
      <button>ADD TO CART</button>
          </div>
          <div className="Apsara">
              <img  src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-lipstick-minis-set-28270316945491.jpg?v=1623073051" alt="" />
              <h4> Daily Bag</h4>
              <p>Rs 400</p>
         <button>ADD TO CART</button>
          </div>
          <div className="Apsara">
              <img  src=" https://cdn.shopify.com/s/files/1/0906/2558/products/1_61109b87-1ae6-4cb4-8550-5b57d688a4eb.jpg?v=1651852771" alt="" />
              <h4> Daily Mask</h4>
              <p>Rs 400</p>
         <button>ADD TO CART</button>
          </div>
          <div className="Apsara">
              <img  src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg?v=1620651966" alt="" />
              <h4> Lipstic</h4>
              <p>Rs 400</p>
             
         <button>ADD TO CART</button>
          </div>
     
      </div>
      </Box>

<Box style={{marginBottom:"10px"}}>
<p style={{fontSize:"35px",color:"rgb(57, 56, 56)",marginBottom:"30px",marginTop:"20px"}}>Explore</p>
   <div style={{display:"flex", justifyContent:"space-evenly",width:"100%"}}>
      <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/60cfcab0-427f-4748-8c44-5bae2bbfa3a4.jpg" alt="" />
      <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/60cfcab0-427f-4748-8c44-5bae2bbfa3a4.jpg" alt="" />
      <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/60cfcab0-427f-4748-8c44-5bae2bbfa3a4.jpg" alt="" />
      <img src="https://d32baadbbpueqt.cloudfront.net/Homepage/60cfcab0-427f-4748-8c44-5bae2bbfa3a4.jpg" alt="" />
   </div>
</Box>
     </div>

      
     <Footer/>
      </>
  )
}

export default HomePage

