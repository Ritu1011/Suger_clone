import "./Payment.css"
import { useEffect, useState } from "react"
import axios from "axios";
import {Link} from "react-router-dom"


export const PaymentOption =()=>{


    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
  
    if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }
    
    const [data,setData] = useState([]);

    useEffect(()=>{
      getData();
},[]);

  const getData=async()=>{
      const data=await fetch("http://localhost:8080/cart")
        .then((d)=>
          d.json()
         );
         setData(data);
   
  }











    const total = data.map(d => d.price).reduce((prev, curr) => prev + curr, 0); 


   

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
                <img src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg" alt="payment" />
                <p>Payment Method</p>
            </div>
            <div className="payment">
                <p>Select Payment Method</p>
                <div className="method" onClick={()=>
                    document.querySelector(".tag").src="https://in.sugarcosmetics.com/desc-images/CheckFilled.svg"
                }>
                    <img src="https://in.sugarcosmetics.com/paymentIcons/upi.svg" alt="upi" />
                    <p>Instant Pay Using Other UPIs(Gpay,PhonePe,BHIM etc.)</p>
                    <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="click" className="tag"/>
                </div>
                <div className="method" >
                    <img src="https://in.sugarcosmetics.com/paymentIcons/wallets.svg" alt="mobilewallet" />
                    <p>Mobile Wallets(PhonePe,Freerecharge etc.)</p>
                    <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="c;ick" className="tag"/>
                </div>
                <div className="method" >
                    <img src="https://in.sugarcosmetics.com/paymentIcons/creditDebit.svg" alt="upi" />
                    <p>Credit Cards/Debit Cards(Visa,Master,Rupay etc.)</p>
                    <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="c;ick" className="tag"/>
                </div>
                <div className="method" >
                    <img src="https://in.sugarcosmetics.com/paymentIcons/netBanking.svg" alt="upi" />
                    <p>Netbanking(ICICI,HDFC,SBI etc.)</p>
                    <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="c;ick" className="tag"/>
                </div>
                <div className="method">
                    <img src="https://in.sugarcosmetics.com/paymentIcons/cod.svg" alt="upi" />
                    <p>Cash on delivery</p>
                    <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="c;ick" className="tag"/>
                </div>

                <Link onClick={()=>{
                  alert("Order has been Placed sucessfully")
                }} to="/"><button className="pay">Proceed To Payment</button></Link>
                
            </div>
            
        </div>
    </div>
}