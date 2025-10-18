import React, { useState } from "react";
import { roomsDummyData } from "../../../public/assets";
import Title from "../../components/Title";

function ListRoom() {
  const [rooms, setRooms] = useState(roomsDummyData);
  return (
    <div>
      <Title
        font="outfit"
        title="Room listing"
        subTitle="View, edit or manage all listed room. keep
      the  information up-to-data to provide the best experience for users
      "
      ></Title>

      <p className="text-gray-300 mt-8">All Rooms</p>

      <div className="w-full mt-7 max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="py- px-4 text-gray-800 font-medium max-sm:hidden">
                Name
              </th>
              <th className="py- px-4 text-gray-800 font-medium text-center">
                Facility
              </th>
              <th className="py- px-4 text-gray-800 font-medium ">
                Price / Night
              </th>
              <th className="py- px-4 text-gray-800 font-medium text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody className="text-sm">
            {rooms.map((item, index) => (
              <tr key={index}>
                <td className=" py-3 px-4 text-gray-700 border-t border-amber-300">
                  {item.roomType}
                </td>

                <td className=" py-3 max-sm:hidden px-4 text-gray-700 border-t border-amber-300">
                  {item.amenities.join(", ")}
                </td>

                <td className=" py-3 px-4 text-gray-700 border-t text-center border-amber-300">
                  {item.pricePerNight}
                </td>

                <td className=" text-red-500 py-3 px-4  border-t border-amber-300">
                  <label
                    htmlFor=""
                    className=" relative inline-flex  items-center cursor-pointer text-gray-900 gap-3"
                  >
                    <input
                      type="checkbox"
                      className=" sr-only peer"
                      checked={item.isAvailable}
                    />

                    <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200"></div>
                    <span className=" dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:transition-x-5"></span>
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ListRoom;
