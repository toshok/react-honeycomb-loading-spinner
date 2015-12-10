import React, { Component } from 'react'
import HexSpinner from 'react-honeycomb-loading-spinner'

export class App extends Component {
  render () {
    return (
      <div style={{height: 400, width: 400}}>
        <HexSpinner />
      </div>
    )
  }
}
