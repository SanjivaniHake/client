// src/pages/SignUp.tsx
import { useNavigate } from 'react-router-dom';
import { signup } from '@/api/auth';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData: {
    name: string;
    email: string;
    password: string;
  }) => {
    try {
      const response = await signup(formData);
      console.log('Signup successful:', response);

      // Optional: show success message here

      // Redirect to login after signup
      navigate('/login');
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left side - Image */}
            <div className="w-full md:w-1/2">
              <img
                src="https://www.bigcmobiles.com/media/catalog/product/cache/c0cc839bc7fac22c5565a0db476eb91e/v/i/vivo_y300_plus_5g_silk_green_-1.jpg"
                alt="Shopping Illustration"
                className="w-full h-auto max-h-[600px] object-cover rounded-md"
              />
            </div>

            {/* Right side - Sign up form */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <SignUpForm onSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
