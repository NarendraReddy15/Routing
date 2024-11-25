import React from 'react'

import { Routes, Route } from "react-router-dom";
import Home from './Home'
import Request from './Request'
import Navbar from './Components/Navbar'

function App() {
  return (
   <>
      <Navbar />

      <Routes>
        <Route path="/Request" element={<Request />} />
          
         {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="/Home" element={<Home />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="/" element={<Home />} />
        
      </Routes>

      </>
  )
}

export default App
