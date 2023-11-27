import './App.css';
import Character from './components/character';
import charactersData from './charactersData';
import CharacterList from './components/character-list';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/home-page';
import CharacterOverview from './pages/character-overview';
import CharacterDetail from './pages/character-detail';
// import something from 'some place'

// Creating a new function component in the same file
// Normally, we want to create this component in a separate file
// Then export it, and import it
const AppNumberTwo = () => {
  return (
    <div>
      <h1>my title!!!</h1>
      <p>Heres some paragraph text</p>
    </div>
  )
}

// App.js is the entry point to the rest of your app
// This is default behavior for create-react-app
function App() {
  return (
    <div className="App">
        <h1>Here is my header</h1>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/characters' element={<CharacterOverview />} />
          <Route path='/characters/:id' element={<CharacterDetail />} />
        </Routes>
        { /* The below array iterator (map), loops over every element in the charactersData array */}
        { /* The result of map is another array with new data */}
        { /* In our case, this new data is a Character component */}
        <h1>Here is my footer</h1>

        { /* Using array iterator (map) instead of repeating like below: */ }
      </div>
  );
}

export default App;
