import React from "react";
import { Card, CardBody, CardTitle, CardText, CardLink} from "reactstrap";
import { projects } from "../ProjectInfo";

const Projects = () => {
  return (
    <>
      <h2>What I've worked on.</h2>
      {projects.map(projects => 
      <Card key={projects.id}
  style={{
    width: '18rem'
  }}
>
  <CardBody>
    <CardTitle tag="h5">
      {projects.name}
    </CardTitle>
    
  </CardBody>
  <img
    alt="Card cap"
    src={projects.image}
    width="100%"
  />
  <CardBody>
    <CardText>
      {projects.shortdescription}
    </CardText>
    <CardLink href="#">
      Card Link
    </CardLink>
    
  </CardBody>
</Card>)}
    </>
  )
}

export { Projects };
