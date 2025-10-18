import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, facilityIcons, roomsDummyData } from '../../public/assets'
import { useNavigate } from 'react-router-dom'
import StarRating from '../components/StarRating'


// global

const CheckBox = ({ label, selected = false, onChange = () => { } }) => {

    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="checkbox" checked={selected} onChange={(e) => onChange(e.target.checked, label)} />

            <span className='font-light select-none'>{label}</span>
        </label>
    )

}

const RadioButton = ({ label, selected = false, onChange = () => { } }) => {

    return (
        <label className='flex gap-3 items-center cursor-pointer mt-2 text-sm'>
            <input type="radio" name='sortOption' checked={selected} onChange={() => onChange(label)} />

            <span className='font-light select-none'>{label}</span>
        </label>
    )

}

function AllRooms() {
    const navigate = useNavigate()


    const [openFilter, setOpenFilter] = useState(false)

    const roomType = [
        'Single Bed',
        'Double Bed',
        'Luxury Room',
        'Family Suite'
    ]

    const priceRanges = [
        '0 to 500',
        '500 to 1000',
        '1000 to 2000',
        '2000 to 3000'
    ]

    const sortOption = [
        'Price low to high',
        'price high to low',
        'Newest First'
    ]


    return (
        <div className='flex  flex-col-reverse lg:flex-row items-start justify-between
     pt-28 md:pt-35 px-4 md:px-16 lg:px-24'>

            {/* /left */}
            <div>
                <div className='flex flex-col items-start text-left'>
                    <h1 className='font-playfair 
                text-4xl md:text-[40px]'>Hotel Rooms</h1>
                    <p className='text-sm md:text-base text-gray-500/90 mt-2 max-w-174'>Tack advantage of our limited-time offer and
                        special packages to enhance your stay and
                        create unforgettable memories</p>
                </div>

                <div>
                    {roomsDummyData.map((room) => (
                        <div
                            key={room._id}
                            className='flex flex-col md:flex-row items-start py-10 gap-6 border-b
                          border-gray-300 last:pb-30 last:border-0'>
                            <img src={room.images[0]} alt=""
                                onClick={() => { navigate(`/room/${room._id}`), scrollTo(0, 0) }}
                                title='View Room Details'
                                className=' max-h-65 md:w-1/2 rounded-xl shadow-lg 
                                object-cover cursor-pointer' />

                            <div className='md:w-1/2 flex flex-col gap-2'>
                                <p className='text-gray-400'>{room.hotel.city}</p>
                                <p onClick={() => { navigate(`/room/${room._id}`), scrollTo(0, 0) }}
                                    className='text-gray-800 text-3xl 
                                    font-playfair cursor-pointer'>{room.hotel.name}</p>
                                <div className='flex items-center'>

                                    <StarRating></StarRating>
                                    <p className='ml-2'>200+ review</p>

                                </div>
                                <div className='flex items-center gap-1 text-gray-500 mt-2 text-sm'>
                                    <img src={assets.locationIcon} alt="" className='' />
                                    <span>{room.hotel.address}</span>
                                </div>

                                <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                                    {/* room amenity */}
                                    {
                                        room.amenities.map((items, index) => (

                                            <div className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70'
                                                key={index}>
                                                <img src={facilityIcons[items]} alt={items} className='w-5 h-5' />
                                                <p className='text-xs'>{items}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                                {/* room price */}
                                <p className='text-xl font-medium text-gray-500'>${room.pricePerNight}/night</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* filter */}
            <div className='bg-white w-80 border border-gray-300 text-gray-600  max-lg:md-8 min-lg:mt-16'>

                <div className={`flex items-center justify-between px-5 py-2.5
                    min-lg:border-b  border-gray-300 ${openFilter && "border-b"}`}>
                    <p className='text-base font-medium text-gray-800'> FILTERS</p>
                    <div>
                        <span
                            onClick={() => setOpenFilter(!openFilter)}
                            className='lg:hidden cursor-pointer'>{openFilter ? "HIDE" : "SHOW"}</span>
                        <span className=' hidden lg:block'>CLEAR</span>
                    </div>
                </div>

                <div className={`${openFilter ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>

                    <div className='px-5 pt-5'>
                        <p className='font-medium text-gray-800 pb-2'>Popular</p>
                        {
                            roomType.map((room, index) => (
                                <CheckBox key={index} label={room}></CheckBox>
                            ))
                        }

                    </div>
                    <div className='px-5 pt-5'>
                        <p className='font-medium text-gray-800 pb-2'>Price Range</p>
                        {
                            priceRanges.map((range, index) => (
                                <CheckBox key={index} label={`range ${range}`}></CheckBox>
                            ))
                        }

                    </div>

                    <div className='px-5 pt-5 pb-7'>
                        <p className='font-medium text-gray-800 pb-2'>Short By</p>
                        {
                            sortOption.map((range, index) => (
                                <RadioButton key={index} label={range}></RadioButton>
                            ))
                        }

                    </div>

                </div>

            </div>

        </div>
    )
}

export default AllRooms
