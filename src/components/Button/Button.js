const Button = (props) => {
    return <button onClick={props.clickHandler}> {props.label} </button>
}

export default Button