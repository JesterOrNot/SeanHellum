// Gatsby supports TypeScript natively!
import React from "react"
import { PageProps, Link } from "gatsby"
import NavBarItem from "../components/NavBarItem"
import NavBar from "../components/NavBar"

var links = [
    <NavBarItem to="/" text="Home" />,
    <NavBarItem to="/work" text="Work" />,
    <NavBarItem to="/skills" text="Skills" isCurrent={true} />
]

const Skills = (props: PageProps) => {
  return (
      <React.Fragment>
        <NavBar>
            <NavBarItem to="/">
                Home
            </NavBarItem>
            <NavBarItem to="/work">
                Work
            </NavBarItem>
            <NavBarItem to="/skills" current={true}>
                Skills
            </NavBarItem>
        </NavBar>
      </React.Fragment>
  )
}

export default Skills
