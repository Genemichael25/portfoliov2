import React from "react";
import { Card, CardBody, CardTitle, CardText, CardLink, Row, CardImg } from "reactstrap";
import { projects } from "../ProjectInfo";

const Projects = () => {
  return (
    <>
      <h2>What I've worked on.</h2>
      <hr></hr>
      <div className="projects">
        <Row sm="3" style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}>
          {projects.map((projects) => (
            <Card key={projects.id}
              style={{
                width: "30%",
                margin: "15px",
                textAlign: "center"
              }}
            >
              <CardTitle tag="h5">{projects.name}</CardTitle>
              <CardImg alt="Card cap" src={projects.image} width="100%" height= "67%" border= "1px,solid,black"/>
              <CardBody>
                <CardText>{projects.shortdescription}</CardText>
                <CardLink href={projects.link}>See More</CardLink>
              </CardBody>
            </Card>
          ))}
        </Row>
      </div>
    </>
  )
}

export { Projects }

