import {useState} from 'react';
import '../styles/like-counter.css';

const LikeCounter = (props) => {
    //const [count, setCount] = useState(0);
    const count = props.likes;
    const setCount = props.increaseLikes;
    const [favorite, setFavorite] = useState(false);

    const whenIncreaseButtonClicked = () => {
        setCount(count + 1);
    };
    const whenDecreaseButtonClicked = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (
        <>
            <div>
                <h4>Number of likes: {count}</h4>
                <button className={'buttonStyle'} onClick={whenIncreaseButtonClicked}>Like me!</button>
                <button onClick={whenDecreaseButtonClicked}>Decrease likes</button>
            </div>
            <div>
                <h4>{favorite && '⭐️'}</h4>
                <button onClick={() => {
                    console.log('favorite button clicked')
                    setFavorite(!favorite);
                }}>{favorite ? 'Un-favorite' : 'Favorite'}</button>
            </div> 
        </>
    )
}

export default LikeCounter;