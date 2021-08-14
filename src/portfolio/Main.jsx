import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Home from './Home'
import AboutMe from './AboutMe'
import RecentWorks from './RecentWorks'
import ContactMe from './ContactMe'
import Skills from './Skills'

export default function Main() {

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      if(document.readyState === 'complete'){
        setLoading(false)
      }
    }, 4200);
  }, [])

  if(loading){
    return <Loading/>
  }
  return (
    <div>
      <Home/>
      <AboutMe/>
      <RecentWorks/>
      <Skills/>
      <ContactMe/>
    </div>
  )
}