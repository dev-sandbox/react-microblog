import React from "react";
import PropTypes from "prop-types";

const Editor = ({ type, onChange }) => (
  <textarea className={`editer editer-${type}`} onChange={onChange} />
);

Editor.proTypes = {
  type: PropTypes.string,
  onChange: PropTypes.func
};

export default Editor;
