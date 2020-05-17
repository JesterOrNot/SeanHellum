import React from "react"
import Error from "../components/Error"
import NavBarItem from "../components/NavBarItem"
import NavBar from "../components/NavBar"

const NotFoundPage = () => (
    <React.Fragment>
        <NavBar>
            <NavBarItem to="/">
                Home
            </NavBarItem>
            <NavBarItem to="/work">
                Work
            </NavBarItem>
            <NavBarItem to="/skills">
                Skills
            </NavBarItem>
        </NavBar>
        <Error>404 Not found</Error>
    </React.Fragment>
)

export default NotFoundPage
