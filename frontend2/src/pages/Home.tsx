import React from 'react'
import Navbar from '../components/Navbar'
import TopBonus from '../components/TopBonus'
import ShortNavbar from '../components/ShortNavbar'
import Category from '../components/Category'
import NavGo from '../components/NavGo'
import Hero from '../components/Hero'
import ShortHero from '../components/shortHero'
import LeftSlide from '../components/LeftSlide'
import ProductShow from '../components/ProductShow'

const Home = () => {
  return (
    <div>
      <TopBonus/>
      <ShortNavbar/>
      <Navbar/>
      <div className='flex ml-10'>
        <Category/>
        <div className='flex flex-col'>
         <NavGo/>
         <Hero/>
        </div>
      </div>
      <ShortHero/>
      <div className='flex gap-10 ml-25 '>
        <LeftSlide/>
        <ProductShow/>
      </div>
    </div>
  )
}

export default Home
