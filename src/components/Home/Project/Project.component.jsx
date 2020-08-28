import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import { selectProject } from '../../../redux/projects/project.selectors'
import { connect } from "react-redux";
const ProjectComponent = ({ project, history }) => {
  if(!project || !project.hasOwnProperty('images')){
    history.push('/')
  }


  const [index, setIndex] = React.useState(0);
  console.log('debug project:', project);
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
            enableControls={false}
          >
            {project.images.map((img) => (
              <GalleryImage style={{filter: 'grayscale(50%)'}} objectFit="contain" key={img.src} src={img.src} />
            ))}
          </Gallery>

          <div className="project-title mt-3">
            <h1 className="mt-4">{project.title}</h1>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-sm-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              provident mole stias impedit aspernatur vero voluptatem? Ea atque
              unde inventore! Laudantium, eius rerum ! Consequatur eveniet
              molestiae earum sit ea? Beatae nobis debitis earum velit
              molestiae, praesentium ducimus offic iis totam placeat optio
              adipisci consequatur architecto sunt quisquam repellendus,
              expedita rerum, fuga mollitia aperiam maiores. Autem facilis
              assumenda deleniti sapiente maiores totam necessitatibus eaque
            </p>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-sm-12 d-flex flex-row justify-content-start">
              {project.github ? ( <div className="project-link github-link">
              <a href={project.github} target='_blank'><span>Github</span></a>
            </div>) : null}

            {project.demo ? ( <div className="project-link github-link">
              <a href={project.demo} target='_blank'><span>Demo</span></a>
            </div>) : null}

            {project.prod ? ( <div className="project-link github-link">
              <a href={project.prod} target='_blank'><span>Visit</span></a>
            </div>) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  project: selectProject(ownProps.match.params.id)(state)
})

export default connect(mapStateToProps, null)(withRouter(ProjectComponent));
