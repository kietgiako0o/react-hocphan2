import './App.css';
import DrangItem from './components/DrangItem';
import DrangPokemon from './components/DrangPokemon';
import ListaMainPokemon from './components/ListaMainPokemon';
import { Body } from './components/Pokemon'

function App() {
  return (
    <div className="App">
      <Body/>
      <ListaMainPokemon />
      <DrangItem />
      <DrangPokemon />
    </div>
  );
}

export default App;
