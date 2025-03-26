import React from "react";

function DestinationCard({ destination }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img src={destination.image} alt={destination.name} className="w-full h-56 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold">{destination.name}</h2>
        <p className="text-gray-500">{destination.location}</p>
        <p className="mt-2 text-gray-700">{destination.description}</p>
        <p className="mt-4 font-semibold text-lg text-blue-600">{destination.price}</p>
      </div>
    </div>
  );
}

export default DestinationCard;
