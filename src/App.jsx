import { useState } from 'react'
import './App.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Section1 from '../Components/Section1'
import Section3 from '../Components/Section3'
import Section4 from '../Components/Section4'
import Section5 from '../Components/Section5'
import Section6 from '../Components/Section6'
import Properties from '../Components/RentPage/Properties'
import WhishListItems from '../Components/WhishListPage/WhishListItems'
import { WishlistProvider } from '../Components/WhishListPage/WhishList'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <>
          <Navbar />
          <Section1 />
          <Properties />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Footer />
      </>
    },
    {
      path: '/whishlist',
      element: <>
        <Navbar />
          <WhishListItems />
        <Footer />
      </>
    }
  ])

  return (
    <>
    <WishlistProvider>
      <RouterProvider router={router} />
      </WishlistProvider>
    </>
  )
}

export default App