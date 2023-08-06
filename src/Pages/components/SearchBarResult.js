import { CurrencyRupee } from '@mui/icons-material';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function SearchBarResult() {
    // const flightIcon1 = 'https://images.ixigo.com/img/common-resources/airline-new/6E.png';
    const flightIcon2 = 'https://images.ixigo.com/img/common-resources/airline-new/AI.png';
    const navigate = useNavigate();
    return (
        <div className='flex rounded-lg m-4  w-[60%] h-40 bg-white shadow-[30px_35px_60px_-15px_rgba(0,0,0,0.3)]'>
            {/* Left part  */}
            <div className='flex w-3/4'>
                {/* FlightIconContainer */}
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
            {/* Right part  */}
            <div className='h-40 w-full  flex justify-around items-center'>
                <div className=' flex justify-center items-center'>
                    <CurrencyRupee fontSize='large' style={{color:'#F86F03'}}  />
                    <span className='text-orange-500 text-3xl font-bold'>2893</span>
                </div>
                <button onClick={()=>{
                    navigate("/flightDetails/bookNow")
                }} className=' block h-12 w-28  rounded-lg bg-orange-500 text-white text-lg font-semibold'>Book</button>
            </div>
        </div>
    )
}

export default SearchBarResult