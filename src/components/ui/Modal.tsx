"use client";

import { FaTimes } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form";

import { createMemberProfile } from "../lib/actions";

export default function Modal({ isOpen, onClose }) {
  const faculties = [
    "Arts",
    "Education",
    "Law",
    "Management Science",
    "Media and Communication",
    "Science",
    "Social Science",
    "Transport",
  ];

  const statesOfNigeria = [
    "Abia",
    "Adamawa",
    "Akwa Ibom",
    "Anambra",
    "Bauchi",
    "Bayelsa",
    "Benue",
    "Borno",
    "Cross River",
    "Delta",
    "Ebonyi",
    "Edo",
    "Ekiti",
    "Enugu",
    "Gombe",
    "Imo",
    "Jigawa",
    "Kaduna",
    "Kano",
    "Katsina",
    "Kebbi",
    "Kogi",
    "Kwara",
    "Lagos",
    "Nasarawa",
    "Niger",
    "Ogun",
    "Ondo",
    "Osun",
    "Oyo",
    "Plateau",
    "Rivers",
    "Sokoto",
    "Taraba",
    "Yobe",
    "Zamfara",
    "Abuja",
  ];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useForm();

  const onSubmit = async (data) => {
    // Create FormData manually for the server action
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("level", data.level);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("department", data.department);
    formData.append("date", data.date);
    formData.append("faculty", data.faculty);
    formData.append("state", data.state);

    // Call server action
    const result = await createMemberProfile(formData);
    onClose();
    reset();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
      <div className="bg-white dark:bg-primary-700 rounded-lg h-[94dvh] w-[34rem] p-6 space-y-4">
        <div className="flex relative items-center">
          <button
            onClick={onClose}
            className="absolute right-4 text-black hover:text-red-700 dark:text-white dark:hover:text-red-500"
          >
            <FaTimes />
          </button>
          <h2 className="text-2xl font-medium font-serif dark:text-accent-400">
            Create New Member
          </h2>
        </div>
        <form
          action={createMemberProfile}
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <div>
            <label className="block dark:text-gray-100">Fullname</label>
            <input
              type="text"
              name="name"
              className="mt-1 w-full border rounded-md p-2 dark:bg-transparent dark:border-gray-600 dark:text-gray-100"
              required
              placeholder="Enter fullname"
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[^\s].*[^s]$/, // Regular expression to prevent leading or trailing spaces
                  message: "Name should not have trailing spaces",
                },
              })}
            />
            {errors.name && (
              <span className="text-red-600">{errors.name.message}</span>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="faculty" className="dark:text-gray-100">
              Faculty
            </label>

            <Controller
              name="faculty"
              control={control}
              defaultValue=""
              rules={{ required: "Faculty selection is required" }}
              render={({ field }) => (
                <select
                  id="faculty"
                  {...field}
                  className="p-2 border rounded-md border-gray-200 cursor-pointer dark:bg-transparent dark:border-gray-600 dark:text-gray-100"
                >
                  <option value="" className="dark:bg-gray-700" disabled>
                    Choose a faculty
                  </option>
                  {faculties.map((faculty) => (
                    <option
                      key={faculty}
                      value={faculty}
                      className="dark:bg-gray-700"
                    >
                      {faculty}
                    </option>
                  ))}
                </select>
              )}
            />
          </div>

          <div>
            <label className="block dark:text-gray-100">Department</label>
            <input
              type="text"
              required
              name="department"
              className="mt-1 w-full border rounded-md p-2 dark:bg-transparent dark:border-gray-600 dark:text-gray-100"
              placeholder="Enter Department"
              {...register("department", {
                required: "Department is required",
                pattern: {
                  value: /^[^\s].*[^s]$/, // Regular expression to prevent leading or trailing spaces
                  message: "Department should not have trailing spaces",
                },
              })}
            />
            {errors.department && (
              <span className="text-red-600">{errors.department.message}</span>
            )}
          </div>

          <div className="flex gap-3">
            <div className="w-[49%]">
              <label className="block dark:text-gray-100 ">Level</label>
              <input
                type="text"
                required
                name="level"
                className="mt-1 w-full border rounded-md dark:bg-transparent dark:border-gray-600 dark:text-gray-100 p-2"
                placeholder="Enter the level"
                {...register("level", {
                  required: "Level is required",
                  pattern: {
                    value: /^\d{3}$/,
                    message: "Level must be a 3-digit number",
                  },
                })}
              />
              {errors.level && (
                <span className="text-red-600">{errors.level.message}</span>
              )}
            </div>

            <div className="w-[49%]">
              <label className="block dark:text-gray-100 ">Phone Number</label>
              <input
                type="text"
                required
                name="phoneNumber"
                placeholder="Enter Phone number"
                className="mt-1 w-full border rounded-md dark:bg-transparent dark:border-gray-600 dark:text-gray-100 p-2"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^\d{11}$/,
                    message: "Phone number must be 11 digits",
                  },
                })}
              />
              {errors.phoneNumber && (
                <span className="text-red-600">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-[49%]">
              <label className="block dark:text-gray-100">Date of Birth</label>
              <input
                type="date"
                required
                name="date"
                className="mt-1 w-full border rounded-md dark:bg-transparent dark:border-gray-600 dark:text-gray-100 p-[6.5px]"
                {...register("date", {
                  required: "Date is required",
                })}
              />
              {errors.date && (
                <span className="text-red-600">{errors.date.message}</span>
              )}
            </div>

            <div className="flex flex-col w-[49%] gap-1">
              <label htmlFor="state" className="dark:text-gray-100">
                State of Origin
              </label>
              <Controller
                name="state"
                control={control}
                defaultValue=""
                rules={{ required: "State selection is required" }}
                render={({ field }) => (
                  <select
                    id="state"
                    className="p-2 border rounded-md dark:bg-transparent dark:border-gray-600 dark:text-gray-100 border-gray-200 cursor-pointer"
                    {...field}
                  >
                    <option value="" className="dark:bg-gray-700" disabled>
                      Choose a State
                    </option>
                    {statesOfNigeria.map((state) => (
                      <option
                        className="dark:bg-gray-700"
                        key={state}
                        value={state}
                      >
                        {state}
                      </option>
                    ))}
                  </select>
                )}
              />
            </div>
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:text-gray-700 dark:hover:bg-gray-400"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Create member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
