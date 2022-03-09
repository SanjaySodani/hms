import './App.css';
import Index from './Components/Index';
import Login from './Components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='*' element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;