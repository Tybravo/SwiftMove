import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaTruck, FaClipboardCheck, FaUsers, FaEnvelope, FaCog, FaSignOutAlt } from 'react-icons/fa'; // Added FaSignOutAlt for logout icon

interface SidebarProps {
  isCollapsed: boolean;
}

const SidebarAdmin = ({ isCollapsed }: SidebarProps) => {
  const menuItems = [
    { path: '/admin/dashboard', icon: FaTachometerAlt, text: 'Dashboard' },
    { path: '/admin/deliveries', icon: FaTruck, text: 'All Deliveries' },
    { path: '/admin/deliveries/assigned', icon: FaClipboardCheck, text: 'Assigned Deliveries' },
    { path: '/admin/drivers', icon: FaUsers, text: 'Drivers' },
    { path: '/admin/messages', icon: FaEnvelope, text: 'Messages' },
    { path: '/admin/settings', icon: FaCog, text: 'Settings' },
  ];

  return (
    <aside className={`bg-swiftGreen text-white h-screen p-4 transition-all duration-300 ${isCollapsed ? 'w-15' : 'w-42'}`}>
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`flex items-center p-2 hover:bg-swiftRed rounded ${isCollapsed ? 'justify-center' : 'justify-start'}`}
            >
              <item.icon className="text-white text-lg mr-2" />
              {!isCollapsed && <span className="text-white">{item.text}</span>}
            </Link>
          </li>
        ))}
        {/* Logout Button */}
        <li>
          <Link
            to="/logout"
            className={`flex items-center p-2 hover:bg-swiftRed rounded ${isCollapsed ? 'justify-center' : 'justify-start'}`}
          >
            <FaSignOutAlt className="text-white text-lg mr-2" />
            {!isCollapsed && <span className="text-white">Logout</span>}
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SidebarAdmin;
