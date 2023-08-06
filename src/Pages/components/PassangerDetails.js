import React, { useState } from 'react'

function PassangerDetails() {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [gender, setGender] = useState();
    const [passangers, setPassangers] = useState([{
        name: '',
        age: '',
        gender: '',
    }]);
    return (
        <>
            <div className='flex items-center justify-evenly rounded-lg mt-4  w-[100%] h-auto bg-white shadow-[30px_35px_60px_-15px_rgba(0,0,0,0.3)]'>
                <input value={name} onChange={(event) => { setName(event.target.value) }} className='bg-white border text-base placeholder:text-black rounded-md block h-12 w-40 p-3 ' required placeholder='Passanger Name' type="text" />
                <input value={age} onChange={(event) => { setAge(event.target.value) }} className='bg-white border text-base  placeholder:text-black rounded-md block h-12 w-28 p-3 ' required placeholder='Age' type="number" />


                <div className='h-full w-[8.5rem] p-3 items-center'>
                    <select value={gender} onChange={(event) => { setGender(event.target.value) }} className="bg-white border text-base   rounded-md block h-12 w-28 p-3">
                        <option className='bg-white border text-base   rounded-md block h-12 w-32 p-3' >Gender</option>
                        <option defaultChecked className='bg-white border text-base   rounded-md block h-12 w-32 p-3' value="Male" >Male</option>
                        <option className='bg-white border text-base   rounded-md block h-12 w-32 p-3' value="Female" >Female</option>
                    </select>
                </div>

                <button
                    className=' block h-12 w-28  rounded-lg bg-orange-500 text-white text-sm font-semibold'
                    onClick={() => {
                        console.log('Add passanger ');
                        console.log('Passanger Name :' + name);
                        console.log('Passanger Age :' + age);
                        console.log('Passanger Gender :' + gender);
                    }}
                >Add Passanger</button>

                <button
                    className=' block h-12 w-28  rounded-lg bg-orange-500 text-white text-sm font-semibold'
                    onClick={() => {
                        console.log('Passanagers :' + passangers);
                    }}
                >Submit</button>
            </div>
        </>
    )
}

export default PassangerDetails