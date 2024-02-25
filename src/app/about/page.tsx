type ButtonProps = {
    handleClick: () => void
}

const Button = (props: ButtonProps) => {
    const handleClick = () => {
        console.log('Button clicked');
        props.handleClick();
    };

    return (
        <button onClick={handleClick}>Click</button>
    );
}


export default Button