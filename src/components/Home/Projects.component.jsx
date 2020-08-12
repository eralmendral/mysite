import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Card, Button } from 'react-bootstrap'

const ProjectsComponent = () => (
    <div className="project">
        <h3 className="text-center mt-5 mb-3 sectionTitle">Projects</h3>
        <Container  className="projects-container">
            <Card className='project-card' style={{ width: '18rem' }}>
                <Card.Img className="img-bw" variant="top" src="https://static.dribbble.com/users/1720295/screenshots/13999365/media/759000ad4ca08d4d09c6511d77d1e7df.png" />
                <Card.Body className="bg-dark text-white">
                    <Card.Title>Church App SAAS</Card.Title>
                    <Card.Text>
                    A Web and Desktop Software platform that enable church activities to be digitalized.
                    </Card.Text>
                    <Card.Link href="https://github.com/eralmendral/churchapp" target="_blank"><i class="fa fa-github fa-2x text-white" aria-hidden="true"></i></Card.Link>
                    <Card.Link href="#"><i class="fa fa-globe fa-2x text-white" aria-hidden="true"></i></Card.Link>
                </Card.Body>
            </Card>

            <Card className='project-card' style={{ width: '18rem' }}>
                <Card.Img className="img-bw" variant="top" src="https://static.dribbble.com/users/1720295/screenshots/13999365/media/759000ad4ca08d4d09c6511d77d1e7df.png" />
                <Card.Body className="bg-dark text-white">
                    <Card.Title>Church App Mobile</Card.Title>
                    <Card.Text>
                    A Web and Desktop Software platform that enable church activities to be digitalized.
                    </Card.Text>
                    <Card.Link href="https://github.com/eralmendral/churchapp" target="_blank"><i class="fa fa-github fa-2x text-white" aria-hidden="true"></i></Card.Link>
                    <Card.Link href="#"><i class="fa fa-globe fa-2x text-white" aria-hidden="true"></i></Card.Link>
                </Card.Body>
            </Card>

            <Card className='project-card' style={{ width: '18rem' }}>
                <Card.Img className="img-bw" variant="top" src="https://static.dribbble.com/users/1720295/screenshots/13999365/media/759000ad4ca08d4d09c6511d77d1e7df.png" />
                <Card.Body className="bg-dark text-white">
                    <Card.Title>Church App Webpage</Card.Title>
                    <Card.Text>
                    A Web and Desktop Software platform that enable church activities to be digitalized.
                    </Card.Text>
                    <Card.Link href="https://github.com/eralmendral/churchapp" target="_blank"><i class="fa fa-github fa-2x text-white" aria-hidden="true"></i></Card.Link>
                    <Card.Link href="#"><i class="fa fa-globe fa-2x text-white" aria-hidden="true"></i></Card.Link>
                </Card.Body>
            </Card>

            <Card className='project-card' style={{ width: '18rem' }}>
                <Card.Img className="img-bw" variant="top" src="https://static.dribbble.com/users/1720295/screenshots/13999365/media/759000ad4ca08d4d09c6511d77d1e7df.png" />
                <Card.Body className="bg-dark text-white">
                    <Card.Title>Restaurant Queue Ordering App</Card.Title>
                    <Card.Text>
                    A Web and Desktop Software platform that enable church activities to be digitalized.
                    </Card.Text>
                    <Card.Link href="https://github.com/eralmendral/churchapp" target="_blank"><i class="fa fa-github fa-2x text-white" aria-hidden="true"></i></Card.Link>
                    <Card.Link href="#"><i class="fa fa-globe fa-2x text-white" aria-hidden="true"></i></Card.Link>
                </Card.Body>
            </Card>

            
            <Card className='project-card' style={{ width: '18rem' }}>
                <Card.Img className="img-bw" variant="top" src="https://static.dribbble.com/users/1720295/screenshots/13999365/media/759000ad4ca08d4d09c6511d77d1e7df.png" />
                <Card.Body className="bg-dark text-white">
                    <Card.Title>Data Structure and Algorithms Visualization</Card.Title>
                    <Card.Text>
                    A Web and Desktop Software platform that enable church activities to be digitalized.
                    </Card.Text>
                    <Card.Link href="https://github.com/eralmendral/churchapp" target="_blank"><i class="fa fa-github fa-2x text-white" aria-hidden="true"></i></Card.Link>
                    <Card.Link href="#"><i class="fa fa-globe fa-2x text-white" aria-hidden="true"></i></Card.Link>
                </Card.Body>
            </Card>

            <Card className='project-card' style={{ width: '18rem' }}>
                <Card.Img className="img-bw" variant="top" src="https://static.dribbble.com/users/1720295/screenshots/13999365/media/759000ad4ca08d4d09c6511d77d1e7df.png" />
                <Card.Body className="bg-dark text-white">
                    <Card.Title>Re-Legion</Card.Title>
                    <Card.Text>
                    A Web and Desktop Software platform that enable church activities to be digitalized.
                    </Card.Text>
                    <Card.Link href="https://github.com/eralmendral/churchapp" target="_blank"><i class="fa fa-github fa-2x text-white" aria-hidden="true"></i></Card.Link>
                    <Card.Link href="#"><i class="fa fa-globe fa-2x text-white" aria-hidden="true"></i></Card.Link>
                </Card.Body>
            </Card>

            <Card className='project-card' style={{ width: '18rem' }}>
                <Card.Img className="img-bw" variant="top" src="https://static.dribbble.com/users/1720295/screenshots/13999365/media/759000ad4ca08d4d09c6511d77d1e7df.png" />
                <Card.Body className="bg-dark text-white">
                    <Card.Title>Korean Puds</Card.Title>
                    <Card.Text>
                    A Web and Desktop Software platform that enable church activities to be digitalized.
                    </Card.Text>
                    <Card.Link href="https://github.com/eralmendral/churchapp" target="_blank"><i class="fa fa-github fa-2x text-white" aria-hidden="true"></i></Card.Link>
                    <Card.Link href="#"><i class="fa fa-globe fa-2x text-white" aria-hidden="true"></i></Card.Link>
                </Card.Body>
            </Card>

            <Card className='project-card' style={{ width: '18rem' }}>
                <Card.Img className="img-bw" variant="top" src="https://static.dribbble.com/users/1720295/screenshots/13999365/media/759000ad4ca08d4d09c6511d77d1e7df.png" />
                <Card.Body className="bg-dark text-white">
                    <Card.Title>Food Sols</Card.Title>
                    <Card.Text>
                    A Web and Desktop Software platform that enable church activities to be digitalized.
                    </Card.Text>
                    <Card.Link href="https://github.com/eralmendral/churchapp" target="_blank"><i class="fa fa-github fa-2x text-white" aria-hidden="true"></i></Card.Link>
                    <Card.Link href="#"><i class="fa fa-globe fa-2x text-white" aria-hidden="true"></i></Card.Link>
                </Card.Body>
            </Card>
        </Container>
    </div>
)

export default ProjectsComponent;