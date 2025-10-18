import React from 'react'
import HotelCard from './HotelCard'
import { roomsDummyData } from '../../public/assets'
import Title from './Title'
import { useNavigate } from 'react-router-dom'

function FeaturedDestination() {
    const navigate = useNavigate()
    return (
        <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20'>
            <Title align='left' title={'Featured destination'} subTitle={'Discover the world’s most loved places, handpicked for you. Top spots to explore, experience, and enjoy Unforgettable destinations waiting for your next journey'}></Title>
            <div className='flex flex-wrap items-center justify-center gap-6 mt-20'>
                {roomsDummyData.slice(0, 4).map((room, index) => (
                    <HotelCard key={room._id} room={room} index={index}></HotelCard>

                ))}

            </div>
            <button className=' my-16 px-4 py-2 text-sm font-medium border border-gray-300
             rounded bg-white hover:bg-gray-50 translate-all cursor-pointer'
             onClick={()=>{navigate('/room'); scrollTo(0,0)}}
            >View All Destination</button>
        </div>
    )
}

export default FeaturedDestination
