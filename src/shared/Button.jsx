
function Button({ version, type , isDisabled, children }) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled} >{ children }</button>
  )
}

export default Button


Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false
}