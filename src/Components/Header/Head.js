import React from "react";
import { Container } from "react-bootstrap";
import { MDBFooter } from "mdbreact";
import './Head.css'


const Head= () => {
    return (
      
      <MDBFooter color="grey" className="font-small pt-1 mt-5">
       <Container>
              <b><h1 className="title">MEGANEWS</h1></b>
              <b>         
                     
              </b>
              </Container>
              <Container>
              <h1 className="title"> </h1>
              <div>
                <h2 className="title"><a href="#!">Home</a></h2>
                <h2 className=""><a href="#!">LifeStyle</a></h2>
                <h2 className="list-unstyled"><a href="#!">News</a></h2>
                <h2 className="list-unstyled"><a href="#!">Offers</a></h2>
                </div>
                backgroundColor() {
   
    document.body.style.backgroundColor = "pink"
}
              </Container>
      </MDBFooter>
    );
    
  }

export default Head;