import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registrationform from './Components/Registrationform';
import Login from './Components/Login';
import Movielist from './Components/Movieslist';


function App() {
  return (
<Router> 
    <div className="App">
      <Routes>
          <Route path="/" element={<Registrationform />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movielist" element={<Movielist />} />
        </Routes> 
</div>
</Router>
  );
}

export default App;




