import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Detail = () => {
    
    const { id }= useParams();
    const [character, setCharacter] = useState([{}]);

    useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
    .then(response => response.data)
    .then((data) => {
            if (data.name) {
                console.log(data)
                setCharacter(data);
            } else {
                window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [id]);

    return (
        <>  
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.specie}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character && character?.name} />
        </> 
    )
}

export default Detail;