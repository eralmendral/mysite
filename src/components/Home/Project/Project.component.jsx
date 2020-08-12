import React from "react";
import { withRouter } from "react-router-dom";
import { Badge } from "react-bootstrap";
import ImageGallery from "react-image-gallery";
import FooterComponent from '../Footer.component';

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

const ProjectComponent = (props) => {

    return (
        <div>
          <i
            className="fa fa-arrow-left fa-2x prevprojectlink"
            aria-hidden="true"
            onClick={props.history.goBack}
          ></i>
          <i
            className="fa fa-arrow-right fa-2x nextprojectlink"
            aria-hidden="true"
            onClick={(props.history.goBack)}
          ></i>
      
          <div className="container-fluid pt-3 bg-dark">
            <ImageGallery items={images} showNav={false} />
          </div>
      
          
          <div className="container mb-5">
            <div className="row mt-5">
              <div className="col-sm-12">
                <h1> Project 1</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                  provident mole stias impedit aspernatur vero voluptatem? Ea atque
                  unde inventore! Laudantium, eius rerum ! Consequatur eveniet
                  molestiae earum sit ea? Beatae nobis debitis earum velit molestiae,
                  praesentium ducimus offic iis totam placeat optio adipisci
                  consequatur architecto sunt quisquam repellendus, expedita rerum,
                  fuga mollitia aperiam maiores. Autem facilis assumenda deleniti
                  sapiente maiores totam necessitatibus eaque consectetur ullam sequi!
                  Sapiente, voluptas! Molestiae totam debitis adipisci nesciunt la
                  bore voluptatibus impedit nisi saepe aperiam consequuntur
                  asperiores, architecto dicta, animi soluta neque quia qui aspernatur
                  iusto quos, a dolorum? Porro, harum neque m odi assumenda aliquam
                  magni? Officia consequatur iure laborum architecto tempore labore
                  corrupti eum voluptatibus officiis incidunt ducimus et reiciendis,
                  reprehenderit saepe , maxime libero optio provident, nihil
                  aspernatur minus commodi? Totam perferendis ipsum neque, facere,
                  ipsa dolorum ducimus expedita earum quo pariatur esse architecto
                  dolore m, quisquam non amet laborum inventore eveniet obcaecati
                  rerum id unde fugiat. Saepe laborum praesentium alias magnam aperiam
                  aliquam eveniet ea voluptas sunt odit quod dignissimos hic
                  blanditiis est, eligendi vitae? Fugit vitae aperiam laboriosam
                  pariatur adipisci architecto voluptates, quam libero nesciunt illo
                  tempore b landitiis accusamus sint corrupti, impedit eum mollitia
                  autem dolorum, eos deserunt assumenda. Del ectus nostrum incidunt
                  quia praesentium. Debitis, enim!
                </p>
              </div>
            </div>
      
            <div className="row mt-4">
              <div className="col-sm-12">
                <h5>Technologies used</h5>
                <Badge className="mr-2" variant="danger">
                  Angular
                </Badge>
                <Badge className="mr-2" variant="danger">
                  Ngrx
                </Badge>
                <Badge className="mr-2" variant="danger">
                  New
                </Badge>
                <Badge className="mr-2" variant="danger">
                  New
                </Badge>
              </div>
            </div>
      
            <div className="row mt-4">
              <div className="col-sm-12 d-flex flex-row justify-content-start">
                <div className="project-link github-link">Github</div>
                <div className="project-link demo-link">View Demo</div>
                <div className="project-link prod-link">Vist Link</div>
              </div>
            </div>
          </div>
          <FooterComponent />
        </div>
      );
}

export default withRouter(ProjectComponent);
