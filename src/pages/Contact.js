import React from "react";
import { SiMinutemailer } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <h1>Contact Me 😬</h1>
      <div className="contact">
      <p >I love traveling, learning about different cultures and listening to people's stories. Feel free to get in touch even if it's not software development related. We can chat about travel, sports, home improvements, food, business ideas, etc!!! </p>
      <p>This tech advanced paper airplane delivers messages in secs!!</p>
      <a href="mailto:genemartinez.dev@gmail.com">
        <SiMinutemailer size="4rem" color="black"/>
        genemartinez.dev@gmail.com
      </a>
      </div>
    </>
  )
}

export { Contact }
