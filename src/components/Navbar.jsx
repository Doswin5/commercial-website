import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks } from '../constants'

const Navbar = ({ playlists }) => {
  const location = useLocation()

  return (
    <>
    {
      location.pathname !== '/video' && (
        <div className='fixed z-10 top-0 left-0 right-0 sm:px-[100px] px-[16px] flex sm:flex-row flex-col gap-2 justify-between items-center py-4 bg-white'>
          <Link to='./'>
            <span>VIDEO PLAYLISTS</span>
          </Link>
          <div className="flex gap-16">
            {
              navLinks.map(item => (
                <div key={item.id} className='flex gap-2 items-center'>
                  <Link className='text-black     hover:text-gray-800' to={item.link} key={item.id}>
                    {item.linkName}
                  </Link>
                  {
                    item.linkName === 'Playlists' &&
                    <div className="bg-red-500 rounded-full w-[24px] h-[24px] flex justify-center">
                      {playlists.length}
                    </div>
                  }
                </div>
              ))
            }
          </div>
        </div>
      )
    }
    </>
    
  )
}

export default Navbar