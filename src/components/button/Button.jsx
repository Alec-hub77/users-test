import './button.scss'

const Button = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
        {props.children}
    </button>
  )
}

export const ButtonOutlined = (props) => {
    return (
    <button className="btn-outlined" onClick={props.onClick}>
        {props.children}
    </button>
    )
}

export default Button