// import React from 'react';

interface StatusBadgeProps {
  status: 'Pending' | 'In Transit' | 'Delivered';
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const getColor = () => {
    switch (status) {
      case 'Pending': return 'bg-yellow-500';
      case 'In Transit': return 'bg-blue-500';
      case 'Delivered': return 'bg-swiftRed';
      default: return 'bg-gray-500';
    }
  };

  return (
    <span className={`px-2 py-1 text-white text-xs rounded ${getColor()}`}>
      {status}
    </span>
  );
};

export default StatusBadge;
