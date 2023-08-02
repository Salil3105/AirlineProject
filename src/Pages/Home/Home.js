import React from 'react'
import Header from '../constants/Header'

function Home() {
    return (
        <div>
            <Header />
            <HomeBody />
        </div>
    )
}

const HomeBody = () => {
    return (
        <>
            
                <div className='border w-full h-60 flex justify-center items-center'>
                    <div className='border border-yellow-200 bg-[#F9F9F9] h-28 w-3/4  ]'>

                    </div>
                </div>
            
        </>
    );
}

export default Home