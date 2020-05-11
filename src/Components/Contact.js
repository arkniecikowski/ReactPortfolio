import React from "react";
import dummyText from "../DummyText";
import axios from 'axios'
import './Contact.css'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

export default class Contacts extends React.Component{

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }

    formSubmit = (e) => {
        e.preventDefault()

        this.setState({
            buttonText: '...sending'
        })

        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('http://localhost:4444/api/v1', data)
            .then( res => {
                this.setState({ sent: true }, this.resetForm())
                console.log(res);
            })
            .catch( () => {
                console.log('Message not sent')
            })
    }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }


    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form onSubmit={(e) => this.formSubmit(e)}>
                            <p className="h4 text-center mb-4">Write to us</p>
                            {/*NAME*/}
                            <label htmlFor="defaultFormContactNameEx" className="grey-text">
                                Your name
                            </label>
                            <input onChange={e => this.setState({name: e.target.value})} name="name"
                                   className="form-control" type="text" id="defaultFormContactNameEx"
                                   placeholder="Your Name"
                                   value={this.state.name}/>
                            <br />
                            {/*EMAIL*/}
                            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                                Your email
                            </label>
                            <input onChange={(e) => this.setState({email: e.target.value})} name="email"
                                   className="form-control" id="defaultFormContactEmailEx"
                                   type="email" placeholder="your@email.com" required
                                   value={this.state.email}/>

                            <br />
                            {/*MESSAGE*/}
                            <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                                Your message
                            </label>
                            <textarea onChange={e => this.setState({message: e.target.value})} name="message"
                                      className="form-control" id="defaultFormContactMessageEx"  rows="3" type="text" placeholder="Please write your message here"
                                      value={this.state.message} required/>
                            <div className="text-center mt-4">
                                <MDBBtn color="warning" outline type="submit">
                                    {this.state.buttonText}
                                    <MDBIcon far icon="paper-plane" className="ml-2" />
                                </MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>



            // <div className="section-dark">
            //     <div className="section-content" id={"section3"}>
            //         <div className="contact__container" >
            //             <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
            //                 <label className="form-label" htmlFor="message-input">Your Message</label>
            //                 <textarea onChange={e => this.setState({message: e.target.value})} name="message"
            //                           className="message-input" type="text" placeholder="Please write your message here"
            //                           value={this.state.message} required/>
            //
            //                 <label className="message-name" htmlFor="message-name">Your Name</label>
            //                 <input onChange={e => this.setState({name: e.target.value})} name="name"
            //                        className="form-control" type="text" placeholder="Your Name"
            //                        value={this.state.name}/>
            //
            //                 <label className="message-email" htmlFor="message-email">Your Email</label>
            //                 <input onChange={(e) => this.setState({email: e.target.value})} name="email"
            //                        className="form-control" type="email" placeholder="your@email.com" required
            //                        value={this.state.email}/>
            //
            //                 <div className="button--container">
            //                     <button type="submit" className="button button-primary">{this.state.buttonText}</button>
            //                 </div>
            //             </form>
            //
            //
            //
            //             {/*<h1>Email : arekniecikowski02@gmail.com</h1>*/}
            //             {/*<h1>Linkedin : arekniecikowski02@gmail.com</h1>*/}
            //             {/*<h1>GitHub : arekniecikowski02@gmail.com</h1>*/}
            //
            //
            //         </div>
            //     </div>
            // </div>
        );
    }
}
