import './App.css';
import Index from './Components/Index';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='*' element={<Index />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;