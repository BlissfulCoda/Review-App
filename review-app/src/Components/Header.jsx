import PropTypes from "prop-types";

export default function Header({ title, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <header style={headerStyles}>
      <nav className="container">
        <h1>{title}</h1>
      </nav>
    </header>
  );
}

Header.defaultProps = {
  title: "Default Review App Title",
  bgColor: "purple",
  textColor: "#fff",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
