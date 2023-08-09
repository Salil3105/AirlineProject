import React,{useEffect} from 'react'
import Header from '../constants/Header'
import Footer from '../constants/Footer';


import { useSelector } from 'react-redux';

// import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import axios from 'axios';


function Home() {
    const userInfo = useSelector((state)=>state.user.userInfo);
    useEffect(()=> {
        // axios.get("")
    },[]);
    return (
        <div>
            <Header />
            <div className='border h-[31rem] w-screen flex items-center justify-center'>
                <SearchBar />
                {/* <p>{userInfo.name}</p> */}
            </div>
            <Footer />
        </div>
    )
}

export default Home;
