import { useState } from "react";

export const useHook = (type) => {
  const [value, setValue] = useState("");
  const onChange = (event) => {
    setValue(event.target.value);
  };
  const setValor = (par) => {
    setValue(par);
  };
  return {
    type,
    setValor,
    value,
    onChange,
  };
};
