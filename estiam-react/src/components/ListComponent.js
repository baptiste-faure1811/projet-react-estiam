import React from 'react';
import ListItem from './ListItem.js';
import LoadingList from './LoadingList.js';
import { PokemonListItem } from '../class/PokemonListItem.ts';

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isLoading: false};
    }
    toggleState = () => {
        this.setState({ isLoading: !this.state.isLoading });
    }
    
    componentDidMount() {
        // 1.
    }

    render() {
        const e = [
            {
                name: "klhj",
                url: "ff"
            },
            {
                name: "gsdfgdfsg",
                url: "ggg"
            }
        ];
        if (this.state.isLoading === true) {
            return (
                <div className='max-w-4xl mx-auto'>
                    <LoadingList />
                </div>
              ); 
        } else {
            var componentsArray = e.map((item, key) => {
                return (<div><ListItem pokemonName={e.name} pokemonURL={e.url}/></div>);
            }) 
            return (
                <div className='max-w-4xl mx-auto'>
                    {componentsArray}
                    <button onClick={this.toggleState}>d</button>
                </div>
            );
        } 
    }
}

export default ListComponent;
