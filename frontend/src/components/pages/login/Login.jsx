import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword, setUsers } from "../../../redux/userAuth/userAuth";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { email, password } = useSelector((state) => state.users);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
try {
  e.preventDefault()
  const login = {email,password}
  const response = await axios.post("http://localhost:8001/api/user/login",login)
  // dispatch(setUsers(response.data))
  if (response.data.message === "Success"){
      const userId = response.data.userId
      console.log(userId)
      localStorage.setItem("token", response.data.token)
      navigate(`/${userId}`)
  } else{
    console.log("login failed")
  }
} catch (error) {
  console.log("user login failed",error)
}
  }
    return (
      <>
      <div className="w-full h-screen flex justify-center items-center ">
        <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
          <div className="text-2xl font-bold mb-2 text-center text-[#7747ff]">Log in </div>
         <form
         onSubmit={handleSubmit}
          className="flex flex-col gap-3">
            <div className="block relative">
            
              <label htmlFor="email" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
              <input
              onChange={(e) => dispatch(setEmail(e.target.value))} 
              value={email}
              type="text" id="email" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />
            </div>
            <div className="block relative">
              <label htmlFor="password" className="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
              <input
              onChange={(e) => dispatch(setPassword(e.target.value))} 
              value={password}
               type="password" id="password" className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0" />
            </div>
            <button type="submit" className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>
          </form>
          
        </div>
        </div>
      </>
    );
  }
  
  export default Login;
  