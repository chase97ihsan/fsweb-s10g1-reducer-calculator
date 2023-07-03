import React from "react";
import { useReducer } from "react";
import reducer, { initialState } from "./reducers";
import TotalDisplay from "./components/TotalDisplay";
import CalcButton from "./components/CalcButton";
import { applyNumber } from "./actions";
import { changeOperation } from "./actions";
import { clearDısplay } from "./actions";
import { addMemory } from "./actions";
import { addRecallMemory } from "./actions";
import { addClearMemory } from "./actions";

function App() {
  const [cstate, dispatchCstate] = useReducer(reducer, initialState);
  const handleOneClick = (number) => {
    dispatchCstate(applyNumber(number));
  };

  const handleOperationClick = (operator) => {
    dispatchCstate(changeOperation(operator));
  };

  const handleClearClick = (clear) => {
    dispatchCstate(clearDısplay(clear));
  };

  const handleRecallMemoryClick = () => {
    dispatchCstate(addRecallMemory());
  };

  const handleMemoryClick = () => {
    dispatchCstate(addMemory());
  };

  const handleClearMemoryClick = () => {
    dispatchCstate(addClearMemory());
  };

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand"> Reducer Challenge</span>
      </nav>

      <div className="container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            <TotalDisplay value={cstate.total} />
            <div className="row details">
              <span id="operation">
                <b>Operation:</b> {cstate.operation}
              </span>
              <span id="memory">
                <b>Memory:</b> {cstate.memory}
              </span>
            </div>

            <div className="row">
              <CalcButton
                value={"M+"}
                onClick={() => handleMemoryClick("M+")}
              />
              <CalcButton
                value={"MR"}
                onClick={() => handleRecallMemoryClick("MR")}
              />
              <CalcButton
                value={"MC"}
                onClick={() => handleClearMemoryClick("MC")}
              />
            </div>

            <div className="row">
              <CalcButton value={1} onClick={() => handleOneClick(1)} />
              <CalcButton value={2} onClick={() => handleOneClick(2)} />
              <CalcButton value={3} onClick={() => handleOneClick(3)} />
            </div>

            <div className="row">
              <CalcButton value={4} onClick={() => handleOneClick(4)} />
              <CalcButton value={5} onClick={() => handleOneClick(5)} />
              <CalcButton value={6} onClick={() => handleOneClick(6)} />
            </div>

            <div className="row">
              <CalcButton value={7} onClick={() => handleOneClick(7)} />
              <CalcButton value={8} onClick={() => handleOneClick(8)} />
              <CalcButton value={9} onClick={() => handleOneClick(9)} />
            </div>

            <div className="row">
              <CalcButton
                value={"+"}
                onClick={() => handleOperationClick("+")}
              />
              <CalcButton
                value={"*"}
                onClick={() => handleOperationClick("*")}
              />
              <CalcButton
                value={"-"}
                onClick={() => handleOperationClick("-")}
              />
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={() => handleClearClick("CE")} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
