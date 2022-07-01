import React, { useEffect, useState } from 'react';
import power from "../images/power.png";

const Header = ({ count }) => {
    const user = localStorage.getItem('accessToken')
    const [countEle, setCountEle] = useState(null)
    useEffect(() => {
        if (user) {
            setCountEle(<div className='text-white'>Paid Total: <span className='text-black'>{count}</span></div>)
        } else {
            setCountEle(<span className='font-black text-black'>Proceed Login</span>)
        }
    }, [user, count])
    return (
        <header className='px-20 bg-gray-300 flex justify-between h-16 items-center text-xl'>
            <img className='rounded-full' src={power} alt="" />

            {countEle}

        </header>
    );
};

export default Header;