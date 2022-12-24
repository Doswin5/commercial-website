import React from 'react'
import { Link } from 'react-router-dom'

const VideoPage = ({ selectedVideo }) => {
  return (
    <div className='relative top-0 h-[100vh] bg-yellow-200'>
      <video className='w-full h-[100vh] object-cover' autoPlay loop>
        <source src={selectedVideo.video} type='video/mp4' />
        <source src={selectedVideo} type="video/ogg" />
      </video>
      <div className="flex flex-col absolute top-[50%] -translate-y-1/2 text-white pl-[16px] sm:pl-[80px] gap-0">
        <h1 className='text-[60px] font-medium mb-0'>
          {selectedVideo.songTitle}
        </h1>
        <h2 className='text-[24px] font-bold text-red-700 mt-0'>
          {selectedVideo.artiste}
        </h2>
      </div>
      <Link to='/' className='absolute text-white top-0 text-[24px] sm:text-[40px] pl-[16px] sm:pl-[80px] pt-4'>
        &lt; Back
      </Link>
    </div>
  )
}

export default VideoPage