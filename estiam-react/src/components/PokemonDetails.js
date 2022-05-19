
import { Link } from "react-router-dom";
import TypeComponent from "./TypeComponent";
import { withRouter } from "react-router-dom";
import React from "react";
import DetailsComponent from "./DetailsComponent";
import Functions from "../utilities/functions";

class PokemonDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            types: []
        };
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

    deletePokemon(id) {
        fetch('http://localhost:3000/pokemons/' + id,
        { 
            method: "DELETE",
        }).then(function(res){  
           window.location.href = "/";
        })
    }

    render() {
        const imageName = "/ressources/" + this.props.match.params.id.toString().padStart(3, "0") + ".png";
        return (
            <div className="">
                <div className="w-full mx-auto flex flex-row justify-center gap-6 mb-10">
                    <Link to="/">
                        <button className="bg-gray-500 text-white rounded-xl px-6 font-semibold text-lg py-2 hover:bg-gray-400 hover:-translate-y-0.5 transition">
                            Retour à la liste
                        </button>
                    </Link>
                    <button className="bg-red-500 text-white rounded-xl px-6 font-semibold text-lg py-2 hover:bg-red-400 hover:-translate-y-0.5 transition" onClick={() => this.deletePokemon(this.props.match.params.id)}>
                        Supprimer ce Pokémon
                    </button>
                </div>
        
                <img src={imageName} className="w-40 mx-auto rounded-2xl p-4" style={{backgroundColor: Functions.getBackgroundColor(this.state.types[0])}} onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src="/logo192.png";
                }}></img>

                <p className="text-center text-white font-bold text-4xl mt-3">{this.state.name}</p>

                <div className="flex flex-row justify-center items-center gap-3 my-4">
                    {this.state.types.map((type) => {
                        return <TypeComponent type={type}/>
                    })}
                </div>

                <div className="flex flex-row justify-center items-center gap-3 my-4">
                    <DetailsComponent title={"HP: " + this.state.hp}/>
                    <DetailsComponent title={"Attack: " + this.state.attack}/>
                    <DetailsComponent title={"Defense: " + this.state.defense}/>
                </div>
                <div className="flex flex-row justify-center items-center gap-3 my-4">
                    <DetailsComponent title={"Sp.Attack: " + this.state.spAttack}/>
                    <DetailsComponent title={"Sp. Defense: " + this.state.spDefense}/>
                    <DetailsComponent title={"Speed: " + this.state.speed}/>
                </div>

                <div className="w-full mx-auto flex flex-row justify-center gap-6 mt-10">
                    <Link to={"/edit-pokemon/" + this.props.match.params.id}>
                        <button className="bg-blue-500 text-white rounded-xl px-6 font-semibold text-lg py-2 hover:bg-blue-400 hover:-translate-y-0.5 transition" >
                            Modifier ce Pokémon
                        </button>
                    </Link>
                </div>

            </div>
        )
    }
}

export default withRouter(PokemonDetails);

