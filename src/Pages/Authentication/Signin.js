import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Footer from '../constants/Footer';



function SignIn() {

    return (
        <div style={{ display: 'block' }}>
            <BodyComponent />
            <Footer />
        </div>
    );
}

const styles = {
    // signUpBody: 'h-[800px] w-[100vw] ',
    // titleContainer1: ' h-20 w-96 text-center text-[#333356] font-sans text-6xl font-extrabold leading-10 decoration-slate-800 ',
    // titleContainer2: 'h-14 w-96 text-center font-serif font-thin text-base leading-6 decoration-slate-800 flex m-auto justify-center items-center  relative top-28 ',
    // formContainer: 'h-96 w-[832px] m-auto pl-28  relative top-36 left-0.5 font-sans font-bold text-3xl tracking-tight decoration-slate-800 block',
    inputContainer: ' h-12 w-[20rem] box-border bg-white border border-gray-700 rounded-lg mt-3 mr-3 p-3  font-light font-sans text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-xl mb-4 p-3',
    // button: 'h-14 w-56 bg-white font-serif font-bold text-2xl flex capitalize p-10 relative top-16 m-auto rounded-xl',
}

function BodyComponent() {
    return (
        <>
            {/* signUpBody  */}
            <div >
                <div className=' w-1/2 mt-32 flex flex-col  items-center m-auto'>
                    <p className='sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-[#333356] font-extrabold font-sans mb-8'>Sign In</p>
                    <p className='font-thin sm:text-base md:text-lg lg:text-xl xl:text-lg font-sans'>Adventure awaits, and the world needs curious souls to discover its wonders</p>
                </div>
                <FormDataComponent />
            </div>
        </>
    );
}

function FormDataComponent() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handleSignIn = async (e) => {
        e.preventDefault();
        navigate("/")
        console.log(email, ' ' + password);
        
        // try {
        //     console.log('In try part');

        //     let bodyContent = JSON.stringify({
        //         "email": email,
        //         "password": password
        //     });

        //     let response = await axios.post("http://localhost:5000/auth/login", bodyContent, {
        //         headers: {
        //             "Content-Type": "application/json",
        //             'Access-Control-Allow-Origin': '*',
        //         },
        //     })

        //     console.log(JSON.stringify(response?.data));
        //     const accessToken = response?.data?.token
        //     console.log(accessToken);
        //     if (response.status === 200) {
        //         navigate('/');
        //     }
        //     else {
        //         console.log('Error: ' + JSON.stringify(response));
        //     }

        // } catch (err) {
        //     console.log(err.message);
        // }
    }

    return (
        <>
            {/* formContainer */}
            <div className='flex flex-col  items-center justify-center mt-7 mb-12 p-3'>
                <form onSubmit={() => { }}>
                    <div className=' xl:w-[48.75rem] xl:flex  sm:flex sm:flex-col sm:justify-center sm:items-center xl:justify-center xl:items-center'>

                        {/* inputContainer */}
                        <input className={styles.inputContainer} autoComplete='on' required placeholder='Email id' type="email" value={email} onChange={handleEmailChange} />
                        {/* inputContainer */}
                        <input className={styles.inputContainer} required placeholder='Password' type="password" value={password} onChange={handlePasswordChange} />

                    </div>

                    <div className='w-full flex  p-3 items-center justify-center '>
                        <Button
                            variant='contained'
                            type='submit'
                            style={{
                                color: 'white',
                                backgroundColor: '#B2A4FF',
                                textTransform: 'none',
                                paddingRight: '5rem',
                                paddingLeft: '5rem',
                                fontSize: '1.375rem',
                                borderRadius: '1rem',
                                fontWeight: 'bold',
                            }}
                            onClick={handleSignIn}
                        >
                            Sign in
                        </Button>
                    </div>
                </form>

            </div >

        </>
    );
}

export default SignIn;