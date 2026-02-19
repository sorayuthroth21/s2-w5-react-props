import Food from './components/Food.jsx'
import {foods} from "./data.js"




function App() {
  return <>
    <header>
      <div className="flex flex-col justify-center items-center">
        <h1 className='font-bold p-4 text-3xl text-blue-400'>FOODS AND ITS ORIGIN</h1>
       <h4 className='p-4'>WHAT IS THE MOST DELICIOUS</h4>
      </div>
    </header>

    <main>
      <div className="flex gap-3 p-3 rounded-2xl flex-wrap ">
          {foods.map(f => (
            <Food food = {f}/>
          ))}
      </div>
    </main>
  
  
  
  </>;
}

export default App;
