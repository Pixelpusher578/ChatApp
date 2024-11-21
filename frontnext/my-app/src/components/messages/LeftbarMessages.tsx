import React, {useState} from 'react';

const LeftbarMessages = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const messages=[1,2,3,4,4,4,4,4,4,4]
    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div className="lg:w-1/4 w-screen  shadow-blue-950 pt-7 shadow-2xl  ">
            <div className="flex justify-between relative ">
                <div className="text-white p-5 text-xl self-start"> Discussions</div>

                <button
                    id="dropdownDefaultButton"
                    onClick={toggleDropdown}
                    className="text-white m-2 mr-[10px]     rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 "
                    type="button"
                >
                    Dropdown button
                    <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="m1 1 4 4 4-4"/>
                    </svg>
                </button>

                {isDropdownOpen && (
                    <div id="dropdown"
                         className="absolute right-0 mt-[63px] mr-[7px] z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200"
                            aria-labelledby="dropdownDefaultButton">
                            <li>
                                <a href="#"
                                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Dashboard
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Settings
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Earnings
                                </a>
                            </li>
                            <li>
                                <a href="#"
                                   className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                                    Sign out
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
            <div className={"overflow-y-auto sticky h-[calc(94vh-120px)] "}>
                {messages.map((msg, index) => (
                    <div className={"text-lg gap-[100px]"} key={index}>
                        <div className="flex items-center p-3 space-x-3 bg-customDarkBlue text-white rounded-lg">
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
                                <div className="flex justify-between items-center">
                                    <span className="font-semibold">Alfredo Workman</span>
                                    <span className="text-sm text-gray-400">04:02 am</span>
                                </div>
                                <p className="text-gray-400 text-sm truncate">Hi, I noticed a squ...</p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>);
};

export default LeftbarMessages;