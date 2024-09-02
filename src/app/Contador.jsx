import React, {useState} from 'react';

function BotaoContador() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
    setCount(count + 1)
    };

    const dois = () => {
        setCount(count + 2)
        };

    const diminuir = () => {
        setCount(count - 1)
        };

    return(
        <div>
            <button onClick = {handleClick}>Clique aqui para acrescentar uma unidade!</button> <br />
            <button onClick = {diminuir}>Clique aqui para diminuir uma unidade!</button> <br />
            <button onClick = {dois}>clique aqui para acrescentar duas unidade!</button>
            <p> Voce clicou no botão {count} vezes!</p>
        </div>
    );
}

export default BotaoContador;