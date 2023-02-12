import React, {useState} from 'react'
import { signup, useAuth, signGoog } from './firebase'
import { Link, useNavigate } from 'react-router-dom';
// import {useAuth} from "../firebase"
// import { async } from '@firebase/util';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [inLoad, setInLoad] = useState(false);

    const currentUser = useAuth();
    const navigate = useNavigate();
    // const currentUser = useAuth();
    if(currentUser){
        navigate("/upload");
    }


    async function handleSignin(e){
        e.preventDefault();

        if(email && password === ""){
            alert("please fill all the fields");
        }
        else{
            try {
                setInLoad(true);
                await signup(email, password);
                setEmail("");
                setPassword("");
                alert("Signed In successfully")
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
            <div className="fields flex-col  bg-emerald-900 text-center rounded-xl p-3 basis-2/3">

                <div className='text-white text-xl font-mono font-semibold my-3'>Welcome, Create an account!</div>

                <div>
                    <input className='border border-neutral-400 font-mono my-1 p-2 w-96 rounded-md  xxs:w-52' type="email" required value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email' />
                </div>
                <div>
                    <input className='border border-neutral-400 font-mono my-1 p-2 w-96 rounded-md  xxs:w-52' type="password" required value={password} onChange={e => setPassword(e.target.value)} placeholder='Enter Password' />
                </div>
                <div>
                    <button disabled={inLoad} className='border border-emerald-400 p-1.5 w-96 rounded-md bg-emerald-700 text-white my-1 shadow-md drop-shadow-md shadow-emerald-900  xxs:w-52' onClick={handleSignin}>Sign Up</button>
                </div>
                <div>
                    <button className='border border-emerald-400 p-1.5 w-96 rounded-md bg-emerald-700 text-white my-2 shadow-md drop-shadow-md shadow-emerald-900  xxs:w-52' onClick={signGoog}>Continue with Google</button>
                </div>
                <div>
                    <p className='font-mono text-xs text-white'>Already have an account? <span onClick={() => navigate('/login')}>Login</span> </p>
                </div>

            </div>
            <div className='basis-1/3'></div>
        </div>
    </>
  )
}

export default Signup;