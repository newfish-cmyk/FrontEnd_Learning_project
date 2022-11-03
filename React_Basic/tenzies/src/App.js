import React from "react";
import Dice from "./components/Dice";
import { nanoid } from "nanoid"
import Confetti from "react-confetti"

export default function App() {
  const [dice, setDice] = React.useState(newDice())
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const Number = dice[0].number
    if (dice.every(dice => dice.number === Number)) {
      setTenzies(true)
      console.log("You won!")
    }
  }, [dice])

  function newDice() {
    const newDice = []
    for (let i=0; i<10; ++i){
      newDice.push({
          number: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid()
        })
    }
    return newDice
  }

  function rollDice() {
    if(tenzies) {
      setTenzies(false)
      setDice(newDice())
    } else {
      setDice(prevDice => prevDice.map(dice => {
        return dice.isHeld ? dice : {
          number: Math.ceil(Math.random() * 6),
          isHeld: false,
          id: nanoid()
        }
      }))
    }
  }

  function holdDice(id){
    setDice(prevDice => prevDice.map(dice => {
      return dice.id === id ? {...dice, isHeld: !dice.isHeld} : dice
    }))
  }

  const diceElements = dice.map(dice => 
    <Dice 
      key={dice.id} 
      number={dice.number} 
      isHeld={dice.isHeld} 
      holdDice={() => {holdDice(dice.id)}} 
    />
  )

  return (
    <div className="App">
      {tenzies && <Confetti height={750}/>}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
      <div className="dice-container">
      {diceElements}
      </div> 
      <button 
        className="roll-dice" 
        onClick={rollDice}
      >
        {tenzies ? "Retry" : "Roll"}</button> 
    </div>

  );
}
