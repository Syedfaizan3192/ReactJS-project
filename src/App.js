import React, { useState } from 'react'
import Accordion from './components/accordion'
import Search from './components/search'
import Route from './components/route.'

const item = [
  {
    title: 'First',
    content: 'What is React?'
  },
  {
    title: 'Second',
    content: 'Why is react is more efficient?'
  },
  {
    title: 'Third',
    content: 'Why you learning React?'
  }
]

const App = () => {
  return (
    <div>
      <Route path='/list'>
        <Accordion item={item} />
      </Route>
      <Route path ='/search'>
        <Search />
      </Route>
    </div>
  )
}



export default App