import { Button } from '@material-ui/core'

// import Button from "../../Button/Button"
const Keyboard = (props) => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    return (
        <div className="keyboard">
            {numbers && numbers.map(
                (number, key) => {
                    return <Button size="small" variant="outlined" onClick={() => { props.addNumber(number) }} >{number}</Button>
                }
            )}
            <Button size="small" variant="outlined" onClick={props.clearNumber}>🆑</Button>
            <Button size="small" variant="outlined" onClick={() => props.addNumber(0)}> 0 </Button>
            <Button size="small" variant="outlined" onClick={props.result}>🆗</Button>
        </div>
    )
}

export default Keyboard