import React, { useEffect, useState } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

export default function NavBar() {

  const [bg, setBg] = useState("transparent")
  useEffect(() => {
    window.addEventListener('scroll', event => {
      if(window.scrollY > 5){
        setBg('#141b45')
      }
      if(window.scrollY === 0){
        setBg('transparent')
      }
    })
  }, [])
  return (
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: bg}} className="primary" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="brand">{`Niku419`}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav.Link href="#home" className="styleline">Home</Nav.Link>
          <Nav.Link href="#about" className="styleline">About</Nav.Link>
          <Nav.Link href="#projects" className="styleline">Projects</Nav.Link>
          <Nav.Link href="#skills" className="styleline">Skills</Nav.Link>
          {/* <Nav.Link href="#education" className="styleline">Pricing</Nav.Link> */}
          <Nav.Link href="#contact" className="styleline">Contact</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
