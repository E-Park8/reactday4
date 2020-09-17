import React, { createContext } from 'react'

const GifContext = createContext({
  search: '',
  gif: { },
  handleInputChange: () => { },
  handleSearchGIPHY: () => { }
})

export default GifContext