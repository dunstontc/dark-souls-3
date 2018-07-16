import React from 'react';

const locations = [
  "Cemetery of Ash",
  "High Wall of Lothric",
  "Undead Settlement",
  "Road of Sacrifices",
  "Cathedral of the Deep",
  "Catacombs of Carthus",
  "Irithyll of the Boreal Valley",
  "Irithyll Dungeon",
  "Lothric Castle",
  "Archdragon Peak",
  "Kiln of the First Flame",
  "The Painted World of Ariandel",
  "The Dreg Heap",
  "The Ringed City",
];

const LocationList = ({ locations }) => {
  return (
    <ul>
      {locations.map( loc => <li>{loc}</li> )}
    </ul>
  );
}

const Bonfires = () => {
  return (
    <div className='bonfires'>
      <LocationList locations={locations}/>
    </div>
  );
};

export default Bonfires;

