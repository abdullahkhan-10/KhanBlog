import menuButton from "../assets/menu_icon.png"
import crossIcon from "../assets/cross_icon.png"
import { useState } from "react"

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="absolute top-0 w-full">
      {/* Desktop menu */}
      <div className="mx-auto container flex items-center justify-between py-6 px-6 ">
        <a href="/"> <h2 className="text-2xl font-bold">KhanBlog</h2></a>

        <ul className="basis-[50%] hidden md:flex gap-8 text-md">
            <a href="#home">Home</a>
            <a href="#about">about</a>
            <a href="#contact">contact</a>
        </ul>

        <div className="hidden md:flex gap-6">
            <button className="bg-white hover:bg-black hover:text-white py-1 px-4 rounded-md cursor-pointer transition duration-500">Login</button>
            <button className="bg-black text-white py-1 px-4 rounded-md cursor-pointer hover:bg-white hover:text-black transition duration-500">Sign Up</button>
        </div>

        <img onClick={ () =>setShowMenu(!showMenu)} src={showMenu ? crossIcon: menuButton  } alt="Menu icon" className="md:hidden w-8 h-8 cursor-pointer" />
      </div>

      {/* Mobile menu */}
      {
        showMenu
        ? <div className="md:hidden bg-white h-60 transition duration-500">
            <ul className="flex items-center flex-col gap-6 pt-12">
                <a onClick={ () =>setShowMenu(false)} href="#home">Home</a>
                <a href="#about">about</a>
                <a href="#contact">contact</a>
            </ul>
          </div>
        : null
      }
     
    </div>
  )
}

export default Navbar