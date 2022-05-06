import React from 'react';
import CardTemp from './CardTemp';
import PropTypes  from 'prop-types';

export default function Card({max,min,name,img,onClose}) {
  // acá va tu código
  function handleOnClose() {
    if(typeof onClose === "function") onClose();
  }
  return (
  <div>
    <button onClick={handleOnClose}>X</button>
    <span>{name}</span>
    <CardTemp label="Min" value={min} />
    <CardTemp label="Max" value={max} />

  {/*  <div>
      <label >Min</label>
      <span>{min}</span>
</div> 
<div>
  <label >Max</label>
  <span>{max}</span>
  </div> */}

<img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono del clima" />
  </div>
  );
}

/*
function CardTemp({label,value}) {
  return (
    <div>
      <label>{label}</label>
      <span>{value}</span>
    </div>
  )
  
}*/

Card.propTypes = { 
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  onClose: PropTypes.func
}

