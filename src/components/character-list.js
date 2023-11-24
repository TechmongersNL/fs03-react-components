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

        const charactersWithLikes = response.data.map((character) => {
            return {...character, likes: 0}
        })
        console.log(charactersWithLikes, 'character with likes')
        setCharacters(charactersWithLikes);
    }

    // If you don't put getCharacters in a useEffect hook, getCharacters will be called (and will make an Axios request) every time CharactersList gets re-rendered
    // We only want getCharacters to be called once, the first time getCharacters is rendered, which we can do by using useEffect with an empty dependency array at the end
    // Don't do this!:
    //getCharacters();
    // Instead, do this:
    useEffect(() => {
        getCharacters();
    }, []);

    const increaseLikes = (id) => {
        // when this function is called, I want to increase the amount of likes on that character
        // in order to update a character, I need to use setCharacters

        // to update the character: first we need to find the character that we want to update
        // then make a copy of that character, and increase the amount of likes in it
        // add that updatedCharacter back into our updatedArray
        // setCharacter(updatedArray)
        const updatedArray = characters.map((character) => {
            if (character.id === id) {
                return {...character, likes: character.likes + 1};
            } else {
                return character;
            }
        })
        // console.log(characters, 'characters before update')
        // console.log(updatedArray, 'characters after update');

        setCharacters(updatedArray);
        // console.log('increase likes was clicked with id: ' + id)
    }

    const getCharactersComponents = () => {
        return characters.map((character) => {
            return (
            <Character 
                key={character.id}
                name={character.name} 
                birthday={character.born} 
                blood={character.blood} 
                imgUrl={character.imgUrl}
                quote={character.quote}
                likes={character.likes}
                increaseLikes={increaseLikes}
                id={character.id}
            />
            )
        })
    }

    const calculateTotalLikes = () => {
        let likesSum = 0;
        characters.forEach((character) => {
            likesSum = likesSum + character.likes;
        })
        return likesSum;
    }

    return (
        // if characters data is not null (the initial value of the characters state variable)
        // then I want to show Characters components
        // else I want to show "loading..."
        <>
            <h4>Total number of likes: {characters ? calculateTotalLikes() : 'Loading...'}</h4>
            <div>
                {characters ? getCharactersComponents() : 'Loading...'}
            </div>
        </>
    )
}

export default CharacterList;