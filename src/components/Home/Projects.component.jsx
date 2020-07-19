import React from 'react';
import { Link } from 'react-router-dom';
import './assets/css/projects.scss'
import { Container, Card, Button } from 'react-bootstrap'
const ProjectsComponent = () => (
    <div className="project">
        <h3 className="text-center mt-5 mb-3 sectionTitle">Projects</h3>
        <Container  className="projects-container">
            <Card className='project-card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/4775426/pexels-photo-4775426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>


            <Card className='project-card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/4775426/pexels-photo-4775426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                        <Link to="/project/1">
                            <Button variant="primary">
                                TO
                            </Button>
                        </Link>
                  
                </Card.Body>
            </Card>

            
            <Card className='project-card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/4775426/pexels-photo-4775426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

            <Card className='project-card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src="https://images.pexels.com/photos/4775426/pexels-photo-4775426.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Container>
    </div>
)

export default ProjectsComponent;