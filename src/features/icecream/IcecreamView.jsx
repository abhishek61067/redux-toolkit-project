import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";
import { useState } from "react";

const IcecreamView = () => {
  const numOfIcecreams = useSelector((state) => state.icecream.numofIcecreams);
  const dispatch = useDispatch();
  const [count, setCount] = useState(1);

  // handlers
  const handleChange = (e) => {
    setCount(Number(e.currentTarget.value));
  };

  return (
    <div id="icecreamPageId">
      <h2>No of Icecream - {numOfIcecreams}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order Icecream
      </button>
      <button
        onClick={() => {
          dispatch(restocked(count));
        }}
      >
        Restock Icecream
      </button>
      <input type="number" onChange={handleChange} />
    </div>
  );
};

export default IcecreamView;
