import Food from './components/Food.jsx'
import {foods} from "./data.js"




function App() {
  return <>
    <header>
      <div className="">
        <h1>FOODS AND ITS ORIGIN</h1>
      <h3>WHAT IS THE MOST DELICIOUS</h3>
      </div>
    </header>

    <main>
      <div className="">
          {foods.map(f => (
            <Food food = {f}/>
          ))}
      </div>
    </main>
  
  
  
  </>;
}

export default App;
