import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage= () => {
  return (
    <MDBFooter  className="font-small pt-2 mt-2">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h1 className="title">MEGANEWS</h1>
          </MDBCol>
          <MDBCol md="2"  color="black">
            <div >
            <h2 className="title" > Read more </h2>
            <h5 className=""><a href="Contact">.Contact</a></h5>
            <h5 className=""><a href="Cookies">.Cookies</a></h5>
               
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