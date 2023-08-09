import React from 'react'
import Header from '../constants/Header'
import SearchBar from '../components/SearchBar';
import SearchBarResult from '../components/SearchBarResult';
// import BreadCrumbs from '../components/BreadCrumbs';
import Footer from '../constants/Footer';


function FlightDetails() {
    return (
        <div className='bg-[#F9F9F9] h-screen w-screen'>
            <Header />
            <FlightDetailsBody />
            <Footer />
        </div>
    );
}

function FlightDetailsBody() {
    return (
        <div className='pb-10'>
            <div className='flex justify-center bg-[#F9F9F9]'>
                <SearchBar />
            </div>
            <div className='flex flex-col justify-center items-center'>
                <SearchBarResult />
                <SearchBarResult />
                <SearchBarResult />
            </div>
        </div>
    );
}



export default FlightDetails;