import React from 'react';
import weapons from '../data/weapons';


const Weapon = ({weapon}) => {
  const { name, weapons } = weapon;
  return (
    <li> <h3>{name}</h3>
      <ul>
        {
          weapons.map((weapon) => {
            return <li>{weapon}</li>
          })
        }
      </ul>
    </li>
  );
};

const WeaponsList = ({weapons}) => {
  return (
    <ul>
      {weapons.map((weapon) => <Weapon weapon={weapon}/> )}
    </ul>
  );
}

const Bonfires = () => {
  return (
    <div className='bonfires'>
      <h1 className="bonfire-title">Weapons</h1>
      <WeaponsList weapons={weapons}/>
    </div>
  );
};

export default Bonfires;

