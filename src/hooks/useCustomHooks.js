import { useState } from "react";

const useCustomHook = () => {
  const [data, setData] = useState(0);

  const increment = () => {
    setData(data + 1)
  }

  const decrement = () => {
    setData(data - 1)
  }

  const reset = () => {
    setData(0)
  }

  const setValue = (value) => {
    setData(value)
  }

  return [increment, decrement, reset, setValue, data];
};

export default useCustomHook;