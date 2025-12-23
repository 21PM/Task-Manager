import React, { useState } from "react";

function useHandleTaskForm() {
  const [taskForm, setTaskForm] = useState({
    title: "",
    description: "",
    status: "To Do",
    priority: "Low",
    assignee: "",
    dueDate: "",
  });

  function handleTaskFormChange(event) {
    const { name, value } = event.target;

    setTaskForm((prev) => {
      return { ...prev, [name]: value };
    });
  }
  return { taskForm, handleTaskFormChange };
}

export default useHandleTaskForm;
