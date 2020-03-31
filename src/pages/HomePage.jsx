import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TvShows from '../components/TvShows'


  
      // 'https://api.themoviedb.org/3/tv/top_rated?api_key=5ba5b47452b88e80f8faa40c7b093145&language=en-US&page=1'
    
  

  const randomShowIndex = Math.floor(Math.random() * shows.length)

  return (
    <>
      <header>
        <h2>Featured Tv Show</h2>
      </header>

      <main>
        <h2>Top Rated Tv Shows</h2>
        <ul>
          
        </ul>
      </main>
    </>
  )
}

export default HomePage
