import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Avatar,
} from "@heroui/react";

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "Dashboard",
    "Incidents",
    "Locations",
    "Activities",
    "Documents",
    "Cpyher AI",
  ];

  return (
    <Navbar
      maxWidth="xl"
      onMenuOpenChange={setIsMenuOpen}
      shouldHideOnScroll
      isBordered
      className="bg-zinc-200 shadow-sm">
      <NavbarContent className="md:hidden flex justify-between w-full">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        <NavbarBrand className="absolute left-1/2 transform -translate-x-1/2">
          <img src="./Logo.svg" alt="logo " />
        </NavbarBrand>
        <div className="w-8" />
      </NavbarContent>
      <NavbarContent className="hidden md:flex">
        <NavbarBrand>
          <img src="./Logo.svg" alt="logo" />
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent
        className="hidden  md:flex gap-4 overflow-x-auto"
        justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`} isActive={index === 0}>
            <Link href="#" className="text-zinc-400 font-semibold">
              {item}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button isIconOnly variant="light" aria-label="Notifications">
            <img src="./ball.svg" className="w-8" />
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Avatar
            as="button"
            className="transition-transform"
            color="primary"
            name="Usman Zafar"
            size="sm"
            src="./account.png"
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
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="w-full text-center block rounded-lg py-2 text-zinc-500 transition-colors hover:bg-zinc-300 dark:hover:bg-zinc-700"
                href="#"
                size="lg">
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
}

export default Nav;
