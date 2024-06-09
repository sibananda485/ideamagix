import axios from "axios";
import { useEffect, useState } from "react";
interface ScheduleInterface {
  _id: string;
  date: string;
  batch: {
    batchName: string;
  };
  course: {
    courseName: string;
  };
  instructors: {
    name: "Sibananda sahu";
  };
}
function ScheduleTable() {
  const [schedule, setSchedule] = useState<ScheduleInterface[]>([]);
  const getData = async () => {
    const res = await axios.get<ScheduleInterface[]>(
      "http://localhost:8000/api/schedule"
    );
    setSchedule(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-white rounded-md p-8">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        List of Schedules
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Use a permanent address where you can receive mail.
      </p>
      <div className="mt-10 relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Date
              </th>
              <th scope="col" className="px-6 py-3">
                Course
              </th>
              <th scope="col" className="px-6 py-3">
                Batch
              </th>
              <th scope="col" className="px-6 py-3">
                Instructor
              </th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((value, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {value.date}
                </th>
                <td className="px-6 py-4">{value.course.courseName}</td>
                <td className="px-6 py-4">{value.batch.batchName}</td>
                <td className="px-6 py-4">{value.instructors.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ScheduleTable;
