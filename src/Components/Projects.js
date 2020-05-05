import React from "react";
import dummyText from "../DummyText";

export default class Projects extends React.Component{

    render() {
        return (
            <div className="section">
                <div id={"section2"}>
                    <div className="projectsMainSpace" >
                        <div className="row">
                            {/*RASPBERRY PI PROJECT*/}
                            <div className="projects-imgL">
                                <img className="project-image"
                                    alt={''} src={require('../Images/raspberry.png')} />
                            </div>
                            <div className="col-lg-5 mx-auto py-3 project-container">
                                <h3 className="h3 project-title">
                                    Raspberry Home Respository
                                </h3>
                                <p className="project-desc">
                                    A platform for automating data collection and reporting throughout teams, operations and supply chains.
                                </p>
                                <button type="button" className="btn btn-primary btn-lg gradient">Backend GitHub</button>
                                <button type="button" className="btn btn-primary btn-lg gradient btn2">
                                    FrontEnd GitHub</button>
                            </div>
                            {/*TEST*/}

                            <div className="projects-imgL">
                                <img className="project-image"
                                     alt={''} src={require('../Images/raspberry.png')} />
                            </div>
                            <div className="col-lg-5 mx-auto py-3 project-container">
                                <h3 className="h3 project-title">
                                    Raspberry Home Respository
                                </h3>
                                <p className="project-desc">
                                    A platform for automating data collection and reporting throughout teams, operations and supply chains.
                                </p>
                                <button type="button" className="btn btn-primary btn-lg gradient">Backend GitHub</button>
                                <button type="button" className="btn btn-primary btn-lg gradient btn2">
                                    FrontEnd GitHub</button>
                            </div>

                            {/*TEST*/}

                            <div className="projects-imgL">
                                <img className="project-image"
                                     alt={''} src={require('../Images/raspberry.png')} />
                            </div>
                            <div className="col-lg-5 mx-auto py-3 project-container">
                                <h3 className="h3 project-title">
                                    Raspberry Home Respository
                                </h3>
                                <p className="project-desc">
                                    A platform for automating data collection and reporting throughout teams, operations and supply chains.
                                </p>
                                <button type="button" className="btn btn-primary btn-lg gradient">Backend GitHub</button>
                                <button type="button" className="btn btn-primary btn-lg gradient btn2">
                                    FrontEnd GitHub</button>
                            </div>

                            {/*TEST*/}

                            <div className="projects-imgL">
                                <img className="project-image"
                                     alt={''} src={require('../Images/raspberry.png')} />
                            </div>
                            <div className="col-lg-5 mx-auto py-3 project-container">
                                <h3 className="h3 project-title">
                                    Raspberry Home Respository
                                </h3>
                                <p className="project-desc">
                                    A platform for automating data collection and reporting throughout teams, operations and supply chains.
                                </p>
                                <button type="button" className="btn btn-primary btn-lg gradient">Backend GitHub</button>
                                <button type="button" className="btn btn-primary btn-lg gradient btn2">
                                    FrontEnd GitHub</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        );
    }

}
