import React from 'react';
import locations from '../data/ds3/locations';


const Location = ({location}) => {
  const { name, bonfires } = location;
  return (
    <li> <h3>{name}</h3>
      <ul>
        {bonfires.map((bonfire) => {
          if (bonfire.boss) {
            return <li className="boss-bonfire">{bonfire.name}</li>
          } else {
            return <li>{bonfire.name}</li>
          }
        })}
      </ul>
    </li>
  );
};

const LocationList = ({locations}) => {
  return (
    <ul>
      {locations.map((location) => <Location location={location}/> )}
    </ul>
  );
}

const Bonfires = () => {
  return (
    <div className='bonfires'>
      <h1 className="bonfire-title">Bonfires</h1>
      <LocationList locations={locations}/>
    </div>
  );
};

export default Bonfires;

