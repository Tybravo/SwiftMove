import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface FormData {
  email: string;
  password: string;
}

interface LoginResponse {
  token: string;
  role: string;
}

export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'SwiftMove - Login';
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Login failed');

      const userLevel: LoginResponse = await response.json();
      toast.success('Login successful!');

      // Save token
      localStorage.setItem('token', userLevel.token);

      // Redirect based on role
      switch (userLevel.role) {
        case 'admin':
          navigate('/admin/dashboard');
          break;
        case 'driver':
          navigate('/driver/home');
          break;
        default:
          navigate('/dashboard');
      }
    } catch (err) {
      toast.error('Invalid credentials. Please try again.');
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      {/* Logo */}
      <h1
        className="text-2xl sm:text-3xl md:text-5xl font-bold text-center -mt-12 text-red-600 mb-6 whitespace-nowrap"
        data-aos="fade-down"
        data-aos-delay="50"
      >
        Swift<span className="text-teal-600">Move</span>
      </h1>

      {/* Login Box */}
      <div
        className="bg-teal-200 p-8 rounded-lg shadow-md w-full max-w-md"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          {/* Email */}
          <div className="text-left">
            {errors.email && <p className="text-red-600 text-sm">{errors.email.message}</p>}
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              placeholder="Email"
              className="border px-4 py-2 rounded w-full border-teal-300"
            />
          </div>

          {/* Password */}
          <div className="text-left">
            {errors.password && <p className="text-red-600 text-sm">{errors.password.message}</p>}
            <input
              {...register('password', { required: 'Password is required' })}
              type="password"
              placeholder="Password"
              className="border px-4 py-2 rounded w-full border-teal-300"
            />
            <div className="mt-1 text-right">
              <Link to="/forgot-password" className="text-sm text-blue-600 hover:underline">
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-red-600 text-white py-2 rounded hover:bg-red-700 transition ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </section>
  );
}
