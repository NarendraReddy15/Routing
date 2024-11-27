import React from "react";
import { useState } from "react";
import Data from './Components/Data'
import {Link} from 'react-router-dom'
function Card({ img, name, prof ,username}) {
  return (
    <>
    <Link to={`/${username}`}>
      <div
        className="w-[350px] border bg-white rounded-xl
     p-2 my-3 flex justify-between items-center"
      >
        <div className="flex gap-2 items-center">
          <img
            className="w-[50px] object-cover h-[50px] rounded-full"
            src={img}
          />
          <div>
            <h4 className="text-slate-950">{name}</h4>
            <p className="text-sm text-gray-500">{prof}</p>
          </div>
        </div>
      </div>
      </Link>
    </>
  );
}

export default Card;
