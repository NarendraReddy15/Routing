import React from 'react'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <div className="border-b py-3 sticky top-0 bg-white">
      <div className="w-[900px] flex justify-between mx-auto">
      <div>
      <h1 className=" text-2xl">Instagram</h1>
      </div>
     <div className="flex gap-4 text-lg ">
      <Link to='/'>
      <h2>
Home
      </h2>
      </Link>
     <Link to='/Request'>
      <h2>

Request page
      </h2>
      </Link>
     
      
     
     
      </div>
    </div>
    </div>




  )
}

export default Navbar;