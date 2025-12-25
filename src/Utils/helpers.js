export const getColorByStatus = (status) => {
  let StatusColours = {
    TODO: "bg-yellow-100 text-yellow-800 border border-yellow-200",
    "IN PROGRESS": "bg-blue-100 text-blue-800 border border-blue-200",
    DONE: "bg-green-100 text-green-800 border border-green-200",
  };
  return (
    StatusColours[status] || "bg-gray-100 text-gray-800 border border-gray-200"
  );
};
export const getColorByPriority = (priority) => {
  let PriorityColours = {
    HIGH: "text-red-600 ",
    MEDIUM: "text-yellow-600 ",
    LOW: "text-green-600 ",
  };
  return (
    PriorityColours[priority] ||
    "bg-gray-100 text-gray-800 border border-gray-200"
  );
};

export const formatToDateOnly = (isoDate) => {
  const date = new Date(isoDate);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}-${month}-${year}`;
};
