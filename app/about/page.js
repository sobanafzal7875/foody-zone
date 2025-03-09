'use client '

import BurgerElse from "../components/BurgerElse"
import Events from "../components/Events"
import Hero from "./Hero"
import Subscribe from "./Subscribe"


const about = () => {
  return (
    <div>
      
      <Hero/>
      <BurgerElse />
      <Events/>
      <Subscribe/>
  
    </div>
  )
}

export default about