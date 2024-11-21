import React, {useRef, useState} from 'react';
import {FaPhone, FaVideo} from "react-icons/fa";

const MiddelBar = () => {

    const [messagedetail, setMessagedetail] = useState(false)
    const messages=[1,2,3,4,4,4,4,4,4,4]

    const showmessagedetail = () => {
        setMessagedetail(!messagedetail)
    };
    return (
        <div className="relative  w-1/2 flex p-7   flex-col shadow-blue-950 shadow-2xl ">
            <div
                className="flex  items-center text-lg space-x-3 shadow-blue-950 shadow-sm    text-white rounded-lg">
                <div className="relative">
                    <img
                        src="https://via.placeholder.com/50"
                        alt="Avatar"
                        className="w-[70px] h-[70px] rounded-full text-xl "
                    />
                    <span
                        className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-customDarkBlue rounded-full"></span>
                </div>

                <div className="flex-1">
                    <div
                        className="flex items-center justify-between p-3  text-white rounded-lg shadow-md">
                        {/* Avatar */}
                        <div className="flex items-center space-x-3">

                            <div>
                                {/* Name */}
                                <p className="font-semibold">faresmakki</p>
                                {/* Status */}
                                <p className="text-sm text-green-400">online</p>
                            </div>
                        </div>

                        {/* Call and Video Call Buttons */}
                        <div className="flex space-x-3">
                            <button className=" p-2 rounded-full hover:bg-gray-700">
                                <FaPhone className=" text-2xl text-white"/>
                            </button>
                            <button className=" p-2 rounded-full hover:bg-gray-700">
                                <FaVideo className="text-white text-2xl"/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col h-[calc(86vh-120px)]">
                {/* Header or other components */}
                <div className="chat-container flex-1  overflow-y-auto ">
                    {messages.map((msg, index) => (
                        msg > 2 ? (
                            <div key={index} className="chat chat-start">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        />
                                    </div>
                                </div>
                                <div className="chat-header text-white">
                                    Obi-Wan Kenobi
                                </div>
                                <div className="chat-bubble" onClick={showmessagedetail}>
                                    You were the Chosen One!
                                </div>
                                <div
                                    className={`chat-footer text-white transition-opacity duration-500 ease-in-out ${
                                        messagedetail ? 'opacity-100' : 'opacity-0'
                                    }`}>
                                    Delivered:12:45
                                </div>
                            </div>
                        ) : (
                            <div key={index} className="chat chat-end">
                                <div className="chat-image avatar">
                                    <div className="w-10 rounded-full">
                                        <img
                                            alt="Tailwind CSS chat bubble component"
                                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        />
                                    </div>
                                </div>
                                <div className="chat-header">
                                    Anakin
                                    <time className="text-xs opacity-50">12:46</time>
                                </div>
                                <div className="chat-bubble">I hate you!</div>
                                <div className="chat-footer opacity-50">Seen at 12:46</div>
                            </div>
                        )
                    ))}
                </div>

            </div>
            <div className={" flex"}>
                <input type={"text"}
                       className={"rounded-3xl text-white text-xl p-5   w-full h-10 border border-gray-700  bg-gradient-to-br from-customDarkBlue via-customDarkBlue via-50% to-black  "}/>

            </div>

        </div>

    );
};

export default MiddelBar;