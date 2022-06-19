import styled from "styled-components";
import axios from 'axios';
import './SignIn.css'
import { FaRegEyeSlash,FaRegEye } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";


const Form = styled.form`
width: 20%;
margin-left:650px;

padding: 1% 1.5%;
background: white;
border: 1px solid white;
border-radius: 10px;
`

export const SignInPage = ()=>{
    const [user,setUser] = useState({
        email: "",
        password: ""
    })
    const [visible,setVisible] = useState(false)
    document.getElementsByTagName('title')[0].innerText = 'Sign In';
    document.getElementsByTagName('body')[0].style.backgroundColor = '#f7f7f7'

    const handleChange = (event)=>{
        setUser({...user,[event.target.id]:event.target.value})
    }
    return(
        <>
        <div id="oppo" onClick={()=>{
            window.location.href = '/';
        }}></div>
        
        <Form onSubmit={(event)=>{
            event.preventDefault();
            axios.post('https://oppo-backend.herokuapp.com/login',user).then(res=>{
                localStorage.setItem('user',JSON.stringify(res.data));
                alert('Login Successfull');
                window.location.href='/';
            }).catch(err=>{
                alert('Invalid Email id or Password')
            })
        }}>
            <h2>Sign in</h2>
            <span style={{fontSize: '15px',color: 'rgb(141 141 141)'}}>Sign in with password</span><br/><br/>
            <input type="number" onChange={(event)=>handleChange(event)} placeholder="Registered Mobile Number" id="email" className="linput" required/><br/><br/>
            <div style={{
                display:'flex',
                background: '#f7f7f7',
                fontSize: '13px',
                borderRadius: '5px',
                gap: '10px'
            }}>
                <input type={visible?'string':'password'} onChange={(event)=>handleChange(event)} placeholder="Password" id="password" className="linput" style={{
                    width: '80%'
                }} required/><div style={{
                    marginTop: '3.5%',
                    fontSize: '20px',
                    color: '#959595'
                }} onClick={()=>{
                    if(visible) setVisible(false);
                    else setVisible(true);
                }}>
            {visible?<FaRegEye/>:<FaRegEyeSlash/>}</div>
            </div>
            <br/>
            <div style={{textAlign: 'left'}}>
             <span style={{fontSize: '12px',color: 'rgb(141 141 141)',}}>Forgot password?</span><br/><br/>
            </div>
          <Link onClick={()=>{
              alert("Welome to Sugar Cosmetics")
          }} to="/"><input type="submit" value='Sign In' className=" submit button signin"/></Link>
            <div style={{display:'flex', justifyContent: 'space-between'}}>
                <p style={{fontSize:'13px',color:'rgb(141 141 141)'}}>Privecy Notice</p>
                <Link to={'/register'} style={{fontSize:'13px',color:'#2ec84e',textDecoration:'none'}}>
                    <p>
                     create account
                    </p>
                </Link>
            </div>
            <div id="other_way_div">
                <span id="other_way">Other ways to sign in</span>
            </div>
            <div id="google">
                <img width='100%' height='100%' src="data:image/png;base64,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" alt="" />
            </div>
        </Form>
        </>
    )
}