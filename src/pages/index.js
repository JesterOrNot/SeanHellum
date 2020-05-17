import React from "react"
import NavBarItem from "../components/NavBarItem"
import NavBar from "../components/NavBar"

const Index = () => (
  <React.Fragment>
    <NavBar>
        <NavBarItem to="/" current={true}>
            Home
        </NavBarItem>
        <NavBarItem to="/work">
            Work
        </NavBarItem>
        <NavBarItem to="/skills">
            Skills
        </NavBarItem>
    </NavBar>
  </React.Fragment>
)

export default Index
