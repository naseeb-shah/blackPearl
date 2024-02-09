import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboardSlice",
  initialState: {
    tableData: [],
    lineChartData: [],
    pieChartData: [],
    sidebarOpen:false,
  },
  reducers: {
    getTableData: (state, action) => {
      state.tableData = action.payload;
    },
    getLineChartData: (state, action) => {
      state.lineChartData = action.payload;
    },
    getPieChartData: (state, action) => {
      state.pieChartData = action.payload;
    },
    setSideBar: (state, action) => {
      state.sidebarOpen = action.payload;
    },
  },
});


export const { getTableData, getLineChartData, getPieChartData, setSideBar } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
