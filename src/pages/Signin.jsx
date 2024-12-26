import { useState } from "react"
import { auth } from "../firebase"
import {Link, useNavigate } from "react-router-dom"
import {
    signInWithEmailAndPassword
} from "firebase/auth"

const Signin = () => {

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [error , setError] = useState("");
    const [errormessage , setErrormessage] = useState("");
    const navigate = useNavigate()

    const handleChange = (e)=>{
      const {name , value} = e.target;

      if(name==="email") setEmail(value)
      if(name==="password") setPassword(value)     
    };

    const handleSubmit = async(e)=>{
        e.preventDefault();
         
        try {

            const userCredentail = await signInWithEmailAndPassword (auth , email , password);
            const user = userCredentail.user
            navigate('/')

        } catch (error) {
            const errorMessage = error.message;
            const errorCode = error.code;
            setErrormessage(errorMessage)
          setError(true)
        }
    }
    return(
        <div className="max-w-xl mx-auto mb-10">
           <div className="flex  mt-20 border border-md border-gray-700 shadow-md px-4 py-4">
             <div className="relative w-full max-w-7xl">
                <h1 className="text-4xl font-bold text-center mb-4">Sign In</h1>
                <form onSubmit={handleSubmit}>
                 <div className="mb-4 flex flex-col ">
                    <label htmlFor="email" className="block text-gray-700 ">Email</label>
                    <input
                     type="email" placeholder=" Enter your email" onChange={handleChange}
                     name="email" value={email} id="email"
                     className="w-full m px-3 py-2 mt-1 md:mt-0 bg-gray-200" required
                    />
                 </div>
                 <div className="mb-4 flex flex-col ">
                    <label htmlFor="password" className="block text-gray-700">Password</label>
                    <input
                     type="password" placeholder="Enter your password" onChange={handleChange}
                     name="password" value={password} id="password"
                       className="w-full  px-3 py-2 mt-1 md:mt-0 bg-gray-200"  required
                    />
                 </div>
                 <button type="submit" className="bg-blue-600 text-white text-xl text-center rounded w-full py-2" >Sign In</button>
                 {error && <p className="text-center my-2 text-red-500">{errormessage}</p>}
                </form>

                <div>
                    <p className="text-center mt-4">
                        Don't have an account ? 
                        <Link to="/signup" className="ml-2 text-blue-500">Sign Up</Link>
                    </p>
                </div>
             </div>
           </div>
        </div>
      )
}

export default Signin