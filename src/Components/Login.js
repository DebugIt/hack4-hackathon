import React, {useState} from 'react'
import { login, useAuth, logout, signGoog } from './firebase'
// import {useAuth} from "../firebase"
// import {currentUser} from "./Nav"
import { Link, useNavigate } from 'react-router-dom';
// import { async } from '@firebase/util';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [inLoad, setInLoad] = useState(false);

    const currentUser = useAuth();
    const navigate = useNavigate();
    // const currentUser = useAuth();
    if(currentUser){
        navigate("/home");
    }

    


    async function handleLogin(e){
        e.preventDefault();

        if(email && password == ""){
            alert("please fill all the fields");
        }
        else{
            try {
                setInLoad(true);
                await login(email, password);
                setEmail("");
                setPassword("");
                alert("Logged In successfully")
                setInLoad(false);
    
            } catch (error) {
                alert(error);
            }
        }

        
    }


  return (
    <>
        <div className="container flex h-96 justify-center items-center my-50 xxs:mx-24">
            <div className='basis-1/3'></div>
            <div className="fields flex-col  bg-emerald-900 text-center rounded-lg p-3 basis-2/3">

                <div className='text-white text-xl font-mono font-semibold my-3'>Login to Account</div>
                
                <div>
                    <input className='border border-neutral-400 font-mono my-1 p-2 w-96 rounded-md  xxs:w-52' type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email' />
                </div>
                <div>
                    <input className='border border-neutral-400 font-mono my-1 p-2 w-96 rounded-md  xxs:w-52' type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Password' />
                </div>
                <div>
                    <button disabled={inLoad} className='border border-emerald-700 p-1.5 w-96 rounded-md bg-emerald-700 text-white my-1 shadow-md drop-shadow-md shadow-emerald-900  xxs:w-52' onClick={handleLogin}>LogIn</button>
                </div>
                <div>
                    <button className='border border-emerald-400 p-1.5 w-96 rounded-md bg-emerald-700 text-white my-2 shadow-md drop-shadow-md shadow-emerald-900 xxs:w-52' onClick={signGoog}>Continue with Google</button>
                </div>
                <div>
                    <p className='font-mono text-xs text-white'>Don't have an account? <span onClick={() => navigate('/signin')}>SignUp</span> </p>
                </div>

            </div>
            <div className='basis-1/3'></div>
        </div>
    </>
  )
}

export default Login;