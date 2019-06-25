import React from "react";
//Helpers
import { translateUnit } from "../../common";

const Unit = props => {
  return (
    <div className="unidade">
      <span className="unidade-nome">{`Unidade: ${translateUnit(
        props.currentUnit.name
      )}`}</span>
      <span>{`Endereço: ${props.currentUnit.location}`}</span>
      <span>
        {`Preço: ${parseFloat(props.currentUnit.priceCharged).toLocaleString(
          "pt-br",
          {
            style: "currency",
            currency: "BRL"
          }
        )}`}
      </span>
    </div>
  );
};

export default Unit;
