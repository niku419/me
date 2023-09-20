import React, { useEffect, useState } from 'react'
import { faInstagram, faGithub, faTelegramPlane, faFacebookF, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { Container } from 'react-bootstrap'
import {faPhoneSquare, faEnvelope, faMapMarkerAlt, faCode } from '@fortawesome/free-solid-svg-icons'
import Nik from '../pics/Nik.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Fade } from 'react-reveal'
import NavBar from './NavBar'


export default function Home() {

  return (
    <Container fluid className="home" id="home">
      <NavBar/>
      <div className="main d-flex flex-column flex-col-reverse justify-content-center flex-md-row flex-md-row-reverse">
        <Fade bottom>
          <div className="col-md-6 d-flex justify-content-center">
            <div><img className="image" src={Nik} alt="Portfolio" /></div>
          </div>
        </Fade>
        <div className="col-md-6 d-flex flex-column">
          <div>
            <Fade bottom>
              <div className="d-flex badge-head">
                <div className="badge">Hello I'm</div>
                <div>{}</div>
              </div>
            </Fade>
            <Fade bottom><div className="heading">{`Nikhil`}</div></Fade>
            <Fade top>
              <div className="d-flex flex-column pb-3">
                <div className="info p-1 d-flex justify-content-center inline">
                  <div className="ie"><FontAwesomeIcon size="lg" flip="horizontal" icon={faCode}/></div>
                  <div className=" pad">Full Stack Developer</div>
                </div>
                <div className="info p-1 d-flex  justify-content-center">
                  <a href="mailto: 2019198@iiitdmj.ac.in">
                    <FontAwesomeIcon className="inline" size="lg" flip="horizontal" icon={faEnvelope}/>
                    <div className="inline pad">2019198@iiitdmj.ac.in</div>
                  </a>
                </div>
                <div className="info p-1 d-flex  justify-content-center">
                  <a href="callto: +919438002199" >
                    <FontAwesomeIcon className="inline" size="lg" flip="horizontal" icon={faPhoneSquare}/>
                    <div className="inline pad">+919438002199</div>
                  </a>
                </div>
                <div className="info p-1 d-flex  justify-content-center">
                  <a href="https://maps.app.goo.gl/bbVJbHWz8GJmtTNv8">
                    <FontAwesomeIcon className="inline" size="lg" flip="horizontal" icon={faMapMarkerAlt}/>
                    <div className="inline pad" style={{textOverflow: "ellipsis"}}>Near Hotel 180 degree, Jeypore</div>
                  </a>
                </div>
              </div>
            </Fade>
          </div>  
          <Fade top>
            <div className="d-flex justify-content-md-center justify-content-center pt-0 pt-md-5 flex-wrap">
              <a role="button" className="btn btn-primary reference" href="https://instagram.com/_niku_419">
                <FontAwesomeIcon size="2x" icon={faInstagram}/>
              </a>
              <a role="button" className="btn btn-primary reference" href="https://github.com/niku419">
                <FontAwesomeIcon size="2x" icon={faGithub}/>
              </a>
              <a role="button" className="btn btn-primary reference" href="https://linkedin.com/niku_419">
                <FontAwesomeIcon size="2x" icon={faLinkedinIn}/>
              </a>
              <a role="button" className="btn btn-primary reference" href="https://t.me/Niku_419">
                <FontAwesomeIcon size="2x" icon={faTelegramPlane}/>
              </a>
              <a role="button" className="btn btn-primary reference" href="https://www.facebook.com/profile.php?id=100069976086066">
                <FontAwesomeIcon size="2x" icon={faFacebookF}/>
              </a>  
            </div>
          </Fade>
        </div>
      </div>
    </Container>
  )
}
