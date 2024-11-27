import React from "react";
import Data from './Data'
import {useParams} from 'react-router-dom'
function Usercard() {
  let {username}=useParams()
 let ans=Data.find((it)=>it.username == username)
 

  return (
   
    <div>
    <div className="w-[600px] m-auto  flex gap-3 items-center mt-5">
      <img  className="w-[200px] h-[200px] rounded-full" src={ans.img}/>
      <div>
        <h1 className="text-xl text-black text-bold">{ans.name}</h1>
        <p className="text-gray-600">{ans.profession}</p>
        <p>{ans.description}</p>
        <div className="flex gap-2 mt-3">
          <p className="px-2 bg-gray-200 rounded-lg ">followers {ans.followers}</p>
          <p className="px-2 bg-gray-200 rounded-lg ">following {ans.following}</p>
        </div>
      </div>

    </div>
    <div>
      <p className="text-slate-500  w-[600px] mx-auto text-xl text-bold mt-5">Posts</p>
    </div>

    <div className="flex flex-wrap gap-3 w-[600px] mt-3  mx-auto">
      <img  className="w-[190px] h-[190px] object-cover " src={ans.photos[0]}/>
      <img  className="w-[190px] h-[190px] object-cover " src={ans.photos[1]}/>
      <img  className="w-[190px]  h-[190px] object-cover " src={ans.photos[2]}/>
      <img  className="w-[190px]  h-[190px] object-cover" src={ans.photos[3]}/>
      <img  className="w-[190px]  h-[190px] object-cover " src={ans.photos[4]}/>

      <img  className="w-[190px]  h-[190px] object-cover " src={ans.photos[5]}/>
    </div>
    </div>
    
  );
}

export default Usercard;
