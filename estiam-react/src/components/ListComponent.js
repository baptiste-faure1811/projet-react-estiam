import React from 'react';
import ListItem from './ListItem.js';
import LoadingList from './LoadingList.js';
import { PokemonListItem } from '../class/PokemonListItem.ts';

class ListComponent extends React.Component {

    url = "https://pokeapi.co/api/v2/pokemon?limit=";

    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            pokemons: []
        };
    }
    
    componentDidMount() {
        fetch('http://localhost:3000/pokemons')
            .then(response => response.json())
            .then(data => {
                let pokemonData = data.map((jsonObject) => {
                    return new PokemonListItem(jsonObject.name.french, "url");
                })
                this.setState({ isLoading: false, pokemons: pokemonData });
            });
    }

    render() {
        if (this.state.isLoading === true) {
            return (
                <div className='max-w-4xl mx-auto'>
                    <LoadingList />
                </div>
              ); 
        } else {
            var componentsArray = this.state.pokemons.map((pokemon) => {
                return (<div><ListItem pokemonName={pokemon.name} pokemonURL={pokemon.url}/></div>);
            }) 
            return (
                <div className='max-w-4xl mx-auto mb-40'>
                    {componentsArray}
                </div>
            );
        } 
    }
}

export default ListComponent;
