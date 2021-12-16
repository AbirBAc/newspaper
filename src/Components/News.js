import React from 'react'
import {Button, Container} from 'react-bootstrap'
import Card from "react-bootstrap/Card";
import google from './google.jpg';
import hack from './hack.jpg';

function News() {
    return (
        <Container >
<div >
           <Card style={{ width: '40rem' , align: 'center'}}>
           <img src={hack} alt="hack" style={{float : 'center', paddingRight : '2px' }}/>
  <Card.Body>
    <Card.Title> <b>Flaw prompts 100 hack attacks a minute, security company says</b>  </Card.Title>
    <Card.Text>
    A flaw in widely used computer code is prompting 100 new hacking attempts every minute, a security company says.

Check Point said it had seen attempts to exploit the vulnerability on over 40% of corporate networks globally.

One US official said the security flaw, Log4shell, posed a "severe risk", with companies warning it was being actively used by criminal groups.

Fixes have been issued but need to be implemented. Popular applications and cloud services have been affected.
    </Card.Text>
    <Button variant="secondary" style={{ width: '35rem' , alignItems:'center'}}>SHARE</Button>
  </Card.Body>
</Card>
        </div>
        <br/>
        
        <div>
           <Card style={{ width: '40rem' }}>
           <img src={google} alt="google" style={{float : 'center', paddingRight : '2px'}}/>
  <Card.Body>
    <Card.Title><b>Google will fire employees who refuse vaccinations, report says.</b></Card.Title>
    <Card.Text>
    
    Google has reportedly told employees that those who fail to comply with company vaccine policies will ultimately lose their jobs.
    An internal memo, obtained by CNBC, told staff that they must upload documents proving vaccination status.

Those who did not would be placed on unpaid leave and later sacked, it said.

Google has been pushing for an eventual return to the office - which has been repeatedly delayed - and expects those attending buildings to be vaccinated.

When contacted by the BBC, Google did not deny the accuracy of the US news channel's report on the leaked internal memo.

A spokesperson said: "As we've stated before, our vaccination requirements are one of the most important ways we can keep our workforce safe and keep our services running.

"We're committed to doing everything possible to help our employees who can get vaccinated do so, and firmly stand behind our vaccination policy."
    </Card.Text>
    <Button variant="secondary" style={{ width: '35rem' , alignItems:'center'}}>SHARE</Button>
  </Card.Body>
</Card>
        </div>
        
        </Container>
        
    )
}

export default News