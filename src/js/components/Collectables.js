import React from 'react';
import estus from './../../assets/images/estus-shard.png'
import bones from './../../assets/images/bone-shard.png'
import slab from './../../assets/images/slab.png'
import welcome from './../../assets/images/welcome.png'
import lizard from './../../assets/images/crystal-lizard.png'

const Collectable = (props) => {
  const { image, words } = props;
  return (
    <li>
      <img src={image} width="128" height="128"/>
      <br/>
      {words}
    </li>
  );
}

const Collectables = () => {
  return (
    <div className="bonfires">
      <h1 className="bonfire-title">Collectables</h1>
      <ul>
        <Collectable image={estus}   words={"Estus Shards"} />
        <Collectable image={bones}   words={"Undead Bone Shards"} />
        <Collectable image={slab}    words={"Titanite Slabs"} />
        <Collectable image={welcome} words={"Gestures"} />
        <Collectable image={lizard}  words={"Crystal Lizards"} />
      </ul>
    </div>
  );
};

export default Collectables;

