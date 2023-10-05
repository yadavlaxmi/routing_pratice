
    
    
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<div>Home Page</div>} />
//         <Route path="/about" element={<div>About page</div>}/>
//         <Route path="/contact" element={<div>contact</div>}/>
//       </Routes>
//     </BrowserRouter>
//   ); 
// }

// export default App;

import './App.css';
 import { BrowserRouter, Routes, Route } from 'react-router-dom';
 import Contact from './Contact';
 import Home from './Home';
 import About from './About';


 function App() {
   return (
     <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home/>} />
         <Route path="/about" element={<About/>}/>
         <Route path="/contact" element={<Contact/>}/>
      </Routes>
     </BrowserRouter>
   ); 
 }

export default App;

 
