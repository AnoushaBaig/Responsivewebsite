import React from 'react'
import Hero from './components/Hero'
import Project from './components/Project'
import Extention from './components/Extention'
import Customize from './components/Customize'
import Plan from './components/Plan'
import Work from './components/Work'
import Data from './components/Data'
import Logo from './components/Logo'
import Appusing from './components/Appusing'
import Clients from './components/Clients'


function page() {
  return (
    <div>
      <Hero/>
      <Project/>
      <Extention/>
      <Customize/>
       <Plan/>
       <Work/>
      <Data/>
      <Logo/>
      <Appusing/>
      <Clients/>
    </div>
  )
}

export default page
