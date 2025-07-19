import Nav from "./Components/Navbar";
import Dashboard from "./Components/Pages/Dashboard";
import Incidents from "./Components/Pages/Incidents";
import GetStarted from "./Components/Pages/GetStarted/GetStarted";
import Step1 from "./Components/Pages/GetStarted/Step1";
import Step2 from "./Components/Pages/GetStarted/Step2";
function App() {
  return (
    <>
      <Nav />
      {/* <Dashboard /> */}
      {/* <Incidents /> */}
      {/* <GetStarted /> */}
      {/* <Step1 /> */}
      <Step2 />
    </>
  );
}

export default App;
