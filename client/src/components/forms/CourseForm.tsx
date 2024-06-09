import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
type Inputs = {
  courseName: string;
  description: string;
  image: string;
  level: string;
};
export default function CourseForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors,isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await axios.post("https://ideamagix-ecru.vercel.app/api/courses", data);
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
  return (
    <div className="bg-white rounded-md p-8">
      <form onSubmit={handleSubmit(onSubmit)} className="w- mx-auto">
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Create a Course
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
                  Course name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register("courseName", {
                      required: {
                        value: true,
                        message: "course name is required",
                      },
                    })}
                    id="first-name"
                    autoComplete="given-name"
                    className={`px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                      errors.courseName && "outline-red-600"
                    }`}
                  />
                  <p className="text-red-700 text-sm">
                    {errors.courseName && errors.courseName.message}
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3 ">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Level
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    {...register("level", {
                      required: { value: true, message: "level is required" },
                    })}
                    autoComplete="country-name"
                    className={`px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset  sm:max-w-xs sm:text-sm sm:leading-6 ${
                      errors.level && "outline-red-600"
                    }`}
                  >
                    <option value="beginner">Beginner</option>
                    <option value="intermedieate">Intermedieate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                  <p className="text-red-700 text-sm">
                    {errors.level && errors.level.message}
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Image link
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register("image")}
                    id="last-name"
                    autoComplete="family-name"
                    className={`px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                      errors.image && "outline-red-600"
                    }`}
                  />
                  <p className="text-red-700 text-sm">
                    {errors.image && errors.image.message}
                  </p>
                </div>
              </div>

              <div className="sm:col-span-5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Descriptions
                </label>
                <div className="mt-2">
                  <textarea
                    id="email"
                    {...register("description", {
                      required: {
                        value: true,
                        message: "description is required",
                      },
                    })}
                    autoComplete="email"
                    className={`px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                      errors.description && "outline-red-600"
                    }`}
                  />
                  <p className="text-red-700 text-sm">
                    {errors.description && errors.description.message}
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
            type="reset"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
