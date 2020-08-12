import React from 'react';
import { Link } from 'react-router-dom';
import ParticleEffect from './Particles.component'
import ReactTypingEffect from 'react-typing-effect';
import resume from './assets/document/myresume.pdf';

import ProjectsComponent from './Projects.component';
import ContactComponent from './Contact.component';
import FooterComponent from './Footer.component';

const HomeComponent = () => (
       <div className="home">
           <div className="landing">
                <Link to="/login"> <i class="fa fa-user-circle fa-2x dashboardlink" aria-hidden="true"></i></Link>
                <ParticleEffect/>
                    <div className="landingText">
                        <ReactTypingEffect
                            className="introduction"
                            text={["Hello, I'm Eric.", "I design and build software"]}
                            speed='300ms'
                            eraseDelay='2500'
                            typingDelay='5000ms'
                            />

                        <div className="landingUrls">
                            <ul>
                                <li><a href="https://github.com/eralmendral" target="_blank">Github</a></li>
                                <li><a href="https://www.linkedin.com/in/eric-almendral-6a13371aa/" target="_blank">Linkedin</a></li>
                                <li><a href={resume}  target="_blank">Resume</a></li>
                            </ul>
                        </div>
                    </div>
            </div>

            <ProjectsComponent/>
            <ContactComponent />
            <FooterComponent />
       </div>
)

export default HomeComponent;