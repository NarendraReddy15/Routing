import Card from './Card'
import React from 'react';
import Data from './Components/Data'



function Request(){

  return (
    <>
    
    <div className="m-auto w-[400px] mt-6">
     <h1 className="text-black text-bold text-xl">
      Request page
     </h1>
     <p className="text-sm">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae doloremque ab sint inventore similique iusto, repellat incidunt nihil eveniet quis.
     </p>
      {
      Data.map(item=> <Card img={item.img} name={item.name} prof={item.profession}  />)
      }
    </div>



    
    </>
  )
}
export default Request;