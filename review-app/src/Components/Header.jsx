import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Header({ title, bgColor, textColor }) {
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <Link to="/">
      <header style={headerStyles}>
        <nav className="container">
          <h1>{title}</h1>
        </nav>
      </header>
    </Link>
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
