import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'
import Home from './pages/home'
import Contact from './pages/contact/Contact';
import Services from './pages/services/Services';
import Blog from './pages/blog/Blog';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />}></Route> 
          <Route path='services' element={<Services />}></Route>
          <Route path='blog' element={<Blog />}></Route>
          <Route path='contact' element={<Contact />}></Route>
        </Route>
        </Routes>
      </BrowserRouter>

    </>
  );


}

export default App;
