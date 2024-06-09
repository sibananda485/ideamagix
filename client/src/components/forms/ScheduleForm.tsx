import { useForm, SubmitHandler } from "react-hook-form";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
type Inputs = {
  date: Date;
  batch: string;
  course: string;
  instructors: string;
};
interface CourseInterface {
  _id: string;
  courseName: string;
  description: string;
  image: string;
  level: string;
  batches: { _id: string; batchName: string }[];
}
interface InstructorInterface {
  _id: string;
  email: string;
  name: string;
}
export default function ScheduleForm() {
  const [courses, setCourses] = useState<CourseInterface[]>([]);
  const [instructor, setInstructor] = useState<InstructorInterface[]>([]);
  const getCourses = async () => {
    const res = await axios.get<CourseInterface[]>(
      "https://ideamagix-ecru.vercel.app/api/courses"
    );
    setCourses(res.data);
  };
  const getInstructor = async () => {
    const res = await axios.get<InstructorInterface[]>(
      "https://ideamagix-ecru.vercel.app/api/instructor"
    );
    setInstructor(res.data);
  };
  useEffect(() => {
    getInstructor();
    getCourses();
  }, []);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);
    // return;
    try {
      const res = await axios.post(
        "https://ideamagix-ecru.vercel.app/api/schedule",
        data
      );
      console.log(data);
      if (res.status === 200 && res.data.message === "Not possible") {
        toast.error(
          "Instructor has already scheduled for course " +
            res.data.data[0].course.courseName +
            " on " +
            data.date
        );
        return;
      }
      if (res.status === 201) {
        reset();
        toast.success("Lecture scheduled sucessfully");
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
  useEffect(() => {
    setValue("batch", "");
  }, [watch("course")]);
  return (
    <div className="bg-white rounded-md p-4 sm:p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="w- mx-auto">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base sm:text-xl font-semibold leading-7 text-gray-900">
              Create a Schedule
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-600">
              Use a permanent address where you can receive mail.
            </p>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
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
                    {...register("course", {
                      required: { value: true, message: "course is required" },
                    })}
                    autoComplete="country-name"
                    className={`px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6 ${
                      errors.course && "outline-red-600"
                    }`}
                  >
                    <option value="">Select a course</option>
                    {courses.map((value, i) => (
                      <option key={i} value={value._id}>
                        {value.courseName}
                      </option>
                    ))}
                  </select>
                  <p className="text-red-700 text-sm">
                    {errors.course && errors.course.message}
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 ">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Batch
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    {...register("batch", {
                      required: { value: true, message: "batch is required" },
                    })}
                    autoComplete="country-name"
                    className={`px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6 ${
                      errors.batch && "outline-red-600"
                    }`}
                  >
                    <option value="">Select a batch</option>
                    {courses
                      .find((course) => course._id === watch("course"))
                      ?.batches.map((value, i) => (
                        <option key={i} value={value._id}>
                          {value.batchName}
                        </option>
                      ))}
                  </select>
                  <p className="text-red-700 text-sm">
                    {errors.batch && errors.batch.message}
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 ">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Instructor
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    {...register("instructors", {
                      required: {
                        value: true,
                        message: "instructors is required",
                      },
                    })}
                    autoComplete="country-name"
                    className={`px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6 ${
                      errors.instructors && "outline-red-600"
                    }`}
                  >
                    <option value="">Select a instructor</option>
                    {instructor.map((value, i) => (
                      <option key={i} value={value._id}>
                        {value.name}
                      </option>
                    ))}
                  </select>
                  <p className="text-red-700 text-sm">
                    {errors.instructors && errors.instructors.message}
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 ">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Date
                </label>
                <div className="mt-2">
                  <input
                    type="date"
                    {...register("date", {
                      required: {
                        value: true,
                        message: "date is required",
                      },
                    })}
                    id=""
                    className={`px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6 ${
                      errors.date && "outline-red-600"
                    }`}
                  />
                  <p className="text-red-700 text-sm">
                    {errors.date && errors.date.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-x-6">
          <button
            disabled={isSubmitting}
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isSubmitting ? "Creating.." : "Create"}
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
