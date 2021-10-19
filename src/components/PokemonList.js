import React, {useState} from "react";
import "./PokemonList.css";
import Pokemon from "./Pokemon";

export default function PokemonList() {
    const [list, setList] = useState([]);

    const getPokemons = () => {
        fetch(`https://pokeapi.co/api/v2/pokemon`)
        .then(response => response.json())
        .then(data => {
            setList(data.results);
            console.log(data)
        })
    }

    return (
        <div>
            <button className="get-button" onClick={getPokemons}>Get me a list of Pokemons!</button>
            {list.map((item) => {
                return (
                    <Pokemon prop={item}/>
                )
            }
            )}
        </div>
    )
}