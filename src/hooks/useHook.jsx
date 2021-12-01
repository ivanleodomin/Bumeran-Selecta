import React from "react";

export const useHook = () => {
  const [value, setValue] = React.useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return { value, onChange };
};
