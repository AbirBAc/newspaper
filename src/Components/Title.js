import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage= () => {
  return (
    <MDBFooter color="grey" className="font-small pt-2 mt-2">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h1 className="title">MEGANEWS</h1>
            <p>  
            --Devenir partie de l'actualité--
            </p>
          </MDBCol>
          <MDBCol md="3">
            <h2 className="title">A LIRE AUSSI </h2>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Politique de confidentialité</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Cookies</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Contacts</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Abonnements</a>
              </li>
            </ul>
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