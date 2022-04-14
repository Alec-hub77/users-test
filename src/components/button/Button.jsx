import './button.scss'

const Button = (props) => {
  return (
    <button className={`btn ${props.className ?  props.className : ''}`} onClick={props.onClick}>
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