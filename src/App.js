import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Editor from './Components/Editor/Editor';
import Home from './Components/Home/Home';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/editor' element={<Editor />} />
          <Route path='*' element={ <Navigate to='/' /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
