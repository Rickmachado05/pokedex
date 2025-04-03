'use client'

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {

    const [ pokemons, alteraPokemons ] = useState([]);
    const [ pesquisa, alteraPesquisa ] = useState("");

    const [ erroPesquisa, alteraErroPesquisa ] = useState(false);

    async function busca(){
        
        try{
            const response = await axios.get("https://pokeapi.co/api/v2/pokemon/"+pesquisa)
    
            const data = response.data;
            alteraPokemons([data])
            alteraErroPesquisa(false)
        }catch(e){
            alteraErroPesquisa(true);
        }
               
    }   

    async function buscaTodos(){
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/")
        const data = response.data.results;
        alteraPokemons(data)
        console.log(data)
    }


    useEffect( ()=> {
        buscaTodos();
    }, [] )

    return (
        <div>

            <h1>Pokedex</h1>

            <p>Digite o nome de um Pokémon:</p>
            <input onChange={ (e)=> alteraPesquisa(e.target.value) } />
            <br/>
            <button onClick={ ()=> busca() } >Pesquisar</button>

            { erroPesquisa == true && <p className="text-red-500" >Erro ao pesquisar</p> }

            <hr/>

            {
                pokemons == 0 ?
                    <p></p>
                :
                    pokemons.map( (i, index) => 
                        <div>

                           
                            <img src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/"+(i.id ? i.id : index+1)+".gif"} />
                            <h2> {i.name} </h2>
                            <h2> {i.type}</h2>
                        </div>
                    )
            }

        </div>
    );
}