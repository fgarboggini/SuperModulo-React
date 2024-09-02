import React from "react";

function ListaNomes(){
    const nomes = ['Fábio', 'Patrícia', 'Jenifer', 'Jéssica', 'Graciele', 'melzinha', 'Sasuke'];

    return (
        <div> 
            <h1>Lista de Nomes</h1> 
            <ul> 
               {nomes.map(nome => (
                <li key={nome}>{nome}</li>
               ))}
            </ul> {}
        </div>
    );
}

export default ListaNomes;