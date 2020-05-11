import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon } from 'mdbreact';

const FormPage = () => {
    return (
        <MDBContainer>
            <MDBRow>
                <MDBCol md="6">
                    <form onSubmit={(e) => this.formSubmit(e)}>
                        <p className="h4 text-center mb-4">Write to us</p>
                        <label htmlFor="defaultFormContactNameEx" className="grey-text">
                            Your name
                        </label>
                        <input onChange={e => this.setState({name: e.target.value})} name="name"
                               className="form-control" type="text" id="defaultFormContactNameEx"
                               placeholder="Your Name"
                               value={this.state.name}/>
                        <br />
                        <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                            Your email
                        </label>
                        <input onChange={(e) => this.setState({email: e.target.value})} name="email"
                               className="form-control" id="defaultFormContactEmailEx"
                               type="email" placeholder="your@email.com" required
                               value={this.state.email}/>

                        <br />
                        <label htmlFor="defaultFormContactMessageEx" className="grey-text">
                            Your message
                        </label>
                        <textarea onChange={e => this.setState({message: e.target.value})} name="message"
                                  className="message-input" id="defaultFormContactMessageEx" type="text" placeholder="Please write your message here"
                                  value={this.state.message} required rows="3"/>
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
    );
};

export default FormPage;