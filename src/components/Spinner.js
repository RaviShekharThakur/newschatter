import React, { Component } from 'react'
import loading from '../Funnel.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" style={{ display: 'inline-block' }}/>
      </div>
    )
  }
}
