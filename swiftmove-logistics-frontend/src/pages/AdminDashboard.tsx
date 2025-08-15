import { useEffect } from 'react';
import StatusBadge from '../components/common/StatusBadge';

const AdminDashboard = () => {
  useEffect(() => {
    document.title = 'SwiftMove - Admin Dashboard'; // Set the tab title
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Total Deliveries</h2>
          <p className="text-2xl">758</p>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold">Pending</h2>
          <StatusBadge status="Pending" />
        </div>
        {/* Add more sections for charts and mail as needed */}
      </div>
    </div>
  );
};

export default AdminDashboard;
