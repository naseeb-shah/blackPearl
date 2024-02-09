import React, { useEffect, useState } from "react";
import LineChart from "./LineChart";
import UserProfile from "./UserProfile";
import Table from "./Table";
import {
  fetchLineChartData,
  fetchPieChartData,
  fetchTableData,
} from "../api/dashboardApi";
import PieChartComponent from "./PieChart";
import Pagination from "./Pagination";

const Dashboard = () => {
  //below are the api calls from the given data in the backend
  useEffect(() => {
    fetchTableData();
    fetchLineChartData();
    fetchPieChartData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    console.log(`Fetching data for page ${page}`);
    setCurrentPage(page);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
        <div className="md:col-start-1 md:col-span-4">
          <LineChart />
        </div>
        <div className="md:col-end-7 md:col-span-2">
          <PieChartComponent />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
        <div className="md:col-span-3">
          <Table />
          <Pagination totalPages={10} onPageChange={handlePageChange} />
        </div>

        <div className="md:mt-0 mt-4">
          <UserProfile />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
