import React, { useContext } from 'react'
import GifContext from '../../utils/GifContext'

const Card = () => {

  const { gif } = useContext(GifContext)

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={gif.images.original.url} className="card-img-top" alt={gif.title} />
      <div className="card-body">
        <h5 className="card-title">{gif.title}</h5>
      </div>
    </div>
  )
}

export default Card