import { useState } from 'react';
import { validateLogin } from '../utils/validation';

export const useLoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e, onSubmit) => {
    e.preventDefault();
    const formErrors = validateLogin(formData);
    setErrors(formErrors);
    
    if (Object.keys(formErrors).length === 0) {
      setIsLoading(true);
      try {
        await onSubmit(formData);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return {
    formData,
    errors,
    isLoading,
    handleChange,
    handleSubmit,
  };
};
