import './App.css';
import NavBar from './components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import 'bootstrap/dist/js/bootstrap.js';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <NavBar/>
      <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/home" element={<Home />} />
               {/* <Route path="/product" element={<Product />} />
               <Route path="/contactUs" element={<ContactUS />} /> */}
                 </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
