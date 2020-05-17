import React from "react";
import NavBarItem from "../components/NavBarItem";
import NavBar from "../components/NavBar";
import Newline from "../components/Newline";
import ExternalLink from "../components/ExternalLink";
import Title from "../components/Title";
import Location from "../components/Location";

const Index = () => (
  <React.Fragment>
    <NavBar>
      <NavBarItem to="/" current={true}>
        Home
      </NavBarItem>
      <NavBarItem to="/work">Work</NavBarItem>
      <NavBarItem to="/skills">Skills</NavBarItem>
    </NavBar>
    <Newline />
    <Newline />
    <section class="info">
      <span>Hello, I'm Sean.</span>
      <br />
      <span>I'm a Student.</span>
      <br />
      <span>
        I'm a{" "}
        <ExternalLink to="https://www.freecodecamp.org/news/what-the-heck-is-a-developer-advocate-87ab4faccfc4/">
          Developer Advocate
        </ExternalLink>
        .
      </span>
      <br />
      <span>
        I work at <ExternalLink to="https://typefox.io">TypeFox.</ExternalLink>
      </span>
    </section>
    <p class="info">
      I love Containers/Docker, WASM/WASI, Building CLIs and TUIs, Linux/UNIX
      programming, and writing Developer Tools
    </p>
    <section>
      <Title>Where to find me</Title>
      <ul type="none">
        <Location to="https://github.com/JesterOrNot">I'm on GitHub</Location>
        <Location to="https://dev.to/JesterOrNot">I'm on dev.to</Location>
        <Location to="https://stackoverflow.com/users/11262726/sean-hellum?tab=profil">
          I'm also on StackOverflow
        </Location>
        <Location to="https://www.linkedin.com/in/sean-hellum-84ba401a2/">
          I'm also on Linkedin
        </Location>
      </ul>
      <p>
        Send me an email at{" "}
        <ExternalLink to="mailto:seanhellum45@gmail.com">
          seanhellum45@gmail.com
        </ExternalLink>
      </p>
      <br />
    </section>
  </React.Fragment>
);

export default Index;
