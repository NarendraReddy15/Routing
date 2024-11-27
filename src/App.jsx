import React from 'react'

import { Routes, Route } from "react-router-dom";
import Home from './Home'
import Request from './Request'
import Navbar from './Components/Navbar'
import Error from './Pages/Error'
import Usercard from './Components/Usercard'
function App() {
  return (
   <>
      <Navbar />

      <Routes>
        <Route path="/Request" element={<Request />} />
          
         {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="/Home" element={<Home />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="/:username" element={<Usercard />}/>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
      </Routes>

      </>
  )
}

export default App
