
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Error from './Component/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} >
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<Error/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  ); 
}

export default App;

 
