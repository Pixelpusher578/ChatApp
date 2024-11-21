import React, {useState} from 'react';
import {AiOutlineGoogle} from "react-icons/ai";
import {toast} from "react-toastify";
interface Registerformprop{
    setState:any
}
const RegisterForm = ({setState}:Registerformprop) => {
    const [firstname, setfirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [Datenaissance, setDatenaissance] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const formSubmitHandler=async (e:React.FormEvent)=>{
        e.preventDefault()
        if(email==="")return toast.error("Email is required")
        if(password==="")return toast.error("password is required")
        if(Datenaissance==="")return toast.error("Age is required")
        if(lastname==="")return toast.error("lastname is required")
        if(firstname==="")return toast.error("firstname is required")
        console.log(`Firstname:${firstname } Lastname:${lastname }  email :${email}  password :${password} Date de naissance:${Datenaissance} `)
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
                    welcome buddy
                </div>
            </div>
            changeme
            <div className={"text-xl md:text-2xl text-custommedbule font-bold"}>SignUP :</div>
            <button className="flex items-center justify-center w-full py-2 px-4 rounded-lg shadow-md bg-gray-100 hover:bg-gray-200">
                <AiOutlineGoogle className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 text-red-500"/>
                <span className="text-gray-800 font-medium">Register  with Google</span>
            </button>
            <div className={"flex justify-center items-start space-x-2"}>
                <input
                    value={firstname}
                    onChange={(e)=>setfirstname(e.target.value)}
                    type="text"
                    placeholder="firstname"
                    className="w-full py-2 px-4 rounded-lg shadow-md bg-gray-100 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
                <input
                    value={lastname}
                    onChange={(e)=>setLastname(e.target.value)}
                    type="text"
                    placeholder="lastname"
                    className="w-full py-2 px-4 rounded-lg shadow-md bg-gray-100 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
            </div>
            <input
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                type="email"
                placeholder="Email"
                className="w-full py-2 px-4 rounded-lg shadow-md bg-gray-100 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                placeholder="Password"
                className="w-full py-2 px-4 rounded-lg shadow-md bg-gray-100 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
                value={Datenaissance}
                onChange={(e)=>setDatenaissance(e.target.value)}
                type="date"
                placeholder=""
                className="w-full py-2 px-4 rounded-lg shadow-md bg-gray-100 placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />


            <button type={"submit"}
                className="hover:bg-gray-800 flex items-center justify-center w-full text-white bg-customDarkBlue py-2 px-4 rounded-lg shadow-md">
                Register
            </button>
            <div className={"text-custommedbule font-semibold text-xs md:text-sm"}>
                Already have account? <span className={"text-red-500"} onClick={() => setState(true)}>Login</span>
            </div>
        </form>
    );
};

export default RegisterForm;