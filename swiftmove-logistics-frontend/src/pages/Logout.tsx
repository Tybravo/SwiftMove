import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Logout() {
  const navigate = useNavigate();
  const hasLoggedOut = useRef(false); // Track if logout has been triggered

  useEffect(() => {
    if (!hasLoggedOut.current) {
      hasLoggedOut.current = true; // Set flag to prevent re-execution
      localStorage.removeItem('token');
      toast.success('Logged out successfully', { toastId: 'logout-success' }); // Unique toastId to prevent duplicates
      navigate('/login');
    }

    // Cleanup function (optional, for safety)
    return () => {
      hasLoggedOut.current = false; // Reset flag on unmount
    };
  }, [navigate]);

  return null; // No UI needed, as it redirects immediately
}
