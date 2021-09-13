import Button from "../../Button/Button"
const Keyboard = (props) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className="keyboard">
            {numbers && numbers.map(
                (number, key) => {
                    return <Button clickHandler={() => { props.addNumber(number) }} label={number} />
                }
            )}
            <button onClick={props.clearNumber}>🆑</button>
            <button onClick={() => props.addNumber(0)}> 0 </button>
            <button onClick={props.result}>🆗</button>
        </div>
    )
}

export default Keyboard