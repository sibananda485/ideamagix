import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { BrowserRouter } from "react-router-dom";
import { CourseTab } from "./tabs/CourseTab";
import { InstructorTab } from "./tabs/InstructorTab";
import { BatchTab } from "./tabs/BatchTab";
import { ScheduleTab } from "./tabs/ScheduleTab";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Navbar />
        <div className="md:grid grid-cols-12">
          <Sidebar />
          <div className="col-span-10 h-[92vh] p-2 sm:p-3 overflow-y-auto">
            <Routes>
              <Route path="/" element={<h1>Home</h1>} />
              <Route path="/courses" element={<CourseTab />} />
              <Route path="/instructors" element={<InstructorTab />} />
              <Route path="/batches" element={<BatchTab />} />
              <Route path="/schedule" element={<ScheduleTab />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
