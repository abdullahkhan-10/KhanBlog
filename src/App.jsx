import { useState, useEffect } from "react"
import AllBlogs from "./components/AllBlogs"
import Footer from "./components/Footer"
import Header from "./components/Header"
import { useDispatch } from "react-redux"
import authService from "./auth/auth"
import { login, logout } from "./store/authSlice"


function App() {
  // console.log(import.meta.env.VITE_API_KEY );
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()

  useEffect( ()=>{
    authService.getCurrentUser()
    .then( (userInfo) =>{
      if (userInfo) {
        dispatch(login(userInfo))
      }else{
        dispatch(logout())
      }
    })
    .finally( ()=>setLoading(true))
  },[])
  
  return loading ? (
    <div className="bg-white">
      <Header/>
      <main>
       <AllBlogs/>
      </main>
      <Footer/>
    </div>
  ) : null
}

export default App
