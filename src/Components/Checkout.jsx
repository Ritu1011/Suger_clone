

import "./Checkout.css"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import {ImCross}from 'react-icons/im';
import {HiPlusSm} from 'react-icons/hi';
import { useNavigate } from "react-router-dom";
export const Checkout =()=>{
    const navigate = useNavigate()
    const [modal, setModal] = useState(false);
    const [data,setData] = useState([]);
    const [address,setaddress]=useState({
        fullname:"",
        mobile:"",
        line:"",
        country:"",
        city:"",
        state:"",
        pincode:"",

    })
    const toggleModal = () => {
      setModal(!modal);
    };
   if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
  useEffect(()=>{
        getData();
   },[]);

         const getData=async()=>{
        const data=await fetch("https://sugarcosmetic.herokuapp.com/carts")
          .then((d)=>
            d.json()
           );
           setData(data.cart);
     
    }
   const total = data.map(d => d.price).reduce((prev, curr) => prev + curr, 0); 
   const handledata=(e)=>{
    setaddress({
        ...address,
        [e.target.id]:e.target.value
    })
   }
   const handleaddress=(e)=>{
    e.preventDefault()
    toggleModal()
   }
console.log("adde",address)
    return <div className="checkout"> 
        <div className="left">
            <div className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/PriceDetails.svg" alt="details" />
                <p>Price Details</p>
            </div>
            <div className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/CartSubtotal.svg" alt="cart" />
                <p>Cart Sub Total:</p><p>₹{total}</p>
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
                <p>Amount Payable:</p><p key={total}>₹{total+49}</p>
            </div>
            <div  className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/shopping_cart.svg" alt="amount" />
                <p>Order Summary</p>
            </div>
            {data.map(d=>
            <div className="product">
                <img src= {d.imgSrc} alt="product" className="prdimg1"/>
                <div>
                 <p>{d.Name}</p>
                 <p>₹{d.price}</p>

                </div>
            </div>
            )}
        </div>
        <div className="right">
            <div  className="details">
                <img src="https://in.sugarcosmetics.com/desc-images/CustomerInformation.svg" alt="contact" />
                <p>Contact Information</p>
            </div>
            <div className="contact">
               <div className="name" >
                   <p >Full Name:{address.fullname}</p>
                   <p>Phone Number:{address.mobile}</p>
               </div>
              
               <div className="addnew">
                   <p>Delivery Address</p>
                   <button onClick={toggleModal} style={{fontSize:"14px",marginTop:"30px",height:"35px",background:"gray"}}><HiPlusSm style={{fontSize:"14px"}} />Add New Address</button>
               </div>
               {modal && ( <div className="overlay" >
        <div className="main">
        <div className="title">
            <div>
                 <img src="https://in.sugarcosmetics.com/desc-images/Add_Address.svg" alt="location" style={{width:"20px",height:"20px",marginTop:"5px",marginRight:"10px"}} />
                 <p style={{fontSize:"14px"}}>Add New Address</p>
            </div>
            <div>
                <button onClick={toggleModal} ><ImCross/></button>
            </div>
           </div>

           <form  style={{height:"400px"}}>
        <div className="name_no" >
            <div>
                <p className="heading" style={{marginBottom:"10px"}}>Full Name</p>
                <input type="text" placeholder="Enter Full Name" id="fullname" onChange={handledata} />
            </div>
            <div>
                <p className="heading" style={{marginBottom:"10px"}}>Mobile Number</p>
                <input type="Number" placeholder="Enter Mobile Number" className="Mobile" id="mobile" onChange={handledata} />
            </div>
        </div>
       
        <div className="add">
            <p>Address</p>
            <input type="text" className="addline"  placeholder="Address" id="line" onChange={handledata}/><br />
            <input type="text" placeholder="Pincode" id="pincode" onChange={handledata}/><br />
            <input type="text" placeholder="Country"  id="country" onChange={handledata}/><br />
            <input type="text" placeholder="City"   id="city" onChange={handledata}/><br />
            <input type="text" placeholder="State" id="state" onChange={handledata}/>
        </div>
        <div className="butt">
            <button  className="butt1" onClick={handleaddress}>Save and use this Address</button>
            <button  className="butt2">Cancel</button>
        </div>
        </form>
    </div>
    </div>)}
               <div className="addressdetails">
                   <div>Address Line: {address.line}</div>
                   <div>City: {address.city}</div>
                   
                   <div>State: {address.state}</div>
                   <div>Country: {address.country}</div>
                   <div>Pincode: {address.pincode}</div>
               </div>
              <Link to="/payment"> <button className="pay" style={{marginTop:"50px"}}>Proceed To Payment</button></Link>
            </div>
        </div>
    </div>
    
}
