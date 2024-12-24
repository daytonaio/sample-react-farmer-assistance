import {Link , useNavigate } from "react-router-dom"
import {
    createUserWithEmailAndPassword , 
    getAuth,
    updateProfile
} from "firebase/auth"
import { useState } from "react"
import { auth } from "../firebase"
import { useAuth } from "../context/AuthContext"

const Signup = () => {
      const [email , setEmail] = useState("");
      const [password , setPassword] = useState("");
      const [confPassword , setConfPassword] = useState("");
      const [error , setError] = useState("");
      const [errormessage , setErrormessage] = useState("");
      const [userName , setUserName] = useState("");

      const navigate = useNavigate()

      const {userLoggedIn ,setUserLoggedIn ,  currentUser , setCurrentUser  } = useAuth()

      const handleChange = (e)=>{
        const {name , value} = e.target;

        if(name==="email") setEmail(value)
        if(name==="password") setPassword(value)
        if(name==="conf-password") setConfPassword(value)
        if(name==="name") setUserName(value)
        
      };

      const handleSubmit = async(e)=>{
        e.preventDefault();
        if(password !== confPassword){
            setError(true)
            setErrormessage('Password doesnot match')
            return
        }
        
        try {

            const userCredentail = await createUserWithEmailAndPassword (auth , email , password);
            const user = userCredentail.user;
            console.log(user)
            console.log(auth.currentUser)
            updateProfile(auth.currentUser,{
              displayName : userName
            })
            setUserLoggedIn(true)
            navigate('/')

        } catch (error) {
            const errorMessage = error.message;
            const errorCode = error.code;
          setError(true)

          switch(errorCode){

            case "auth/weak-password" :
                setErrormessage("The password is too weak");
                break;
            case "auth/email-already-in-use" :
                setErrormessage("The email is already used , please register with some other email");
                break;
            case "auth/invalid-email" :
                setErrormessage("The email is invalid");
                break;
            case "auth/operation-not-allowed" :
                setErrormessage("Email / password accounts are not enabled");
                break;
            default :
               setErrormessage(errorMessage)
               break;
          }
        }
      }

      return(
        <div className="max-w-xl mx-auto mb-10 ">
           <div className="flex  mt-20 border border-md border-gray-700 shadow-md px-4 py-4">
             <div className="relative w-full max-w-7xl">
                <h1 className="text-4xl font-bold text-center mb-4">Sign Up</h1>
                <form onSubmit={handleSubmit}>
                <div className="mb-4 flex flex-col ">
                    <label htmlFor="name" className="block text-gray-700 ">Name</label>
                    <input
                     type="text" placeholder=" Enter your name" onChange={handleChange}
                     name="name" value={currentUser} id="name"
                     className="w-full m px-3 py-2 mt-1 md:mt-0 bg-gray-200" required
                    />
                 </div>
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
                 <div className="mb-4 flex flex-col ">
                    <label htmlFor="conf-password" className="block text-gray-700 ">Confirm Password</label>
                    <input
                     type="password" placeholder="Enter your password" onChange={handleChange}
                     name="conf-password" value={confPassword} id="conf-password"
                       className="w-full  px-3 py-2 mt-1 md:mt-0 bg-gray-200"   required
                    />
                 </div>
                 <button type="submit" className="bg-blue-600 text-white text-xl text-center rounded w-full py-2" >Sign Up</button>
                 {error && <p className="text-center my-2 text-red-500">{errormessage}</p>}
                </form>

                <div>
                    <p className="text-center mt-4">
                        Already have an account ? 
                        <Link to="/signin" className="ml-2 text-blue-500">Sign In</Link>
                    </p>
                </div>
             </div>
           </div>
        </div>
      )
}


export default Signup