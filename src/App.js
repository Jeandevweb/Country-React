import{ Routes, Route } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Home from './pages/Home';
import Navigation from "./components/Navigation";
import Logo from './components/Logo';

function App() {
  return (
    <>
    <Logo />    
    <Navigation />
    <Routes>  
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="*" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;
