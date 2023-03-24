import React from "react";
import './Character.css';
import UseCharacter from "../hooks/UseCharacter";
import { useParams } from "react-router";

export default function Character() {
    const {id} = useParams()
    const { data, error, loading } = UseCharacter(id);

    console.log({ data, error, loading })

    if (error) return <div>Oops, something went wrong</div>
    if (loading) return <div>loading</div>
    return <div className="Character" >
                  <img src={data.character.image} alt={data.character.name} />
             <div className="Character-content">
                  <h2>{data.character.name}</h2>
                  <p>{data.character.gender}</p>
                  <div className="Character-episode">
                    {data.character.episode.map((episode) => {
                        return <div>
                            {episode.name} -<b>{episode.episode}</b>
                            </div>
                    })}
                  </div>
        </div>
        </div>;

}
