import PropTypes from "prop-types";
export default function Button({ type, version, children, isDisabled }) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {" "}
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  version: "primary",
  isDisabled: false,
  children: "Click Me",
};

Button.propTypes = {
  type: PropTypes.string,
  version: PropTypes.string,
  children: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool,
};
