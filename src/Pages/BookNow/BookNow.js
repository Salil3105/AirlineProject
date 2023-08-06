import React from 'react'
import Header from '../constants/Header';
import SearchBar from '../components/SearchBar';
import PassangerDetails from '../components/PassangerDetails';
import SearchBarResult from '../components/SearchBarResult';
import Footer from '../constants/Footer';
import { CurrencyRupee } from '@mui/icons-material';

function BookNow() {
    return (
        <div className='bg-[#F9F9F9] h-screen'>
            <Header />
            <BookNowBody />
            <Footer />
        </div>
    );
}

function BookNowBody() {
    return (
        <>
            <div className='flex justify-center bg-[#F9F9F9]'>
                <SearchBar />
            </div>

            <div className='px-20 flex w-[100%] justify-between'>
                <div className='flex flex-col w-1/2 justify-end items-end'>
                    <FlightBooked />
                    <PassangerDetails />
                </div>

                {/* Fare Ticket  */}
                <div className='w-1/2 flex justify-center '>
                    <div className='bg-white h-40 rounded-lg  w-[50%] shadow-[30px_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                        <div className=' h-10 flex items-center font-sans font-semibold text-2xl px-3'>Fare Summary</div>

                        <div className=' px-3 flex h-14  items-center justify-between  '>
                            <p className='font-semibold text-xl'>Ticket Fare</p>
                            <div className='flex'>
                                <CurrencyRupee fontSize='large' style={{ color: "#61677A" }} />
                                <p className='font-semibold text-2xl text-[#61677A]'>2893</p>
                            </div>
                        </div>
                        <div className='bg-slate-600 h-16 rounded-b-md px-3 flex  items-center justify-between  '>
                            <p className='font-semibold text-xl text-white'>Total Fare</p>
                            <div className='flex'>
                                <CurrencyRupee fontSize='large' style={{ color: "white" }} />
                                <p className='font-semibold text-2xl text-white'>2893</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function FlightBooked() {
    const flightIcon2 = 'https://images.ixigo.com/img/common-resources/airline-new/AI.png';
    return (
        <>
            <div className='flex rounded-lg ml-5 w-[95%] h-40 bg-white shadow-[30px_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                {/* Left part  */}
                <div className='flex w-full'>
                    {/* FlightIconC ontainer */}
                    <div className='h-40 w-28 flex flex-col justify-center items-center '>
                        <img src={flightIcon2} alt='not found' />
                        <div className=' justify-stretch h-12 mt-2'>
                            <p className='text-gray-500 text-base  font-light '>INDIGO</p>
                            <p className='text-gray-500 text-base font-light '>I5976</p>
                        </div>
                    </div>
                    <div className='h-40 w-36 flex flex-col justify-evenly items-center '>
                        <div className='text-right space-y-2 flex flex-col w-full'>
                            <span className='text-black text-xl  font-light '>PNQ</span>
                            <span className='text-black text-2xl  font-semibold'>23:15</span>
                            <span className='text-gray-500 text-sm font-light '>Mon, 07 Aug, Pune</span>
                        </div>
                    </div>

                    <div className='ml-1 w-60 h-40 flex justify-center items-center'>
                        <hr className='text-purple-500' ></hr>
                        <span className='text-gray-500'>non-stop</span>
                    </div>

                    <div className='h-40 w-36 flex flex-col justify-evenly items-center '>
                        <div className='text-start space-y-2 flex flex-col w-full'>
                            <span className='text-black text-xl  font-light '>BlR</span>
                            <span className='text-black text-2xl  font-semibold'>00:15</span>
                            <span className='text-gray-500 text-sm font-light '>Tue, 08 Aug, Bengaluru </span>
                        </div>
                    </div>

                </div>
            </div>
        </>

    );
}

export default BookNow;