import React from "react";
import { SiGithub, SiLinkedin } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <h3>Let's Connect!</h3>
      <div style={{textAlign:"center",margin:"25px"}}><a href="https://www.linkedin.com/in/gene-martinez/" target="_blank" rel="noreferrer" title='linkedin'><SiLinkedin size="4rem" color="black"/></a>{" "}<a href="https://github.com/Genemichael25" target="_blank" rel="noreferrer" title='github'><SiGithub size="4rem" color="black"/></a></div>
      <div className="footer">© Gene Martinez</div>
    </>
  )
}

export { Footer }
