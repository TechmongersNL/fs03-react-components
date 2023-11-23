import './App.css';
import Character from './components/character';
import charactersData from './charactersData';
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
        { /* The below array iterator (map), loops over every element in the charactersData array */}
        { /* The result of map is another array with new data */}
        { /* In our case, this new data is a Character component */}
        {
          charactersData.map((character, index) => {
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
        { /* Using array iterator (map) instead of repeating like below: */ }
        <Character name={charactersData[0].name} birthday={charactersData[0].born} blood={charactersData[0].blood} imgUrl={charactersData[0].imgUrl} quote={charactersData[0].quote} />
        <Character name={charactersData[1].name} birthday={charactersData[1].born} blood={charactersData[1].blood} imgUrl={charactersData[1].imgUrl} quote={charactersData[1].quote} />
        <Character name={charactersData[2].name} birthday={charactersData[2].born} blood={charactersData[2].blood} imgUrl={charactersData[2].imgUrl} quote={charactersData[2].quote} />
      </div>
  );
}

export default App;
