
import Footer from '@/layout/Footer/Footer'
import Header from '@/layout/Header/Header'
import React, { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
   useEffect(()=>(
      window.scrollTo(0,0)
     ))
  return (
    <>
    <Header/>
     <main>
      <Outlet/>
     </main>
     <Footer/>
    </>
  ) 
}

export default React.memo(Layout)