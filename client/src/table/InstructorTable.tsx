import axios from "axios";
import { useEffect, useState } from "react";
interface InstructorInterface {
  email: string;
  name: string;
}
function InstructorTable() {
  const [loading, setLoading] = useState(true);
  const [instructor, setInstructor] = useState<InstructorInterface[]>([]);
  const getData = async () => {
    const res = await axios.get<InstructorInterface[]>(
      "https://ideamagix-ecru.vercel.app/api/instructor"
    );
    setInstructor(res.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-white rounded-md p-4 sm:p-8 pb-10 ">
      <h2 className="text-base sm:text-xl font-semibold leading-7 text-gray-900">
        List of Instructors
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Here is the list of instructors.
      </p>
      <div className="mt-10 relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Instructor name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {instructor.map((value, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {value.name}
                </th>
                <td className="px-6 py-4">{value.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && <p className="text-center my-10">Loading...</p>}
        {!loading && instructor.length === 0 && (
          <p className="text-center my-10">🚫No data</p>
        )}
      </div>
    </div>
  );
}

export default InstructorTable;
