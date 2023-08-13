import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import { setFlightDetailsInfo, setIsLoggedIn, clearUserInfo } from '../../store/reducers/flightDetailsReducer';
import { useSelector, useDispatch } from "react-redux";

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchLocation, setSearchLocation] = useState([]);

    // reading redux data
    // const flightDetailsInfo = useSelector((state) => state.flight.flightDetailsInfo);
    // console.log('flightInfo', flightDetailsInfo);
    // const dispatch = useDispatch();

    const fetchSearData = async (value) => {
        axios
            .get(`http://localhost:8080/airport/search?q=${value}`)
            .then((response) => {

                console.log(response.data);


                const airportlist = response.data?.map((item) => {
                    return item?.location
                });
                console.log("Search Location : " + searchLocation);
                setSearchLocation(airportlist);
                return searchLocation;
            }).catch((error) => console.error(error));
    };

    const [fromAirpot, setFromAirpot] = useState('');
    const [toAirpot, setToAirpot] = useState('');
    const [departureDate, setDepartureDate] = useState();
    const [travellers, setTravellers] = useState();
    const [classType, setClassType] = useState();


    const handleFromAirportChange = (event) => {
        const newValue = event.target.value;
        setFromAirpot(newValue);
        fetchSearData(newValue);
    };

    const handleToAirportChange = (event) => {
        const newValue2 = event.target.value;
        setToAirpot(newValue2);
        fetchSearData(newValue2);
    };

    const handleDepartureDate = (event) => {
        setDepartureDate(event.target.value);
    };
    const handleTravellersChange = (event) => {
        setTravellers(event.target.value);
    };
    const handleClassTypeChange = (event) => {
        setClassType(event.target.value);
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        console.log("Search Clicked ");
        console.log("From Airport :", fromAirpot);
        console.log("To Airport :", toAirpot);
        console.log("Departure Date : ", departureDate);
        console.log("Travellers No. : ", travellers);
        console.log("Class : ", classType);
        try {
            let response = await axios.post("");

        } catch (err) {
            console.log('Error: ' + JSON.stringify());
        }
        navigate("/flightDetails");
    }
    return (
        <>
            <div className="flex bg-[#F9F9F9] h-28 w-auto  px-10 rounded-xl  justify-center">
                <div className="h-full w-56 p-3  items-center">
                    <label className="text-gray-500 text-lg tracking-widest">From</label>
                    <input
                        value={fromAirpot}
                        onChange={handleFromAirportChange}
                        type="text"
                        id="from"
                        className="placeholder:text-black bg-gray-200 border text-bg border-none rounded-md block w-52 p-3"
                        placeholder="Enter City or Airpot"
                    />
                    <div className=" bg-[#e5e7eb] text-black cursor-pointer w-52  max-h-40  overflow-hidden stacked-fractions">
                        {
                            searchLocation.map((item, id) => {
                                return (
                                    <div onClick={(e) => setFromAirpot(item)} className="p-2 px-3 hover:bg-[#efefef]" key={id}>
                                        {
                                            item
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>

                </div>

                <div className=" h-full w-56 p-3  items-center">
                    <label className="text-gray-500 text-lg tracking-widest">To</label>
                    <input
                        value={toAirpot}
                        onChange={handleToAirportChange}
                        type="text"
                        id="from"
                        className="placeholder:text-black bg-gray-200 border text-bg border-none rounded-md block w-52 p-3"
                        placeholder="Enter City or Airpot"
                    />
                    <div className=" bg-[#e5e7eb] text-black cursor-pointer w-52  max-h-40  overflow-hidden stacked-fractions">
                        {
                            searchLocation.map((item, id) => {
                                return (
                                    <div onClick={(e) => setToAirpot(item)} className="p-2 px-3 hover:bg-[#efefef]" key={id}>
                                        {
                                            item
                                        }
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>

                <div className=" h-full w-44 p-3  items-center">
                    <label className="text-gray-500 text-lg tracking-widest">
                        Departure
                    </label>
                    <input
                        value={departureDate}
                        onChange={handleDepartureDate}
                        type="date"
                        style={{ color: "black", fontSize: "0.885rem" }}
                        id="from"
                        className="bg-gray-200 border text-bg border-none rounded-md block w-40 p-3"
                    />
                </div>

                <div className=" h-full w-[6.50rem] p-3  items-center">
                    <label className="text-gray-500 text-lg tracking-wider">
                        Travellers
                    </label>
                    <input
                        value={travellers}
                        onChange={handleTravellersChange}
                        type="number"
                        style={{ color: "black", fontSize: "0.885rem" }}
                        id="from"
                        className="placeholder:text-black bg-gray-200 border text-bg border-none rounded-md block w-24 p-3"
                        placeholder="No."
                    />
                </div>

                <div className="h-full w-[8.7rem] p-3 ml-2 items-center">
                    <label className="text-gray-500 text-lg tracking-widest">
                        {" "}
                        || Class
                    </label>
                    <select
                        value={classType}
                        onChange={handleClassTypeChange}
                        className="bg-gray-200 border text-base  border-none rounded-md block w-32 p-3"
                    >
                        <option
                            style={{ color: "#9BABB8" }}
                            className="bg-gray-200 border border-none rounded-md block w-[9rem] p-3 text-gray-400"
                        >
                            Options
                        </option>
                        <option
                            style={{ color: "#9BABB8" }}
                            defaultChecked
                            className="bg-gray-200 text-[#9BABB8] border text-bg border-none rounded-md block w-[8.8rem] p-3"
                            value="Economy"
                        >
                            Economy
                        </option>
                        <option
                            style={{ color: "#9BABB8" }}
                            className="bg-gray-200 text-[#9BABB8] border text-bg border-none rounded-md block w-[8.8rem] p-3"
                            value="Business"
                        >
                            Business
                        </option>
                    </select>
                </div>
                <div className="h-full w-[8.7rem] ml-3 p-3 flex items-center">
                    <button
                        onClick={handleSearch}
                        className="border mt-3 rounded-lg p-2 w-full bg-orange-500 text-white text-lg font-semibold"
                    >
                        Search
                    </button>
                </div>
            </div>
        </>
    );
};

export default SearchBar;
