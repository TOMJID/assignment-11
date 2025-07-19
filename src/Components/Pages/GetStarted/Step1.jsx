import React, { useState } from "react";
import { Button, Card } from "@heroui/react";
import { FaBiohazard, FaTemperatureHigh } from "react-icons/fa";
import { FaHouseTsunami } from "react-icons/fa6";
import { GiFallingRocks, GiBurningForest, GiVolcano } from "react-icons/gi";
import { IoClose, IoSunnyOutline } from "react-icons/io5";
import { RiHandCoinFill } from "react-icons/ri";
import {
  WiSnow,
  WiSnowWind,
  WiSnowflakeCold,
  WiEarthquake,
  WiFlood,
  WiHail,
  WiLightning,
  WiStormShowers,
  WiStrongWind,
  WiTornado,
} from "react-icons/wi";

const incidentTypes = [
  { id: 1, label: "Avalanche", icon: WiSnow },
  { id: 2, label: "Biological", icon: FaBiohazard },
  { id: 3, label: "Blizzard", icon: WiSnowWind },
  { id: 4, label: "Cold/Freezing", icon: WiSnowflakeCold },
  { id: 5, label: "Drought", icon: IoSunnyOutline },
  { id: 6, label: "Earthquake", icon: WiEarthquake },
  { id: 7, label: "Flooding", icon: WiFlood },
  { id: 8, label: "Heat Wave", icon: FaTemperatureHigh },
  { id: 9, label: "Hail", icon: WiHail },
  { id: 10, label: "Lightning", icon: WiLightning },
  { id: 11, label: "Man Made", icon: RiHandCoinFill },
  { id: 12, label: "Mudslide", icon: GiFallingRocks },
  { id: 13, label: "Severe Storm", icon: WiStormShowers },
  { id: 14, label: "Strong Wind", icon: WiStrongWind },
  { id: 15, label: "Tornado", icon: WiTornado },
  { id: 16, label: "Tsunami", icon: FaHouseTsunami },
  { id: 17, label: "Volcanic Eruption", icon: GiVolcano },
  { id: 18, label: "Wildfire", icon: GiBurningForest },
];

function Step1({ progress = 33.3 }) {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <section>
        <div className="bg-zinc-200">
          <div className="max-w-7xl mx-auto py-6 px-6 ">
            <div className="md:flex justify-between items-center">
              {/* page title */}
              <div className="flex justify-start items-center space-x-4">
                <div className="bg-zinc-50 w-12 h-12  rounded-full flex justify-center items-center text-zinc-500 cursor-pointer">
                  <IoClose className="size-6" />
                </div>
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
                  radius="sm"
                  variant="bordered"
                  className=" py-6 px-10 mt-2">
                  back
                </Button>
                <Button radius="sm" className="bg-orange-600 py-6 px-10 mt-2">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* body part */}
        <div className="max-w-7xl mx-auto py-10 px-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold">
              Which of these best describes the incident?
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-w-4xl gap-4 mx-auto">
            {incidentTypes.map(({ id, label, icon: Icon }) => (
              <Card
                key={id}
                isPressable
                onClick={() => setSelectedId(id)}
                className={`flex flex-col items-center justify-center p-4 cursor-pointer border transition-colors ${
                  selectedId === id
                    ? "border-orange-600 bg-orange-500"
                    : "border-zinc-300 hover:border-zinc-400"
                }`}>
                <Icon
                  className={`h-6 w-6 mb-2 transition-colors ${
                    selectedId === id ? "text-zinc-200" : "text-zinc-400"
                  }`}
                />
                <p
                  className={`text-sm font-medium text-center transition-colors ${
                    selectedId === id ? "text-zinc-200" : "text-zinc-700"
                  }`}>
                  {label}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Step1;
