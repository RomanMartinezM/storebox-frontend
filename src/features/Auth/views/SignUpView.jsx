import { Link } from 'react-router-dom';
import { useSignUpForm } from '../hooks/useSignUpForm';
import FormInput from '../components/FormInput';

export default function SignUpView() {
  const { formData, errors, handleChange, handleSubmit } = useSignUpForm();

  const onSubmit = async (formData) => {
    // Handle successful form submission
    console.log('Form submitted:', formData);
    // Add your API call here
    // try {
    //   await authService.signUp(formData);
    //   // Redirect or show success message
    // } catch (error) {
    //   // Handle error
    // }
  };

  return (
    <div className="fixed inset-0 bg-gray-100 flex flex-col justify-center overflow-auto">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Create your account
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/" className="font-medium text-purple-600 hover:text-purple-500">
            Sign in
          </Link>
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={(e) => handleSubmit(e, onSubmit)}>
            <FormInput
              id="name"
              name="name"
              type="text"
              label="Full Name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder = 'Enter your full name'
              required = {true}
              autoComplete="name"
            />

            <FormInput
              id="email"
              name="email"
              type="email"
              label="Email address"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder = 'Enter your email address'
              required={true}
              autoComplete="email"
            />

            <FormInput
              id="password"
              name="password"
              type="password"
              label="Password"
              value={formData.password}
              onChange={handleChange}
              error={errors.password}
              placeholder = 'Enter your password'
              required={true}
              autoComplete="new-password"
            />

            <FormInput
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              error={errors.confirmPassword}
              placeholder = 'Confirm your password'
              required={true}
              autoComplete="new-password"
            />

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-purple-600 hover:text-purple-500">Terms</a> and{' '}
                <a href="#" className="text-purple-600 hover:text-purple-500">Privacy Policy</a>
              </label>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
