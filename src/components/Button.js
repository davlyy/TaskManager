import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color, minWidth: `100px` }}
      className="btn"
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  text: "Hello",
  color: "steelblue",
};

Button.propType = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
