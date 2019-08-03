import React from "react";
import PropTypes from 'prop-types';

const Button = ({ text, type, onClick }) => {
  return (
    <button onClick={onClick} className={`btn btn-${type}`}>
      {text}
    </button>
  );
};

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired
}

Button.defaultProps = {
    text: "Submit"
};

export default Button;
