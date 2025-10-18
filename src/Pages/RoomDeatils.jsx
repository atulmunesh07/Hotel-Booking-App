import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../../public/assets'
import StarRating from '../components/StarRating'

function RoomDeatils() {
  const { id } = useParams()
  const [room, setRoom] = useState(null)
  const [mainImage, setMainImage] = useState(null)

  useEffect(() => {
    const room = roomsDummyData.find(room => room._id === id)
    room && setRoom(room)
    room && setMainImage(room.images[0])
  }, {})
  return room && (
    <div className='py-28  md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
      {/* Room Details */}
      <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl font-playfair'>{room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span> </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20 % off</p>
      </div>

      {/* Room Rating */}
      <div className='flex items-center gap-1 mt-2'>
        <StarRating></StarRating>
        <p className='ml-2'>200+ reviews</p>
      </div>

      {/* Room Address */}
      <div className=' flex items-center gap-1 text-gray-500 mt-2'>
        <img src={assets.locationFilledIcon} alt="Location Icons" className='' />
        <span>{room.hotel.address}</span>
      </div>


      {/* image to room to change to mainImage to click to them,  */}

      <div className='flex flex-col lg:flex-row mt-6 gap-6'>
        <div className='lg:w-1/2 w-full'>
          <img src={mainImage} alt="" className='w-full rounded-xl shadow-lg object-cover' />
        </div>

        <div className=' grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
          {room?.images.length > 1 && room.images.map((image, index) => (
            <img
              onClick={() => setMainImage(image)}
              key={index} src={image} alt='Room image'
              className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && "outline-2 outline-orange-500"}`}
            ></img>
          ))}
        </div>
      </div>


      {/* Room highlights */}

      <div className='flex flex-col md:flex-row md:justify-between mt-10 '>

        <div className='flex flex-col'>
          <h1 className='text-3xl md:text-4xl font-playfair'>
            Experience Luxury like new Before
          </h1>

          <div className=' flex items-center mt-3 md-6 gap-6'>
            {room.amenities.map((items, index) => (
              <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                <img src={facilityIcons[items]} alt="" className=' w-5 h-5' />
                <p>{items}</p>

              </div>
            ))}
          </div>
        </div>

        {/* Room Price  */}

        <p className='text-2xl font-medium'>${room.pricePerNight}/night</p>

      </div>


      {/*  */}
      <form action=""
        className='flex flex-col md:flex-row items-center  md:items-center justify-between bg-white shadow-2xl p-6 rounded-xl
      mx-auto mt-16 max-16 max-w-6xl'
      >
        <div className='flex flex-col flex-wrap md:flex-row items-start 
         md:items-center gap-4 md:gap-10 text-gray-500'>


          {/* for check in  */}
          <div className=' flex flex-col'>
            <label htmlFor="checkInDate" className=' font-medium '> Check-in</label>
            <input type="date" id='checkInDate' placeholder='check-In'
              className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' />
          </div>
          <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>

          {/* for check out */}
          <div className=' flex flex-col'>
            <label htmlFor="checkoutDate" className=' font-medium '> Check-out</label>
            <input type="date" id='checkOutDate' placeholder='check-Out'
              className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' />
          </div>

          <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>


          {/* for Guests */}
          <div className=' flex flex-col'>
            <label htmlFor="checkoutDate" className=' font-medium '> Guests</label>
            <input type="number" id='checkOutDate' placeholder='0'
              className=' max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required />
          </div>



        </div>

        <button type='submit'
          className=' bg-primary hover:bg-primary-dull active:scale-95 transition-all text-white
        rounded-md max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer
        '>Book Now </button>
      </form>


      {/* common specifications */}

      <div className=' mt-25 space-y-4'>
        {roomCommonData.map((spec, index) => (
          <div
            key={index} className='flex items-start gap-2' >
            <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />

            <div>
              <p className='text-base'>{spec.title}</p>
              <p className='text-gray-500'>{spec.description}</p>
            </div>
          </div>

        ))}
      </div>

      <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
        <p>
          Welcome to our hotel! We are delighted to have you as our guest
           and hope you enjoy a comfortable and memorable stay with us. Our 
           team is dedicated to providing you with exceptional service, relaxing 
           accommodations, and all the amenities you need to feel at home. Whether 
           you are here for business or leisure, we strive to make your experience 
           pleasant and hassle-free. Please let us know if there 
          is anything we can do to make your stay even more enjoyable.
        </p>

      </div>
  
     {/* Hosted By */}
      <div className='flex flex-col items-start gap-4'>

        <div className='flex gap-'>
          <img src='https://tse2.mm.bing.net/th/id/OIP.dfOgK35xBF1ADhl-7RuwnAHaE7?pid=Api&P=0&h=180' alt="" className='h-14 w-14 md:h-18 md:w-18 rounded-full' />

          <div>
            <p className='text-lg md:text-xl'>Hotel by {room.hotel.name}</p>
            <div className=' flex items-center mt-1'>
              <StarRating/>
              <p className='ml-2'>200+ reviews</p>
            </div>
          </div>
        </div>
         <button className='px-6 py-2.5 mt-4 rounded text-white bg-primary
         hover:bg-primary-dull transition-all cursor-pointer'>Contact Now</button>

      </div>
      <div className=''>
       
      </div>

    </div>
  )
}

export default RoomDeatils
