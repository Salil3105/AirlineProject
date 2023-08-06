import React from 'react'
import { FlightTakeoffOutlined, HomeOutlined, PersonOutline } from '@mui/icons-material';


function BreadCrumbs() {
    return (
        <>
            <nav className="flex" aria-label="Breadcrumb">
                <ol className="inline-flex items-center space-x-1 md:space-x-3">
                    <li className="inline-flex items-center">
                        <a
                            href="#"
                            className="ml-1 inline-flex text-sm font-medium text-gray-800 hover:underline md:ml-2"
                        >
                            <HomeOutlined fontSize='large' style={{ color: "#FF6000" }} className="mr-4 h-4 w-4" />
                            Home
                        </a>
                    </li>
                    <li>
                        <div className="flex items-center">
                            <FlightTakeoffOutlined fontSize='large' style={{ color: "#FF6000" }} className="h-4 w-4" />
                            <a href="#" className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                                Search Flights
                            </a>
                        </div>
                    </li>
                    <li aria-current="page">
                        <div className="flex items-center">
                            <PersonOutline fontSize='large' style={{ color: "#FF6000" }} className="h-4 w-4" />
                            <span className="ml-1 text-sm font-medium text-gray-800 hover:underline md:ml-2">
                                Add Passanger
                            </span>
                        </div>
                    </li>
                </ol>
            </nav>

        </>
    )
}

export default BreadCrumbs