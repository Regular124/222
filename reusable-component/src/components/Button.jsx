import PropTypes, { string } from "prop-types"

export default function Button({
    text = "PUT_TEXT",
    icon,
    size = "medium",
    variant = "primary",
    fullwidth = "false",
    isDisabled = "false",
    onClick,
    children,
}) {
    return (<button className={`button ${variant} ${size} ${isDisabled ? "Disabled" : ""} 
    ${fullwidth ? "fullwidth" : ""}`} onClick={onClick}>{icon && <span>{icon}
        </span>}{children}</button>);
}

//настройка жесткой типизации proptypes
// Button.propTypes = {
//     text: PropTypes.string,
//     icon: PropTypes.string,
//     size: PropTypes.string,
//     variant: PropTypes.string,
//     fullwidth: PropTypes.bool,
//     isDisabled: PropTypes.bool,
//     onClick: PropTypes.func,
// };