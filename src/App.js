import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Add from './pages/Add/Add';
import Edit from './pages/Edit/Edit';

function App() {
  return (
    <Router>
      <div className="App bg-gray-500">
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/add" element={<Add/>} />
          <Route exact path="/edit" element={<Edit/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
