import React from 'react';
import rings from '../data/ds3/rings';


const Ring = ({ring}) => {
  const { name, weight, effect, location } = ring;
  return (
    <tr>
      <td>{name}</td>
      <td>{weight}</td>
      <td>{effect}</td>
      <td>{location}</td>
    </tr>
  );
};

const Rings = () => {
  return (
    <div className='bonfires'>
      <h1 className="bonfire-title">Rings</h1>
      <table>
        <tr>
          <th>Name</th>
          <th>Weight</th>
          <th>Effect</th>
          <th>Location</th>
        </tr>
        <tbody>
          {rings.map((ring) => <Ring ring={ring}/> )}
        </tbody>
      </table>
    </div>
  );
};

export default Rings;

