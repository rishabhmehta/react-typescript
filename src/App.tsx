import "./App.css"
import { RandomNumber } from "./components/restrictions/RandomNumber"

function App() {
  return (
    <div className="App">
      <RandomNumber value={10} isPositive />
    </div>
  )
}

export default App
