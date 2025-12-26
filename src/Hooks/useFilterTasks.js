import { useEffect, useState } from "react";

export const useFilterTasks = () => {
  const [filterForm, setFilterForm] = useState({
    status: "",
    priority: "",
    sort: "",
    search: "",
  });
  useEffect(() => {
    console.log({ filterForm });
  }, [filterForm]);
  function handleFilterChange(e) {
    const { name, value } = e.target;
    setFilterForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  return { filterForm, handleFilterChange };
};
