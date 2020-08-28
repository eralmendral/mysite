import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { selectProjectList } from '../../redux/projects/project.selectors'

const ProjectsComponent = (props) =>{
   
    const showProject = (id) => {
       props.history.push('/projects/' +id);
    }

    

    return  (
        <div className="project">
            <h3 className="text-center mt-5 sectionTitle">Projects</h3>
            <Container  className="projects-container">
                <Card className='project-card' style={{ width: '18rem' }} onClick={(id) => showProject('qSzLiWWWn9o3wDpPuM7E')}>
                    <Card.Img className="img-bw" variant="top" src="https://static.dribbble.com/users/1720295/screenshots/13999365/media/759000ad4ca08d4d09c6511d77d1e7df.png" />
                    <Card.Body className="bg-dark text-white">
                        <Card.Title>Church App SAAS</Card.Title>
                        <Card.Text>
                        A Web and Desktop Software platform that enable church activities to be digitalized.
                        </Card.Text>
                        <Card.Link href="https://github.com/eralmendral/churchapp" target="_blank" onClick={(e) => e.stopPropagation()}><i className="fab fa-github fa-2x project-card-link" title="github repository" aria-hidden="true"></i></Card.Link>
                        <Card.Link href="#" onClick={(e) => e.stopPropagation() }><i className="fas fa-link fa-2x project-card-link" title="url" aria-hidden="true"></i></Card.Link>
                    </Card.Body>
                </Card>

                <Card className='project-card' style={{ width: '18rem' }} onClick={() => showProject()}>
                    <Card.Img className="img-bw" variant="top" src="https://static.dribbble.com/users/1720295/screenshots/13999365/media/759000ad4ca08d4d09c6511d77d1e7df.png" />
                    <Card.Body className="bg-dark text-white">
                        <Card.Title>Church App SAAS</Card.Title>
                        <Card.Text>
                        A Web and Desktop Software platform that enable church activities to be digitalized.
                        </Card.Text>
                        <Card.Link href="https://github.com/eralmendral/churchapp" target="_blank" onClick={(e) => e.stopPropagation()}><i className="fab fa-github fa-2x project-card-link" title="github repository" aria-hidden="true"></i></Card.Link>
                        <Card.Link href="#" onClick={(e) => e.stopPropagation() }><i className="fas fa-link fa-2x project-card-link" title="url" aria-hidden="true"></i></Card.Link>
                    </Card.Body>
                </Card>


                <Card className='project-card' style={{ width: '18rem' }} onClick={() => showProject()}>
                    <Card.Img className="img-bw" variant="top" src="https://static.dribbble.com/users/1720295/screenshots/13999365/media/759000ad4ca08d4d09c6511d77d1e7df.png" />
                    <Card.Body className="bg-dark text-white">
                        <Card.Title>Church App SAAS</Card.Title>
                        <Card.Text>
                        A Web and Desktop Software platform that enable church activities to be digitalized.
                        </Card.Text>
                        <Card.Link href="https://github.com/eralmendral/churchapp" target="_blank" onClick={(e) => e.stopPropagation()}><i className="fab fa-github fa-2x project-card-link" title="github repository" aria-hidden="true"></i></Card.Link>
                        <Card.Link href="#" onClick={(e) => e.stopPropagation() }><i className="fas fa-link fa-2x project-card-link" title="url" aria-hidden="true"></i></Card.Link>
                    </Card.Body>
                </Card>

                <Card className='project-card' style={{ width: '18rem' }} onClick={() => showProject()}>
                    <Card.Img className="img-bw" variant="top" src="https://static.dribbble.com/users/1720295/screenshots/13999365/media/759000ad4ca08d4d09c6511d77d1e7df.png" />
                    <Card.Body className="bg-dark text-white">
                        <Card.Title>Church App SAAS</Card.Title>
                        <Card.Text>
                        A Web and Desktop Software platform that enable church activities to be digitalized.
                        </Card.Text>
                        <Card.Link href="https://github.com/eralmendral/churchapp" target="_blank" onClick={(e) => e.stopPropagation()}><i className="fab fa-github fa-2x project-card-link" title="github repository" aria-hidden="true"></i></Card.Link>
                        <Card.Link href="#" onClick={(e) => e.stopPropagation() }><i className="fas fa-link fa-2x project-card-link" title="url" aria-hidden="true"></i></Card.Link>
                    </Card.Body>
                </Card>


                <Card className='project-card' style={{ width: '18rem' }} onClick={() => showProject()}>
                    <Card.Img className="img-bw" variant="top" src="https://static.dribbble.com/users/1720295/screenshots/13999365/media/759000ad4ca08d4d09c6511d77d1e7df.png" />
                    <Card.Body className="bg-dark text-white">
                        <Card.Title>Church App SAAS</Card.Title>
                        <Card.Text>
                        A Web and Desktop Software platform that enable church activities to be digitalized.
                        </Card.Text>
                        <Card.Link href="https://github.com/eralmendral/churchapp" target="_blank" onClick={(e) => e.stopPropagation()}><i className="fab fa-github fa-2x project-card-link" title="github repository" aria-hidden="true"></i></Card.Link>
                        <Card.Link href="#" onClick={(e) => e.stopPropagation() }><i className="fas fa-link fa-2x project-card-link" title="url" aria-hidden="true"></i></Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    )
}

const mapStateToProps = (state) => ({
    projects: selectProjectList(state)
})

export default connect(mapStateToProps, null)(withRouter(ProjectsComponent));