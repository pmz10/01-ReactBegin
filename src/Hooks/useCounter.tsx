import { useState } from "react";

const useCounter = () => {
    const [count, setCount] = useState<number>(10);

    const increseaBy = (value: number) => {
      setCount(count + value);
    }
  return {
    //Propperties
    count, 

    //Methods
    increseaBy,
  }
}

export default useCounter;