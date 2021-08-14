import React from 'react'
import { Container, Button } from 'react-bootstrap'
import TypeWriterEffect from 'react-typewriter-effect'
import { Slide, Flip } from 'react-reveal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faDownload, faExternalLinkAlt, faEnvelopeOpenText, faDirections } from '@fortawesome/free-solid-svg-icons'


export default function AboutMe() {
  return (
    <div>
      <Container fluid id="about" className="about" style={{height: "100vh"}}>
        <div className="d-flex justify-content-center align-center pt-5"><h1 style={{color:"#141b45"}}>About me</h1></div>
        <div className="about-main d-flex flex-column flex-col-reverse justify-content-between flex-md-row" style={{height: "40vh"}}>          
          <div className="col-md-6 center-head">
            <Slide left> 
              <img className="image-about img-fluid" src="http://cvresumetemplate.com/maha-personal-cv-resume-html-template/assets/images/ab-img.png" alt="programmer"/>
            </Slide>
          </div>                
          <div className="col-md-6 center-head pt-2 d-flex justify-content-between flex-column">
            <Slide right>
            <TypeWriterEffect
                textStyle={{ fontFamily: 'Red Hat Display', color: "#141b45",fontWeight: 300, fontSize: '1.2em' }}
                startDelay={100}
                cursorColor="black"
                text="Hello! I'am Nikhil, full stack developer and freelancer from India..."
                typeSpeed={100}
              />
              {/* <div style={{color: "#373737"}}>Hello! I'am Nikhil, full stack developer and freelancer from India</div> */}
              <div className="d-flex flex-wrap justify-content-center pt-2 pt-md-4">
                {['Javascript','CSS','React','Firebase','NodeJS','MongoDB','Netlify','Bootstrap'].map((value, index) => (
                  <div key={index} className="p-2"><Button variant="outline-primary">{value}</Button></div>
                ))}
              </div>
            </Slide>
            <Flip bottom>
              <div className="d-flex justify-content-center pt-2 pt-md-4 pb-2">
                <a className="CV btn" role="button" href="https://github.com/niku419" style={{backgroundColor: "#141b45"}}>
                  <div className="inline pad">My CV template</div>{' '}
                  <FontAwesomeIcon className="inline" flip="horizontal" icon={faDownload}/>
                </a>
              </div>
            </Flip>
          </div>
        </div>
      </Container>
    </div>
  )
}
