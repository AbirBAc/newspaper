import React from 'react'
import {Button, Container} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import apple from './apple.jpg';
import applee from './applee.jpg'; 


function LifeStyle () {
    return (
        <Container>
<div>
           <Card style={{ width: '40rem' }}>
           <img src={apple} alt="apple" style={{float : 'center', paddingRight : '2px'}}/>
  <Card.Body>
    <Card.Title><b>Apple now lets you choose contacts who can access your account when you die.</b></Card.Title>
    <Card.Text>
    New York (CNN Business)Amazon is potentially misleading consumers by not being clear enough in indicating which of its search results are paid advertisements, according to a complaint filed with the Federal Trade Commission on Wednesday.

More than a quarter of Amazon search results are sponsored by third parties and not adequately labeled to make that obvious to the average user, according to the complaint, which was filed by The Strategic Organizing Center (SOC), a coalition of US labor unions. Researchers at SOC, who analyzed more than 130,000 search results, allege that Amazon was in violation of all FTC guidelines for identifying online ads in search results, the complaint said.
    </Card.Text>
    <Button variant="secondary" style={{ width: '35rem' , alignItems:'center'}}>SHARE</Button>
  </Card.Body>
</Card>
        </div>
       <br/>
        <div>
           <Card style={{ width: '40rem' }}>
           <img src={applee} alt="applee" style={{float : 'center', paddingRight : '2px'}}/>
  <Card.Body>
    <Card.Title><b>Apple shares fall on fears iPhone demand is weakening for the holidays</b></Card.Title>
    <Card.Text>
    Apple shares closed down slightly negative Thursday, paring back losses of as much as 3% following a report about weakening iPhone demand heading into the holidays.

A Bloomberg report Wednesday night said Apple warned its suppliers demand is lower than expected for new iPhones, rattling the stock that resisted the omicron-fueled volatility in the market this week. But word of weak demand on top of the known supply chain issues sent shares of Apple down 3% in premarket trading Thursday morning.

Even as Apple shares fell, the broader market was up, with the Dow rising 600 points after Wednesday’s omicron sell-off.
    </Card.Text>
    <Button variant="secondary" style={{ width: '35rem' , alignItems:'center'}}>SHARE</Button>
  </Card.Body>
</Card>
        </div>
        
        </Container>
        
    )
}

export default LifeStyle
