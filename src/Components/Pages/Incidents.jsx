import { Input, Select, Button } from "@heroui/react";
import { Link, Outlet, useLocation } from "react-router-dom";
import Card from "../Cards";

const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}>
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
function Incidents() {
  const location = useLocation();
  // A nested route is active if the path is not exactly '/incidents'.
  const isNestedRoute = location.pathname !== "/incidents";

  return (
    <>
      <section>
        {!isNestedRoute && (
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
                    startContent={<SearchIcon size={18} />}
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
                  <Link to="new">
                    <Button className="bg-orange-600 py-6 px-10 mt-2">
                      <span className="text-2xl">+</span>New Incident
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* card section */}
        <div>{isNestedRoute ? <Outlet /> : <Card />}</div>
      </section>
    </>
  );
}

export default Incidents;
