import {useState} from 'react';
import '../styles/like-counter.css';

const LikeCounter = (props) => {
    // No more local state, it's now being passed in through props
    //const [count, setCount] = useState(0);

    const count = props.likes;
    const increaseLikes = props.increaseLikes;
    const [favorite, setFavorite] = useState(false);

    const whenIncreaseButtonClicked = () => {
        increaseLikes(props.id);
    };

    // Can you think of ways to make the decrease button work?
    // Option 1: Create a new decreaseLikes function in CharacterList, and pass it down through props
    // Option 2: Pass a boolean variable (also called a "flag") to increaseLikes. When the value is true, increase likes by 1. When it's false, decrease likes by 1
    // const whenDecreaseButtonClicked = () => {
    //     if (count > 0) {
    //         setCount(count - 1);
    //     }
    // }

    return (
        <>
            <div>
                <h4>Number of likes: {count}</h4>
                <button className={'buttonStyle'} onClick={whenIncreaseButtonClicked}>Like me!</button>
                {/* <button onClick={whenDecreaseButtonClicked}>Decrease likes</button> */}
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