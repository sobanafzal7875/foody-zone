import React from 'react'
import Navbar from './Navbar'
import HeroSlider from './Hero'
import ProductsMenu from './ProductsMenu'
import BigitBurger from './BigitBurger'
import Explore from './Explore'
import BurgerElse from './BurgerElse'
import MainHome from './offers/MainHome'
import Download from './Download'
import Events from './Events'
import Delivery from './Delivery'
import Footer from './Footer'
import StickyNavbar from './StickyNavbar'

const MAIN = () => {
  return (
    <div>
      <StickyNavbar/>
           <Navbar/>
      <HeroSlider/>
      <ProductsMenu/>
      <BigitBurger/>
      <Explore/>
      <BurgerElse/>
      <MainHome/>
      <Download/>
      <Events/>
      <Delivery/>
      <Footer/>
    </div>
  )
}

export default MAIN