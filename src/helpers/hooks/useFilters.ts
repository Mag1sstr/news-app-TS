import { useState } from "react";
import { IFilters } from "../../interfaces/interfaces";

export const useFilters = (initialfilters: IFilters) => {
  const [filters, setFilters] = useState(initialfilters);

  const changeFilter = (key: string, value: null | string | number) => {
    setFilters((prev) => {
      return { ...prev, [key]: value };
    });
  };

  return { filters, changeFilter };
};
