// @flow
import React from "react";

const AddButton = ({ add }: { add: () => void }) =>
  <button className="center-block button-primary" onClick={add}>
    Add task
  </button>;

export default AddButton;
