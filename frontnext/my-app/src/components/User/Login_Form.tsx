import React, {Dispatch, useState} from 'react';
import {AiOutlineGoogle} from "react-icons/ai";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

interface loginformprop{
    setState:any
}
const LoginForm = ({setState}:loginformprop) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const formSubmitHandler=async (e:React.FormEvent)=>{
        e.preventDefault()
        console.log(`mail :${email}`)
        if(email==="")return toast.error("Email is required")
        if(password==="")return toast.error("password is required")
        //TO-DO setspinner()
        try {
            // setspinner(true)
            // await axios.post("http://localhost:3000/api/users/login",{email, password})

            // router.replace("/")
            // setspinner(false)
            // router.refresh()
        }catch (err) {
            toast.error(err?.response.data.message)
            // setspinner(false)

        }

    }

    return (
        <form onSubmit={formSubmitHandler}
            className={"relative flex flex-col bg-white rounded-3xl border border-gray-50 p-10 md:p-20 space-y-6 w-full md:w-1/3"}>
            <div
                className="chat chat-start absolute text-2xl md:text-3xl top-[-50px] md:top-[-70px] left-[120px] md:left-[300px] transform text-white font-semibold">
                <div className="chat-bubble bg-red-500">
                    Let's Chat
                </div>
            </div>

            <div className={"text-xl md:text-2xl text-custommedbule font-bold"}>Login :</div>
            <button
                className="flex items-center justify-center w-full py-2 px-4 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200">
                <AiOutlineGoogle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-500"/>
                <span className="text-gray-800 font-medium">Continue with Google</span>
            </button>
            <input onChange={(e)=>setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                className="w-full py-2 px-4 rounded-lg shadow-md bg-gray-100 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input onChange={(e)=>setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                className="w-full py-2 px-4 rounded-lg shadow-md bg-gray-100 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className={"text-red-500 font-semibold text-xs md:text-sm"}>
                Forget your password?
            </div>
            <button type={"submit"}  className="hover:bg-gray-800 flex items-center justify-center w-full text-white bg-customDarkBlue py-2 px-4 rounded-lg shadow-md">
                Login
            </button>
            <div className={"text-custommedbule font-semibold text-xs md:text-sm"}>
                No account? <span className={"text-red-500"} onClick={()=>setState(false)} >Create one</span>
            </div>
        </form>

    );
};

export default LoginForm;