import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage= () => {
  return (
    <MDBFooter color="grey" className="font-small pt-2 mt-2">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6" color="grey">
            <h1 className="title">MEGANEWS</h1>
            <p>  
            --Become part of the news--
            </p>
          </MDBCol>
          <MDBCol md="3"  color="black">
            <div >
            <h2 className="title" >A LIRE AUSSI </h2>
            <h5 className="list-unstyled"><a href="#!">Politique de confidentialité</a></h5>
            <h5 className="list-unstyled"><a href="#!">Cookies</a></h5>
            <h5 className="list-unstyled"><a href="#!">Contacts</a></h5>
            <h5 className="list-unstyled"><a href="#!">Subscription</a></h5>   
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-2">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="MEGANEWS.com"> MEGANEWS.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;