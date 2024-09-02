import React, {useState} from 'react'

function InputValor(){
    const[valor, setValor] = useState('');
    const handleChange = (event) => {
        setValor(event.target.value);        
    };

    return (
        <div>
            {}{}
            <input
            type = "text"
            value = {valor}
            onChange = {handleChange}
            placeholder = "digite algo"
            />
            <p>O valor do input é: {valor}</p>
        </div>
    );
}

export default InputValor;