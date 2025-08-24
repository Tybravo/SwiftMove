import { FaBars, FaTimes } from 'react-icons/fa'; 

interface NavbarProps {
  onToggleSidebar?: () => void;
  isCollapsed?: boolean;
}

const Navbar = ({ onToggleSidebar, isCollapsed }: NavbarProps) => {
  return (
    <nav className="bg-armyGreen text-white p-4 flex justify-between items-center">
      <div className="flex items-center">
        {onToggleSidebar && (
          <button
            onClick={onToggleSidebar}
            className="p-2 bg-swiftRed rounded hover:bg-red-700 focus:outline-none transition-transform duration-300 mr-4"
            aria-label="Toggle Sidebar"
          >
            {isCollapsed ? (
              <FaTimes className="text-white text-lg" />
            ) : (
              <FaBars className="text-white text-lg" />
            )}
          </button>
        )}
        <span className="text-xl font-bold">SwiftMove Logistics</span>
      </div>
      <div className="flex items-center space-x-4">
        {/* Tracking Search Bar and Button */}
        <div className="flex items-center bg-white rounded overflow-hidden">
          <input
            type="text"
            placeholder="Enter Tracking ID"
            className="p-2 text-black outline-none w-40 sm:w-64"
          />
          <button className="bg-blue-500 p-2 text-white hover:bg-blue-600">
            Track
          </button>
        </div>
        <span className="text-sm">Admin</span>
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          AU
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
