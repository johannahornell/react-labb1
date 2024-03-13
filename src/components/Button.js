import PropTypes from 'prop-types'

const Button = ({ text, onClick, icon }) => {
  return (
    <button onClick={onClick}>{text}{icon}</button>
  )
}

Button.defaultProps = {
    text: 'Click here'
}

Button.propTypes = {
    text: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
