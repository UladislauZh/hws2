import React from "react";

// добавить в проект иконки и импортировать
const downIcon = "🔽";
const upIcon = "🔼";
const noneIcon = "⏤";

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  if (sort === "") return down; // если пусто, ставим вниз
  if (sort === down) return up; // если вниз, ставим вверх
  if (sort === up) return ""; // если вверх, убираем сортировку
  return down; // исправить
};

const SuperSort: React.FC<SuperSortPropsType> = ({ sort, value, onChange, id = "hw15" }) => {
  const up = "0" + value;
  const down = "1" + value;

  const onChangeCallback = () => {
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + "-sort-" + value} onClick={onChangeCallback}>
      {/*сделать иконку*/}
      {/*<img*/}
      {/*    id={id + '-icon-' + sort}*/}
      {/*    src={icon}*/}
      {/*/>*/}
      {icon} {/*а это убрать*/}
    </span>
  );
};

export default SuperSort;
