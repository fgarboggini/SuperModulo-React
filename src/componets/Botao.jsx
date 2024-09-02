import React, {useState} from 'react';

function Botao () {
    const [mensagem, setMensagem] = useState('');
    const handleClick = () => {
        setMensagem ('Botão clicado!');
    };
    return(
        <div>
            {}<button onClick={handleClick}>Clique Aqui</button>{}
            <p>{mensagem}</p>
        </div>
    );
}
export default Botao;