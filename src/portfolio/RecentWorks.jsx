import React from 'react'
import { Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faExternalLinkAlt, faDirections } from '@fortawesome/free-solid-svg-icons'
import { Fade, Flip } from 'react-reveal'

export default function RecentWorks() {
  const works = [
    {
      title:"React recipe search",
      image: "https://cdn.iconscout.com/icon/premium/png-256-thumb/recipe-book-2589814-2160486.png",
      des: "A simple recipe search app that finds numerous recipes related to your search using the edamam API...",
      redirect: "https://react-recipe-search-api.netlify.app/",
      code: "https://github.com/niku419/react-recipe-search"
      },
      {
        title:"React translator detector",
        image: "https://github.com/niku419/react-translator-detector/blob/main/public/logo.png?raw=true",
        des: "A simple translator app made with react and google translation API which translates and detects any language into any other language...",
        redirect: "https://react-translator-detector.netlify.app/",
        code: "https://github.com/niku419/react-translator-detector"
      },
      {
        title:"React URL shortener",
        image: "https://raw.githubusercontent.com/niku419/react-firebase-URL-shortener/master/public/logo.ico",
        des: "A simple URL-shortener that shorterns your long URL and returns a simple short URL which will help you to share much easily, this app uses firebase's firestore for storing URLS and made with react...",
        redirect: "https://react-firebase-url-shorten.netlify.app/",
        code: "https://github.com/niku419/react-firebase-URL-shortener"
      },
      {
        title:"React socket chat",
        image: "https://image.flaticon.com/icons/png/512/402/402265.png",
        des: "A simple react socket chat app...",
        redirect: "https://react-socket-messaging.netlify.app/",
        code: "https://github.com/niku419/react-socket-messaging-app"
      },
      {
        title:"React omdb movie search",
        image: "https://www.pinclipart.com/picdir/big/67-677027_film-clipart-news-camera-circle-of-film-icon.png",
        des: "A simple movie search app which returns a set of movies, series related to your search along with some details of it...",
        redirect: "https://react-omdb-movie-search.netlify.app/",
        code: "https://github.com/niku419/react-omdb-movie-search"
      },
      {
        title:"React firebase gallery",
        image: "https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-5/177800/233-512.png",
        des: "A simple react firebase app that saves and uploads images to cloud...",
        redirect: "https://react-firebase-pictures.netlify.app/",
        code: "https://github.com/niku419/react-firebase-gallery"
      }
    ]

  return (
    <Container fluid id="projects" className="pt-0 pt-md-3 projects">
      <Flip top>
        <div className="pt-5"><h1 className="heading-about heading-work">My Recent Works</h1></div>
      </Flip>
      <div className="row d-flex justify-content-center">
        {works.map((work, index) => (
          <Fade bottom>
            <div className="card body col-xs-12 col-sm-6 col-md-4 col-lg-3 p-0 m-lg-5 m-md-4 m-sm-4" key={index}>
              <div className="card-header p-0" style={{backgroundImage: "url(" + work.image + ")"}}>
                <div className="card-header-slanted-edge">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 200"><path className="polygon" d="M-20,200,1000,0V200Z" /></svg>
                </div>
              </div>
              <div className="card-body pb-0 d-flex justify-content-between flex-column">
                <h2 className="name" style={{color:"#b59d5a"}}>{work.title}</h2>
                <div className="bio" style={{color:"white"}}>{work.des}</div>
                <div className="d-flex justify-content-between pb-1">
                  <a className="info p-1" href={work.code}>
                    <div className="inline pr-1"><strong style={{paddingRight: "0.5rem"}}>Code</strong></div>
                    <FontAwesomeIcon className="inline" size="lg" flip="horizontal" icon={faCode}/>
                  </a>
                  <a className="info p-1" href={work.redirect}>
                    <div className="inline pr-1"><strong style={{paddingRight: "0.5rem"}}>View</strong></div>
                    <FontAwesomeIcon className="inline" size="lg" icon={faExternalLinkAlt}/>
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        ))}
        <div className="d-flex justify-content-end pt-2 pt-md-4 pb-2">
          <Fade left>
            <a className="CV btn" role="button" href="https://github.com/niku419?tab=repositories" style={{backgroundColor: "#141b45"}}>
              <div className="inline pad">See more</div>{' '}
              <FontAwesomeIcon className="inline" icon={faDirections}/>
            </a>
          </Fade>
        </div>
      </div>
    </Container>
  )
}
