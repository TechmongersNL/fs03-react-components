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
        <div>
            {details ? details.name : 'Loading...'}
        </div>
    )
}

export default CharacterDetail;