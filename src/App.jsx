import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Components/Navbar";
import ErrorPage from "./Components/Pages/ErrorPage";
import Dashboard from "./Components/Pages/Dashboard";
import Incidents from "./Components/Pages/Incidents";
import GetStarted from "./Components/Pages/GetStarted/GetStarted";
import Step1 from "./Components/Pages/GetStarted/Step1";
import Step2 from "./Components/Pages/GetStarted/Step2";
import Step3 from "./Components/Pages/GetStarted/Step3";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes with the main shared Navbar */}
        <Route path="/" element={<Nav />}>
          <Route index element={<Dashboard />} />
          <Route path="incidents" element={<Incidents />}>
            {/* Child route renders inside Incidents's <Outlet /> */}
            <Route path="new" element={<GetStarted />} />
            <Route path="step1" element={<Step1 />} />
            <Route path="step2" element={<Step2 />} />
            <Route path="step3" element={<Step3 />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
