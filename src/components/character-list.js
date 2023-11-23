import Character from "./character";
import axios from 'axios';
import {useEffect, useState} from 'react';
//import charactersData from "../charactersData";
// ^ we don't have to import from charactersData anymore! We can now make a network request with axios

const CharacterList = () => {
    const [characters, setCharacters] = useState(null);

    const getCharacters = async () => {
        const response = await axios.get('https://my-json-server.typicode.com/TechmongersNL/fs03-react/characters');
        console.log(response.data);
        setCharacters(response.data);
    }

    // If you don't put getCharacters in a useEffect hook, getCharacters will be called (and will make an Axios request) every time CharactersList gets re-rendered
    // We only want getCharacters to be called once, the first time getCharacters is rendered, which we can do by using useEffect with an empty dependency array at the end
    // Don't do this!:
    //getCharacters();
    // Instead, do this:
    useEffect(() => {
        getCharacters();
    }, []);

    const getCharactersComponents = () => {
        return characters.map((character, index) => {
            return (
            <Character 
                key={index}
                name={character.name} 
                birthday={character.born} 
                blood={character.blood} 
                imgUrl={character.imgUrl}
                quote={character.quote}
            />
            )
        })
    }

    return (
        // if characters data is not null (the initial value of the characters state variable)
        // then I want to show Characters components
        // else I want to show "loading..."
        characters ? getCharactersComponents() : 'Loading...'
    )
}

export default CharacterList;