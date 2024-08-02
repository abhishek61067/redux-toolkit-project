import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./cakeSlice";
import { useState } from "react";

const CakeView = () => {
  const [value, setValue] = useState(1);
  const numOfCakes = useSelector((state) => {
    console.log("state from useSelector: ", state);
    return state.cake.numOfCakes;
  });
  const dispatch = useDispatch();

  const handleValue = (e) => {
    let newValue = Number(e.currentTarget.value);
    setValue(newValue);
  };

  return (
    <div id="cakePageId">
      <h2>No of cakes - {numOfCakes}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order Cake
      </button>
      <button
        onClick={() => {
          dispatch(restocked(value));
        }}
      >
        Restock Cake
      </button>
      <input type="number" onChange={handleValue} />
    </div>
  );
};

export default CakeView;
