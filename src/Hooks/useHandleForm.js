import React, { useState } from "react";

function useHandleForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  function handleChangeFormData(event) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return { formData, handleChangeFormData, showPassword, setShowPassword };
}

export default useHandleForm;
