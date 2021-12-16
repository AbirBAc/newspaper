
import * as React from 'react';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function Cookies() {
    return (
 
  <React.Fragment>
    <CardContent>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
     <b>What are cookies?</b> 
A cookie is a small text file that a website stores on your computer or mobile device when you visit the site.

First party cookies are cookies set by the website you’re visiting. Only that website can read them. In addition, a website might potentially use external services, which also set their own cookies, known as third-party cookies.
Persistent cookies are cookies saved on your computer and that are not deleted automatically when you quit your browser, unlike a session cookie, which is deleted when you quit your browser.
Every time you visit the Commission’s websites, you will be prompted to accept or refuse cookies.

The purpose is to enable the site to remember your preferences (such as user name, language, etc.) for a certain period of time.

That way, you don’t have to re-enter them when browsing around the site during the same visit.

Cookies can also be used to establish anonymised statistics about the browsing experience on our sites.

<b>How do we use cookies?</b>
European Commission websites mostly use “first-party cookies”. These are cookies set and controlled by the Commission, not by any external organisation.

However, to view some of our pages, you will have to accept cookies from external organisations.  

The 3 types of first-party cookie we use are to:

store visitor preferences
make our websites operational
gather analytics data (about user behaviour)
Visitor preferences

These are set by us and only we can read them. They remember:

if you have agreed to (or refused) this site’s cookie policy
if you have already replied to our survey pop-up (about how helpful the site content was) – so you won't be asked again
      </Typography>
      <Typography variant="body2">
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);


      
    
}

export default Cookies
