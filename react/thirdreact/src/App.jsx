import './App.css'
import Lottery from './Lottery.jsx'
import { sumIsFifteen, allMatching } from './helper.js'

function App() {
  return (
    <>
      {/* <Lottery ticketLength={5} winCondition={sumIsFifteen}/> */}
      <Lottery ticketLength={3} winCondition={allMatching}/>
      {/* function passing as props */}
    </>
  )
}

export default App
