import React from "react";
import Cards from "../Card/Cards";
import CardCollapse from "../CardCollapse/CardCollapse";

const CardList = ({ values, updateList }) => {
  return (
    <div
      clasName="cardList"
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
        padding: "5px"
      }}
    >
      {values.map((user, i) => {
        return (
          <CardCollapse
            key={i}
            id={values[i].id}
            value={values[i].value}
            updateList={updateList}
          />
        );
      })}
    </div>
  );
};

export default CardList;
