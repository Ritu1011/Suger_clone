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


return <div className="checkout"> 
       
   
        <div className="right">
            <div  className="details" style={{marginBottom:"10px"}} >
                <img src="https://in.sugarcosmetics.com/desc-images/Offers_price_details.svg" alt="payment" />
                <p>Payment Method</p>
            </div>
            <div className="payment" style={{marginBottom:"10px"}} >
                  <div className="method"style={{marginBottom:"10px",height:"30px",fontSize:"15px"}} onClick={()=>
                    document.querySelector(".tag").src="https://in.sugarcosmetics.com/desc-images/CheckFilled.svg"
                }>
                    <img src="https://in.sugarcosmetics.com/paymentIcons/upi.svg" alt="upi" style={{width:"20px",height:"20px"}} />
                    <p>Instant Pay Using Other UPIs(Gpay,PhonePe,BHIM etc.)</p>
                    <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="click" style={{width:"20px",height:"20px"}}/>
                </div>
                <div className="method" style={{marginBottom:"10px",height:"30px",fontSize:"15px"}}>
                    <img src="https://in.sugarcosmetics.com/paymentIcons/wallets.svg" alt="mobilewallet" style={{width:"20px",height:"20px"}} />
                    <p>Mobile Wallets(PhonePe,Freerecharge etc.)</p>
                    <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="c;ick" style={{width:"20px",height:"20px"}}/>
                </div>
                <div className="method" style={{marginBottom:"10px",height:"30px",fontSize:"15px"}}>
                    <img src="https://in.sugarcosmetics.com/paymentIcons/creditDebit.svg" alt="upi" style={{width:"20px",height:"20px"}} />
                    <p>Credit Cards/Debit Cards(Visa,Master,Rupay etc.)</p>
                    <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="click" style={{width:"20px",height:"20px"}}/>
                </div>
                <div className="method" style={{marginBottom:"10px",height:"30px",fontSize:"15px"}}>
                    <img src="https://in.sugarcosmetics.com/paymentIcons/netBanking.svg" alt="upi" style={{width:"20px",height:"20px"}} />
                    <p>Netbanking(ICICI,HDFC,SBI etc.)</p> 
                    <img src="https://in.sugarcosmetics.com/desc-images/Check.svg" alt="c;ick" className="tag" style={{width:"20px",height:"20px"}}/>
                </div>
                

                <Link onClick={()=>{
                  alert("Order has been Placed sucessfully")
                }} to="/"><button className="pay">Proceed To Payment</button></Link>
                
            </div>
            
        </div>
    </div>
}