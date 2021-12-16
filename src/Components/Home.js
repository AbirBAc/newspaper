import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from "react-bootstrap";
import amazon from './amazon.jpg';
import red from './red.jpg';
import meta from './meta.jpg';

 function Home() {
  return (
    <Container fluid >
   <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 19 }} color="red" gutterBottom>
          Breaking News!
        </Typography>
        <Typography variant="h5" component="div">
        <img src={amazon} alt="amazon" style={{float : 'left', paddingRight : '5px' ,  width:"30%" }}/>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
       <b>Amazon is misleading consumers with 'deceptive' ads in search results, FTC complaint says</b> 
        </Typography>
        <Typography variant="body2">
        The FTC requires digital advertisers to have clear and conspicuous labeling of paid ads. In order to protect consumers, the FTC considers a deceptive advertising practice one that contains a statement or omits details that are "likely to mislead consumers acting reasonably under the circumstances" and that will "likely affect the consumer's conduct or decisions with regard to a product or service."
Online search engine results are required to use shading, borders and large text boxes placed to the left in order to label paid products. If an ad is mislabeled or appears to the common eye not to be sponsored, that would be considered deceptive
          <br />
          <b>{'Visit for more' }</b><a href="https://www.cnn.com"> www.cnn.com </a> 
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" style={{ width: '10rem' , alignItems:'center'}}>SHARE</Button>
      </CardActions>
    </Card>
    <br/>
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 19 }} color="red" gutterBottom>
        Breaking News!
        </Typography>
        <Typography variant="h5" component="div">
        <img src={red} alt="red" style={{float : 'left', paddingRight : '10px' ,  width:"30%" }}/>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <b>Social media platform Reddit has announced that it has started the process to sell its shares on the stock market.</b>
        </Typography>
        <Typography variant="body2">
        In a confidential filing, it did not reveal how many shares it planned to sell or the price of the shares.

In August, the company said it had raised $700m (£528m) in new funding, valuing it at more than $10bn.

Reddit was at the centre of the so-called "meme stock" phenomenon earlier this year.

"The initial public offering is expected to occur after the SEC completes its review process, subject to market and other conditions," Reddit said in a filing with the US Securities and Exchange Commission.

Earlier this year, investors flocked to the San Francisco-based firm's messaging board for tips on trading stocks like US video game retailer GameStop and the AMC cinema chain - known as "meme stocks", those that gain popularity through sites like Reddit.
          <br />
          <b>{'Visit for more' }</b><a href="https://www.cnn.com"> www.cnn.com </a> 
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" style={{ width: '10rem' , alignItems:'center'}}>SHARE</Button>
      </CardActions>
    </Card>
    <br/>
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 19 }} color="red" gutterBottom>
        Breaking News!
        </Typography>
        <Typography variant="h5" component="div">
        <img src={meta} alt="meta" style={{float : 'left', paddingRight : '5px' ,  width:"30%" }}/>
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          <b>Meta wants researchers to help it avoid having users' personal data exposed online</b>
        </Typography>
        <Typography variant="body2">
        New York (CNN Business)Meta, the company formerly known as Facebook, is asking for help in avoiding having personal data about its users scraped from its platforms and posted to the web.

The social media giant announced Wednesday that it is expanding its bug bounty program — which offers rewards for helping identify and fix vulnerabilities in its apps — to include scraping, in a move Meta (FB) is calling an "industry first" to address an "internet-wide" challenge.
Scraping is typically an automated process of extracting large amounts of data from websites. Even when this data is publicly available online, such as a username, it can potentially still be exploited by bad actors if it's lumped together with other personal information such as birthdates, email addresses and location. For that reason, many websites, including Meta's platforms, say they prohibit or limit scraping, although those rules aren't always followed.
          <br />
          <b>{'Visit for more' }</b><a href="https://www.cnn.com"> www.cnn.com </a> 
        </Typography>
      </CardContent>
      <CardActions>
      <Button  size="small" style={{ width: '10rem' , alignItems:'center'}}>SHARE</Button>
      </CardActions>
    </Card>
</Container>

  ) 
 }
 export default Home
