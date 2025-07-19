import { Input, Select, Button } from "@heroui/react";
import { CiSearch } from "react-icons/ci";
import Cards from "../Cards";
import { motion } from "framer-motion";

function Dashboard() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {/* page tittle section */}
        <div className="bg-zinc-200 dark:bg-zinc-800">
          <div className="max-w-7xl mx-auto py-6 px-6 ">
            <div className="sm:flex justify-between  md:grid grid-cols-2 ">
              <div>
                <p className="text-zinc-500">Welcome back</p>
                <h1 className="text-3xl font-semibold">Dashboard</h1>
              </div>
              <div className="flex justify-end items-center grow space-x-2">
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
                  label="Sort by:"
                  classNames={{
                    base: "max-w-full sm:max-w-[10rem]  h-10",
                    trigger:
                      "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    value: "text-small",
                  }}
                  size="sm"></Select>
                <Button className="bg-orange-600 py-6 px-10 mt-2">
                  Cypher Ai
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* card section */}
        <div>
          <Cards />
        </div>
      </motion.section>
    </>
  );
}

export default Dashboard;
