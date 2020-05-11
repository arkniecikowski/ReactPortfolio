import React from "react";
import dummyText from "../DummyText";
import styled from "styled-components";
import {animated} from "react-spring";
import * as ReactBootStrap from "react-bootstrap"

export default class Projects extends React.Component{

    raspberryDesc = "Project presents the home data storage center based on a Raspberry Pi computer equipped with an external data storage. This system is designed to manage files in the local Ethernet network based on a dedicated web interface and a database system suitable for various types of files with elements of version and access control."


    render() {
        return (
            <ReactBootStrap.Container fluid id={"section2"}>
                {/*RASPBERRY PROJECT*/}
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                            <img className="project-image"
                                 alt={''} src={require('../Images/raspberry.png')}
                            />
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col md lg>
                        <div className="projects text-center">
                            <h3 className="h3 project-title">
                            Raspberry Home Respository
                            </h3>

                            <p className="project-desc">
                                {this.raspberryDesc}
                            </p>

                            <button type="button" className="btn btn-primary btn-sm gradient">
                                Backend GitHub
                            </button>
                            <button type="button" className="btn btn-primary btn-sm gradient btn2">
                                FrontEnd GitHub
                            </button>
                        </div>
                    </ReactBootStrap.Col>{/*RASPBERRY PROJECT*/}
                </ReactBootStrap.Row>
                <ReactBootStrap.Row>
                    <ReactBootStrap.Col>
                            <img className="project-image"
                                 alt={''} src={require('../Images/raspberry.png')}
                            />
                    </ReactBootStrap.Col>
                    <ReactBootStrap.Col md lg>
                        <div className="projects text-center">
                            <h3 className="h3 project-title">
                            Raspberry Home Respository
                            </h3>

                            <p className="project-desc">
                                {this.raspberryDesc}
                            </p>

                            <button type="button" className="btn btn-primary btn-sm gradient">
                                Backend GitHub
                            </button>
                            <button type="button" className="btn btn-primary btn-sm gradient btn2">
                                FrontEnd GitHub
                            </button>
                        </div>
                    </ReactBootStrap.Col>
                </ReactBootStrap.Row>
            </ReactBootStrap.Container>

            // <div className="section">
            //     <div id={"section2"}>
            //         <div className="projectsMainSpace" >
            //             <div className="row">
            //
            //
            //                 {/*RASPBERRY PI PROJECT*/}
            //                 <div className="projects-imgL">
            //                     <img className="project-image"
            //                         alt={''} src={require('../Images/raspberry.png')} />
            //                 </div>
            //                 <div className="col-lg-5 mx-auto py-3 project-container">
            //                     <h3 className="h3 project-title">
            //                         Raspberry Home Respository
            //                     </h3>
            //                     <p className="project-desc">
            //                         A platform for automating data collection and reporting throughout teams, operations and supply chains.
            //                     </p>
            //                     <button type="button" className="btn btn-primary btn-lg gradient">Backend GitHub</button>
            //                     <button type="button" className="btn btn-primary btn-lg gradient btn2">
            //                         FrontEnd GitHub</button>
            //                 </div>
            //                 {/*TEST*/}
            //
            //                 <div className="projects-imgL">
            //                     <img className="project-image"
            //                          alt={''} src={require('../Images/raspberry.png')} />
            //                 </div>
            //                 <div className="col-lg-5 mx-auto py-3 project-container">
            //                     <h3 className="h3 project-title">
            //                         Raspberry Home Respository
            //                     </h3>
            //                     <p className="project-desc">
            //                         A platform for automating data collection and reporting throughout teams, operations and supply chains.
            //                     </p>
            //                     <button type="button" className="btn btn-primary btn-lg gradient">Backend GitHub</button>
            //                     <button type="button" className="btn btn-primary btn-lg gradient btn2">
            //                         FrontEnd GitHub</button>
            //                 </div>
            //
            //                 {/*TEST*/}
            //
            //                 <div className="projects-imgL">
            //                     <img className="project-image"
            //                          alt={''} src={require('../Images/raspberry.png')} />
            //                 </div>
            //                 <div className="col-lg-5 mx-auto py-3 project-container">
            //                     <h3 className="h3 project-title">
            //                         Raspberry Home Respository
            //                     </h3>
            //                     <p className="project-desc">
            //                         A platform for automating data collection and reporting throughout teams, operations and supply chains.
            //                     </p>
            //                     <button type="button" className="btn btn-primary btn-lg gradient">Backend GitHub</button>
            //                     <button type="button" className="btn btn-primary btn-lg gradient btn2">
            //                         FrontEnd GitHub</button>
            //                 </div>
            //
            //                 {/*TEST*/}
            //
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    }
}

