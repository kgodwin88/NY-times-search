import React from "react";

const FormBtn = props => (
  <button {...props} style={{ marginBottom: 10 }} className="btn btn-success">
    {props.children}
  </button>
);
export default FormBtn;