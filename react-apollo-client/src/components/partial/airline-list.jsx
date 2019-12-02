import React from 'react'
import { Link } from "react-router-dom"
import Pagination from '../utility/pagination'

const AirlineList = ({airlines}) => {

  const [airlineList, setAirlineList] = React.useState(airlines)
  const [airlinesShowing, setAirlinesShowing] = React.useState(airlineList.slice(0, 10))

  const onPageChanged = ({ currentPage, totalPages, pageLimit }) => {
    const offset = (currentPage - 1) * pageLimit
    const newShowingAirlines = airlineList.slice(offset, offset + pageLimit)
    setAirlinesShowing(newShowingAirlines)
  }

  const listItems = 
    airlinesShowing.map(({ name, id }) => (
      <li key={`${name}-${id}`}>
        <Link className='menu' to={`/airlines/${id}`}>{name}</Link>
      </li>
    )
  )

  return (
    <>
      <ul className={`airline-list`}>
        {listItems}
      </ul>

      <Pagination totalRecords={airlineList.length} pageLimit={10} pageNeighbors={1} onPageChanged={onPageChanged} />
    </>
  )
}

export default AirlineList
