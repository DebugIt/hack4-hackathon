import React from 'react'
import {useNavigate} from 'react-router-dom'


const Footer = () => {

    const navigate = useNavigate();


  return (
    <>
        <div className="nav text-center text-xl py-5 bg-[#52796f] text-[#f1faee] font-bold font-sans xsm:flex-col xsm:text-left lxsm:flex-row bottom-0 relative w-full ">
            <p className='text-center' style={{fontFamily: 'Montserrat, sans-serif'}}>
              Made w/ ❤ by Team Debuggers | 
            </p> 
        </div>
    </>
  )
}

export default Footer