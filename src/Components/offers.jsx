import React from 'react'
import { Box } from '@mui/material'
import { Navbar } from './Navbar'
import { Category } from './Category'

const Offers = () => {
  return (
    <>
    <Navbar></Navbar>
<Category></Category>
    <div>
        <Box style={{marginBottom:"10px"}} >
< div style={{height:"60px",textAlign:"center"}}>
<p style={{fontSize:"35px",color:"rgb(32, 30, 30)",marginBottom:"30px",marginTop:"40px"}}>General Offers</p>
</div>
   <div style={{display:"flex", justifyContent:"space-evenly",width:"100%"}}>
      <img src="https://d32baadbbpueqt.cloudfront.net/Promotion/d8379059-26e6-4dbe-af39-cd2fccae058b.jpg" alt="" style={{height:"300px",width:"28%"}} />
      <img src="https://d32baadbbpueqt.cloudfront.net/Promotion/a4ab3592-286a-4d1c-aff7-98f9dda5731f.jpg" alt="" style={{height:"300px",width:"28%"}} />
      <img src="https://d32baadbbpueqt.cloudfront.net/Promotion/eb7f9151-3f06-452c-bb2d-7ebd336bf603.jpg" alt="" style={{height:"300px",width:"28%"}} />
     </div>
</Box>

<Box style={{marginBottom:"10px"}} >

   <div style={{display:"flex", justifyContent:"space-evenly",width:"100%"}}>
      <img src="https://d32baadbbpueqt.cloudfront.net/Promotion/d8379059-26e6-4dbe-af39-cd2fccae058b.jpg" alt="" style={{height:"300px",width:"28%"}} />
      <img src="https://d32baadbbpueqt.cloudfront.net/Promotion/a4ab3592-286a-4d1c-aff7-98f9dda5731f.jpg" alt="" style={{height:"300px",width:"28%"}} />
      <img src="https://d32baadbbpueqt.cloudfront.net/Promotion/eb7f9151-3f06-452c-bb2d-7ebd336bf603.jpg" alt="" style={{height:"300px",width:"28%"}} />
     </div>
</Box>
    </div>
    </>
  )
}

export default Offers