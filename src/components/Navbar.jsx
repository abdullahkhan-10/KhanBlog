import menuButton from "../assets/menu-icon.png"

const Navbar = () => {
    
  return (
    <div className="mx-auto container flex items-center justify-between py-6 px-6 absolute top-0">
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

        <img src={menuButton} alt="Menu icon" className="md:hidden w-7 cursor-pointer" />
    </div>
  )
}

export default Navbar