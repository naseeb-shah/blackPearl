import React from "react";
import { useSelector } from "react-redux";
import {
  LineChart,
  CartesianGrid,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CustomLineChart = () => {
  const { lineChartData } = useSelector((data) => data.dashboardSlice);
  
  const dataTest = lineChartData.map((data, i) => {
    return {
      name: data.x,
      uv: data.y,
    };
  });
  return (
    <div className="bg-white p-4 rounded shadow h-100">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          width={500}
          height={200}
          data={dataTest}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;
