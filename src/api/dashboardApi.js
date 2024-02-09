import axios from "axios";
import reduxStore from "../store/reduxStore";
import {
  getLineChartData,
  getPieChartData,
  getTableData,
} from "../store/slices/dashboardSlice";

const api = axios.create({
  baseURL: "https://courses-data-sort-backend.vercel.app", // set your ip here
});

export const fetchTableData = async () => {
  try {
    const response = await api.get("/api/table");
    
    reduxStore.dispatch(getTableData(response.data));
  } catch (error) {
    console.error("Error fetching table data:", error);
  }
};

//chart - line
export const fetchLineChartData = async () => {
  try {
    const response = await api.get("/api/graph");
    
    
    reduxStore.dispatch(getLineChartData(response.data));

    
  } catch (error) {
    console.error("Error fetching table data:", error);
  }
};
//chart - pie
export const fetchPieChartData = async () => {
  try {
    const response = await api.get("/api/pie-chart");
  
    
    reduxStore.dispatch(getPieChartData(response.data));

    
  } catch (error) {
    console.error("Error fetching table data:", error);
  }
};
