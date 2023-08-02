import React from 'react'

import logo from '../../images/logo.png'

function Header() {
    const airoplaneIcon = 'https://www.ixigo.com/rt-udaan/pc/img/flight-new.svg';
    const offerIcon = 'https://www.ixigo.com/rt-udaan/pc/img/offer-new.svg';
    const customerServiceIcon = 'https://www.ixigo.com/rt-udaan/pc/img/customer-new.svg';
    const profileIcon = 'https://www.ixigo.com/rt-udaan/pc/img/user-new.svg';
    return (
        <>
            {/* Header Container  */}
            <div className='flex h-20 w-full bg-[#F9F9F9]  border'>

                {/* Left Side  */}
                <div className='flex h-full w-1/2 justify-start items-center pl-40 '>
                    {/* Logo Image  */}
                    <div className=''>
                        <img src={logo} alt='not found' className='h-11 w-24' />
                    </div>
                    
                    <div className='flex items-center justify-center space-x-2 ml-6 '>
                        <img className='cursor-pointer' src={airoplaneIcon} alt='not found' />
                        <p className='cursor-pointer' style={{color:"#EC5B24", fontSize:"18px", fontFamily:"sans-serif",letterSpacing:'1.2px'}}>Flights</p>
                    </div>
                </div>

                {/* Right Side  */}
                <div className='flex  h-full w-1/2 justify-around items-center pl-40 '>                    
                    <div className='flex items-center justify-center '>
                        <img className='cursor-pointer' src={customerServiceIcon} alt='not found' />
                        <p className='cursor-pointer ml-2' style={{color:"#EC5B24", fontSize:"18px", fontFamily:"sans-serif",letterSpacing:'1.2px'}}>Offers</p>
                    </div>
                    <div className='flex items-center justify-center '>
                        <img className='cursor-pointer' src={offerIcon} alt='not found' />
                        <p className='cursor-pointer ml-2' style={{color:"#EC5B24", fontSize:"18px", fontFamily:"sans-serif",letterSpacing:'1.2px'}}>Customer Service</p>
                    </div>
                    <div className='flex items-center justify-center mr-16  '>
                        <img className='cursor-pointer' src={profileIcon} alt='not found' />
                        <p className='cursor-pointer ml-2' style={{color:"#EC5B24", fontSize:"18px", fontFamily:"sans-serif",letterSpacing:'1.2px'}}>Login</p>
                    </div>
                </div>



            </div>

        </>
    )
}

export default Header