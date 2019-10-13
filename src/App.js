import React, { Component } from 'react'

import ReactStickinessElement from 'react-stickiness-element'

export default class App extends Component {
  render () {
    return (
      <div className="wrapper">
        <ReactStickinessElement topOffset={20}>
          <h1>Hola mundo</h1>
        </ReactStickinessElement>
      </div>
    )
  }
}
