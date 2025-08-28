import { useState } from 'react';
import { validateSignUp } from '../utils/validation';

export const useSignUpForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e, onSubmit) => {
    e.preventDefault();
    const formErrors = validateSignUp(formData);
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      await onSubmit(formData);
    }
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};
