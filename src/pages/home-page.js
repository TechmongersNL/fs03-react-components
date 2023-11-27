import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
            <h1>Home page</h1>
            <h2>This is the Harry Potter home page!</h2>
            <Link to='/characters'><button>Go to overview page</button></Link>
        </div>
    )
}

export default HomePage;