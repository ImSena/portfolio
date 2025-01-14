import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './View/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './View/Projects';
import NotFound from './View/NotFound';

function App() {

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/project' element={<Projects />} />
        <Route path='*' element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
