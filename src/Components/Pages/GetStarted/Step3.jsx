import { Card } from "@heroui/react";
import StepNev from "../../StepNev";

function Step3() {
  return (
    <>
      <section>
        <StepNev progress={100} />
        {/* step 3 body part  */}
        <div className="max-w-5xl mx-auto py-10 px-8">
          <h1 className="text-3xl font-semibold">Where's the incident?</h1>
          <p className="mb-4 text-zinc-400">
            enter a GPS, address, or pin point on the map,Try to be as Accurate
            as Possible,or click:Jurisdiction Wide
          </p>
          <Card isPressable className=" mx-auto ">
            <img src="/map.png" alt="map" className="w-full" />
          </Card>
        </div>
      </section>
    </>
  );
}

export default Step3;
