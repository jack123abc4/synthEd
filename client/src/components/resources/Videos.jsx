import React from 'react';
import './videos.scss'
import ReactPlayer from 'react-player';
import { Videos } from './videoData';
import { BiSearchAlt } from 'react-icons/bi';


const VideoSearch = () => {
  return (
    <div className='videos'>
      <h1>Videos</h1>
      <div className="search-bar">
        <div className="search-input">
          <input type="text" placeholder='Search music education videos...'  />
          <div className='search-icon'><BiSearchAlt color="black" size={28} /></div>
        </div>
        <ul className='video-list'>
          {Videos.map((video) => (
            <li><a className='video-result' href={video.link} target="_blank"><p>{video.title}</p></a></li>
          ))}
          </ul>
        
          <div className="search-result">
              
          </div>
        
      </div>

    </div>
  )
}

export default VideoSearch