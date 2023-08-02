import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../constants/Footer';

import { Button } from '@mui/material';

function SignUp() {
    return (
        <div style={{ display: 'block' }}>
            <BodyComponent />
            <Footer />
        </div>
    );
}

const styles = {
    inputContainer: 'h-12 w-94 box-border bg-white border border-gray-700 rounded-lg mt-9 mr-3 pl-7 pr-14 pt-3 pb-3 font-light font-sans text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-xl mb-4 p-3',
}

function BodyComponent() {
    return (
        <>
            {/* signUpBody  */}
            <div >
                <div className=' w-1/2 mt-12 flex flex-col  items-center m-auto'>
                    <p className=' sm:text-5xl md:text-5xl lg:text-5xl xl:text-6xl text-[#333356] font-extrabold mb-8'>Sign Up</p>
                    <p className='font-thin sm:text-base md:text-lg lg:text-xl xl:text-lg font-sans'>Adventure awaits, and the world needs curious souls to discover its wonders</p>
                </div>
                <FormDataComponent />
            </div>
        </>
    );
}

function FormDataComponent() {
    
    const [firstname, setFirstName] = useState();
    const [lastname, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const [date, setDate] = useState();
    const [phone, setPhone] = useState();
    const [gender, setGender] = useState();
    const [confirmpassword, setConfirmpassword] = useState();

    const handleDateChange = (event) => {
        setDate(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    }

    const handleConfirmPasswordChange = (event) => {
        setConfirmpassword(event.target.value);
    }

    const navigate = useNavigate();
    const handleSignUp = async (e) => {
        e.preventDefault();
        navigate("/")
        console.log('First name :'+ firstname);
        console.log('Last name  :'+ lastname);
        console.log('Email id   :'+ email);
        console.log('Password   :'+ password);
        
        console.log('Birthdate   :'+ date);
        console.log('Phone no.   :'+ phone);
        console.log('Gender   :'+ gender);
        console.log('Confirm password   :'+ confirmpassword);
        
        // try {
        //     console.log(firstname + ' ' + lastname + ' ' + email + ' ' + password);
        //     let bodyContent = JSON.stringify({
        //         "first_name": firstname,
        //         "last_name": lastname,
        //         "email": email,
        //         "password": password
        //     });

        //     let response = await axios.post("http://localhost:5000/auth/register", bodyContent, {
        //         headers: {
        //             "Content-Type": "application/json",
        //             'Access-Control-Allow-Origin': '*',
        //         },
        //     })

        //     if (response.status === 201) {
        //         console.log(response.status)
        //         navigate('/signin');
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
            <div className='flex flex-col p-8' >

                <form onSubmit={handleSignUp} className='flex' >
                    <div className=' xl:w-[48.75rem] xl:flex  sm:flex sm:flex-col sm:justify-center sm:items-center xl:justify-center xl:items-end ml-10'>
                        <div className=' sm:w-full xl:w-1/2 xl:flex sm:flex sm:flex-col  '>
                            {/* inputContainer */}
                            <input className={styles.inputContainer} required placeholder='First Name' type="text" value={firstname} onChange={handleFirstNameChange} />
                            {/* inputContainer */}
                            <input className={styles.inputContainer} required placeholder='Last Name' type="text" value={lastname} onChange={handleLastNameChange} />
                        </div>

                        <div className=' sm:w-full xl:w-1/2 xl:flex sm:flex sm:flex-col  '>
                            {/* inputContainer */}
                            <input className={styles.inputContainer} required placeholder='eg. abc@gmail.com' type="email" value={email} onChange={handleEmailChange} />
                            {/* inputContainer */}
                            <input className={styles.inputContainer} required placeholder='password' type="password" value={password} onChange={handlePasswordChange} />
                        </div>
                    </div>

                    {/* -------------------  */}

                    <div className=' xl:w-[48.75rem] xl:flex  sm:flex sm:flex-col sm:justify-center sm:items-center xl:justify-center xl:items-start pl-5'>
                        <div className=' sm:w-full xl:w-1/2 xl:flex sm:flex sm:flex-col  '>
                            {/* inputContainer */}
                            <input className={styles.inputContainer} required placeholder='Birthdate' type="date" value={date} onChange={handleDateChange} />
                            {/* inputContainer */}
                            <input className={styles.inputContainer} required placeholder='Phone No.' type="number" value={phone} onChange={handlePhoneChange} />
                        </div>

                        <div className=' sm:w-full xl:w-1/2 xl:flex sm:flex sm:flex-col  '>
                            {/* inputContainer */}
                            <input className={styles.inputContainer} required placeholder='Gender' type="text" value={gender} onChange={handleGenderChange} />
                            {/* inputContainer */}
                            <input className={styles.inputContainer} required placeholder='Confirm password' type="password" value={confirmpassword} onChange={handleConfirmPasswordChange} />
                        </div>
                    </div>
                </form>
            </div >
            <div className=' w-full flex p-5 items-center justify-center '>
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
                    onClick={handleSignUp}
                >
                    Sign up
                </Button>
            </div>
            <div className='w-full flex pb-8 items-center justify-center cursor-pointer'>

                <p>Already have an account ?<span className='text-blue-400 text-lg ' onClick={() => {

                }}> Sign in</span></p>
            </div>

        </>
    );
}

export default SignUp;