import './App.css';
import Header from './components/Header';
import ListComponent from "./components/ListComponent.js";
import PokemonDetails from './components/PokemonDetails';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import NewPokemon from './components/NewPokemon';

function App(props) {
  return (
      <div className="App max-w-4xl mx-auto">
          <Header />
          <Router>
              <Switch>
                <Route exact path="/"><ListComponent /></Route>
                <Route exact path="/pokemon/:id"><PokemonDetails /></Route>
                <Route exact path="/new-pokemon"><NewPokemon mode="create"/></Route>
                <Route exact path="/edit-pokemon/:id"><NewPokemon mode="edit"/></Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
