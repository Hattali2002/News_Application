import React from 'react'
import Loader from './Loader.gif'

export default function Spinner() {
  return (
    <div className='text-center'>
      <img src={Loader} alt="Loader" />
    </div>
  )
}
