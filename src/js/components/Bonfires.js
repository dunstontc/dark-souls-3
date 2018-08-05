import React from 'react';
import locations from '../data/locations';


const Location = ({location}) => {
  const { name, bonfires } = location;
  return (
    <li> <h3>{name}</h3>
      <ul>
        {bonfires.map((bonfire) => {
          switch (bonfire.type) {
            case "normal":
              return <li>{bonfire.name}</li>
            case "boss":
              return <li className="boss-bonfire">{bonfire.name}</li>;
            case "lord":
              return <li className="lord-bonfire">{bonfire.name}</li>;
            default:
              break;
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

