import React, { useState, useEffect } from 'react'
import axios from 'axios'
import TvShows from '../components/TvShows'

const HomePage = (props) => {
  const [tvShows, setTvShows] = useState([])
  const [featuredShow, setFeaturedShow] = useState([])

  const getTopRated = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=d823df9c8122b53033fc4aa49b428224&language=en-US&page=1'
    )
    setTvShows(resp.data.results)
  }

  useEffect(() => {
    getTopRated()
  }, [])

  return (
    <>
      <header>
        <h1>Top Rated Tv Shows</h1>
      </header>

      <main>
        <h2>Featured of the Day</h2>
        <ul>
          {tvShows.map((tvShows) => {
            return <TvShows id={tvShows.id} title={tvShows.title} />
          })}
        </ul>
      </main>
    </>
  )
}

export default HomePage
