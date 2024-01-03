import React, { Component } from 'react'
import Newscomponent from './component/Newscomponent'
import Navbar from './component/Navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Newscomponent pageSize={12}/>
      </div>
    )
  }
}

