import React from 'react';
import ListItem from './ListItem.js';
import LoadingList from './LoadingList.js';
import { PokemonListItem } from '../class/PokemonListItem.ts';
import { Link } from 'react-router-dom';

class ListComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            allPokemons: [],
            filteredPokemons: [],
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const pokemons = this.state.allPokemons;
        const newPokemons = pokemons.filter( (pokemon) => pokemon.name.toLowerCase().includes(event.target.value.toLowerCase()))
        this.setState({ isLoading: false, filteredPokemons: newPokemons});
    }
    
    componentDidMount() {
        fetch('http://localhost:3000/pokemons')
            .then(response => response.json())
            .then(data => {
                let pokemonData = data.map((jsonObject) => {
                    return new PokemonListItem(jsonObject.id, jsonObject.name.english, jsonObject.type.join(", "));
                })
                this.setState({ isLoading: false, allPokemons: pokemonData, filteredPokemons: pokemonData });
            });
    }

    render() {
        if (this.state.isLoading === true) {
            return (
                <div className='mx-auto'>
                    <LoadingList />
                </div>
              ); 
        } else {
            var componentsArray = this.state.filteredPokemons.map((pokemon) => {
                return (<div><ListItem pokemonName={pokemon.name} id={pokemon.id} types={pokemon.types}/></div>);
            }) 
            return (
                <div className='mx-auto mb-40'>
                    <div className='flex flex-row justify-between items-center gap-6 mb-10'>
                        <input type="text" placeholder="Rechercher un pokémon" className="block py-2 px-4 rounded-xl" onChange={this.handleChange}/>
                        <Link to="/new-pokemon">
                            <button className="bg-green-600 text-white rounded-xl px-6 font-semibold text-lg py-2 hover:bg-green-800 hover:-translate-y-0.5 transition">
                                Ajouter un Pokemon
                            </button>
                        </Link>
                    </div>
                    <div>
                        <p className='text-white font-semibold text-base my-4'>Nombre de Pokémons: {this.state.filteredPokemons.length}</p>
                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                        {componentsArray}
                    </div>
                </div>
            );
        } 
    }
}

export default ListComponent;
