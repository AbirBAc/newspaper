import './App.css';
import { Navbar} from 'react-bootstrap'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ReactDOM from 'react-dom';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Header from './Components/Header/Head';
import News from './Components/News';
import LifeStyle from './Components/LifeStyle';




function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <div>
        <Navbar/>
        <Routes>
        <Route path='/Home' element={<Home />} />
          <Route path='/LifeStyle' element={<LifeStyle />} />
          <Route path='/News/:id' element={<News />} />

      
        </Routes>
      </div>
      <Header/>
      <Home/>
      <Footer/>
    </BrowserRouter>
    </div>
    )
}

export default App;
