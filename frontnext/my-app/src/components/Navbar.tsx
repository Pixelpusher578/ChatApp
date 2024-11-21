import React, {useState} from 'react';
import Link from "next/link";

const Navbar = () => {
    const [isopen, setIsopen] = useState(false)
    const toggleSidebar = () => {
        setIsopen(!isopen);
    };
    return (
        <nav className={"flex lg:justify-between lg:items-baseline mb-1 lg:w-full lg:px-7 lg:pt-5  "}>
            <div className={"font-bold text-2xl ml-2 text-white mt-3 "} style={{fontSize:"35px"}}><span className={'text-red-500'}>Noodle</span>Doodle</div>

            {!isopen &&
                <button className={"block lg:hidden pl-3.5 pt-3  text-white"} onClick={toggleSidebar}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>

            }
            <div className={" lg:w-1/3  hidden lg:flex lg:justify-between mt-3 space-x-6"}>
                <Link className={"text-white hover:text-gray-300"} style={{fontSize:"25px"}} href={"/"}>Product</Link>
                <Link className={"hover:text-gray-300 text-white"} style={{fontSize:"25px"}} href={"/"}>Service</Link>
                <Link className={"hover:text-gray-300 text-white"} style={{fontSize:"25px"}} href={"/"}>Contact</Link>
                <Link className={"hover:text-gray-300 text-white"} style={{fontSize:"25px"}} href={"/"}>try it free</Link>
            </div>

            <div
                className={`lg:hidden bg-black h-full fixed top-0 left-0  w-64 text-white ${isopen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`} style={{zIndex:1}}>

                <button
                    className="absolute  top-4 right-4 text-white focus:outline-none"
                    onClick={toggleSidebar}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>


                <div className={" flex flex-col space-y-6 pl-2 pt-20"}>
                    <a className={"text-white hover:text-gray-300"}>Product</a>
                    <a className={"hover:text-gray-300 text-white"}>Service</a>
                    <a className={"hover:text-gray-300 text-white"}>Contact</a>
                    <a className={"hover:text-gray-300 text-white"}>login</a>
                    <a className={"hover:text-gray-300 text-white"}>try it free</a>
                </div>

            </div>

        </nav>
    );
};

export default Navbar;