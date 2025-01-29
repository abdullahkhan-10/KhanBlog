import Navbar from "./Navbar"

const Header = () => {
  return (
    <div className="min-h-screen bg-cover bg-center w-full relative" style={ {backgroundImage: "url('/hero_image.png')"}} id="#header">
        <Navbar/>

        <div className="container mx-auto py-4 px-6 text-center pt-60">
            <h2 className="text-5xl md:text-[58px] max-w-3xl font-semibold inline-block">Write from our team</h2>
            <p className="pt-8">The latest industry News, Interviews, Technologies and Resources.</p>
        </div>
    </div>
  )
}

export default Header