import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./cakeSlice";

export const CakeView = () => {
  const [value, setValue] = useState("1");
  const handleChange = (e) => {
    setValue(parseInt(e.target.value));
  };

  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1em",
        }}
      >
        <h2>Number of cakes : {numOfCakes}</h2>
        <input
          type="number"
          value={value}
          onChange={handleChange}
          name=""
          id=""
        />
      </div>
      <div className="btns">
        <button onClick={() => dispatch(ordered())}>Order cake</button>
        <button onClick={() => dispatch(restocked(value))}>Restock cake</button>
      </div>
    </div>
  );
};
