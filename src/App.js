import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/home-page';
import CharacterOverview from './pages/character-overview';
import CharacterDetail from './pages/character-detail';
// import something from 'some place'


// App.js is the entry point to the rest of your app
// You can see how this behavior is set up in index.js
// This is default behavior for create-react-app
function App() {
  return (
    <div className="App">
        <h4>Here is my header</h4>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/characters' element={<CharacterOverview />} />
          <Route path='/characters/:id' element={<CharacterDetail />} />
        </Routes>
        <h4>Here is my footer</h4>
      </div>
  );
}

export default App;
