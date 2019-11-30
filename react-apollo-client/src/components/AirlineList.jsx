import React from 'react'
import { Link } from "react-router-dom"

function AirlineList({airlines}) {
  const listItems = 
    airlines.map(({ name, id }) => (
      <li key={`${name}-${id}`}>
        <Link className='menu' to={`/airlines/${id}`}>{name}</Link>
      </li>
    )
  )

  return (
    <ul className={`airline-list`}>
      {listItems}
    </ul>
  )
}

export default AirlineList
