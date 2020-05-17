import React, { Component } from 'react'
import './Home.css'
import ColorsList from'../components/ColorList'

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-sm text-center">
            <h1>Colores</h1>
          </div>
        </div>
        < ColorsList />
      </div>
    )
  }
}
