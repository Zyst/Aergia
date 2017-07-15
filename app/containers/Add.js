// @flow
import React from "react";
import AddButton from "../components/AddButton";
import AddInput from "../components/AddInput";

const Add = () => {
  // This will later on change, only one of these will be active
  // at a time
  const lolol = (
    <div>
      <AddButton />
      <p>One of these will be removed</p>
      <AddInput />
    </div>
  );

  return lolol;
};

export default Add;
