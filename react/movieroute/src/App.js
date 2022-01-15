import './App.css';

import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Details from './Details';
import Home from './Home';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/details" element={<Details/>} />
      </Routes>
    </>
  );
}

export default App;
