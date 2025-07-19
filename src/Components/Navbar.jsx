import React from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
} from "@heroui/react";

const menuItems = [
  {
    linkName: "Dashboard",
    link: "/",
  },
  {
    linkName: "Incidents",
    link: "/incidents",
  },
  {
    linkName: "Locations",
    link: "/locations",
  },
  {
    linkName: "Activities",
    link: "/activities",
  },
  {
    linkName: "Documents",
    link: "/documents",
  },
  {
    linkName: "Cpyher AI",
    link: "/cpyher-ai",
  },
];
function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  return (
    <>
      <Navbar
        maxWidth="xl"
        onMenuOpenChange={setIsMenuOpen}
        isBordered
        className="bg-zinc-200 shadow-sm">
        <NavbarContent className="md:hidden flex justify-between w-full">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
          <NavbarBrand className="absolute left-1/2 transform -translate-x-1/2">
            <NavLink to="/">
              <img src="/Logo.svg" alt="logo " />
            </NavLink>
          </NavbarBrand>
          <div className="w-8" />
        </NavbarContent>
        <NavbarContent className="hidden md:flex">
          <NavbarBrand>
            <NavLink to="/">
              <img src="/Logo.svg" alt="logo" />
            </NavLink>
          </NavbarBrand>
        </NavbarContent>
        <NavbarContent
          className="hidden  md:flex gap-4 overflow-x-auto"
          justify="center">
          {menuItems.map((item, index) => {
            const isActive =
              item.link === "/incidents" &&
              location.pathname.startsWith("/getstarted");
            return (
              <NavbarItem key={`${item.linkName}-${index}`}>
                <NavLink
                  to={item.link}
                  end={item.link === "/"}
                  className={({ isActive: isNavLinkActive }) =>
                    `font-semibold transition-all ease-in-out duration-150 ${
                      isNavLinkActive || isActive
                        ? "text-black border-b-2 border-zinc-600 pb-5"
                        : "text-zinc-400"
                    }`
                  }>
                  {item.linkName}
                </NavLink>
              </NavbarItem>
            );
          })}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            <Button isIconOnly variant="light" aria-label="Notifications">
              <img src="/ball.svg" className="w-8" />
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Avatar
              as="button"
              className="transition-transform"
              color="primary"
              name="Usman Zafar"
              size="sm"
              src="/account.png"
            />
          </NavbarItem>
          <NavbarItem className="hidden lg:flex flex-col text-zinc-400 -space-y-2">
            <p className="text-sm ">Usman Zafar</p>
            <p className="text-[10px]">usmanzafar@gmail.com</p>
          </NavbarItem>
        </NavbarContent>
        {/* mobile menu */}
        <NavbarMenu>
          <div className="mx-4 mt-2 flex flex-col gap-2 ">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item.linkName}-${index}`}>
                <NavLink
                  className={({ isActive }) =>
                    `w-full text-center block rounded-lg py-2 transition-colors hover:bg-zinc-300 dark:hover:bg-zinc-700 ${
                      isActive ? "text-orange-600 font-bold" : "text-zinc-500"
                    }`
                  }
                  to={item.link}>
                  {item.linkName}
                </NavLink>
              </NavbarMenuItem>
            ))}
          </div>
        </NavbarMenu>
      </Navbar>
      <Outlet />
    </>
  );
}

export default Nav;
