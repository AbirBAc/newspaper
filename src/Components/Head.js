import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const HeadPage= () => {
  return (
    <MDBFooter color="black" className="font-small pt-1 mt-0">
      <MDBContainer fluid className="text-center text-md-right">
        <MDBRow>
          <MDBCol md="7">
            <b><h1 className="title">MEGANEWS</h1></b>
            <b>         
            --Devenir partie de l'actualité--
            </b>
          </MDBCol>
          <MDBContainer>
          <MDBCol md="2">
            <h1 className="title">  </h1>
            <div>
              <h2 className="list-unstyled">
                <a href="#!">Home</a>
              </h2>
              <h2 className="list-unstyled">
                <a href="#!">LifeStyle</a>
              </h2>
              <h2 className="list-unstyled">
                <a href="#!">Nouveautés</a>
              </h2>
              <h2 className="list-unstyled">
                <a href="#!">Offres</a>
              </h2>
            </div>
          </MDBCol>
          </MDBContainer>
        </MDBRow>
        </MDBContainer>
    </MDBFooter>
  );
}

export default HeadPage;