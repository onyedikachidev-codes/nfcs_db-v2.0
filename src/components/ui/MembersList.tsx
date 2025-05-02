"use client";
import { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

import Modal from "./Modal";
import Pagination from "./Pagination";
import Sort from "./Sort";
import ThreeDotsModal from "./ThreeDotsModal";

import { Montserrat } from "next/font/google";
import SearchBig from "./SearchBig";
import { searchMembersByName } from "../lib/data-services";

const mons = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

function MembersList({ members, count, sortField, sortOrder }) {
  //Modal Window
  const [isModalOpen, setModalOpen] = useState(false);
  const [activeThreeDotsModal, setActiveThreeDotsModal] = useState(null);

  const [value, setValue] = useState("Search for name");
  const [errorText, setErrorText] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (value && value.length > 3) {
      const fetchData = async () => {
        const data = await searchMembersByName(value);
        setResults(data);
      };

      fetchData();
    } else {
      setResults([]);
    }
  }, [value]);

  return (
    <div className="mt-10 mb-8">
      <h2
        className={`${mons.className} mx-10 pb-6 text-4xl font-serif font-semibold text-gray-800 dark:text-accent-500 uppercase`}
      >
        All Members
      </h2>
      <div className="flex justify-between mb-10 items-center mx-10">
        <div className="bg-blue-800">
          <SearchBig
            value={value}
            setValue={setValue}
            errorText={errorText}
            setErrorText={setErrorText}
          />
        </div>
        <div className="flex gap-10">
          <button
            className={`${mons.className} bg-blue-800 hover:bg-blue-600  py-[0.6rem] text-lg rounded-lg px-3 text-gray-50 focus:outline-none`}
            onClick={() => setModalOpen(true)}
          >
            Add new member
          </button>
          <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
          <Sort members={members} sortField={sortField} sortOrder={sortOrder} />
        </div>
      </div>

      <table className="w-[93%] table-auto text-left mx-10 my-4 bg-white dark:bg-gray-700">
        <thead
          className={`uppercase text-xl font-medium text-gray-700 bg-gray-200 dark:bg-gray-600 dark:text-white ${mons.className}`}
        >
          <tr>
            <th className="pl-6 pr-2 py-4">Name</th>
            <th className="px-4 py-4">Level</th>
            <th className="px-5 py-4">D.O.B</th>
            <th className="px-3 py-4">Number</th>
            <th className="px-3 py-4">&nbsp;</th>
          </tr>
        </thead>

        <tbody>
          {results.length > 0
            ? results.map((member, index) => (
                <tr key={member.id} className="border-b dark:border-gray-600">
                  <td
                    className={`pl-6 pr-2 py-5 font-semibold text-gray-700 dark:text-gray-100 text-xl ${mons.className}`}
                  >
                    {member.name}
                  </td>
                  <td className="px-7 py-5">
                    <div className={`text-xl font-medium ${mons.className}`}>
                      {member.level}
                    </div>
                  </td>
                  <td
                    className={`px-2 py-5 text-lg font-medium ${mons.className}`}
                  >
                    {member.date}
                  </td>
                  <td
                    className={`px-2 py-5 text-lg font-medium ${mons.className}`}
                  >
                    {member.phoneNumber}
                  </td>
                  <td className="pr-2 py-5 text-right">
                    <div
                      onClick={() =>
                        setActiveThreeDotsModal(
                          activeThreeDotsModal === member.id ? null : member.id
                        )
                      }
                      className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 py-2 flex items-center justify-center relative"
                    >
                      <BsThreeDotsVertical />
                    </div>
                    {activeThreeDotsModal === member.id && (
                      <div className="absolute z-[400] left-[67.5rem]">
                        <ThreeDotsModal
                          member={member}
                          isOpen={activeThreeDotsModal === member.id}
                          onClose={() => setActiveThreeDotsModal(null)}
                        />
                      </div>
                    )}
                  </td>
                </tr>
              ))
            : members.map((member, index) => (
                <tr key={member.id} className="border-b dark:border-gray-600">
                  <td
                    className={`pl-6 pr-2 py-5 font-semibold text-gray-700 dark:text-gray-100 text-xl ${mons.className}`}
                  >
                    {member.name}
                  </td>
                  <td className="px-7 py-5">
                    <div className={`text-xl font-medium ${mons.className}`}>
                      {member.level}
                    </div>
                  </td>
                  <td
                    className={`px-2 py-5 text-lg font-medium ${mons.className}`}
                  >
                    {member.date}
                  </td>
                  <td
                    className={`px-2 py-5 text-lg font-medium ${mons.className}`}
                  >
                    {member.phoneNumber}
                  </td>
                  <td className="pr-2 py-5 text-right">
                    <div
                      onClick={() =>
                        setActiveThreeDotsModal(
                          activeThreeDotsModal === member.id ? null : member.id
                        )
                      }
                      className="cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 py-2 flex items-center justify-center relative"
                    >
                      <BsThreeDotsVertical />
                    </div>
                    {activeThreeDotsModal === member.id && (
                      <div className="absolute z-[400] left-[67.5rem]">
                        <ThreeDotsModal
                          member={member}
                          isOpen={activeThreeDotsModal === member.id}
                          onClose={() => setActiveThreeDotsModal(null)}
                        />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
        </tbody>
      </table>

      <div className="w-[93%] mx-10 my-4 bg-white dark:bg-gray-600">
        <Pagination members={members} count={count} />
      </div>
    </div>
  );
}

export default MembersList;
