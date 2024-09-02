import React, {useState} from 'react';

function BotaoAula () {
    const [mensagem, setMensagem] = useState('');
    const [numero1,setNumero1] = useState(0)
    const [numero2,setNumero2] = useState(0)
    const handleClick = () => {
    const num1 = Number (prompt('Digite o primeiro número: '))
    
    const num2 = Number (prompt('Digite o segundo número: '))
   
        setMensagem (`O resultado da soma dos dois númeors é: ${num1+num2}`);
    };
    return(
        <div>
            {}<button onClick={handleClick}>Clique Aqui para Somar os números</button>{}
            <p>{mensagem}</p>
        </div>
    );
}
export default BotaoAula;