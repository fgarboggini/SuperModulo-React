import React from 'react'

function Ternario (){
    const mostrarMensagem = false;
    return(
        <div>
        <h1> Renderização Condicional</h1>
        {!mostrarMensagem ? <div>os shitzus vão continuar a dominar o mundo!</div> : null}
        </div>
    );
}

export default Ternario;