import Blog1 from "../assets/blog1.png"

const AllBlogs = () => {
  return (
    <section className="container mx-auto">
        <div className="py-12 px-6">
            <h1 className="text-3xl font-semibold">Blogs</h1>
            <p className="mt-2 text-gray-600">Here we share travel tips, latest Technology News, Finance and stories that inspire you to advance in your career.</p>

            <div className="flex gap-14 pt-8 pl-4">
                <a href="#all" className="text-md py-1 px-2 bg-gray-300 hover:py-1 hover:px-2 rounded-xl transition duration-300">All</a>
                <a href="#technology" className="text-md py-1 px-2 hover:bg-gray-300 hover:py-1 hover:px-2 rounded-xl transition duration-300">Technology</a>
                <a href="#finance" className="text-md py-1 px-2 hover:bg-gray-300 hover:py-1 hover:px-2 rounded-xl transition duration-300">Finance</a>
                <a href="#life_style" className="text-md py-1 px-2 hover:bg-gray-300 hover:py-1 hover:px-2 rounded-xl transition duration-300">Life Style</a>
            </div>

            {/* all blogs */}
            <div className="py-6 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

                <div className="flex flex-col w-full">
                    <img src={Blog1} alt="image" className="min-w-[340px] rounded-md" />
                    <p className="text-md md:text-sm py-3">Phoenix Baker - <span>19 jan 2023</span></p>

                    <div className="min-w-[380px] md:min-w-[360px]">
                        <h1 className="text-2xl md:text-xl font-semibold">PM mental Models</h1>
                        <p className="pt-2 sm:text-md md:text-[14px]">Mental models are unique expression of complex processes or relationships.</p>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <img src={Blog1} alt="image" className="min-w-[340px] rounded-md" />
                    <p className="text-md md:text-sm py-3">Phoenix Baker - <span>19 jan 2023</span></p>

                    <div className="min-w-[380px] md:min-w-[360px]">
                        <h1 className="text-2xl md:text-xl font-semibold">PM mental Models</h1>
                        <p className="pt-2 sm:text-md md:text-[14px]">Mental models are unique expression of complex processes or relationships.</p>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <img src={Blog1} alt="image" className="min-w-[340px] rounded-md" />
                    <p className="text-md md:text-sm py-3">Phoenix Baker - <span>19 jan 2023</span></p>

                    <div className="min-w-[380px] md:min-w-[360px]">
                        <h1 className="text-2xl md:text-xl font-semibold">PM mental Models</h1>
                        <p className="pt-2 sm:text-md md:text-[14px]">Mental models are unique expression of complex processes or relationships.</p>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <img src={Blog1} alt="image" className="min-w-[340px] rounded-md" />
                    <p className="text-md md:text-sm py-3">Phoenix Baker - <span>19 jan 2023</span></p>

                    <div className="min-w-[380px] md:min-w-[360px]">
                        <h1 className="text-2xl md:text-xl font-semibold">PM mental Models</h1>
                        <p className="pt-2 sm:text-md md:text-[14px]">Mental models are unique expression of complex processes or relationships.</p>
                    </div>
                </div>
                <div className="flex flex-col w-full">
                    <img src={Blog1} alt="image" className="min-w-[340px] rounded-md" />
                    <p className="text-md md:text-sm py-3">Phoenix Baker - <span>19 jan 2023</span></p>

                    <div className="min-w-[380px] md:min-w-[360px]">
                        <h1 className="text-2xl md:text-xl font-semibold">PM mental Models</h1>
                        <p className="pt-2 sm:text-md md:text-[14px]">Mental models are unique expression of complex processes or relationships.</p>
                    </div>
                </div>
                
            </div>

        </div>
    </section>
  )
}

export default AllBlogs