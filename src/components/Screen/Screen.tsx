import './Screen.css'

import { useState, useEffect, useCallback } from "react"
import styled from 'styled-components'
import confetti from "canvas-confetti"

const ScoreDisplay = styled.div`
    display:flex;
    align-items:center;
    height:100%;
    width:auto;
    margin:0 15px;
    padding:15px;
    line-height: 100%;
    background-color: white;

    p{
      margin:0 auto;
      span{
        font-size:40px;
        font-weight:bold;
      }
    }
    `

const Screen = () => {
  const queryParams = new URLSearchParams(window.location.search);
  console.log(queryParams.get('maxnum'))
  const number: number = queryParams.get('maxnum') !== null ? Number(queryParams.get('maxnum')) : 100

  const [maxNumber] = useState(number)
  const [num1, setNum1] = useState(Math.round(1 + Math.random() * maxNumber))
  const [num2, setNum2] = useState(Math.round(1 + Math.random() * maxNumber))

  const [res, setRes] = useState(0)
  const [signal, setSignal] = useState("")
  const [answer, setAnswer] = useState("")
  const [score, setScore] = useState(0)
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const init = useCallback(() => {
    const symbol = ["+", "-"]
    const number01 = Math.round(1 + Math.random() * maxNumber)
    const number02 = Math.round(1 + Math.random() * maxNumber)
    const sign = (Math.random() <= 0.5) ? symbol[0] : symbol[1]

    if (sign === "-") {
      if (number01 >= number02) {
        setNum1(number01)
        setNum2(number02)
      } else {
        setNum1(number02)
        setNum2(number01)
      }
    }
    setSignal(sign)
    setRes(0)
    setAnswer("")
  }, [maxNumber])

  useEffect(() => {
    init()
  }, [score, init])

  const result = () => {
    let result = 0
    if (signal === "+") {
      result = num1 + num2
    }
    if (signal === "-") {
      result = num1 - num2
    }
    if (res === result) {
      setAnswer("correct")
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      setTimeout(() => { setScore(previous => previous + 10); init() }, 2000)
    } else {
      setAnswer("incorrect")
      setTimeout(() => { setScore(previous => previous - 10); init() }, 2000)
    }
  }

  const addNumber = (number: number) => {
    const old = res
    setRes(Number(old + "" + number))
  }

  const clearNumber = () => {
    setRes(0)
  }


  return (
    <>
      <ScoreDisplay><p><span>{score}</span></p></ScoreDisplay>
      <div className="screen">
        <div className="numbers"> {num1} </div>
        <div className="numbers"> {signal} </div>
        <div className="numbers"> {num2} </div>
        <div className={`numbers ${answer}`}> {res} </div>
      </div>
      <div className="keyboard">
        {numbers && numbers.map(
          (number, key) => {
            return <button key={key} onClick={() => addNumber(number)}> {number} </button>
          }
        )}
        <button onClick={clearNumber}>🆑</button>
        <button onClick={() => addNumber(0)}> 0 </button>
        <button onClick={result}>🆗</button>

      </div>
    </>
  )
}

export default Screen