import React from "react";

export const FontSizeSelector = ({ getValue }) => {
  return (
    <select onChange={(e) => getValue(e.target.value)}>
      <option value=".5rem">mała</option>
      <option value="1rem" selected>
        normalna
      </option>
      <option value="1.5rem">duża</option>
    </select>
  );
};
