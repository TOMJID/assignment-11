import incidents from "../assets/incidents.json";
import { Card } from "@heroui/react";

function Cards() {
  return (
    <>
      <div className="max-w-7xl mx-auto py-6 px-6 ">
        <div className="flex justify-around xl:justify-start flex-wrap gap-4 items-center">
          {incidents.map((incident) => (
            <Card
              isPressable
              shadow="none"
              key={incident["id"]}
              className="group hover:scale-105 transition-all flex flex-col justify-center items-start w-72 rounded-t-xl rounded-b-lg cursor-pointer">
              <div className="relative">
                <img
                  src={incident["img-url"]}
                  className="rounded-t-xl p-0.5 "
                />
                <img
                  src="/badge.svg"
                  alt="badge"
                  className="absolute top-2 right-2  group-hover:scale-90 transition-all"
                />
              </div>
              <div className="space-x-2 mt-1 capitalize text-start px-2">
                <h2 className="text-lg font-semibold">{incident["tittle"]}</h2>
                <h5 className="text-zinc-400 text-sm mb-1">
                  {incident["location"]}
                </h5>
                <h6 className="text-lg font-semibold">
                  {new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                    minimumFractionDigits: 0,
                    maximumFractionDigits: 0,
                  }).format(incident["cost"])}
                </h6>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
