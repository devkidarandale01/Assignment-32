import "./App.css";
import Card from "./components/Card";
import data from "./data/Data.json";

function App() {
  return (
    <div className="App">
      <h1>Sports</h1>

      <div className="card-container">
        {data.map((item) => (
          <Card
            key={item.id}
            name={item.name}
            player={item.player}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;