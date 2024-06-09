import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
interface CourseInterface {
  _id: string;
  courseName: string;
  description: string;
  image: string;
  level: string;
}
type Inputs = {
  batchName: string;
  totalStudents: string;
  courseId: string;
};

export default function BatchForm() {
  const [courses, setCourses] = useState<CourseInterface[]>([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    // return;
    try {
      const res = await axios.post("http://localhost:8000/api/batches", data);
      console.log(data);
      if (res.status === 201) {
        reset();
        toast.success("Course created sucessfully");
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error.response?.data.message || "An error occurred");
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };
  const getCourses = async () => {
    const res = await axios.get<CourseInterface[]>(
      "http://localhost:8000/api/courses"
    );
    setCourses(res.data);
  };
  useEffect(() => {
    getCourses();
  }, []);
  return (
    <div className="bg-white rounded-md p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="w- mx-auto">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Create a Batch
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Batch name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register("batchName", {
                      required: {
                        value: true,
                        message: "batch name is required",
                      },
                    })}
                    id="first-name"
                    autoComplete="given-name"
                    className={`px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                      errors.batchName && "outline-red-600"
                    }`}
                  />
                  <p className="text-red-700 text-sm">
                    {errors.batchName && errors.batchName.message}
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 ">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Course
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    {...register("courseId", {
                      required: { value: true, message: "course is required" },
                    })}
                    autoComplete="country-name"
                    className={`px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6 ${
                      errors.courseId && "outline-red-600"
                    }`}
                  >
                    <option value="">Choose a course</option>
                    {courses.map((value, i) => (
                      <option key={i} value={value._id}>
                        {value.courseName}
                      </option>
                    ))}
                  </select>
                  <p className="text-red-700 text-sm">
                    {errors.courseId && errors.courseId.message}
                  </p>
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Total students
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    {...register("totalStudents", {
                      required: {
                        value: true,
                        message: "total student is required",
                      },
                      min: { value: 1, message: "must be atleast 1" },
                    })}
                    id="last-name"
                    autoComplete="family-name"
                    className={`px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                      errors.totalStudents && "outline-red-600"
                    }`}
                  />
                  <p className="text-red-700 text-sm">
                    {errors.totalStudents && errors.totalStudents.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-x-6">
          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create
          </button>
          <button
            type="button"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
