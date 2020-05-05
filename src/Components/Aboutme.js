import React from "react";
import dummyText from "../DummyText";

export default class Aboutme extends React.Component{

    render() {
        return (
            <div className="section-main">
                <div className="section-content" id={"section1"}>
                    <div className="about-content">
                        <div className="my-name">
                            <h5 id="mainText" className="center">My Name Is</h5>
                            <h1 id="mainText" className="center">ARKADIUSZ NIECIKOWSKI</h1>
                        </div>
                        {/*<div className="media">*/}
                        {/*    <a href="https://github.com/docky0">*/}
                        {/*        <img alt={''} src={require('../Images/giticon.png')} />*/}
                        {/*    </a>*/}
                        {/*    <span> &nbsp; &nbsp;</span>*/}
                        {/*    <a href="https://www.linkedin.com/in/arkadiusz-niecikowski-a1a85a18b/">*/}
                        {/*        <img alt={''} src={require('../Images/linkedin.png')} className="linkedinicon"/>*/}
                        {/*    </a>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        );
    }

}