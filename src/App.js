import React, { useState, useEffect } from 'react'
import GifContext from './utils/GifContext'
import Form from './components/Form'
import Card from './components/Card/Card.js' //this line is so mad at me
import axios from 'axios'  //bringing in neccessary npm, react, and files

const App = () => {

  // naming States, giving them functions and methods below. 
  const [gifState, setGifState] = useState({
    search: '',
    gif: {}
  })
  // Handles user typed input. 
  gifState.handleInputChange = event => {
    setGifState({ ...gifState, [event.target.name]: event.target.value })
  }
  //Search function that takes input of search bar into axios request
  gifState.handleSearchGIPHY = event => {
    event.preventDefault()
    axios.get(`https://api.giphy.com/v1/gifs/search?api_key=so6QOTNdmWKPObKhaL11EhE7gGtpiiqG&q=${gifState.search}&limit=20&rating=g`)
      .then(({ data }) => {
        //gif set to a random image
        let gif = data.data[Math.floor(Math.random() * data.data.length)]
        setGifState({ ...gifState, gif })
      })
  }

  //same thing as above but it renders as soon as page loads. default gif or something
  useEffect(() => {
    axios.get('https://api.giphy.com/v1/gifs/search?api_key=so6QOTNdmWKPObKhaL11EhE7gGtpiiqG&q=cats&limit=20&rating=g')
      .then(({ data }) => {
        let gif = data.data[Math.floor(Math.random() * data.data.length)]
        setGifState({ ...gifState, gif })
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <h1>GIPHY App</h1>
      {/* making form component, passing state variables into properties so we can use properties in the form */}
      <GifContext.Provider value={gifState}>
        {/* whatever goes in these tags will have access to the methods. */}

        <Form />
        {
          gifState.gif.title ? <Card /> : null
        }
      </GifContext.Provider>
    </>
  )
}

export default App

