import { useEffect, useState } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`fixed top-0 left-0 z-50 w-full flex items-center
      justify-between px-6 md:px-16 lg:px-36 py-5 transition-all duration-300
      ${isScrolled ? 'bg-black/30 backdrop-blur-sm' : 'bg-transparent'}`}>

      <h1 className="text-white">image</h1>

      <div className='flex items-center gap-5 cursor-pointer text-sm text-neutral-200'>
        <p>Home</p>
        <p>About</p>
        <p>Contact Us</p>
      </div>
    </div>
  )
}

export default Navbar
