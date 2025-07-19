import StepNev from "../../StepNev";
import { useState } from "react";
import { Card } from "@heroui/react";
import { FaBiohazard, FaTemperatureHigh } from "react-icons/fa";
import { FaHouseTsunami } from "react-icons/fa6";
import { GiFallingRocks, GiBurningForest, GiVolcano } from "react-icons/gi";
import { IoSunnyOutline } from "react-icons/io5";
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

function Step1() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <>
      <section>
        <StepNev progress={33.3} />
        {/* step 1 body part */}
        <div className="max-w-5xl mx-auto py-10 px-6">
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
