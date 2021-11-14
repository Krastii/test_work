import { connect } from "react-redux";
import Counter from "./Components/Counter";
import changeCounter from "./store/actions";
import "./App.css";

const mapStateToProps = (store) => {
  return {
    counters: store.counters,
  };
};

function App({ dispatch, counters }) {
  //console.log(changeCounter(dispatch).addCounter(), "counters");
  return (
    <div className='App'>
      <p>Делаем приложуху</p>
      <button
        onClick={() => {
          changeCounter(dispatch).addCounter(counters.length);
        }}
      >
        Add counter
      </button>
      {counters.map((item) => {
        return (
            <Counter key={item.id} counter={item} dispatch={dispatch} />
        );
      })}
      <div>
        { counters[0] && <button
          onClick={() => {
            changeCounter(dispatch).deleteCounter(counters[counters.length - 1].id);
          }}
        >
          Delete last counter
        </button>}
      </div>
    </div>
  );
}

export default connect(mapStateToProps)(App);
