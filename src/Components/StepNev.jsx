import { Button } from "@heroui/button";
import { IoClose } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
function StepNev({ progress = 0 }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (progress > 66) {
      // From step 3 to 2
      navigate("/getstarted/step2");
    } else if (progress > 33) {
      // From step 2 to 1
      navigate("/getstarted/step1");
    }
  };

  const handleNext = () => {
    if (progress < 66) {
      // From step 1 to 2
      navigate("/getstarted/step2");
    } else if (progress < 100) {
      // From step 2 to 3
      navigate("/getstarted/step3");
    } else {
      // Finished - navigate back to incidents list
      navigate("/incidents");
    }
  };

  return (
    <div className=" bg-zinc-200 ">
      <div className="p-6 max-w-7xl mx-auto">
        <div className="md:flex justify-between items-center">
          {/* page title */}
          <div className="flex justify-start items-center space-x-4">
            <Link
              to="/incidents"
              className="bg-zinc-50 w-12 h-12  rounded-full flex justify-center items-center text-zinc-500 cursor-pointer">
              <IoClose className="size-6" />
            </Link>
            <div>
              <p className="text-zinc-500">
                Home<span>-</span> Incident<span>-</span>New Incident
              </p>
              <h1 className="text-3xl font-semibold">New Incident</h1>
            </div>
          </div>
          {/* progress bar */}
          <div className="py-6 grow px-8 flex pb-2">
            <div className="w-full bg-gray-300 rounded-sm h-2 overflow-hidden">
              <div
                className="h-full bg-orange-400 transition-all duration-500 ease-in-out"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
          {/* steps btns */}
          <div className="space-x-4 mx-auto mt-2 md:mt-0 md:block flex items-center justify-center">
            <Button
              onClick={handleBack}
              disabled={progress < 34}
              radius="sm"
              variant="bordered"
              className=" py-6 px-10 mt-2">
              back
            </Button>
            <Button
              onClick={handleNext}
              radius="sm"
              className="bg-orange-600 py-6 px-10 mt-2">
              {progress === 100 ? "Finished" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StepNev;
