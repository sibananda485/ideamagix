import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
type Inputs = {
  name: string;
  email: string;
};
export default function InstructorForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/instructor",
        data
      );
      console.log(data);
      if (res.status === 201) {
        reset();
        toast.success("Instructor created sucessfully");
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
              Create an Instructor
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
                  Instructor Fullname
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    {...register("name", {
                      required: { value: true, message: "name is required" },
                    })}
                    id="first-name"
                    autoComplete="given-name"
                    className={`px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                      errors.name && "outline-red-600"
                    }`}
                  />
                  <p className="text-red-700 text-sm">
                    {errors.name && errors.name.message}
                  </p>
                </div>
              </div>
              <div className="sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    {...register("email", {
                      required: { value: true, message: "email is required" },
                    })}
                    id="last-name"
                    autoComplete="family-name"
                    className={`px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6 ${
                      errors.email && "outline-red-600"
                    }`}
                  />
                  <p className="text-red-700 text-sm">
                    {errors.email && errors.email.message}
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
