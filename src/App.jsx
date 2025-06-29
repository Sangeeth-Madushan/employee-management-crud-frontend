import { BrowserRouter, Route, Routes } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import AddEmployees from "./pages/addEmployees";
import UpdateEmployee from "./pages/updateEmployees";
import Employee from "./pages/employee";

function App() {
  return (
    <BrowserRouter>
    <Toaster position="top-center" />
      <Routes>
        <Route path="/" element={<Employee/>} />
        <Route path="/add-employee" element={<AddEmployees/>} />
        <Route path="/update-employee/:employeeId" element={<UpdateEmployee/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
