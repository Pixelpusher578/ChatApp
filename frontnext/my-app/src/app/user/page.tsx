"use client"
import React, {useState} from 'react';
import Navbar from "@/components/Navbar";
import { AiOutlineGoogle } from 'react-icons/ai';
import LoginForm from "@/components/User/Login_Form";
import { motion } from 'framer-motion';
import RegisterForm from "@/components/User/Register_Form";


const Page = () => {
    const [state, setState] = useState(true)
    const variants = {
        hidden: { opacity: 0, x: -100 },
        visible: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 100 }
    };




    return (

        // style={{boxSizing:"border-box",overflow:"hidden"}}
        // <div className="flex min-h-screen w-full flex-col   space-y-48 bg-gradient-to-br from-customDarkBlue  via-customDarkBlue via-50% to-black h-64 " >
        //     <Navbar/>
        //         <div className={"flex items-center   justify-center w-full "} style={{marginTop:"100px"}}>
        //             <form  className={"relative flex bg-white rounded-3xl flex-col border border-gray-50 p-20 space-y-6 w-1/3"}>
        //                 <div className="chat chat-start absolute text-3xl  top-[-70px] left-[300px] transform  text-white font-semibold   ">
        //                     <div className="chat-bubble  bg-orange-700">
        //                         Let's Chat
        //                     </div>
        //                 </div>
        //
        //                 <div className={"text-xl text-custommedbule font-bold"}>Login :</div>
        //                 <button
        //                     className="flex items-center justify-center w-full py-3 px-4 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200">
        //                     <AiOutlineGoogle className="w-5 h-5 mr-3 text-red-500"/>
        //                     <span className="text-gray-800 font-medium">Continue with Google</span>
        //                 </button>
        //                 <input
        //                     type="email"
        //                     placeholder="Email"
        //                     className="w-full py-3 px-4 rounded-lg shadow-md bg-gray-100 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        //                 />
        //                 <input
        //                     type="password"
        //                     placeholder="Password"
        //                     className="w-full py-3 px-4 rounded-lg shadow-md bg-gray-100 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        //                 />
        //                 <div className={"  text-red-500 font-semibold"} style={{fontSize: "11px"}}>forget your password?
        //                 </div>
        //                 <button
        //                     className="hover:bg-gray-800 flex items-center justify-center w-full text-white bg-customDarkBlue py-3 px-4 rounded-lg shadow-md  ">
        //                     Login
        //                 </button>
        //                 <div className={"  text-custommedbule font-semibold"} style={{fontSize: "11px"}}>no
        //                     account?<span className={"text-red-500"}>create one</span></div>
        //             </form>
        //             <div className={"flex text-white h-full   rounded-3xl flex-col   p-20 space-y-6 w-1/3  "}>
        //                 <h1 className={"font-bold text-5xl"} style={{fontFamily: "cursive"}}>NoodleDoodle</h1>
        //                 <p style={{fontFamily:"revert" , fontSize:"20px"} }>Stay connected with friends and family using Messenger. Send instant messages, share photos, and engage in real-time conversations with ease. Our platform ensures secure and seamless communication for everyone. Join now and start chatting instantly!</p>
        //             </div>
        //
        //         </div>
        //
        //
        // </div>
        <div
            className="flex min-h-screen w-full flex-col space-y-12 md:space-y-48 bg-gradient-to-br from-customDarkBlue via-customDarkBlue via-50% to-black h-auto">
            <Navbar/>


            <div className="relative w-full px-4" style={{marginTop: "100px"}}>
                <motion.div
                    key={state ? "login" : "content"} // Use a different key to trigger the animation
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={variants}
                    transition={{duration: 0.5}} // Control the duration of the animation
                    className="flex flex-col md:flex-row items-center justify-center w-full"
                >
                    {/* Form Section */}
                    {state ? (
                        <>
                            <LoginForm setState={setState}/>
                            <motion.div
                                className="flex flex-col items-center text-white h-full rounded-3xl p-10 md:p-20 space-y-6 w-full md:w-1/3"
                                variants={variants}
                                transition={{duration: 0.5}}
                            >
                                <h1 className="font-bold text-4xl self-start md:text-5xl"
                                    style={{fontFamily: "cursive"}}>NoodleDoodle</h1>
                                <p style={{fontFamily: "revert", fontSize: "16px", mdFontSize: "20px"}}>
                                    Stay connected with friends and family using Messenger. Send instant messages, share
                                    photos, and engage in real-time conversations with ease. Our platform ensures secure
                                    and seamless communication for everyone. Join now and start chatting instantly!
                                </p>
                            </motion.div>
                        </>
                    ) : (
                        <>
                            <motion.div
                                className="flex flex-col items-center text-white h-full rounded-3xl p-10 md:p-20 space-y-6 w-full md:w-1/3"
                                variants={variants}
                                transition={{duration: 0.5}}
                            >
                                <h1 className="font-bold text-4xl md:text-5xl self-start "
                                    style={{fontFamily: "cursive"}}>NoodleDoodle</h1>
                                <p style={{fontFamily: "revert", fontSize: "16px", mdFontSize: "20px"}}>
                                    Stay connected with friends and family using Messenger. Send instant messages, share
                                    photos, and engage in real-time conversations with ease. Our platform ensures secure
                                    and seamless communication for everyone. Join now and start chatting instantly!
                                </p>
                            </motion.div>
                            <RegisterForm setState={setState}/>
                        </>
                    )}
                </motion.div>
            </div>



        </div>

    );
};

export default Page;