import React, {useEffect, useRef, useState} from 'react';
import {FlagIcon, LockClosedIcon, TrashIcon, UserGroupIcon} from "@heroicons/react/16/solid";

const RightBar = () => {
    const [isMediaOpen, setIsMediaOpen] = useState(true);
    const contentRef = useRef(null);
    const [contentHeight, setContentHeight] = useState(0);
    const toggleMedia = () => setIsMediaOpen(!isMediaOpen);
    useEffect(() => {
        if (contentRef.current) {
            setContentHeight(contentRef.current.scrollHeight);
        }
    }, []); // Runs once on mount


    return (
        <div className="w-1/4 text-white flex flex-col items-center p-6">
            <div className="w-full max-w-md p-4 rounded-lg flex flex-col items-center">
                <img
                    src="https://via.placeholder.com/100"
                    alt="User Profile"
                    className="w-24 h-24 rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold">Ann Schleifer</h2>
                <p className="text-gray-400">@ann_Schleifer22</p>
            </div>

            <div className="w-full max-w-md pl-[70px] mt-6 space-x-16 flex">
                <button className="py-6 items-center justify-center rounded-full">
                    <LockClosedIcon className="h-6 w-6 text-white"/>
                </button>
                <button className="py-6 rounded-full">
                    <UserGroupIcon className="h-6 w-6 text-white"/>
                </button>
                <button className="py-6 rounded-full">
                    <TrashIcon className="h-6 w-6 text-white"/>
                </button>
                <button className="py-6 rounded-full">
                    <FlagIcon className="h-6 w-6 text-white"/>
                </button>
            </div>

            <div className="w-full max-w-md mt-8">
                <button
                    onClick={toggleMedia}
                    className="w-full flex justify-between items-center  px-4 py-2 rounded-md"
                >
                    <h3 className="text-lg font-semibold">Shared Media</h3>
                    <span
                        className={`transform transition-transform duration-300 ${
                            isMediaOpen ? "rotate-180" : "rotate-0"
                        }`}
                    >
                ▼
              </span>
                </button>

                <div
                    ref={contentRef}
                    style={{height: isMediaOpen ? contentHeight : 0}}
                    className="overflow-hidden transition-all duration-500"
                >
                    <div className="grid grid-cols-3 gap-2 mt-4">
                        {Array(6)
                            .fill("")
                            .map((_, idx) => (
                                <img
                                    key={idx}
                                    src={`https://via.placeholder.com/100?text=${idx + 1}`}
                                    alt={`Media ${idx + 1}`}
                                    className="w-full h-24 object-cover rounded-md"
                                />
                            ))}
                        <button className="mt-4 w-full py-2 rounded-md">
                            View All (1647)
                        </button>
                    </div>
                </div>
            </div>
        </div>

)
    ;
};

export default RightBar;