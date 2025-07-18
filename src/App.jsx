import Nav from "./Components/Navbar";
import Dashboard from "./Components/Pages/Dashboard";
import Incidents from "./Components/Pages/Incidents";
import GetStarted from "./Components/Pages/GetStarted/GetStarted";
import Step1 from "./Components/Pages/GetStarted/Step1";
function App() {
  return (
    <>
      <Nav />
      {/* <Dashboard /> */}
      {/* <Incidents /> */}
      {/* <GetStarted /> */}
      <Step1 />
    </>
  );
}

export default App;
