import React from "react";
import arrowUp from "../../common/c10-SuperSort/icons/Polygon 2.png";
import arrowDown from "../../common/c10-SuperSort/icons/Polygon 5.png";
import arrowUpDown from "../../common/c10-SuperSort/icons/Vector.png";

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
