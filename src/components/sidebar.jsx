import React, { useState } from "react";
import {
  FiMenu,
  FiChevronLeft,
  FiChevronRight,
  FiGrid,
  FiUserPlus,
  FiUsers,
  FiCalendar,
  FiCheckSquare,
  FiSettings,
} from "react-icons/fi";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-800 text-white"
      >
        <FiMenu className="h-6 w-6" />
      </button>

      <aside
        className={`${isMobileOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0 transform fixed md:relative z-40 w-50 md:w-20 
        ${isCollapsed ? "md:w-20" : "md:w-50"} bg-gray-800 text-white 
        flex flex-col h-screen transition-all duration-300 ease-in-out`}
      >
        {/* Logo/Brand */}
        <div className="flex justify-between items-center h-16 px-4">
          {(!isCollapsed || isMobileOpen) && (
            <div className="text-xl font-bold">Worksy</div>
          )}
          <button
            onClick={toggleSidebar}
            className="hidden md:block text-gray-400 hover:text-white h-full  items-center justify-center"
          >
            {isCollapsed ? (
              <FiChevronRight className="h-5 w-5" />
            ) : (
              <FiChevronLeft className="h-5 w-5" />
            )}
          </button>
        </div>

        <div className="border-b border-gray-700"></div>

        {/* Main Menu */}
        <nav className="flex-1 p-4 overflow-y-auto">
          {/* Menu Section */}
          <div
            className={`${
              isCollapsed ? "hidden" : "block"
            } text-sm font-semibold text-gray-400 mb-2`}
          >
            Menu
          </div>
          <ul>
            {[
              { icon: <FiGrid className="h-5 w-5" />, name: "Dashboard" },
              { icon: <FiUserPlus className="h-5 w-5" />, name: "Recruitment" },
              {
                icon: <FiUsers className="h-5 w-5" />,
                name: "Employee",
                active: true,
              },
              { icon: <FiCalendar className="h-5 w-5" />, name: "Attendance" },
              { icon: <FiCheckSquare className="h-5 w-5" />, name: "Task" },
              { icon: <FiSettings className="h-5 w-5" />, name: "Settings" },
            ].map((item) => (
              <li key={item.name} className="mb-2">
                <a
                  href="#"
                  className={`flex items-center p-2 rounded hover:bg-gray-700 ${
                    item.active ? "bg-gray-700 text-blue-400" : ""
                  }`}
                >
                  {item.icon}
                  {(!isCollapsed || isMobileOpen) && (
                    <span className="ml-2">{item.name}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
