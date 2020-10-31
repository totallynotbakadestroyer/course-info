import React from "react";

const Total = (props) => {
  const totalCount = props.parts.reduce((x, y) => x + y.exercises, 0);
  return <p>Number of exercises {totalCount}</p>;
};

export default Total;
