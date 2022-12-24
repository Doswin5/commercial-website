import React from 'react'
import { Link } from 'react-router-dom'

const PlaylistsPage = ({ playlists, togglePlaylist, selectVideo }) => {
  return (
    <div className='h-[100vh] py-[60px] mx-[16px] sm:mx-[100px]'>
      <h1 className='text-[40px] font-bold my-6 sm:my-4'>
        My Playlists
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 overflow-x-auto gap-16 w-full">
        {
          playlists.map(item => (
            <div key={item.id} className="flex flex-col border border-black cursor-pointer">
              <Link to='/video'>
                <div onClick={() => selectVideo(item.id)} className="w-full relative">
                  <video className='w-full object-cover h-[300px]' autoPlay loop muted poster={item.videoCover}>
                    <source src={item.video} type='video/mp4' />
                    <source src={item.video} type="video/ogg" />
                  </video>
                  <span className="bg-black px-3 rounded-xl py-1 absolute bottom-[16px] right-[16px] text-white">{item.duration}</span>
                </div>
              </Link>
              <div className="p-4">
                <h5 className='text-[20px] font-normal'>
                  {item.songTitle}
                </h5>
                <h6 className='text-[16px] font-bold'>
                  {item.artiste}
                </h6>
                <span className='text-[14px] font-semibold'>
                  {item.views} views
                </span>
                <button onClick={() => togglePlaylist(item.id)} className={`rounded-xl mt-2 px-4 py-2 block text-white ${item.addedToPlaylists ? 'bg-red-600' : 'bg-green-500'}`}>{item.addedToPlaylists ? 'Remove From Playlists' : 'Add To Playlist'}</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default PlaylistsPage