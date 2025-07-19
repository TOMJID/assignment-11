import StepNev from "../../StepNev";
import { Input, Textarea } from "@heroui/react";
function Step2() {
  return (
    <>
      <section>
        <StepNev progress={66.6} />
        {/* step 2 body part */}
        <div className="max-w-5xl mx-auto py-10 px-8 space-y-8">
          <div>
            <h1 className="text-3xl font-semibold">
              Let's give the incident a title?
            </h1>
            <p className="mb-4 text-zinc-400">
              Make a title that will easily identify the incident.
            </p>
            <Input
              placeholder="Add title here"
              variant="bordered"
              classNames={{
                input: "bg-gray-100",
                inputWrapper:
                  "bg-gray-100 hover:bg-gray-200 focus-within:!bg-gray-200",
              }}
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold">
              Describe what happened during the incident?
            </h2>
            <p className="mb-4 text-zinc-400">
              Share some information about the incident. Like when, where,how
              etc.
            </p>

            <Textarea
              placeholder="Type here"
              variant="bordered"
              minRows={4}
              classNames={{
                input: "bg-gray-100",
                inputWrapper:
                  "bg-gray-100 outline-zinc-200 hover:bg-gray-200 focus-within:!bg-gray-200 ",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Step2;
