function Button({title, onClick, type = "button", className}) {
    return (
        <button className={className} type={type} onClick={onClick}>{title}</button>
    )
}

export default Button;