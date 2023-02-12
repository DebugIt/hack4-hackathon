import React from 'react'
import {useNavigate} from 'react-router-dom'


const Nav = () => {

    const navigate = useNavigate();


  return (
    <>
        <div className="nav lxsm:flex lxsm:text-center text-2xl py-5 bg-[#52796f] text-[#f1faee] font-bold font-sans xsm:flex-col xsm:text-left  w-full lxsm:flex-row flex-wrap">
            <div className='flex-auto'></div>
            <div className='flex-auto xsm:ml-5' onClick={() => navigate('/signin')}>
                <span className="material-symbols-outlined text-3xl">
                    account_circle
                </span>
            </div>
            <h1 style={{fontFamily: 'Montserrat, sans-serif'}} className='flex-auto xsm:ml-5' onClick={() => navigate('/')} >Wardrobe.ico</h1>
            <div>
                <ul className='pr-9 '>
                    <li onClick={() => navigate('/formal')} className="hover:text-[#25463e]">Formals</li>
                    <li onClick={() => navigate('/casual')} className="hover:text-[#25463e]">Casuals</li>
                    <li onClick={() => navigate('/sport')} className="hover:text-[#25463e]">Sports</li>
                    <li onClick={() => navigate('/occas')} className="hover:text-[#25463e]">Occasions</li>
                    <li onClick={() => navigate('/usr')} className="hover:text-[#25463e]">User Post</li>
                </ul>
            </div>
        </div>
    </>
  )
}

export default Nav