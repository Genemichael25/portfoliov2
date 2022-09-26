import React from "react";
import { NavLink } from "react-router-dom";
import { Table } from "reactstrap"


const About = () => {
  return (
    <>
      <div className="container">
        <div className="box-green"></div>
        <div className="name-in-box">GENE<br />MARTINEZ<br />li GH
        
        </div>
        <img className="mypic" src="/Gene.jpg" alt="Gene pic"/>
      </div>
      <h2>Who I am.</h2>
      <hr></hr>
      <p className="aboutmetext">
        Hey! I'm Gene, an Army veteran 🫡 and now a full stack web developer.💻 While earning my Associate's degree in Business, I recognized my love for learning, problem solving and helping others. And now I have found something that allows me to do all those things and more. 
        <br />
        When I am not on the computer trying new things, you might find me with a 🛠 in my hand. As a handyman physically building or updating a portion of the home. Or perhaps I am at a sporting event, cheering on my favorite teams.⚽️🏈🏀⚾️  
        <br />
        I am looking for an opportunity as a junior software developer that will allow me to practice my skills, as well as , develop some new ones.</p>
        <div className="aboutmetext" style={{textAlign:"center"}}> Want to know more? <NavLink to="/aboutme"><strong>Check out the long story -{'>'}</strong> </NavLink>
        </div>
        <br/>
      <h2>Tools I Use.</h2>
      
      <hr></hr>
      <Table className="skills_table">
        <thead>
          <tr>
            <th>JavaScript</th>
            <th>React</th>
            <th>Ruby on Rails</th>
            <th>Postgresql</th>
            <th>Tailwind</th>
            <th>Figma</th>
          </tr>
        </thead>
      </Table>
    </>
  )
}

export { About }
