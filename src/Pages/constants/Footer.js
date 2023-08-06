import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
// import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div className=' mt-10 lg:flex lg:flex-col bg-[#73777B] lg:h-96 '>
                <div className='sm:flex sm:flex-col-reverse lg:flex lg:flex-row items-center justify-center lg:space-x-12 text-white lg:h-2/3 xl:h-2/3  w-full lg:pr-12 xl:pr-12'>
                    <div className='sm:w-full lg:w-1/3  p-8'>
                        <p>Planning your next trip?</p><br></br>
                        <p>Explore the world with us! Uncover breathtaking destinations and embark on unforgettable journeys.</p>
                    </div>
                    <div className='sm:w-full lg:w-1/3  p-8'>
                        <p>Travel !</p><br></br>
                        <p>The world awaits. Begin your odyssey with us.</p>
                    </div>
                    <div className='lg:w-1/3 lg:space-y-8 bg-[#FFE8D6] text-[#333356]  lg:p-4 mb-6 sm:w-3/4 sm:p-4  '>
                        <p>Get in touch</p>
                        <p>travigo.airline@gmail.com<br /><br />
                            +91 98255 40600</p>
                        <div className='flex'>
                            <InstagramIcon className='m-2' />
                            <FacebookIcon className='m-2' />
                            <YouTubeIcon className='m-2' />
                            <TwitterIcon className='m-2' />
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <hr className="w-3/4 border " />
                </div>
                <div className='sm:p-8 lg:flex  lg:items-center lg:justify-center lg:space-x-32 lg:h-1/3  w-full text-[#9595A1]'>
                    <p>Copyright © 2023 Let's FLy & Explore!</p>
                    <p>Disclaimer</p>
                    {/* <Link target="_blank" to='https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSGMTJLQLNPpXWfrCvbcLnQxZXLxQhQHgJzvnjRLvLSnMrlMSzndtgxmhlNWpjwJJzgVPZDr'>
                        <p className='cursor-pointer'>Report a Problem</p>
                    </Link> */}
                </div>
            </div>
        </>
    );
}

export default Footer;