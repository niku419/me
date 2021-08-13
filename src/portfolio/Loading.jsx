import React from 'react'
import background from '../pics/programmer.svg'
import { Fade } from 'react-reveal'

export default function Loading() {
  return (
    <div className="loader-background d-flex flex-column justify-content-center align-items-center">
      <div>
        <Fade top><img src={background} alt="You got hacked!!"/></Fade>
      </div>
      <div className="niku">
        <span>{'<Niku419/>'}</span>
      </div>
    </div>
  )
}
