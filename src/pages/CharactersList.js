import React from "react";
import { Link } from "react-router-dom";
import UseCharacters from "../hooks/UseCharacters";
import "./CharacterList.css";

function CharactersList() {

    const { error, data, loading } = UseCharacters();

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error </p>;



    console.log({ error, data, loading });

    return (
      <div className="CharactersList">
       {data.characters.results.map((character) => (
           <Link to={`/${character.id}`}>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
              </Link>
         ))
                }  

      </div>
    );
  }
  
  export default CharactersList;