import { useCounter } from '../Hooks/useCounter'

export const CounterWithHook = () => {

  const {count, increaseBy} = useCounter();
 
  return (
    <>
      <h3>Count: {count}</h3>

      <div>
        <button onClick={() => increaseBy(+1)}>+1</button>
        &nbsp;
        <button onClick={() => increaseBy(-1)}>-1</button>
      </div>
    </>
  )
}
