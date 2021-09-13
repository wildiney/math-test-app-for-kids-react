import './Screen.css'

import React, { useState, useEffect } from "react"

const Screen = () => {

    const [num1, setNum1] = useState(0)
    const [num2, setNum2] = useState(0)
    const [res, setRes] = useState(0)
    const [signal, setSignal] = useState("")
    const [answer, setAnswer] = useState("")
    const [score, setScore] = useState(0)
    const maxNumber = 10
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    useEffect(() => {
        init()
    }, [score])

    const init = () => {
        const symbol = ["+", "-"]
        const number01 = Math.round(Math.random() * maxNumber) + 1
        const number02 = Math.round(Math.random() * maxNumber) + 1
        const sign = (Math.random() <= 0.5) ? symbol[0] : symbol[1]
        console.log(sign)


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
        console.log("Init")
    }

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
            setTimeout(() => { setScore(previous => previous + 10); init() }, 3000)
        } else {
            setAnswer("incorrect")
            setTimeout(() => { setScore(previous => previous - 10); init() }, 3000)
        }

    }

    const addNumber = (number) => {
        const old = res
        setRes(Number(old + "" + number))
    }

    const clearNumber = () => {
        setRes(0)
    }

    return (
        <>
            <div className="score"><p><span>{score}</span></p></div>
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