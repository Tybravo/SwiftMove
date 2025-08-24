import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; 
import { FaShip, FaTruck, FaDollarSign, FaUsers } from 'react-icons/fa'; 
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { LatLngExpression } from 'leaflet';

// Sample data for monthly revenue chart
const revenueData = [
  { month: 'Jan', revenue: 4000 },
  { month: 'Feb', revenue: 3000 },
  { month: 'Mar', revenue: 5000 },
  { month: 'Apr', revenue: 4500 },
  { month: 'May', revenue: 6000 },
  { month: 'Jun', revenue: 5500 },
  { month: 'Jul', revenue: 7000 },
  { month: 'Aug', revenue: 6500 },
];

// Sample driver locations for the map (latitude, longitude, driver info)
// In a real scenario, fetch this from your backend API
const driverLocations = [
  { position: [51.505, -0.09], name: 'Driver 1', status: 'En route from Pickup A to Destination B' },
  { position: [51.51, -0.1], name: 'Driver 2', status: 'En route from Pickup C to Destination D' },
];

function ChangeView({ center, zoom }: { center: LatLngExpression; zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const AdminDashboard = () => {
  const [mapCenter, setMapCenter] = useState<LatLngExpression>([51.505, -0.09]);

  useEffect(() => {
    document.title = 'Admin Dashboard - SwiftMove'; // Set the tab title

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setMapCenter([latitude, longitude]);
        },
        () => {
          console.error('Error: The Geolocation service failed.');
        }
      );
    } else {
      console.error("Error: Your browser doesn't support geolocation.");
    }
  }, []); // Empty dependency array ensures it runs once on mount

  return (
    <div className="p-4">
      {/* 4 Cards Section - Responsive grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Total Shipments Card */}
        <div className="bg-white p-4 rounded shadow flex justify-between items-start">
          <div className="flex flex-col">
            <p className="text-2xl font-medium">755</p>
            <p className="text-sm text-gray-600">Total Shipments</p>
            <Link to="/shipments" className="text-blue-500 text-sm mt-2">View more</Link>
          </div>
          <FaShip className="text-4xl text-gray-500" />
        </div>

        {/* Total Deliveries Card */}
        <div className="bg-white p-4 rounded shadow flex justify-between items-start">
          <div className="flex flex-col">
            <p className="text-2xl font-medium">758</p>
            <p className="text-sm text-gray-600">Total Deliveries</p>
            <Link to="/deliveries" className="text-blue-500 text-sm mt-2">View more</Link>
          </div>
          <FaTruck className="text-4xl text-gray-500" />
        </div>

        {/* Total Revenue Card */}
        <div className="bg-white p-4 rounded shadow flex justify-between items-start">
          <div className="flex flex-col">
            <p className="text-2xl font-medium">$12,500</p>
            <p className="text-sm text-gray-600">Total Revenue</p>
            <Link to="/revenue" className="text-blue-500 text-sm mt-2">View more</Link>
          </div>
          <FaDollarSign className="text-4xl text-gray-500" />
        </div>

        {/* All Drivers Card */}
        <div className="bg-white p-4 rounded shadow flex justify-between items-start">
          <div className="flex flex-col">
            <p className="text-2xl font-medium">45</p>
            <p className="text-sm text-gray-600">All Drivers</p>
            <Link to="/drivers" className="text-blue-500 text-sm mt-2">View more</Link>
          </div>
          <FaUsers className="text-4xl text-gray-500" />
        </div>
      </div>

      {/* Two Main Sections: Revenue Graph (Left) and Map (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Monthly Revenue Graph Card */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Monthly Revenue</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="revenue" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Driver Tracking Map Card */}
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-4">Driver Locations</h2>
          <MapContainer center={mapCenter} zoom={13} style={{ height: '300px', width: '100%' }}>
            <ChangeView center={mapCenter} zoom={13} />
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {driverLocations.map((driver, index) => (
              <Marker key={index} position={driver.position as LatLngExpression}>
                <Popup>
                  <b>{driver.name}</b><br />
                  {driver.status}
                </Popup>
              </Marker>
            ))}
            <Marker position={mapCenter}>
              <Popup>You are here</Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
