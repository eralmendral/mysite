import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Gallery, GalleryImage } from "react-gesture-gallery";

const images = [
  {
    src: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    src: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    src: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const ProjectComponent = (props) => {
  const [index, setIndex] = React.useState(0);

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
            {images.map((img) => (
              <GalleryImage style={{filter: 'grayscale(50%)'}} objectFit="contain" key={img.src} src={img.src} />
            ))}
          </Gallery>

          <div className="project-title">
            <h1>Church App SAAS</h1>
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
            <div className="project-link github-link">
              <span>Github</span>
            </div>
            <div className="project-link demo-link">
              <span>Demo</span>
            </div>
            <div className="project-link prod-link">
              <span>Visit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ProjectComponent);
