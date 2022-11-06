import React, { useState }from 'react';
import PropTypes from 'prop-types';
import './LoginUser.css'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

LoginUser.propTypes = {
  
    
};

function LoginUser(props) {
    
    var [un,setun]= useState('');
    var [pass,setpass]= useState('');

    const navigate= useNavigate();
    async function Login(){
        
        var user={
            username:un,
            password:pass,
        };
        console.log(user)
        var response = await axios.post('http://localhost:4094/api/Member/Login',user
        ).catch(function(error){
         if(error.response){
            alert("Invalid credentials")
         }
        })
        console.log(response.status)
        if(response.status===200)
        {
            sessionStorage.setItem("key", un)
            navigate("/Plans")
        }
        
    }

    return (
        <div className='loginuserdiv'>
              <body>
          <div class=" flex-r container">
            <div class="flex-r login-wrapper">
              <div class="login-text">
                <div class="logo">
                  <span><i class="fab fa-speakap"></i></span>
                </div>
                <h1>Sign Up</h1>
                <p>It's not long before you embark on this journey! </p>
        
                <form class="flex-c">
                  <div class="input-box">
                    <span class="label">E-mail</span>
                    <div class=" flex-r input">
                      {/* <input type="text" placeholder="name@abc.com"> */}
                      <input className='form-control' placeholder="name@abc.com"  value={un} onChange={(e)=>setun(e.target.value)} type="text" />

                      <i class="fas fa-at"></i>
                    </div>
                  </div>
        
                  <div class="input-box">
                    <span class="label">Password</span>
                    <div class="flex-r input">
                      {/* <input type="password" placeholder="8+ (a, A, 1, #)"> */}
                      <input className='form-control' placeholder="8+ (a, A, 1, #)1" value={pass} type="password"onChange={(e)=>setpass(e.target.value)} />
                      <i class="fas fa-lock"></i>
                    </div>
                  </div>
        
                  <div class="check">
                    {/* <input type="checkbox" name="" id=""> */}
                    {/* <span>I've read and agree with T&C</span> */}
                  </div>
        
                  {/* <input class="btn" type="submit" value="Create an Account"> */}
                    
                  <span class="extra-line">
                    <span>Already have an account?</span>
                    <a href="#"><button onClick={()=>Login()} className='btn btn-success'>Login</button></a>
                    
                  </span>
                </form>
        
              </div>
            </div>
          </div>
        </body>
    </div>
    );
}

export default LoginUser;