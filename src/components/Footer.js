import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <h3>Let's Connect!</h3>
      <div style={{textAlign:"center",margin:"15px"}}>
        <a href="https://www.linkedin.com/in/gene-martinez/" target="_blank" rel="noreferrer" title='linkedin' className="icons">
          <SiLinkedin size="4rem" color="black"/>
        </a>
        <a href="https://github.com/Genemichael25" target="_blank"    rel="noreferrer" title='github' className="icons">
          <SiGithub size="4rem" color="black"/>
        </a>
      </div>
      <div className="footer">© Gene Martinez</div>
    </>
  )
}

export { Footer }