import React from 'react'
//Helpers
import { translateUnit } from "../../common";

const UnitSelector = (props) => {
    return (
        <div className="unidade-seletor">
        <span>Selecione sua unidade:</span>
        <select
          onChange={e => props.handleGetMeal(e.target.value)}
          defaultValue={props.unitName}
        >
          <option value="--">Escolher...</option>
          {props.unitNameList.map((unit, i) => {
            return (
              <option key={i} value={unit}>
                {translateUnit(unit)}
              </option>
            );
          })}
        </select>
      </div>
    )
}

export default UnitSelector
