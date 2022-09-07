import React, { FunctionComponent, ReactNode } from "react";
import styles from "./Grid.module.scss";
import cn from "classnames";

type Cols = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Spacing = "sm" | "md" | "lg";
type JustifyContent ="flex-start"|"flex-end"|"center"|"space-between";
type AlignItem ="flex-start"|"flex-end"|"center";
const Grid: FunctionComponent<{
  children: ReactNode;
  container?: boolean;
  item?: boolean;
  xs?: Cols;
  sm?: Cols;
  md?: Cols;
  lg?: Cols;
  spacing?: Spacing;
  justifyContent?: JustifyContent;
  alignItem?: AlignItem;
  
} & React.HTMLAttributes<HTMLDivElement> > = ({ children, container, item, xs, sm, md, lg, spacing,justifyContent,alignItem,...props }) => {
  const classnames = cn({
    [styles.Grid_container]: container,
    [styles.Grid_item]: item,
    [styles[`Grid_xs_${xs}`]]: xs,
    [styles[`Grid_sm_${sm}`]]: sm,
    [styles[`Grid_md_${md}`]]: md,
    [styles[`Grid_lg_${lg}`]]: lg,
    [styles[`Grid_spacing_${spacing}`]]: spacing,
    [styles[`Grid_justifyContent_${justifyContent}`]]: justifyContent,
    [styles[`Grid_alignItem_${alignItem}`]]: alignItem,
    
  });
  return <div className={classnames} {...props}>{children}</div>;
};
export default Grid;
