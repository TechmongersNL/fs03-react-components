import {useParams} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';

const CharacterDetail = () => {
    const params = useParams();
    //console.log(params)
    const id = params.id;
    console.log(id)

    const [details, setDetails] = useState()

    const getDetails = async () => {
        const response = await axios.get(`https://my-json-server.typicode.com/TechmongersNL/fs03-react/characters/${id}`);
        console.log(response.data);
        setDetails(response.data);
    }

    useEffect(() => {
        getDetails();
    }, [])

    return (
        details ? 
            <>
                <h1>{details.name}</h1>
                <h2>Blood type</h2>
                <p>{details.blood}</p>
                <h2>Birthday</h2>
                <p>{details.born}</p>
                <h2>Patronus</h2>
                <p>{details.patronus}</p>
                <h2>Quote</h2>
                <p>{details.quote}</p>
                <img src={details.imgUrl} alt={details.name} />
            </> :
            'Loading...'
    )
}

export default CharacterDetail;