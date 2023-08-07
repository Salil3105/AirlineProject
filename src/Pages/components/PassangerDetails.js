import React, { useState } from "react";

const PassengerDetails = ({
    name,
    age,
    selectedGender,
    onNameChange,
    onAgeChange,
    onGenderChange,
    addPassenger,
}) => {
    return (
        <div className="flex items-center justify-evenly rounded-lg mt-9 w-[100%] h-auto bg-white shadow-[30px_35px_60px_-15px_rgba(0,0,0,0.3)]">
            <input
                className="bg-white border text-base placeholder:text-black rounded-md block h-12 w-40 p-3 "
                required
                placeholder="Passenger Name"
                type="text"
                value={name}
                onChange={onNameChange}
            />
            <input
                className="bg-white border text-base  placeholder:text-black rounded-md block h-12 w-28 p-3 "
                required
                placeholder="Age"
                type="number"
                value={age}
                onChange={onAgeChange}
            />

            <div className="h-full w-[8.5rem] p-3 items-center">
                <select
                    className="bg-white border text-base   rounded-md block h-12 w-28 p-3"
                    value={selectedGender}
                    onChange={onGenderChange}
                >
                    <option className="bg-white border text-base   rounded-md block h-12 w-32 p-3">
                        Gender
                    </option>
                    <option
                        defaultChecked
                        className="bg-white border text-base   rounded-md block h-12 w-32 p-3"
                        value="Male"
                    >
                        Male
                    </option>
                    <option
                        className="bg-white border text-base   rounded-md block h-12 w-32 p-3"
                        value="Female"
                    >
                        Female
                    </option>
                </select>
            </div>
            <button
                className="block h-12 w-28 rounded-lg bg-orange-500 text-white text-sm p-2 font-semibold mt-4"
                onClick={addPassenger}
            >
                Add Passenger
            </button>
        </div>
    );
};


const PassengerList = () => {
    const [passengers, setPassengers] = useState([
        {
            name: "",
            age: "",
            gender: "",
        },
    ]);

    const handleAddPassenger = () => {
        setPassengers((prevPassengers) => [
            ...prevPassengers,
            {
                name: "",
                age: "",
                gender: "",
            },
        ]);
    };

    // passenger = [
    //     {
    //         name: "asdas",
    //         age: "sdas",
    //         gender: "sdas"
    //     },
    //     {
    //         name: "asdas",
    //         age: "sdas",
    //         gender: "sdas"
    //     },
    // ]


    const handleNameChange = (index, value) => {
        setPassengers((prevPassengers) => {
            const updatedPassengers = [...prevPassengers];
            updatedPassengers[index].name = value;
            return updatedPassengers;
        });
    };

    const handleAgeChange = (index, value) => {
        setPassengers((prevPassengers) => {
            const updatedPassengers = [...prevPassengers];
            updatedPassengers[index].age = value;
            return updatedPassengers;
        });
    };

    const handleGenderChange = (index, value) => {
        setPassengers((prevPassengers) => {
            const updatedPassengers = [...prevPassengers];
            updatedPassengers[index].gender = value;
            return updatedPassengers;
        });
    };

    const handleSubmit = () => {
        console.log(passengers);
    };

    return (
        <>
            {passengers.map((passenger, index) => (
                <PassengerDetails
                    key={index}
                    name={passenger.name}
                    age={passenger.age}
                    selectedGender={passenger.gender}
                    onNameChange={(e) => handleNameChange(index, e.target.value)}
                    onAgeChange={(e) => handleAgeChange(index, e.target.value)}
                    onGenderChange={(e) => handleGenderChange(index, e.target.value)}
                    addPassenger={handleAddPassenger}
                />
            ))}
            <button
                className="block h-12 w-28 rounded-lg bg-orange-500 text-white text-base p-2 font-semibold mt-4"
                onClick={handleSubmit}
            >
                Submit
            </button>
        </>
    );
};

export default PassengerList;
