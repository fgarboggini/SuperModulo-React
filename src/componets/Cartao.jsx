import './Cartao.css'
import React from 'react';

const Cartao = (props) => {
  return (
    <div className='cartao'>
      <h2 className='cartao-titulo'>{props.titulo}</h2>
      <p className='cartao-descricao'>{props.descricao}</p>
      <img src={props.image} alt="" />
    </div>
  );
};


export default Cartao;