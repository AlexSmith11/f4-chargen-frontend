import "./App.css";
import PerkTable from "./components/perkTable";

var data = require("./data/David.json");

function App() {
  return (
    <div className="container">
      <div className="mt-3">
        <h3>Display F4 Character data</h3>
        <div>
          {data.Special.map((specialStat, index) => {
            return (
              <div>
                <p key={index}>
                  <u>{specialStat.SpecialName}</u>
                </p>
                <PerkTable perks={specialStat.Perks} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
