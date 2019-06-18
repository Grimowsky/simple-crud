import React from "react";
import Cards from "../Card/Cards";
import CardCollapse from "../CardCollapse/CardCollapse";

const CardList = ({ values, updateList }) => {
  return (
    <>
      {values.map((user, i) => {
        return (
          <Cards
            key={i}
            id={values[i].id}
            value={values[i].value}
            updateList={updateList}
          />
        );
      })}
    </>
  );
};

export default CardList;

/*
<div>
  {values.map((user, i) => {
    return (
      <Cards
        key={i}
        id={values[i].id}
        value={values[i].value}
        updateList={updateList}
      />
    );
  })}
</div> */
