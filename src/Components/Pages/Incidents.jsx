import { Input, Select, Button } from "@heroui/react";
import { Link, Outlet } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import Cards from "../Cards";
function Incidents() {

  return (
    <>
      <section>
          <div className="bg-zinc-200 dark:bg-zinc-800 ">
            <div className="max-w-7xl mx-auto py-6 px-6 ">
              {/* page tittle section */}
              <div className="sm:flex justify-between  md:grid grid-cols-5 ">
                <div>
                  <p className="text-zinc-500">
                    Home <span>-</span> Incidents
                  </p>
                  <h1 className="text-3xl font-semibold">Incidents</h1>
                </div>
                <div className="flex justify-end items-center grow-2 space-x-2 col-span-4">
                  <Input
                    classNames={{
                      base: "max-w-full sm:max-w-[10rem] mt-2 h-12",
                      mainWrapper: "h-full",
                      input: "text-small",
                      inputWrapper:
                        "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<CiSearch size={24} />}
                    type="search"
                  />
                  <Select
                    label="Sort by: "
                    classNames={{
                      base: "max-w-full sm:max-w-[10rem]  h-10",
                      trigger:
                        "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                      value: "text-small",
                    }}
                    size="sm"></Select>
                  <Link to="/getstarted">
                    <Button className="bg-orange-600 py-6 px-10 mt-2">
                      <span className="text-2xl">+</span>New Incident
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        {/* card section */}
        <div><Outlet /> <Cards /></div>
      </section>
    </>
  );
}

export default Incidents;
