import React from 'react'
import { Link } from 'react-router-dom'

const TvShows = (props) => {
  const { id, title } = props
  return (
    <ul>
      <li>
        <Link to={'/tvShows/${id}'}></Link>
        <img></img>
        <p>{id}</p>
        <p>{title}</p>
      </li>
    </ul>
  )
}

export default TvShows
