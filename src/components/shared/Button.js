import React from "react";

const Button = ({ text, ...rest }) => <button {...rest} class="btn btn-secondary">{text}</button>;

export default Button;
