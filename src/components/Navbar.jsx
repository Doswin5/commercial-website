import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { navLinks } from '../constants'

const Navbar = ({ videosData }) => {
  // const [playlists, setPlaylists] = useState([])

  // const playLists = videosData.filter(video => { return video.addedToPlaylist})

  // setPlaylists(prevState => [...prevState, videosData.filter(item => {
  //   return item.addedToPlaylists === true
  // })])


  return (
    <div className='fixed z-10 top-0 left-0 right-0 px-[100px] flex justify-between items-center h-[60px] '>
      <Link>
        <span>VIDEO PLAYLISTS</span>
      </Link>
      <div className="flex gap-16">
        {
          navLinks.map(item => (
              <div key={item.id} className='flex gap-2 items-center'>
                <Link className='text-black     hover:text-gray-800' to={item.link}   key={item.id}>
                  {item.linkName}
                </Link>
                {
                  item.linkName === 'Playlists' && 
                  <div className="bg-red-500 rounded-full w-[24px] h-[24px] flex justify-center">
                    {/* {playlists.length} */} 0
                  </div>
                }
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default Navbar