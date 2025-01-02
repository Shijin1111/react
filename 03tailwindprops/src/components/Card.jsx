import React from "react";
import { use } from "react";

function Card({username,btnvalue})
{
    return(
        <div><div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800">
        <img className="w-full h-56 object-cover" src="https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Card image" />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">{username}</h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            This is a description for the card. It provides some brief details about the content.
          </p>
          <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
            {btnvalue}
          </button>
        </div>
      </div></div>
    )
}

export default Card