import React from "react";
import { NavLink } from "react-router-dom";
import { Table } from "reactstrap"
import { FaFigma, FaJs, FaReact} from "react-icons/fa"
import { SiGithub, SiLinkedin, SiPostgresql, SiRubyonrails, SiTailwindcss } from "react-icons/si"

const About = () => {
  return (
    <>
      <img className="" src="/eibsee.jpg" alt="Eibsee" height={"100%"} width={"100%"}/>
      <div className="container">
        <div className="box-green"><div className="name-in-box">GENE<br />MARTINEZ<br /><a href="https://www.linkedin.com/in/gene-martinez/" target="_blank" rel="noreferrer" title='linkedin'><SiLinkedin color="black"/></a>{" "}<a href="https://github.com/Genemichael25" target="_blank" rel="noreferrer" title='github'><SiGithub color="black"/></a></div>
        </div>
       
      <img className="mypic" src="/Gene2.jpg" alt="Gene pic"/>
      </div>
      <h2>Who I Am.</h2>
      <hr></hr>
      <p className="aboutmetext">
        Hey! I'm Gene, an Army veteran 🫡 and now a full stack web developer.💻 While earning my Associate's degree in Business, I recognized my love for learning, problem solving and helping others. And now I have found something that allows me to do all those things and more. 
        <br />
        When I am not on the computer trying new things, you might find me with a 🛠 in my hand. I love working with my hands and building or updating a portion of the home. Or perhaps I am at a sporting event, cheering on my favorite teams.⚽️🏈🏀⚾️  
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
            <th><FaJs size="4rem"/></th>
            <th><FaReact size="4rem"/></th>
            <th><SiRubyonrails size="4rem"/></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JavaScript</td>
            <td>React</td>
            <td>Ruby on Rails</td>
          </tr>
        </tbody>
        <thead>
          <tr>
            <th><SiPostgresql size="4rem"/></th>
            <th><SiTailwindcss size="4rem"/></th>
            <th><FaFigma size="4rem"/></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>PostgreSQL</td>
            <td>Tailwind</td>
            <td>Figma</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export { About }
