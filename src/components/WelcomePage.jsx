import React, { Fragment } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, MDBJumbotron } from "mdbreact";


import img1 from '../images/notes3.jpg';


function WelcomePage(props) {
    return (
        <Fragment>
            <MDBContainer>
                
                            <MDBView>
                                <img className="d-block w-100" src={img1} alt="First slide" />                                
                                <MDBMask overlay="black-light" />
                            </MDBView>
                        
            </MDBContainer>
        </Fragment>
    );


};

export default WelcomePage;