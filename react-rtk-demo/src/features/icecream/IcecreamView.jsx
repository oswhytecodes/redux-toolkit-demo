import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

export const IceCreamView = () => {
  const [value, setValue] = useState(1);
  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
  };
  const numOfIcecreams = useSelector((state) => state.icecream.numOfIcecream);
  const dispatch = useDispatch();
  return (
    <div className="IcecreamView">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <h2>Number of icecream : {numOfIcecreams} </h2>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          name=""
          id=""
        />
      </div>
      <div className="btns">
        <button onClick={() => dispatch(ordered())}>Order icecream</button>
        <button onClick={() => dispatch(restocked(value))}>
          Restock icecream
        </button>
      </div>
    </div>
  );
};
