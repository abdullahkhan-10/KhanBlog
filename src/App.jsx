import AllBlogs from "./components/AllBlogs"
import Footer from "./components/Footer"
import Header from "./components/Header"

function App() {
  // console.log(import.meta.env.VITE_API_KEY );
  
  return (
    <div className="bg-white">
      <Header/>
      <AllBlogs/>
      <Footer/>
    </div>
  )
}

export default App
