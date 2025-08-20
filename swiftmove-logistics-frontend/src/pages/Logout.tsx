import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');
    toast.success('Logged out successfully');
    navigate('/login');
  }, [navigate]);

  return null; // No UI needed, as it redirects immediately
}
