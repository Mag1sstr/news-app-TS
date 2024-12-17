import React from "react";
import Pagination from "../Pagination/Pagination";
import { IPaginationProps } from "../../interfaces/interfaces";

interface IProps {
  children: React.ReactNode;
  top: boolean;
  bottom: boolean;
}
export default function PaginationWrapper({
  children,
  top,
  bottom,
  ...paginationProps
}: IProps & IPaginationProps) {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
}
