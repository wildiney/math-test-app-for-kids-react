import './Screen.css'

import { useState, useEffect, useCallback } from "react"
import confetti from "canvas-confetti"

import { calc } from '../../lib/math'

const Screen = () => {
  const queryParams = new URLSearchParams(window.location.search);
  const number: number = queryParams.get('maxnum') !== null ? Number(queryParams.get('maxnum')) : 100

  const [maxNumber] = useState(number)
  const [num1, setNum1] = useState(Math.round(1 + Math.random() * maxNumber))
  const [num2, setNum2] = useState(Math.round(1 + Math.random() * maxNumber))

  const [res, setRes] = useState<string>("")
  const [signal, setSignal] = useState("")
  const [answer, setAnswer] = useState("")
  const [score, setScore] = useState(0)
  const numbers = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "",
    0,
    ".",
  ]

  const init = useCallback(() => {
    const symbol = ["+", "-", "*", "/"]
    const number01 = Math.round(1 + Math.random() * maxNumber)
    const number02 = Math.round(1 + Math.random() * maxNumber)
    const sign = symbol[Math.floor(Math.random() * symbol.length)]

    if (sign === "-" || sign === "/") {
      if (number01 >= number02) {
        setNum1(number01)
        setNum2(number02)
      } else {
        setNum1(number02)
        setNum2(number01)
      }
    }
    setSignal(sign)
    setRes("")
    setAnswer("")
  }, [maxNumber])

  useEffect(() => {
    init()
  }, [score, init])

  const showResult = () => {
    const result = calc(num1, num2, signal)
    if (res == null) return
    if (parseFloat(res).toFixed(2) === result) {
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

  const addNumber = (digit: number | string) => {
    if (res != null) {
      if (digit === "." && res.toString().indexOf(".") === 1) {
        return
      }
    }
    const display = `${res}${digit.toString()}`
    setRes(display)
  }

  const clearNumber = () => {
    setRes("")
  }


  return (
    <div className='flex flex-1 flex-col gap-6 h-full'>
      <header className='flex items-center justify-center  p-4 bg-slate-100 mx-4'>
        <p className='font-bold text-slate-800'><span>Pontuação: {score}</span></p>
      </header>

      <div className="bg-slate-100 mx-4 p-4 h-auto flex flex-1 flex-col justify-center">
        <div className=' flex flex-row justify-between pb-4'>

          <div className='flex items-center justify-center'>
            <div className="text-7xl m-0 p-0 text-slate-500 h-auto  font-sans font-bold"> {signal} </div>
          </div>
          <div className='flex flex-col'>
            <div className="text-right text-5xl text-slate-500 h-full font-sans font-bold items-stretch"> {num1} </div>
            <div className="text-right text-5xl text-slate-500 h-full font-sans font-bold items-stretch"> {num2} </div>
          </div>

        </div>
        <div className={`numbers ${answer} border-t-4 border-slate-300  pt-4`}>
          <div className='text-right text-5xl h-14 text-slate-500 font-sans font-bold'>
            {res}
          </div>
        </div>
      </div>
      <div className='flex flex-1 w-full mb-6'>
        <div className="keyboard w-full">
          {numbers && numbers.map(
            (number, key) => {
              return <button className='border border-slate-50 hover:bg-slate-200 text-xl text-slate-800 sm:text-3xl' key={key} onClick={() => addNumber(number)}> {number} </button>
            }
          )}
          <button className='border border-slate-50 hover:bg-slate-200 text-xl text-slate-800 sm:text-3xl' onClick={clearNumber}>🆑</button>
          <button >  </button>
          <button className='border border-slate-50 hover:bg-slate-200 text-xl text-slate-800 sm:text-3xl' onClick={showResult}>🆗</button>
        </div>
      </div>
    </div>
  )
}


export default Screen