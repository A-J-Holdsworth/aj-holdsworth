import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Core/Layout';
import Contact from './Contact';
import About from './About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/about' element={<About />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
