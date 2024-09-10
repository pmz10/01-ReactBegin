import { useState } from "react"


export const Counter = () => {
  const [count, setCount] = useState<number>(10);

  const increseaBy = (value: number) => {
    setCount(count + value);
  }
  return (
    <>
      <h3>Count: {count}</h3>

      <div>
        <button onClick={() => increseaBy(+1)}>+1</button>
        &nbsp;
        <button onClick={() => increseaBy(-1)}>-1</button>
      </div>
    </>
  )
}
