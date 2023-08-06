import React from "react";
import { useNavigate } from "react-router-dom";


const SearchBar = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className=' flex bg-[#F9F9F9] h-28 w-[80%] rounded-xl  justify-center ]'>

                <div className=' h-full w-56 p-3  items-center'>
                    <label className='text-gray-500 text-lg tracking-widest'>From</label>
                    <input type="text" id="from" className="bg-gray-200 border text-bg border-none rounded-md block w-52 p-3" placeholder="Enter City or Airpot" />
                </div>
                <div className=' h-full w-56 p-3  items-center'>
                    <label className='text-gray-500 text-lg tracking-widest'>To</label>
                    <input type="text" id="from" className="bg-gray-200 border text-bg border-none rounded-md block w-52 p-3" placeholder="Enter City or Airpot" />
                </div>
                <div className=' h-full w-44 p-3  items-center'>
                    <label className='text-gray-500 text-lg tracking-widest'>Departure</label>
                    <input type="date" style={{ color: "black", fontSize: '0.885rem' }} id="from" className="bg-gray-200 border text-bg border-none rounded-md block w-40 p-3" placeholder="Enter City or Airpot" />
                </div>
                <div className=' h-full w-44 p-3  items-center'>
                    <label className='text-gray-500 text-lg tracking-widest'>Return</label>
                    <input type="date" style={{ color: 'black', fontSize: '0.885rem' }} id="from" className="bg-gray-200 border  text-black border-none rounded-md block w-40 p-3" placeholder="Enter City or Airpot" />
                </div>
                <div className=' h-full w-[6.50rem] p-3  items-center'>
                    <label className='text-gray-500 text-lg tracking-wider'>Travellers</label>
                    <input type="number" style={{ color: 'black', fontSize: '0.885rem' }} id="from" className="bg-gray-200 border text-bg border-none rounded-md block w-24 p-3" placeholder="No." />
                </div>
                <div className='h-full w-[8.7rem] p-3 ml-2 items-center'>
                    <label className='text-gray-500 text-lg tracking-widest'> || Class</label>
                    <select className="bg-gray-200 border text-base  border-none rounded-md block w-32 p-3">
                        <option style={{ color: '#9BABB8' }} className='bg-gray-200 border border-none rounded-md block w-[9rem] p-3 text-gray-400' >Options</option>
                        <option style={{ color: '#9BABB8' }} defaultChecked className='bg-gray-200 text-[#9BABB8] border text-bg border-none rounded-md block w-[8.8rem] p-3' value="Economy" >Economy</option>
                        <option style={{ color: '#9BABB8' }} className='bg-gray-200 text-[#9BABB8] border text-bg border-none rounded-md block w-[8.8rem] p-3' value="Business" >Business</option>
                    </select>
                </div>
                <div className='h-full w-[8.7rem] ml-3 p-3 flex items-center'>

                    <button onClick={() => {
                        console.log('Search Clicked ');
                        navigate("/flightDetails")
                    }} className='border mt-3 rounded-lg p-2 w-full bg-orange-500 text-white text-lg font-semibold'>Search</button>
                </div>
            </div>

        </>
    );
}

export default SearchBar;