import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface FormData {
  name: string;
  email: string;
  businessType: string;
  message: string;
}

export default function Register() {
  useEffect(() => {
    AOS.init({ once: true }); // Use only on static elements
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Error');

      await response.json();
      toast.success('Registration successful! We will contact you soon.');
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again later.');
    }
  };

  return (
    <section className="min-h-screen bg-red-50 py-20 flex items-center justify-center">
      <div className="w-full px-4 text-center -mt-10" data-aos="fade-up" data-aos-delay="100">
        <h2
          className="text-3xl font-bold mb-6 text-gray-800"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Register now to start managing your logistics operations in real time
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full max-w-md mx-auto transition-opacity duration-300"
        >
          {/* Full Name */}
          <div className="text-left">
            {errors.name && (
              <p className="text-red-600 text-sm mb-1">{errors.name.message}</p>
            )}
            <input
              {...register('name', { required: 'Full Name is required' })}
              placeholder="Full Name"
              className="border px-4 py-2 rounded w-full border-gray-300"
            />
          </div>

          {/* Email */}
          <div className="text-left">
            {errors.email && (
              <p className="text-red-600 text-sm mb-1">{errors.email.message}</p>
            )}
            <input
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
              placeholder="Email"
              className="border px-4 py-2 rounded w-full border-gray-300"
            />
          </div>

          {/* Business Type */}
          <div className="text-left">
            {errors.businessType && (
              <p className="text-red-600 text-sm mb-1">{errors.businessType.message}</p>
            )}
            <select
              {...register('businessType', {
                required: 'Business type is required',
                validate: (v) => v !== '' || 'Please select a business type',
              })}
              className="border px-4 py-2 rounded w-full border-gray-300"
            >
              <option value="">Business Type</option>
              <option value="Retail">Retail</option>
              <option value="Wholesale">Wholesale</option>
              <option value="Courier">Courier</option>
            </select>
          </div>

          {/* Message */}
          <div className="text-left">
            {errors.message && (
              <p className="text-red-600 text-sm mb-1">{errors.message.message}</p>
            )}
            <input
              {...register('message', { required: 'Message is required' })}
              placeholder="Message"
              className="border px-4 py-2 rounded w-full border-gray-300"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition-all ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        <p className="mt-4 text-sm" data-aos="fade-up" data-aos-delay="600">
          Already have an account?{' '}
          <Link to="/login" className="text-red-600 hover:underline">
            Login here
          </Link>
        </p>
      </div>
    </section>
  );
}
