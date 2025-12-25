import React, { useEffect, useState } from "react";

function useHandleTaskForm(initialData) {
  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    status: "TODO",
    priority: "LOW",
    assignee: "",
    dueDate: "",
  });
  // Sync form state when initialData (props) changes
  useEffect(() => {
    if (initialData) {
      setTaskForm({
        title: initialData.title || "",
        description: initialData.description || "",
        status: initialData.status || "TODO",
        priority: initialData.priority || "LOW",
        assignee: initialData.assignee || "",
        // Ensure date is formatted for HTML input (YYYY-MM-DD)
        dueDate: initialData.dueDate ? initialData.dueDate.split("T")[0] : "",
      });
    }
  }, [initialData]);
  function handleTaskFormChange(event) {
    const { name, value } = event.target;

    setTaskForm((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return { taskForm, handleTaskFormChange };
}

export default useHandleTaskForm;
