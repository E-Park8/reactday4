import React, { useContext } from 'react'
import GifContext from '../../utils/GifContext'

const Form = props => {

  const {
    search,
    handleInputChange,
    handleSearchGIPHY
  } = useContext(GifContext)
  
  return (
    <form>
      <p>
        <label htmlFor="search">search</label>
        <input
          type="text"
          name="search"
          value={search}
          onChange={handleInputChange} />
      </p>
      <p>
        <button onClick={handleSearchGIPHY}>Search GIPHY</button>
      </p>
    </form>
  )
}

export default Form