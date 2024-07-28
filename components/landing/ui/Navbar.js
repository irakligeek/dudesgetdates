"use client";
import { CircleUserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Importing menu and close icons
import { useState, useContext } from "react";
import { UserContext } from "@/app/store/UserContext";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(UserContext); //user context

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-primary border">
      <div className="container mx-auto flex justify-between items-center py-3 px-6">
        <a href="/" className="text-2xl font-bold font-cta flex-none w-[220px]">
          Dudes Get Dates
        </a>

        <div
          className={`z-10 absolute top-14 left-0 w-full bg-white transition-transform duration-300 ease-in-out transform items-center ${
            isMenuOpen ? "scale-y-100" : "scale-y-0"
          } border-b md:border-b-0 px-6 pb-6 md:p-0 origin-top md:relative md:top-0 md:flex md:space-x-4 md:scale-y-100 md:justify-end`}
        >
          <ul className={`flex flex-col md:flex-row gap-4 mb-4 md:mb-0`}>
            <li className="m-0">
              <a href="#features" className="font-bold text-primary">Features</a>
            </li>
            <li className="m-0">
              <a href="#pricing" className="font-bold text-primary">Pricing</a>
            </li>
          </ul>
          <Button
            className="w-full bg-primary text-white border border-primary hover:bg-transparent hover:text-primary hover:border-primary transition duration-300 ease-in-out w-fit"
            type="submit"
            variant="secondary"
          >
            <CircleUserRound className="mr-2 w-5 h-5" /> <span>Account</span>
          </Button>
        </div>

        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
    </nav>
  );
}