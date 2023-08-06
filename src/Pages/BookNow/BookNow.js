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

            <div className='ml-5'>
                <SearchBarResult />
                <PassangerDetails />
            </div>
            <div className=' absolute bg-white left-[60rem] top-[13rem] h-40 rounded-lg w-[30%] shadow-[30px_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                <div className=' h-10 flex items-center font-sans font-semibold text-2xl px-3 mt-1'>Fare Summary</div>

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
        </>
    );
}

export default BookNow;