import React from 'react'
import { Nav,Footer,Searchbody } from './components'

function Layout() {
  return (
    <div className="bg-white font-sans h-screen">
        <Nav/>
        <Searchbody/>
        <Footer/>
    </div>
  )
}

export default Layout