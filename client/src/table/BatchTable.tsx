import axios from "axios";
import { useEffect, useState } from "react";
interface BatchInterface {
  _id: string;
  batchName: string;
  totalStudents: string;
}
function BatchTable() {
  const [loading, setLoading] = useState(true);
  const [batches, setBatches] = useState<BatchInterface[]>([]);
  const getData = async () => {
    const res = await axios.get<BatchInterface[]>(
      "https://ideamagix-ecru.vercel.app/api/batches"
    );
    setBatches(res.data);
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="bg-white rounded-md p-4 sm:p-8 pb-10 ">
      <h2 className="text-base font-semibold leading-7 text-gray-900">
        List of Courses
      </h2>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Use a permanent address where you can receive mail.
      </p>
      <div className="mt-10 relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Batch name
              </th>
              <th scope="col" className="px-6 py-3">
                Total students
              </th>
            </tr>
          </thead>
          <tbody>
            {batches.map((value, i) => (
              <tr
                key={i}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {value.batchName}
                </th>
                <td className="px-6 py-4">{value.totalStudents}</td>
              </tr>
            ))}
          </tbody>
        </table>
        {loading && <p className="text-center my-10">Loading...</p>}
        {!loading && batches.length === 0 && (
          <p className="text-center my-10">🚫No data</p>
        )}
      </div>
    </div>
  );
}

export default BatchTable;
