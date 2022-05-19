import React from "react";
import { Link, withRouter } from "react-router-dom";

class NewPokemon extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            types: [],
            hp: '',
            attack: '',
            defense: '',
            spAttack: '',
            spDefense: '',
            speed: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('http://localhost:3000/pokemons/' + this.props.match.params.id)
            .then(response => response.json())
            .then(data => {
                this.setState({ 
                    types: data.type, 
                    name: data.name.english,
                    hp: data.base.HP,
                    attack: data.base.Attack,
                    defense: data.base.Defense,
                    spAttack: data.base["Sp. Attack"],
                    spDefense: data.base["Sp. Defense"],
                    speed: data.base.Speed,
                 });
            });
    }

    handleChange(event) {
        switch (event.target.name) {
            case "name":
                this.setState({name: event.target.value});
                break;
            case "types":
                this.setState({types: event.target.value.split(";").map((value) => {  return value.replace(/\s+/g, '');  })});
                // On empêche les espaces
                break;
            case "hp":
                this.setState({hp: event.target.value});
                break;
            case "attack":
                this.setState({attack: event.target.value});
                break;
            case "defense":
                this.setState({defense: event.target.value});
                break;
            case "spAttack":
                this.setState({spAttack: event.target.value});
                break;
            case "spDefense":
                this.setState({spDefense: event.target.value});
                break;
            case "speed":
                this.setState({speed: event.target.value});
                break;
            default:
                break;
        }
    }

    handleSubmit(event) {
        const id = this.props.match.params.id;
        if (this.props.mode == "create") {
            fetch('http://localhost:3000/pokemons',
            { 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(this.createJSON(this.state))
            })
            .then(function(res){  
                window.location.href = "/";
            })
        } else {
            fetch('http://localhost:3000/pokemons/' + id,
            { 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(this.createJSON(this.state))
            })
            .then(function(res){  
                window.location.href = "/pokemon/" + id;
            })
        }
        event.preventDefault();
    }

    createJSON(data) {
        const json = {
            name: {
                "english": data.name
            },
            type: data.types,
            base: {
                HP: data.hp,
                Attack: data.attack,
                Defense: data.defense,
                "Sp. Attack": data.spAttack,
                "Sp. Defense": data.spDefense,
                Speed: data.speed,
            }
        }
        return json
    }

    render()  {
        return (
        <div className='mx-auto mb-40'>
            <div className="w-full mx-auto flex flex-row justify-center gap-6">
                <Link to="/">
                    <div className='flex flex-col justify-center'>
                        <button className="bg-gray-500 text-white rounded-xl px-6 font-semibold text-lg py-2 hover:bg-gray-400 hover:-translate-y-0.5 transition">
                            Retour à la liste
                        </button>
                    </div>
                </Link>
                <Link to={"/pokemon/" + this.props.match.params.id}>
                    <div className={ this.props.mode == "create" ? "flex flex-col justify-center hidden" : "flex flex-col justify-center" } >
                        <button className="bg-blue-500 text-white rounded-xl px-6 font-semibold text-lg py-2 hover:bg-blue-400 hover:-translate-y-0.5 transition">
                            Retour au Pokémon
                        </button>
                    </div>
                </Link>
            </div>
            <div className="bg-gray-700 rounded-3xl px-4 py-10 mt-10 mx-16">
                <p className="text-white text-center font-bold text-4xl">{ this.props.mode == "create" ? "Nouveau" : "Modifier" } Pokémon</p>
                <form className="grid grid-cols-4 gap-4 items-start mt-6 max-w-2xl mx-auto" onSubmit={this.handleSubmit}>
                    <input required type="text" name="name" placeholder="Nom du Pokémon" className="block py-2 px-4 rounded-lg col-span-2" value={this.state.name} onChange={this.handleChange}/>
                    <div className="flex flex-col justify-start items-stretch col-span-2">
                        <input required type="text" name="types" placeholder="Type du Pokémon" className="block py-2 px-4 rounded-lg" value={this.state.types.join(";")} onChange={this.handleChange}/>
                        <p className="text-xs text-gray-300 mt-1 pl-2">Séparez les types par des points-virgules (max. 2).</p>
                    </div>
                    <input required type="number" name="hp" placeholder="Health points" min="1" className="block py-2 px-4 rounded-lg" value={this.state.hp} onChange={this.handleChange}/>
                    <input required type="number" name="attack" placeholder="Attack points" min="1" className="block py-2 px-4 rounded-lg" value={this.state.attack} onChange={this.handleChange}/>
                    <input required type="number" name="defense" placeholder="Defense points" min="1" className="block py-2 px-4 rounded-lg" value={this.state.defense} onChange={this.handleChange}/>
                    <input required type="number" name="spAttack" placeholder="Sp. Attack" min="1" className="block py-2 px-4 rounded-lg" value={this.state.spAttack} onChange={this.handleChange}/>
                    <input required type="number" name="spDefense" placeholder="Sp. Defense" min="1" className="block py-2 px-4 rounded-lg" value={this.state.spDefense} onChange={this.handleChange}/>
                    <input required type="number" name="speed" placeholder="Speed" min="1" className="block py-2 px-4 rounded-lg" value={this.state.speed} onChange={this.handleChange}/>
                    <div className="flex flex-col justify-center items-center col-span-4 mt-6">
                        <input type="submit" value={ this.props.mode == "create" ? "Valider" : "Enregistrer" } className="text-center bg-green-700 text-white rounded-xl px-6 font-semibold text-lg py-2 hover:bg-green-600 hover:-translate-y-0.5 transition"/>
                    </div>
                </form>
            </div>
        </div>
    )
  }
}

export default withRouter(NewPokemon);