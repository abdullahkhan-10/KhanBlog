import Discord from "../assets/discord.png"
import facebook from "../assets/facebook.jpg"
import instagram from "../assets/instagram.jpg"
import tiktok from "../assets/tiktok.png"

const Footer = () => {
  return (
    <div className="bg-black text-white p-4">
        {/* top  */}
        <div className="flex flex-col md:flex-row justify-between mb-10 md:mb-0 ">
            {/* left  */}
            <div className="basis-[40%] ">
              <a href="/"> <h2 className="text-2xl font-bold">KhanBlog</h2></a>
              <p className="text-sm pt-2 pb-10 max-w-[440px] text-gray-300">Welcome to our vibrant corner of the internet, where curiosity meets creativity! Our blog is a treasure trove of insightful articles, thought-provoking stories, and practical tips designed to inspire and inform. Whether you are here to explore new ideas, learn something new, or simply enjoy a good read, we have got you covered.</p>
            </div>
            
            {/* middle 1 */}
            <div className="basis-[10%] flex flex-col gap-3 md:gap-6">
                <p className="font-semibold pb-2">About</p>
                <a href="#about-us" className="text-gray-400 hover:underline hover:text-white">About Us</a>
                <a href="#blogs" className="text-gray-400 hover:underline hover:text-white">Blogs</a>
                <a href="#career" className="text-gray-400 hover:underline hover:text-white">Career</a>
            </div>

            {/* middle 2  */}
            <div className="basis-[10%] flex flex-col gap-3 md:gap-6 my-10 md:my-0">
                <p className="font-semibold pb-2">Support</p>
                <a href="#contact-us" className="text-gray-400 hover:underline hover:text-white">Contact Us</a>
                <a href="#rules" className="text-gray-400 hover:underline hover:text-white">Rules</a>
                <a href="#faqs" className="text-gray-400 hover:underline hover:text-white">FAQs</a>
            </div>

            {/* right  */}
            <div className="basis-[30%]">
              <p className="font-semibold">Get updates</p>

              <div className="border border-gray-600 w-[330px] pl-2 py-1 my-2 bg-gray-900 rounded-md">
                    <input type="email" placeholder="Enter Your Email" className="border-[0px] outline-0 bg-transparent" />
                    <button className="py-3 px-4 bg-white text-black text-sm rounded-md cursor-pointer">Subscribe</button>
              </div>

              <div className="flex gap-8 mt-6 ml-4">
                <img src={Discord} alt="" className="w-8 h-8 cursor-pointer" />
                <img src={facebook} alt=""  className="w-8 h-8 cursor-pointer rounded-full"/>
                <img src={instagram} alt=""  className="w-8 h-8 cursor-pointer rounded-full"/>
                <img src={tiktok} alt=""  className="w-8 h-8 cursor-pointer rounded-full" />
              </div>
            </div>
        </div>
        
        {/* bottom */}
        <div className="flex justify-between">
            <p className="text-sm">@2025 KhanBlog. All right reserved</p>

            <div className="mr-8">
                <a href="#privacy" className="text-sm pr-8">Privacy Policy</a>
                <a href="#privacy" className="text-sm">Terms of Services</a>
            </div>
        </div>
    </div>
  )
}

export default Footer