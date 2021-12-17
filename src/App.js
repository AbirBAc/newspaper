import './App.css';
import { Navbar} from 'react-bootstrap'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home';
import News from './Components/News';
import Contact from './Components/Contact';
import Cookies from './Components/Cookies';
import LifeStyle from './Components/LifeStyle';
import Footer from './Components/Footer';
import Header from './Components/Header/Head';
import Register from './Components/Register';



function App() {
  return (

       <BrowserRouter>
      <div>
        
        <Header/>
        <Navbar/>
        
        <Routes>
          <Route exact path='/Home' element={<Home />}/>
          <Route path='/LifeStyle' element={<LifeStyle />} />
          <Route path='/News' element={<News />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Cookies' element={<Cookies/>} />
        </Routes>
   
        <Footer/>
       
      </div>
    </BrowserRouter>
    )
}

export default App;
