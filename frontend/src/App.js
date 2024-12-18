import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Popular from './pages/Popular';
import Shopnow from './pages/Shopnow';
import {BrowserRouter,Route, Routes}from 'react-router-dom' 


function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Popular" element={<Popular/>}/>
      <Route path="/Shopnow" element={<Shopnow/>}/>
      </Routes>
      <Footer/>

      </BrowserRouter>
     

    </div>
  );
}

export default App;
