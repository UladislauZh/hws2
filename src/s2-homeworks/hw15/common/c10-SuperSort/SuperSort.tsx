import React from "react";
import arrowUp from "../c10-SuperSort/gallery/PolygonUp.svg";
import arrowDown from "../c10-SuperSort/gallery/PolygonDown.svg";
import arrowUpDown from "../c10-SuperSort/gallery/None.svg";

const downIcon = arrowDown;
const upIcon = arrowUp;
const noneIcon = arrowUpDown;

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  return sort === down ? up : sort === up ? noneIcon : down;
};

const SuperSort: React.FC<SuperSortPropsType> = ({ sort, value, onChange, id = "hw15" }) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    const param = pureChange(sort, down, up);
    onChange(param);
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + "-sort-" + value} onClick={onChangeCallback} style={{ position: "relative" }}>
      <img
        id={id + "-icon-" + sort}
        src={icon}
        alt={icon}
        style={{ cursor: "pointer", width: "15px", height: "15px" }}
      />
    </span>
  );
};

export default SuperSort;
