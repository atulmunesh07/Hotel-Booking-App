import React from 'react'
import NavBarPage from './components/NavBarPage'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import Hotel from './Pages/Hotel'
import Footer from './components/Footer'
import RoomDeatils from './Pages/RoomDeatils'
import MyBookings from './Pages/MyBookings'
import HotelReg from './components/HotelReg'
import Layout from './Pages/HotelOwner/Layout'
import Dashboard from './Pages/HotelOwner/Dashboard'
import AddRoom from './Pages/HotelOwner/AddRoom'
import ListRoom from './Pages/HotelOwner/ListRoom'

function App() {
  const isOwnerPath = useLocation().pathname.includes('owner')
  return (
    <div>
      {!isOwnerPath && <NavBarPage></NavBarPage>}
      {false && <HotelReg></HotelReg>}

      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/room' element={<Hotel></Hotel>}></Route>
        <Route path='/room/:id' element={<RoomDeatils></RoomDeatils>}></Route>
        <Route path='/my-Booking' element={<MyBookings></MyBookings>}></Route>

        <Route path='/owner' element={<Layout></Layout>}>
          <Route index element={<Dashboard></Dashboard>} />
          <Route path='add-room' element={<AddRoom></AddRoom>} />
          <Route path='list-room' element={<ListRoom></ListRoom>} />
        </Route>
      </Routes>

     {!isOwnerPath && <Footer></Footer>}
    </div>
  )
}

export default App
