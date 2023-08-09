import React from 'react'
import Header from '../constants/Header'
import Footer from '../constants/Footer';


function TicketScreen() {
    return (
        <div>
            <Header />
            <TicketScreenBody />
            <Footer />
        </div>
    )
}

const TicketScreenBody = () => {
    return (
        <div className=' bg-[#f9f9f9] w-full p-20 flex flex-col items-center'>
            <Ticket />
        </div>
    );
}

function Ticket() {
    return (
        <>
            <div className='bg-white rounded-md w-[50%] shadow-[30px_35px_60px_-15px_rgba(0,0,0,0.3)] mb-10'>
                {/* 1  */}
                <div className='flex justify-between p-5'>
                    <p className='text-xl text-[#333356] '><span className='font-semibold text-xl text-[#333356'>Flight Name :</span> INDIGO </p>
                    <p className='text-xl text-green-500 font-bold'>Status : BOOKED</p>
                    <p className='text-xl text-[#333356] '><span className='font-semibold text-xl text-[#333356'>Flight No. : </span> 8851236132 </p>
                </div>
                <hr />

                {/* 2  */}
                <div className='flex justify-between p-5'>
                    <div className='justify-between'>
                        {/* Time  */}
                        <span className='text-xl m-1'>23:15</span>
                        <span className='text-xl m-1'>|| Pune</span>
                        {/* Day & Date , From   */}
                        <p className='text-base text-gray-700 font-light m-1'>Mon, 07 Aug</p>
                    </div>
                    <div className='justify-between'>
                        {/* Time  */}
                        <span className='text-xl m-1'>00:15</span>
                        <span className='text-xl m-1'>|| Bengaluru</span>
                        {/* Day & Date , From   */}
                        <p className='text-base text-gray-700 font-light '>Tue, 08 Aug</p>
                    </div>
                </div>
                <hr />

                {/* 3  Passanger Information */}
                <div className='justify-start p-5 items-center'>

                    {/* 3.1 Passanger Details  */}
                    <p className='text-xl text-[#333356] font-sans font-semibold'>Passanger Information</p>
                    <div>
                        <br />
                        <div className='flex w-80 justify-between items-start '>
                            <span className='text-lg text-[#333356] font-semibold'>1</span>
                            <span className='text-lg text-[#333356] font-semibold pl-4'>Salil Chandwadkar</span>
                            <span className='text-lg text-[#333356]'>|| 22 Yrs | Male</span>
                        </div>
                        <div className=' justify-start flex w-80'>
                            <span className='text-lg text-[#333356] font-semibold pl-9'>PNR No. :</span>
                            <span className='text-lg text-[#333356] pl-3'>8851236132</span>
                        </div>
                        <div>
                            <span className='text-lg text-[#333356]  pl-9 font-semibold'>Seat No. : </span>
                            <span className='text-lg text-[#333356] font-sans'>A2-12</span>
                        </div>
                        <div className='flex justify-between'>
                            <div>
                                <span className='text-lg text-green-500 pl-9 font-semibold'>Status : </span>
                                <span className='text-lg text-green-500 font-semibold'>Booked</span>
                            </div>
                            <div onClick={()=>{
                                console.log('Cancelled Ticket Pressed');
                            }} className='bg-red-600 rounded-md p-1 px-2'>
                                <span className=' text-base text-white font-semibold cursor-pointer'>Cancel Ticket </span>
                            </div>
                        </div>
                        <br />
                        <hr />
                    </div>
                    
                </div>
                <hr />

            </div>
        </>

    );
}

export default TicketScreen