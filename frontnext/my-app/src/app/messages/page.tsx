"use client"
import React, {useRef, useState} from 'react';
import LeftbarMessages from "@/components/messages/LeftbarMessages";
import {FaPhone, FaVideo} from "react-icons/fa";
import Navbar from "@/components/Navbar";
import { FaBan, FaUsers, FaTrash, FaExclamationTriangle } from "react-icons/fa";
import {FlagIcon, LockClosedIcon, TrashIcon, UserGroupIcon} from "@heroicons/react/16/solid";
import MiddelBar from "@/components/messages/MiddelBar";
import RightBar from "@/components/messages/RightBar"; // Importing the icons

const Page = () => {
    const [isMediaOpen, setIsMediaOpen] = useState(true);
    const contentRef = useRef(null); // Ref to calculate height of accordion content

    const toggleMedia = () => setIsMediaOpen(!isMediaOpen);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [messagedetail, setMessagedetail] = useState(false)
    const messages=[1,2,3,4,4,4,4,4,4,4]
    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const showmessagedetail = () => {
        setMessagedetail(!messagedetail)
    };

    return (

        <div  className="flex flex-col min-h-screen w-full  bg-gradient-to-br from-customDarkBlue via-customDarkBlue via-50% to-black">
            <Navbar/>


            <div className={"flex"}>

                <LeftbarMessages/>

                <MiddelBar/>

                <RightBar/>
            </div>
        </div>

    )


};

export default Page;