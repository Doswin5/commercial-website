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

  const playlists = videosData.filter(item => item.addedToPlaylists === true)


  // console.log(playlists);

  return (
    <div className="">
      <Navbar playlists={playlists} />
      <Routes>
        <Route path='/' element={ <HomePage videosData={videosData} selectVideo={selectVideo} togglePlaylist={togglePlaylist} /> } />
        <Route path='/video' element={<VideoPage selectedVideo={selectedVideo} /> } />
        <Route path='/playlists' element={ <PlaylistsPage togglePlaylist={togglePlaylist} selectVideo={selectVideo} playlists={playlists} /> } />
      </Routes>
      {/* <HomePage /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
