import './App.css'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Section1 from '../Components/HomePage/Section1'
import Section3 from '../Components/HomePage/Section3'
import Section4 from '../Components/HomePage/Section4'
import Section5 from '../Components/HomePage/Section5'
import Section6 from '../Components/HomePage/Section6'
import Properties from '../Components/RentPage/Properties'
import WhishListItems from '../Components/WhishListPage/WhishListItems'
import { WishlistProvider } from '../Components/WhishListPage/WhishList'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'

import PostProperty from '../Components/PostPropertyPage/PostProperty'
import RentS1 from '../Components/RentPage/RentS1'

import Login from '../Components/Authorisation/login'
import Signup from '../Components/Authorisation/SignUp'

import LiveLocationMap from '../Components/Map/Map'
import MapCard from '../Components/Map/MapCard'

import Search from '../Components/Search/Search'
import SearchByPhone from '../Components/Search/SearchByPhone'

import PaymentPage from '../Components/UserRentedProperties/PaymentPage'
import UserRentedProperties from '../Components/UserRentedProperties/UserRentedProperties'


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
      path: '/rent/:id',
      element:<><Navbar/><RentS1/></>
    },
    {
      path: '/whishlist',
      element: <>
        <Navbar />
          <WhishListItems />
        <Footer />
      </>
    },
    {
      path: '/post-property',
      element: <>
        <Navbar />
          <PostProperty />
        <Footer />
      </>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/map',
      element:<LiveLocationMap/>
    },
    {
      path:'/card',
      element:<MapCard location={{ lat: 25.7749, lng: -80.1345 }} /> 
    },
    {
      path:'/search',
      element:<><Navbar/><Search/><Footer/></>
    },
    {
      path:'/search/user',
      element:<><Navbar/><SearchByPhone/><Footer/></>
    },
    {
      path:"/payment" ,
      element:<PaymentPage />
    },{
      path:"/my-rented-properties",
      element:<><Navbar/><UserRentedProperties /><Footer/></>
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