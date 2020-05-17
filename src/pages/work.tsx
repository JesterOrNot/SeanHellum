// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import NavBarItem from "../components/NavBarItem"
import NavBar from "../components/NavBar"

var links = [
    <NavBarItem to="/" text="Home" />,
    <NavBarItem to="/work" text="Work" isCurrent={true} />,
    <NavBarItem to="/skills" text="Skills" />
]

const Work = (props: PageProps) => {
  return (
      <React.Fragment>
        <NavBar>
            <NavBarItem to="/">
                Home
            </NavBarItem>
            <NavBarItem to="/work" current={true}>
                Work
            </NavBarItem>
            <NavBarItem to="/skills">
                Skills
            </NavBarItem>
        </NavBar>
      </React.Fragment>
  )
}

export default Work
