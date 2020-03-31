import React, { useState, useEffect } from 'react'
import axios from 'axios'

const TvShowPage = (props) => {
  const showId = props.match.params.showId

  const [cast, setCast] = useState([])

  const [crew, setCrew] = useState([])

  const [details, setDetails] = useState({})

  useEffect(() => {
    const url = `https://api.themoviedb.org/3/tv/${showId}/credits?api_key=5ba5b47452b88e80f8faa40c7b093145&language=en-US`

    //   fetch(url)
    //     .then((response) => response.json())
    //     .then((apiData) => {
    //       console.log(apiData)
    //       const newCast = apiData.cast
    //       const newCrew = apiData.crew

    //       setCast(newCast)
    //       setCrew(newCrew)
    //     })
    // }, [])

    axios.get(url).then((response) => {
      const apiData = response.data
      const newCast = apiData.cast
      const newCrew = apiData.crew

      setCast(newCast)
      setCrew(newCrew)
    })

    const detailsUrl = `https://api.themoviedb.org/3/tv/${showId}/api_key=5ba5b47452b88e80f8faa40c7b093145&language=en-US`
    axios.get(detailsUrl).then((response) => {
      const apiData = response.data

      setDetails(apiData)
    })
  }, [])

  return (
    <div>
      {details.name}
      <p>Cast</p>
      <ul>
        {cast.map((person) => {
          return <li>{person.name}</li>
        })}
      </ul>
      <p>
        Crew
        <ul>
          {crew.map((person) => {
            return <li>{person.name}</li>
          })}
        </ul>
      </p>
    </div>
  )
}

export default TvShowPage
