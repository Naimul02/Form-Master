import { useState } from "react";

// eta ekta custom hook jeta amra nijera toiri korchi
const useInputState = (defaultValue = null) => {
  const [value, setValue] = useState(defaultValue);

  // const handleChange = (e) => {
  //   setValue(e.target.value);
  // };
  const onChange = (e) => {
    setValue(e.target.value);
  };

  // return [value, handleChange];
  return {
    value,
    onChange,
  };
};

export default useInputState;
