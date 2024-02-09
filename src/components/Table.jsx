import React from "react";
import { useSelector } from "react-redux";

const Table = () => {
  const { tableData } = useSelector((data) => data.dashboardSlice);
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-r">ID</th>
            <th className="py-2 px-4 border-r">Name</th>
            <th className="py-2 px-4 border-r">Quantity</th>
            <th className="py-2 px-4">Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-[#f6f6f6]"}
            >
              <td className="py-2 px-4 border-r">{item.id}</td>
              <td className="py-2 px-4 border-r">{item.name}</td>
              <td className="py-2 px-4 border-r">{item.quantity}</td>
              <td className="py-2 px-4">{item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
