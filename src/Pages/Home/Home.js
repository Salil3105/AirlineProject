import React from 'react'
import Header from '../constants/Header'
import Footer from '../constants/Footer';

// import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';


function Home() {
    return (
        <div>
            <Header />
            <div className='border h-[31rem] w-screen flex items-center justify-center'>
                <SearchBar />
            </div>
            <Footer />
        </div>
    )
}

export default Home;
