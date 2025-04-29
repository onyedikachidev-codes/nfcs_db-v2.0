"use client";

import { FaTimes } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";

import { updateMember } from "@/lib/actions";
import { faculties, statesOfNigeria } from "@/app/_constants";

interface Props {
  isOpen: () => void;
  onClose: () => void;
  member: {
    id: string;
    name: string;
    level: number;
    department: string;
    date: string;
    phoneNumber: string;
    faculty: string;
    state: string;
  };
}

export default function EditForm({ isOpen, onClose, member }: Props) {
  const { id, name, level, department, date, phoneNumber, faculty, state } =
    member;

  const { control } = useForm();
  if (!isOpen) return null;

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

        <form action={updateMember} onSubmit={onClose} className="space-y-4">
          <div>
            <label className="block text-start dark:text-gray-100">
              Fullname
            </label>
            <input
              type="text"
              name="name"
              defaultValue={name}
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
              defaultValue={faculty}
              rules={{ required: "Faculty selection is required" }}
              render={({ field }) => (
                <select
                  id="faculty"
                  {...field}
                  className="p-2 border rounded-md dark:bg-transparent dark:border-gray-600 dark:text-gray-100 border-gray-200 cursor-pointer"
                >
                  <option value="" disabled className="dark:bg-gray-700">
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
            <label className="block text-start">Department</label>
            <input
              type="text"
              name="department"
              defaultValue={department}
              className="mt-1 w-full border border-gray-300 rounded-md dark:bg-transparent dark:border-gray-600 dark:text-gray-100 p-2"
              placeholder="Enter Department"
            />
          </div>

          <div className="flex gap-3">
            <div className="w-[49%]">
              <label className="block text-start">Level</label>
              <input
                type="text"
                name="level"
                defaultValue={level}
                className="mt-1 w-full border border-gray-300 rounded-md dark:bg-transparent dark:border-gray-600 dark:text-gray-100 p-2"
                placeholder="Enter the level"
              />
            </div>

            <div className="w-[49%]">
              <label className="block text-start">Phone Number</label>
              <input
                type="text"
                name="phoneNumber"
                defaultValue={phoneNumber}
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
                name="date"
                defaultValue={date}
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
                defaultValue={state}
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
                        key={state}
                        className="dark:bg-gray-700"
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

          <div className="hidden">
            <input type="text" name="id" defaultValue={id} className="" />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200  rounded-md hover:bg-gray-300 dark:bg-gray-600 dark:text-white dark:hover:text-gray-700 dark:hover:bg-gray-400"
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
