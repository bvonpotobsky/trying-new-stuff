import PropTypes from "prop-types";

function Stack({ children, spacing = 2, direction = "row", wrap = false }) {
  const style = {
    display: "flex",
    flexDirection: direction,
    flexWrap: wrap ? "wrap" : "nowrap",
    gap: `${spacing * 0.25}rem`,
  };

  return <div style={style}>{children}</div>;
}

Stack.PropTypes = {
  spacing: PropTypes.number,
  direction: PropTypes.oneOf(["row", "column"]),
  wrap: PropTypes.bool,
};

export default Stack;
