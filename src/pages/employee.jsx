import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "../components/loadHome";
import Navbar from "../components/navbar";
import Sidebar from "../components/sideBar";
import {
  FiSearch,
  FiX,
  FiPlus,
  FiEdit2,
  FiTrash2,
  FiUsers,
} from "react-icons/fi";

function Employee() {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  // Fetch all employees
  const fetchEmployees = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/employees");
      setEmployees(res.data);
    } catch (error) {
      console.error("Fetch error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  // Delete employee
  async function handleDelete(employeeId) {
    try {
      await axios.delete("http://localhost:5000/api/employees/" + employeeId);
      toast.success("Employee deleted successfully");
      setEmployees(employees.filter((item) => item.employeeId !== employeeId));
    } catch (error) {
      console.error("Delete error:", error);
    }
  }

  // Search employees
  async function handleSearch(e) {
    const query = e.target.value;
    setSearchTerm(query);

    if (query.trim() === "") {
      fetchEmployees();
      return;
    }

    try {
      const res = await axios.get(
        "http://localhost:5000/api/employees/search/" + query
      );
      setEmployees(res.data);
    } catch (error) {
      console.error("Search error:", error);
    }
  }

  // Clear search term
  const handleClearSearch = () => {
    setSearchTerm("");
    fetchEmployees();
  };

  // Show loading component while data is being fetched
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Fixed Sidebar */}
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto pt-2 pb-6 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Fixed Header Section */}
            <div className="bg-gray-100 sticky top-0 z-10 pt-3 pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-800">
                    Employee Management
                  </h1>
                  <p className="text-gray-600 mt-1">
                    View and manage employee records
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                  <div className="relative flex-grow">
                    <input
                      type="text"
                      placeholder="Search employees..."
                      value={searchTerm}
                      onChange={handleSearch}
                      className="w-full px-4 py-2 pl-10 pr-8 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent focus:outline-none transition-all"
                    />
                    <FiSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    {searchTerm && (
                      <button
                        onClick={handleClearSearch}
                        className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 hover:text-gray-600"
                      >
                        <FiX className="w-full h-full" />
                      </button>
                    )}
                  </div>
                  <button
                    onClick={() => navigate("/add-employee")}
                    className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
                  >
                    <FiPlus className="w-5 h-5" />
                    Add Employee
                  </button>
                </div>
              </div>
            </div>

            {/* Scrollable Employee Table */}
            {/* Scrollable Employee Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                {/* This wrapper ensures columns stay aligned */}
                <div className="relative min-w-full">
                  {/* Header Table - Sticky at top */}
                  <table className="min-w-full">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[20%]">
                          Employee
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[10%]">
                          ID
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[15%]">
                          Email
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[10%]">
                          Phone
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[15%]">
                          Position
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[15%]">
                          Department
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider w-[15%]">
                          Actions
                        </th>
                      </tr>
                    </thead>
                  </table>

                  {/* Scrollable Body - Only shows scrollbar when >6 rows */}
                  <div
                    className={
                      employees.length > 6
                        ? "overflow-y-auto max-h-[420px]"
                        : ""
                    }
                  >
                    <table className="min-w-full divide-y divide-gray-200">
                      <tbody className="bg-white divide-y divide-gray-200">
                        {employees.map((item, index) => (
                          <tr
                            key={index}
                            className="hover:bg-gray-50 transition-colors"
                          >
                            <td className="px-6 py-4 whitespace-nowrap w-[20%]">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img
                                    className="h-10 w-10 rounded-full object-cover"
                                    src={item.img || "/profile.png"}
                                    alt="Profile"
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {item.firstName} {item.lastName}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-[10%]">
                              {item.employeeId}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-[15%]">
                              {item.email}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-[10%]">
                              {item.phone}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-[15%]">
                              <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                {item.position}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 w-[15%]">
                              {item.department}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium w-[15%]">
                              <div className="flex justify-end space-x-2">
                                <button
                                  onClick={() =>
                                    navigate(
                                      `/update-employee/${item.employeeId}`
                                    )
                                  }
                                  className="text-blue-600 hover:text-blue-900 bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded-md text-sm flex items-center gap-1 transition-colors"
                                >
                                  <FiEdit2 className="w-4 h-4" />
                                  Edit
                                </button>
                                <button
                                  onClick={() => handleDelete(item.employeeId)}
                                  className="text-red-600 hover:text-red-900 bg-red-50 hover:bg-red-100 px-3 py-1 rounded-md text-sm flex items-center gap-1 transition-colors"
                                >
                                  <FiTrash2 className="w-4 h-4" />
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Empty State */}
            {employees.length === 0 && (
              <div className="mt-12 text-center">
                <FiUsers className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-lg font-medium text-gray-900">
                  No employees found
                </h3>
                <p className="mt-1 text-gray-500">
                  {searchTerm
                    ? "Try a different search term"
                    : "Get started by adding a new employee"}
                </p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Employee;
