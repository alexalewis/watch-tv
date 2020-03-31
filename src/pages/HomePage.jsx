import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TvShows from '../components/TvShows'

const HomePage = () => {
  const [shows, setShows] = useState([])
  const [randomShowIndex, setRandomShowIndex] = useState(0)

  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=5ba5b47452b88e80f8faa40c7b093145&language=en-US&page=1'
    )
      .then((response) => response.json())
      .then((apiData) => {
        console.log(apiData)
      })
  }, [])

  // gets index of random show
  const randomShowIndex = Math.floor(Math.random() * shows.length)

  //displays random show
  const randomShow = shows[randomShowIndex]

  return (
    <>
      <section>
        {randomShow ? (
          <>
            <h2>Featured Tv Show</h2>
            <p>{randomShow.name}</p>
          </>
        ) : (
          <></>
        )}
      </section>

      <section>
        <h2>Top Rated Tv Shows</h2>
        <ul></ul>
      </section>
    </>
  )
}

export default HomePage
