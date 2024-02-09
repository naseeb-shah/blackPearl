import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../screen/Home";
import ErrorPage from "../screen/ErrorPage";

const RoutesPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesPage;
