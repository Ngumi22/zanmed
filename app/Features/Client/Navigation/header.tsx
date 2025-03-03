"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Bell,
  ChevronDown,
  MessageCircle,
  ShoppingCart,
  Menu,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function PharmgyHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">
      {/* Top notification bar - hidden on small screens */}
      <div
        className={`hidden sm:block w-full bg-white border-b border-gray-200 py-2 px-4 text-sm text-gray-600 transition-all duration-300 ease-in-out ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-10 opacity-100"
        }`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span>USD $</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
            <div className="flex items-center">
              <span>English</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
          </div>
          <div className="text-center flex-1">
            Due to the COVID 19 epidemic orders may be processed with a slight
            delay
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/tracking" className="hover:text-blue-500">
              Order Tracking
            </Link>
            <Link href="/help" className="hover:text-blue-500">
              Help Center
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div
        className={`w-full bg-white py-4 px-4 border-b border-gray-200 transition-all duration-300 ease-in-out ${
          isScrolled ? "shadow-md" : ""
        }`}>
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          {/* Mobile menu button - left on small screens */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col py-6">
                <Link
                  href="/"
                  className="px-4 py-3 hover:bg-blue-100 text-blue-600">
                  Home
                </Link>
                <Link
                  href="/medical-kit"
                  className="px-4 py-3 hover:bg-blue-100 text-blue-600">
                  Medical Kit
                </Link>
                <Link
                  href="/about"
                  className="px-4 py-3 hover:bg-blue-100 text-blue-600">
                  About Us
                </Link>
                <Link
                  href="/blog"
                  className="px-4 py-3 hover:bg-blue-100 text-blue-600">
                  Blog
                </Link>
                <Link
                  href="/contact"
                  className="px-4 py-3 hover:bg-blue-100 text-blue-600">
                  Contact
                </Link>
                <Link
                  href="/account"
                  className="px-4 py-3 hover:bg-blue-100 text-blue-600">
                  My Account
                </Link>
                <Link
                  href="/cart"
                  className="px-4 py-3 hover:bg-blue-100 text-blue-600">
                  Cart - $250.00
                </Link>
                <div className="mt-auto px-4 py-3 bg-blue-600 text-white font-medium">
                  Free Shipping on Orders $99
                </div>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Logo - centered on small screens, left on large screens */}
          <div className="flex items-center lg:order-first order-2 flex-grow lg:flex-grow-0 justify-center lg:justify-start">
            <div className="bg-[#1e88e5] text-white p-2 rounded-md mr-3">
              <Plus className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Pharmgy</h1>
              <p className="text-xs text-gray-500 uppercase tracking-wider">
                HEALTH AND CARE
              </p>
            </div>
          </div>

          {/* Search bar - between logo and icons on large screens */}
          <div className="hidden lg:flex flex-1 max-w-xl mx-4">
            <div className="relative flex items-center w-full">
              <Input
                type="text"
                placeholder="Search for products..."
                className="w-full border border-gray-300 rounded-md pr-10"
              />
              <Button className="absolute right-0 bg-[#1e88e5] hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
                SEARCH
              </Button>
            </div>
          </div>

          {/* Icons - right on all screens */}
          <div className="flex items-center space-x-4 lg:order-last order-3">
            <div className="hidden lg:flex items-center">
              <span className="mr-2">My Account</span>
            </div>
            <div className="relative">
              <Bell className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-[#1e88e5] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                1
              </span>
            </div>
            <div className="relative">
              <MessageCircle className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-2 -right-2 bg-[#1e88e5] text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                1
              </span>
            </div>
            <div className="relative lg:flex items-center hidden">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              <span className="ml-2 font-semibold">$250.00</span>
            </div>
            <div className="lg:hidden">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
            </div>
          </div>

          {/* Search bar for small screens - full width below other elements */}
          <div className="w-full mt-4 lg:hidden order-4">
            <div className="relative flex items-center">
              <Input
                type="text"
                placeholder="Search for products..."
                className="w-full border border-gray-300 rounded-md pr-10"
              />
              <Button className="absolute right-0 bg-[#1e88e5] hover:bg-blue-600 text-white px-4 py-2 rounded-r-md">
                SEARCH
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation bar - visible only on large screens */}
      <div
        className={`w-full bg-[#1e88e5] text-white hidden lg:block transition-all duration-300 ease-in-out ${
          isScrolled ? "h-0 opacity-0 overflow-hidden" : "h-12 opacity-100"
        }`}>
        <div className="container mx-auto">
          <nav className="flex items-center">
            <div className="relative">
              <button
                className="flex items-center bg-[#ffd600] text-black px-4 py-3 font-medium"
                onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <Menu className="h-5 w-5 mr-2" />
                Shop By Categories
              </button>
              {isMenuOpen && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg z-10 text-gray-800">
                  <ul>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                      <Link href="#" className="block px-4 py-2">
                        Medicines
                      </Link>
                    </li>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                      <Link href="#" className="block px-4 py-2">
                        Medical Devices
                      </Link>
                    </li>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                      <Link href="#" className="block px-4 py-2">
                        Personal Care
                      </Link>
                    </li>
                    <li className="border-b border-gray-100 hover:bg-gray-50">
                      <Link href="#" className="block px-4 py-2">
                        Vitamins & Supplements
                      </Link>
                    </li>
                    <li className="hover:bg-gray-50">
                      <Link href="#" className="block px-4 py-2">
                        Health Foods
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <ul className="flex">
              <li>
                <Link href="/" className="block px-4 py-3 hover:bg-blue-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/medical-kit"
                  className="block px-4 py-3 hover:bg-blue-600">
                  Medical Kit
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block px-4 py-3 hover:bg-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block px-4 py-3 hover:bg-blue-600">
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block px-4 py-3 hover:bg-blue-600">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="ml-auto px-4 py-3 text-white font-medium">
              Free Shipping on Orders $99
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
