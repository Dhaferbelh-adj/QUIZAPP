import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import  Layout  from './pages/layout';
import  Home  from './pages/home';
import  Nopage  from './pages/Nopage';
import  Quiz  from './pages/quiz';

function App() {
  return (
    <BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="/quiz/:category" element={<Quiz />} />
      <Route path="*" element={<Nopage />} />
  </Route>
  </Routes>
</BrowserRouter>
  )
}

export default App

