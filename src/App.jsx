import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RootLayout from './Layouts/rootLayout';
import Post from './pages/post';
import Seed from './pages/Seed';

function App() {

  return (
     <Routes>
            <Route path='/' element={<RootLayout />}>
              <Route path="" element={<Home />} />
              <Route path="post" element={<Post />} />  
              <Route path="seed" element={<Seed />} />    
            </Route>

            <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  )
}

export default App
