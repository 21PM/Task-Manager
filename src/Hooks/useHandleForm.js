import React, { useState } from "react";

function useHandleForm(setSignupError) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  // Password validation function
  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(password)) {
      return "Password must be at least 8 characters long, include 1 uppercase letter, 1 number, and 1 special character.";
    }
    return "";
  };

  function handleChangeFormData(event) {
    const { name, value } = event.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });

    if (name === "password") {
      const errorMessage = validatePassword(value);
      setSignupError(errorMessage);
    }
  }

  return { formData, handleChangeFormData, showPassword, setShowPassword };
}

export default useHandleForm;
