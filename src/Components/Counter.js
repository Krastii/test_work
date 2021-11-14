import React from "react";
import changeCounter from "../store/actions";

function Counter({ dispatch, counter }) {
  console.log(counter.id, "dispatch");
  return (
    <div>
      {!counter.timerFlag && (
        <div>
          <button
            onClick={() =>
              changeCounter(dispatch).changeValueCounter(
                counter.id,
                counter.value + 1
              )
            }
          >
            +
          </button>
          <p>{counter.value}</p>
          <button
            onClick={() =>
              changeCounter(dispatch).changeValueCounter(
                counter.id,
                counter.value - 1
              )
            }
          >
            -
          </button>
          <button
            onClick={() => changeCounter(dispatch).deleteCounter(counter.id)}
          >
            delete this counter
          </button>
        </div>
      )}

      {counter.timerFlag && (
        <div>
          <p>Timer</p>
          <p>{counter.value}</p>
          <button
            onClick={() => changeCounter(dispatch).deleteCounter(counter.id)}
          >
            delete this timer
          </button>
        </div>
      )}
    </div>
  );
}

export default Counter;
