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
            <div className='w-full h-20'>
                <div className='border border-red-500 h-28 w-3/4  ]'>

                </div>
            </div>

        </>
    );
}

export default Home