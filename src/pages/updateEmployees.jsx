import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import FormLoading from "../components/loadForm";
import Navbar from "../components/navbar";

function UpdateEmployee() {
  const { employeeId } = useParams();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    position: "",
    department: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await axios.get("https://employee-management-crud-backend-production.up.railway.app/api/employees/" +employeeId);
        setFormData(response.data);
        setIsLoading(false);
      } catch (error) {
        toast.error("Failed to fetch employee data");
        navigate("/");
      }
    };

    fetchEmployee();
  }, [employeeId, navigate]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await axios.put("https://employee-management-crud-backend-production.up.railway.app/api/employees/" +employeeId, formData);
      toast.success("Employee updated successfully");
      navigate("/");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update employee");
    } finally {
      setIsSubmitting(false);
    }
  }

  const departments = [
    "Engineering",
    "Marketing",
    "Human Resources",
    "Finance",
    "Operations",
    "Sales",
    "Customer Support",
    "Product",
    "Design",
  ];

  const positions = [
    "Software Engineer",
    "Product Manager",
    "UX Designer",
    "Data Analyst",
    "Marketing Specialist",
    "HR Manager",
    "Accountant",
    "Sales Representative",
    "Customer Support Agent",
  ];

  if (isLoading) {
    return <FormLoading/>
  }

  
  return (
    <div className="flex flex-col h-screen">
    {/* Fixed Navbar */}
    <div className="fixed top-0 left-0 right-0 z-50">
      <Navbar />
    </div>
    
    <div className="flex-1 pt-30 overflow-auto bg-gray-200">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-[#0056a2]/20">
          {/* Form Header with gradient */}
          <div className="px-6 py-4 bg-gradient-to-r from-[#0056a2] to-[#00b4eb]">
            <h2 className="text-2xl font-bold text-white">Update Employee</h2>
            <p className="mt-1 text-sm text-white/90">
              Update the details for employee {employeeId}
            </p>
          </div>
          
          {/* Form Content */}
          <form onSubmit={handleSubmit} className="px-6 py-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-[#0056a2]">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-[#0056a2]/30 shadow-sm focus:border-[#00b4eb] focus:ring-[#00b4eb] sm:text-sm p-2.5 border focus:outline-none transition-all"
                  required
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-[#0056a2]">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-[#0056a2]/30 shadow-sm focus:border-[#00b4eb] focus:ring-[#00b4eb] sm:text-sm p-2.5 border focus:outline-none transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-medium text-[#0056a2]">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-[#0056a2]/30 shadow-sm focus:border-[#00b4eb] focus:ring-[#00b4eb] sm:text-sm p-2.5 border focus:outline-none transition-all"
                  required
                />
              </div>

              {/* Phone */}
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-[#0056a2]">
                  Phone <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-[#0056a2]/30 shadow-sm focus:border-[#00b4eb] focus:ring-[#00b4eb] sm:text-sm p-2.5 border focus:outline-none transition-all"
                  required
                />
              </div>

              {/* Department */}
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-[#0056a2]">
                  Department <span className="text-red-500">*</span>
                </label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-[#0056a2]/30 shadow-sm focus:border-[#00b4eb] focus:ring-[#00b4eb] sm:text-sm p-2.5 border focus:outline-none transition-all"
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map(dept => (
                    <option key={dept} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              {/* Position */}
              <div>
                <label htmlFor="position" className="block text-sm font-medium text-[#0056a2]">
                  Position <span className="text-red-500">*</span>
                </label>
                <select
                  id="position"
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-lg border-[#0056a2]/30 shadow-sm focus:border-[#00b4eb] focus:ring-[#00b4eb] sm:text-sm p-2.5 border focus:outline-none transition-all"
                  required
                >
                  <option value="">Select Position</option>
                  {positions.map(pos => (
                    <option key={pos} value={pos}>{pos}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Form Actions */}
            <div className="mt-8 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="inline-flex items-center px-4 py-2.5 border border-[#0056a2]/30 shadow-sm text-sm font-medium rounded-lg text-[#0056a2] bg-white hover:bg-[#0056a2]/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00b4eb] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`inline-flex items-center px-4 py-2.5 border border-transparent text-sm font-medium rounded-lg shadow-sm text-gray-800 bg-gray-300 hover:bg-[#3e9e36] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#50b748] transition-colors ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Updating...
                  </>
                ) : (
                  <>
                    <svg className="-ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                    Update Employee
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default UpdateEmployee;