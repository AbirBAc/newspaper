import React from "react";
import { Container } from "react-bootstrap";
import { MDBFooter } from "mdbreact";
import './Head.css'


const Head= () => {
    return (
      
      <MDBFooter  className="font-small pt-1 mt-1" >
       <Container>
              <b1><h1 className="title" >MEGANEWS</h1></b1>
              <b>         
                     
              </b>
              </Container>
              <Container>
              <h1 className="title" text="black"> </h1>
              <div>
                <h2 className=""><a href="Home">Home</a></h2>
                <h2 className=""><a href="LifeStyle">LifeStyle</a></h2>
                <h2 className=""><a href="News">News</a></h2>
                
                
</div>
              </Container>
      </MDBFooter>
    );
    
  }

export default Head;