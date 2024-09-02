import React, {useState} from 'react'

function NomeEmailSenha(){
    const[nome, setNome] = useState('');
    const[email, setEmail] = useState('');
    const[senha, setSenha] = useState ('');
    const onClick = (event) => {
        setNome(event.target.value);        
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

export default NomeEmailSenha;