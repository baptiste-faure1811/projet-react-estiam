import './App.css';
import ListComponent from "./components/ListComponent.js";

function App(props) {
  return (
    <div className="App">
      <header className="App-header text-white flex flex-col justify-center mt-28 mb-10">

        <p className="text-center font-bold text-5xl mb-3">PokéAPI</p>
        <p className="text-center text-base mb-8">Project React • Baptiste FAURE • 2022</p>

        <button className="mx-auto bg-green-600 text-white rounded-xl px-6 font-semibold text-lg py-2 hover:bg-green-800 hover:-translate-y-0.5 transition">
          Ajouter un Pokemon
        </button>
      </header>

      <ListComponent />


    </div>
  );
}

export default App;
