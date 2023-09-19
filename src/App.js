import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar'; 
import Routing from './components/Routing'; 
import Footer from './components/Footer'; 


function App() {
  return (
   <>
   <Router>
      <div className="App">
        <Navbar />
        <Routing />
        <Footer />
      </div>
    </Router>
   </>
  );
}

export default App;
