import { useState, useEffect, useRef } from "react"

export default function useWordGame() {
  const STARTING_TIME = 5

  const [text,setText] = useState("")
  const [timeRemaining, setTimeRemaining] = useState(STARTING_TIME)
  const [isTimeRunning, setIsTimeRunning] = useState(false)
  const [wordCount, setWordCount] = useState(0)
  const textBoxRef = useRef(null)

  function handleChange(e) {
    const {value} = e.target
    setText(value)
  }

  function calculateWordCount(myText) {
    const wordsArr = myText.trim().split(" ")
    return wordsArr.filter(word => word !== "").length
  }

  function startGame() {
    setIsTimeRunning(true)
    setTimeRemaining(STARTING_TIME)
    setText("")
    textBoxRef.current.disabled = false
    textBoxRef.current.focus()
  }

  function endGame() {
    setIsTimeRunning(false)
    setWordCount(calculateWordCount(text))
  }

  useEffect(() =>{
    if(timeRemaining > 0 && isTimeRunning){
      setTimeout(() => {
        setTimeRemaining(time => time - 1)
      }, 1000)
    }else if(timeRemaining === 0) {
      endGame()
    }
  }, [timeRemaining, isTimeRunning])

  return {textBoxRef, handleChange, text, isTimeRunning, timeRemaining, startGame, wordCount}
}