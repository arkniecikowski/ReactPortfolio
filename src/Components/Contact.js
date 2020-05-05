import React from "react";
import dummyText from "../DummyText";

export default class Contacts extends React.Component{

    render() {
        return (
            <div className="section-dark">
                <div className="section-content" id={"section3"}>
                    <div className={'contact-content'}>
                        <h1>Email : arekniecikowski02@gmail.com</h1>
                        {/*<h1>Linkedin : arekniecikowski02@gmail.com</h1>*/}
                        {/*<h1>GitHub : arekniecikowski02@gmail.com</h1>*/}
                    </div>
                </div>
            </div>
        );
    }

}