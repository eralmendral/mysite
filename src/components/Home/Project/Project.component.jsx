import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import { selectProject } from '../../../redux/projects/project.selectors'
import { connect } from "react-redux";
const ProjectComponent = ({ project, history, match }) => {
  if(!project) {
    history.push('/')
  }

  const [index, setIndex] = React.useState(0);
  const projectImages = project ? project.images ? project.images : [] : [];
  const projectThumbnail = project ? project.thumbnail :  null;
  const images = [projectThumbnail, ...projectImages]

 try{
  return (
    <div className="project-page">
      <div className="navigations">
        <Link to="/">
          <b className="text-white homelink" aria-hidden="true">
            home
          </b>
        </Link>
      </div>

      <div className="container mb-5">
        <div className="project-images-container">
          <Gallery
            index={index}
            onRequestChange={(i) => {
              setIndex(i);
            }}
            enableControls={true}
            enableIndicators={true}
            objectFit='cover'
          >
            {images.map((img) => (
              <GalleryImage style={{filter: 'saturation(2))', maxHeight: '500px'}} objectFit="contain" key={img} src={img} />
            ))}
          </Gallery>

          <div className="project-title mt-3">
            <h1 className="mt-4">{project.title}</h1>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-12">
            <p>
              { project.description }
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-sm-12 d-flex flex-row justify-content-start">
              {project.github ? ( <a className="project-link github-link" href={project.github} target='_blank'>
              <span>Github</span>
            </a>) : null}

            {project.demo ? ( <a className="project-link github-link" href={project.demo} target='_blank'>
              <span>Demo</span>
            </a>) : null}

            {project.prod ? ( <a className="project-link github-link" href={project.prod} target='_blank'>
              <span>Visit</span>
            </a>) : null}
          </div>
        </div>
      </div>
    </div>
  );
 } catch(error) {
   return <Redirect to="/" />
 }
};

const mapStateToProps = (state, ownProps) => ({
  project: selectProject(ownProps.match.params.id)(state)
})

export default connect(mapStateToProps, null)(withRouter(ProjectComponent));
