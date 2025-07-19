import { Input, Select, Button, Card, CardBody, Image } from "@heroui/react";
import { CiSearch } from "react-icons/ci";
import { FaExplosion, FaLocationDot, FaMoneyBill1 } from "react-icons/fa6";
import { motion } from "framer-motion";

function Locations() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
        {/* page tittle section */}
        <div className="bg-zinc-200 dark:bg-zinc-800">
          <div className="max-w-7xl mx-auto py-6 px-6 ">
            <div className="sm:flex justify-between  md:grid grid-cols-3 ">
              <div>
                <p className="text-zinc-500 text-[10px]">
                  Incidents - DR-4699 March 2023 Severe Storms{" "}
                </p>
                <h1 className="text-2xl font-semibold text-balance gap-2 items-center flex">
                  <FaExplosion size={36} /> DR-4699 March 2023 Severe Storms
                </h1>
              </div>
              <div className="flex justify-end items-center grow space-x-2 col-span-2">
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
                  <span className="text-2xl">+</span>New Location
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* location body section */}
        <div className="grid grid-cols-1 transition-all duration-300 ease-in-out md:grid-cols-3 xl:grid-cols-5 gap-4 mt-4 max-w-7xl mx-auto py-6 px-6">
          <div className="md:col-span-2 xl:col-span-3 space-y-6 place-content-center">
            {/* location text */}
            <div>
              <div className="flex items-center gap-6">
                <FaLocationDot
                  size={38}
                  className="bg-zinc-200 p-2 rounded-full text-zinc-600"
                />
                <div>
                  <p className="text-zinc-500">Location</p>
                  <h3 className="text-xl font-semibold">
                    Tulare County, Los Angles, CA 23415
                  </h3>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <FaMoneyBill1
                  size={38}
                  className="bg-zinc-200 p-2 rounded-full text-zinc-600"
                />
                <div>
                  <p className="text-zinc-500">Approx, Cost:</p>
                  <h3 className="text-xl font-semibold">$60,607,7456.69</h3>
                </div>
              </div>
            </div>
            {/* location description */}
            <div className="py-8 border-y-2 border-zinc-200">
              <h4 className="text-xl font-semibold mb-4">Description</h4>
              <p className="text-zinc-500 text-balance">
                On March 10, 2023, President Biden approved a major disaster
                declaration for California due to severe winter storms,
                flooding, and mudslides. This declaration made federal funding
                available to affected individuals in several counties, including
                Kern, Mariposa, Monterey, San Benito, San Joaquin, San Luis
                Obispo, Santa Barbara, Santa Clara, Santa Cruz, Tulare, and
                Ventura.
              </p>
            </div>
            {/* location card */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Locations</h3>
              <motion.div
                className="flex gap-4 flex-wrap items-center justify-around xl:justify-start"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                {[...Array(4)].map((_, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card
                      key={index}
                      isPressable
                      radius="sm"
                      shadow="none"
                      className="w-64 md:w-60 lg:w-56">
                      <Image
                        radius="none"
                        isZoomed
                        loading="lazy"
                        src={`/card${index + 1}.png`}
                        alt="img"
                        className="rounded-t-lg"
                      />
                      <div className="flex px-2 py-2 flex-col text-start items-start border-2 border-t-0 rounded-t-none rounded-lg border-zinc-200">
                        <h5 className="font-bold text-md">Whitechapel Rd.</h5>
                        <p className="text-zinc-500 ">
                          Tulare County, Los Angles, CA 23415
                        </p>
                        <h6 className="font-bold text-md mt-2">$60,607</h6>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            {/* location activities */}
            <div className="mt-12 border-y-2 border-zinc-200 py-8">
              <h3 className="text-xl font-semibold">Activities</h3>
              <p className="text-end underline text-zinc-500 cursor-pointer mb-4">
                See All
              </p>
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                {[...Array(2)].map((_, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card
                      shadow="none"
                      isPressable
                      className="flex bg-zinc-100 flex-row items-center gap-4 p-4 w-full">
                      <Image
                        loading="lazy"
                        removeWrapper
                        isZoomed
                        width={100}
                        height={100}
                        className="rounded-lg object-cover"
                        src={`/card${index + 1}.png`}
                      />
                      <CardBody className="p-0">
                        <h3 className="text-lg font-semibold">Activity name</h3>
                        <p className="text-sm text-gray-500">
                          Location name • 16.12212. -122.1424
                        </p>
                        <p className="text-lg font-bold mt-2">$ 1,4566,69</p>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
            {/* location Documents */}
            <div>
              <h3 className="text-xl font-semibold">Documents</h3>
              <p className="text-end underline text-zinc-500 cursor-pointer mb-4">
                See All
              </p>
              <motion.div
                className="space-y-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                {[...Array(2)].map((_, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card
                      shadow="none"
                      isPressable
                      className="flex bg-zinc-100 flex-row items-center gap-4 p-4 w-full">
                      <Image
                        removeWrapper
                        isZoomed
                        loading="lazy"
                        width={100}
                        height={100}
                        className="rounded-lg object-cover"
                        src={`/card${index + 3}.png`}
                      />
                      <CardBody className="p-0">
                        <h3 className="text-lg font-semibold">Document name</h3>
                        <p className="text-sm text-gray-500">
                          Location name • 16.12212. -122.1424
                        </p>
                        <p className="text-lg font-bold mt-2">$ 1,4566,69</p>
                      </CardBody>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
          <div className="xl:col-span-2">
            <p className="text-xm text-zinc-400  mt-4">Incident Map</p>
            <Image
              loading="lazy"
              isZoomed
              className="rounded-lg object-cover mx-auto"
              src="/map.png"
            />{" "}
            <div className="flex flex-row justify-around">
              <p className="text-xm text-zinc-400  mt-4">
                Start 18.1232. -188.233
              </p>{" "}
              <p className="text-xm text-zinc-400  mt-4">
                End 19.1232. -199.2323
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Locations;
