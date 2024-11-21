"use client"
import Image from "next/image";
import {useState} from "react";
import Navbar from "@/components/Navbar";

export default function Home() {

    return (
        <div
            className="flex min-h-screen w-screen flex-col space-y-48 bg-gradient-to-br from-customDarkBlue  via-customDarkBlue via-50% to-black h-64  ">

            <Navbar/>


            <div className="flex flex-col items-center justify-center">
                {/* Main container to center content */}
                <div className="flex flex-col lg:flex-row justify-center lg:space-x-60 w-full px-6 lg:px-0">

                    {/* Header Section */}
                    <header className="flex flex-col space-y-6 p-6 lg:p-10 pt-28 h-full w-full lg:pl-48">
                        <div className="font-bold text-white text-4xl lg:text-6xl" style={{fontWeight: 700}}>
                            Have your Best chat
                        </div>
                        <div className="text-lg lg:text-xl text-gray-300" style={{fontWeight: 1000}}>
                            Fast, easy & unlimited conference call service
                        </div>
                        <div className="flex space-x-4 lg:space-x-6 text-lg lg:text-2xl">
                            <button className="rounded-3xl px-6 lg:px-7 py-2 bg-red-500 text-white">
                                Login
                            </button>
                            <button className="rounded-3xl px-6 lg:px-7 py-2 bg-red-500 text-white">
                                SignUp
                            </button>
                        </div>
                    </header>

                    {/* Image Section */}
                    <section
                        className="relative flex lg:flex-col lg:pr-16 h-auto lg:h-[500px] w-full  lg:gap-[10px] mt-8 lg:mt-[-60px]">

                        <div className="flex w-full h-auto lg:h-full  lg:gap-[10px]">
                            {/* Radial gradient background */}
                            <div
                                className="lg:absolute w-40 h-40 lg:w-[300px] lg:h-[300px] bg-gradient-radial  from-red-500 via-transparent to-transparent"
                                style={{
                                    background: "radial-gradient(circle,#F84138 30%,transparent 30%)",
                                    backgroundSize: "20px 20px",
                                    left: "-20px",
                                    top: "-20px",
                                }}
                            />
                            <Image
                                src="/Images/istockphoto-491153246-612x612.jpg"
                                alt="Chat Image 1"
                                width={400}
                                height={80}
                                className="rounded-xl"
                                style={{zIndex: 1}}
                            />
                        </div>

                        <div
                            className="flex w-full h-auto lg:h-full gap-6 lg:gap-[10px] relative lg:top-[-100px]"
                            style={{zIndex: 2}}
                        >
                            <Image
                                src="/Images/istockphoto-491153246-612x612.jpg"
                                alt="Chat Image 2"
                                width={400}
                                height={80}
                                className="rounded-xl lg:ml-48"
                            />
                        </div>

                        <div className="flex justify-center space-x-8 items-center"></div>
                    </section>
                </div>
            </div>

        </div>
    );
}
