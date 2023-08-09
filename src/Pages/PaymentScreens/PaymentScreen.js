import React from 'react'
import { ArrowOutward, CurrencyRupee } from '@mui/icons-material';
import Header from '../constants/Header'
import Footer from '../constants/Footer'
import { FlightBooked } from '../BookNow/BookNow';
import { useNavigate } from 'react-router-dom';

function PaymentScreen() {
    return (
        <>
            <Header />
            <PaymentScreenBody />
            <Footer />
        </>
    )
}

function PaymentScreenBody() {
    const navigate = useNavigate();
    return (
        <>
            <div className='bg-[#F9F9F9]  w-screen h-[40rem] flex justify-evenly items-center '>
                <div className='shadow-[30px_35px_60px_-15px_rgba(0,0,0,0.3)] bg-white flex h-48 w-[45%] items-center justify-between p-10 rounded-md border '>
                    <div className='flex flex-col'>
                        <label
                            className="text-base ml-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            htmlFor="name"
                        >
                            UPI ID
                        </label>

                        <input className="mt-2 w-[28rem] p-2 border-b-2 border-gray-500 focus:border-orange-500 outline-none" type="text" placeholder="Enter your UPI Id" />
                        <br />
                        <label className='text-sm text-gray-400 w-96 '>A payment request will be sent to this UPI Id</label>
                    </div>

                    <div className=''>
                        <button onClick={() => {
                            navigate("/ticketDetails")
                            console.log('Verify and Pay Click');
                        }} className="h-12 w-44 rounded-lg bg-orange-500 text-white text-base  font-bold">
                            Verify and Pay
                        </button>
                    </div>
                </div>


                {/* Right Side  */}
                <div className='h-auto w-[28rem] p-2'>
                    {/* Top Side  */}
                    <div className=' h-60 w-full rounded-md bg-white'>
                        <div className='text-start p-5  m-2 shadow-[30px_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-b-md'>
                            <span className='text-xl text-gray-600 font-semibold '>Pune</span>
                            <span className='mx-3'><ArrowOutward style={{ color: '#494949' }} fontSize='large' /></span>
                            <span className='text-xl font-semibold text-gray-600'>Banglore</span>
                            <p className='text-[#494949]'>Sat 19 Aug</p><br />
                            <hr />
                        </div>
                        <FlightBooked />
                    </div>

                    {/* bottom side  */}
                    <div className='shadow-[30px_35px_60px_-15px_rgba(0,0,0,0.3)] flex flex-col items-center mt-10'>
                        <div className='bg-white h-auto w-full rounded-lg shadow-[30px_35px_60px_-15px_rgba(0,0,0,0.3)]'>
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
            </div>
        </>
    );
}
export default PaymentScreen