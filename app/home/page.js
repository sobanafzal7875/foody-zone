import React from 'react'
import BigitBurger from '../components/BigitBurger'
import BurgerElse from '../components/BurgerElse'
import HeroSlider from '../components/Hero'
import ProductsMenu from '../components/ProductsMenu'
import Explore from '../components/Explore'
import MainHome from '../components/offers/MainHome'
import Download from '../components/Download'
import Events from '../components/Events'
import Delivery from '../components/Delivery'

const Main = () => {
  return (
    <div>
         <HeroSlider/>
      <ProductsMenu/>
      <BigitBurger/>
      <Explore/>
      <BurgerElse/>
      <MainHome/>
      <Download/>
      <Events/>
      <Delivery/>
        

    </div>
  )
}

export default Main