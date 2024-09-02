import React from "react";

function ListaDeUsuarios(){
    const nomes = ['nícia', 'Ricardo', 'Dandan', 'Enzo', 'Davizinho', 'Rogério', 'Jurandir', 'Angela'];

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

export default ListaDeUsuarios;