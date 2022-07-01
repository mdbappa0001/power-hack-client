import React from 'react';
import power from "../images/power.png";

const Header = ({ count }) => {
    const user = localStorage.getItem('accessToken')
    return (
        <header className='px-20 bg-gray-400 flex justify-between h-16 items-center text-xl'>
       
            <img className='rounded-full' src={power} alt="" />
          
            {
                user ? <div className='font-bold text-white'>Paid Total: {count}</div> : <span className='font-black text-red-700'>Login to proceed</span>
            }
        </header>
    );
};

export default Header;