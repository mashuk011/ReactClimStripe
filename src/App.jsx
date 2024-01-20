
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Portfolio from './Pages/Portfolio';
import Blog from './Pages/Blog';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import './App.css'
import Header from './Components/Header';
import Footer from './Components/Footer';
import TopHeader from './Components/TopHeader';

function App() {


  return (
    <>
    <BrowserRouter>
    <div className="main-header-bx">
    <TopHeader />
    <Header/>
    </div>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/portfolio' element={<Portfolio/>} />
      <Route path='/team' element={<Team/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/contact' element={<Contact/>} />
        
    </Routes>
    <Footer />
    </BrowserRouter>
   
    </>
  )
}

export default App
