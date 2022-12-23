import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components';
import { HomePage, VideoPage, PlaylistsPage } from './pages';
import { data } from '../src/constants'

function App() {
  const [videosData, setVideosData] = useState(data)
  const [selectedVideo, setSelectedVideo] = useState({})

  function togglePlaylist(id) {
    setVideosData(prevVideosData => {
      return prevVideosData.map(item => {
        return item.id === id ? { ...item, addedToPlaylists: !item.addedToPlaylists } : item
      })
    })
    // console.log(id);
  }

  function selectVideo(id) {
    const svideo = (videosData.filter(item => {
      return item.id === id
    }))[0]
    setSelectedVideo(svideo);
    console.log(selectedVideo)
  }

  return (
    <div className="">
      <Navbar videosData={videosData} />
      <Routes>
        <Route path='/' element={ <HomePage videosData={videosData} selectVideo={selectVideo} togglePlaylist={togglePlaylist} /> } />
        <Route path='/video' element={<VideoPage selectedVideo={selectedVideo} /> } />
        <Route path='/playlists' element={ <PlaylistsPage /> } />
      </Routes>
      {/* <HomePage /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
