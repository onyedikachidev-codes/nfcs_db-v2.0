"use client";

import { FaTimes } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import { updateMemberFromClient } from "@/lib/actions";
import { faculties, statesOfNigeria } from "@/app/_constants";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  member: {
    id: number;
    name: string;
    level: number;
    date: string;
    phoneNumber: string;
    faculty: string;
    state: string;
  };
}

export default function EditForm({ isOpen, onClose, member }: Props) {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: member.name,
      level: member.level,
      date: member.date,
      phoneNumber: member.phoneNumber,
      faculty: member.faculty,
      state: member.state,
    },
  });

  if (!isOpen) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    try {
      await updateMemberFromClient({ ...data, id: member.id });
      onClose();
    } catch (error) {
      console.error("Failed to update member:", error);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50">
      <div className="bg-white dark:bg-primary-700 rounded-lg min-h-[94dvh] w-[34rem] p-6 space-y-4">
        <div className="flex relative items-center">
          <button
            onClick={onClose}
            className="absolute right-4 text-black hover:text-red-700 dark:text-white dark:hover:text-red-500"
          >
            <FaTimes />
          </button>
          <h2 className="text-2xl font-medium font-serif dark:text-accent-400">
            Edit Member
          </h2>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-start dark:text-gray-100">
              Fullname
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              className="mt-1 w-full border border-gray-300 rounded-md dark:bg-transparent dark:border-gray-600 dark:text-gray-100 p-2"
              placeholder="Enter fullname"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="faculty" className="text-start">
              Faculty
            </label>
            <Controller
              name="faculty"
              control={control}
              rules={{ required: "Faculty is required" }}
              render={({ field }) => (
                <select
                  {...field}
                  className="p-2 border rounded-md dark:bg-transparent dark:border-gray-600 dark:text-gray-100 border-gray-200 cursor-pointer"
                >
                  <option value="" disabled>
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

          <div className="flex gap-3">
            <div className="w-[49%]">
              <label className="block text-start">Level</label>
              <input
                type="number"
                {...register("level", { required: "Level is required" })}
                className="mt-1 w-full border border-gray-300 rounded-md dark:bg-transparent dark:border-gray-600 dark:text-gray-100 p-2"
                placeholder="Enter the level"
              />
            </div>

            <div className="w-[49%]">
              <label className="block text-start">Phone Number</label>
              <input
                type="text"
                {...register("phoneNumber", {
                  required: "Phone number is required",
                })}
                placeholder="Enter Phone number"
                className="mt-1 w-full border border-gray-300 rounded-md dark:bg-transparent dark:border-gray-600 dark:text-gray-100 p-2"
              />
            </div>
          </div>

          <div className="flex gap-3">
            <div className="w-[49%]">
              <label className="block text-start">Date of Birth</label>
              <input
                type="date"
                {...register("date", { required: "Date is required" })}
                className="mt-1 w-full border border-gray-300 rounded-md dark:bg-transparent dark:border-gray-600 dark:text-gray-100 p-[6.5px]"
              />
            </div>

            <div className="flex flex-col w-[49%] gap-1">
              <label htmlFor="state" className="text-start">
                State of Origin
              </label>
              <Controller
                name="state"
                control={control}
                rules={{ required: "State is required" }}
                render={({ field }) => (
                  <select
                    {...field}
                    className="p-2 border rounded-md dark:bg-transparent dark:border-gray-600 dark:text-gray-100 border-gray-200 cursor-pointer"
                  >
                    <option value="" disabled>
                      Choose a State
                    </option>
                    {statesOfNigeria.map((state) => (
                      <option
                        key={state}
                        value={state}
                        className="dark:bg-gray-700"
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
              className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-500"
            >
              Edit member
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
