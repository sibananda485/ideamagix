import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import {
  BrowserRouter,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { CourseTab } from "./tabs/CourseTab";
import { InstructorTab } from "./tabs/InstructorTab";
import { BatchTab } from "./tabs/BatchTab";
import { ScheduleTab } from "./tabs/ScheduleTab";
import { Route, Routes } from "react-router-dom";

import Login from "./components/forms/Login";

function App() {
  const Layout = () => {
    return (
      <>
        
        <Navbar />
        <div className="md:grid grid-cols-12">
          <Sidebar />
          <div className="col-span-10 h-[92vh] p-2 sm:p-3 overflow-y-auto">
            <Outlet />
          </div>
        </div>
      </>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <h1>Home</h1>,
        },
        {
          path: "/courses",
          element: <CourseTab />,
        },
        {
          path: "/instructors",
          element: <InstructorTab />,
        },
        {
          path: "/batches",
          element: <BatchTab />,
        },
        {
          path: "/schedule",
          element: <ScheduleTab />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
