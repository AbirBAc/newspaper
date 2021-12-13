import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from "react-bootstrap";


 function Home() {
  return (
    <Container fluid >
   <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 19 }} color="text.secondary" gutterBottom>
          Breaking News!
        </Typography>
        <Typography variant="h5" component="div">
          be{Home}nev{Home}o{Home}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    --------------------------------------
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 19 }} color="text.secondary" gutterBottom>
        Breaking News!
        </Typography>
        <Typography variant="h5" component="div">
        be{Home}nev{Home}o{Home}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    ---------------
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 19 }} color="text.secondary" gutterBottom>
        Breaking News!
        </Typography>
        <Typography variant="h5" component="div">
        be{Home}nev{Home}o{Home}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
</Container>

  ) 
 }
 export default Home
