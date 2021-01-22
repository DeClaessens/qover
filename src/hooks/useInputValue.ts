import { useState } from "react";

function useInputValue<T>(initialValue: T) {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = (e: any) => {
    setValue(e.target.value);
  };

  return { value, onChange: handleChange };
}

export default useInputValue;
