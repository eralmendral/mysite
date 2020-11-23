import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import { selectProjectList, selectProjectLoading } from '../../redux/projects/project.selectors'
import { Spinner } from 'react-bootstrap'

const ProjectsComponent = ({ projects, projectIsFetching, history }) =>{
    const showProject = (id) => {
     history.push('/projects/' +id);
    }

    const shortDescription = (text) => {
        return text.length > 50 ? text.slice(0, 50) + ' ...' : text;
    }

    const projectsDiv = projects ? <Container  className="projects-container">
    { Object.keys(projects).map((key, i) => (
        <Card className='project-card' onClick={(id) => showProject(projects[key].id)}>
         <Card.Img className="img-bw" variant="top" src={projects[key].thumbnail} />
         <Card.Body className="bg-dark text-white">
             <Card.Title>{ projects[key].title }</Card.Title>
             <Card.Text>
                { shortDescription(projects[key].description) }
             </Card.Text>
             { projects[key].github ? <Card.Link href={projects[key].github} target="_blank" onClick={(e) => e.stopPropagation()}><i className="fab fa-github fa-2x project-card-link" title="github repository" aria-hidden="true"></i></Card.Link> : ''}
             { projects[key].demo || projects[key].prod ? <Card.Link href={projects[key].demo || projects[key].prod} target="_blank" onClick={(e) => e.stopPropagation() }><i className="fas fa-link fa-2x project-card-link" title="url" aria-hidden="true"></i></Card.Link> : ''}
         </Card.Body>
     </Card>
    ))}
    </Container> : <h3 class='text-center my-5'> No Projects.</h3>
    
    return  (
        <div className="project">
            <h3 className="text-center mt-5 sectionTitle">Personal Projects</h3>
            {projectIsFetching ? <Spinner animation="border" size="lg" className="my-5" /> : projectsDiv } 
        </div>
    )
}

const mapStateToProps = (state) => ({
    projects: selectProjectList(state),
    projectIsFetching: selectProjectLoading(state)
})

export default connect(mapStateToProps, null)(withRouter(ProjectsComponent));