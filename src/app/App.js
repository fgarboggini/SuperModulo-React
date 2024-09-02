import './App.css';
import HelloWorld from '../index.jsx';
import Botao from '../componets/Botao.jsx';
import BotaoContador from './Contador.jsx';
import InputValor from './input.jsx';
import Ternario from '../componets/Ternario.jsx';
import ListaNomes from '../componets/listaNomes.jsx';
import ListaDeUsuarios from '../componets/ListadeUsuarios.jsx';
import BotaoAula from '../componets/BotaoAula.jsx';
import Cartao from '../componets/Cartao.jsx';
import panda from './download.jpeg'

function App() {
  return (
   <>
    <HelloWorld/>
    <Botao/>
    <BotaoContador/>
    <InputValor/>
    <Ternario/>
    <ListaNomes/>
    <ListaDeUsuarios/>
    <BotaoAula/>
    <Cartao titulo="Teste" descricao="teste4" image={panda}/>
   </>
  );
}

export default App;
