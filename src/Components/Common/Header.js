import React from 'react';
import power from "../images/power.png";

const Header = () => {
    return (
        <header className='px-20 bg-gray-400 flex justify-between h-16 items-center text-xl'>
       
            <img className='rounded-full' src={power} alt="" />
          
            <div className='font-bold text-white'>Paid Total: 0</div>
        </header>
    );
};

export default Header;