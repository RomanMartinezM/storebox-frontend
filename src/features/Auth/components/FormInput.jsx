import React from 'react';

const FormInput = ({
  id,
  name,
  type = 'text',
  label,
  value,
  onChange,
  error,
  placeholder = '',
  required = false,
  autoComplete = 'off',
  className = ''
}) => (
  <div className={className}>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <div className="mt-1">
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className={`appearance-none block w-full px-3 py-2 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
      />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  </div>
);

export default FormInput;
