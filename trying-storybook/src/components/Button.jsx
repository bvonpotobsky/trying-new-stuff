import PropTypes from "prop-types";

function Button({ label, size, scale, bgColor, borderRadius, handleClick }) {
  const style = {
    backgroundColor: bgColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
    borderRadius: `${borderRadius}px`,
  };

  return (
    <button style={style} onClick={handleClick}>
      {label}
    </button>
  );
}

Button.PropTypes = {
  label: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
  scale: PropTypes.number,
  borderRadius: PropTypes.number,
};

export default Button;
