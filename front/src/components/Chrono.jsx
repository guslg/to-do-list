import React from "react";
import {useSelector, useDispatch} from 'react-redux'



const Chrono = () => {
    const { a,b } = useSelector((state) => {
        return {
            a: state.ReducerChrono,
            b: state.reducerDragon,
    }})
    const dispatch = useDispatch();

  React.useEffect(() => {
    const timeChrono = setInterval(() => {
      dispatch({ type: 'time' });
    }, 1000);
    return () => clearInterval(timeChrono);
  }, []);

  const reset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div>
      <h1>{a.time}</h1>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Chrono