"use client";

import React from "react";
import { BurgerLogo, Facebook, Instagram, Twitter } from "./Icons";
import Link from "next/link";

function Navbar() {
  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-sm z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-bold flex">
            7th Street <BurgerLogo />
          </Link>
          <nav className="flex items-center space-x-8">
            <Link
              href="/#about"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/Menu"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Menu
            </Link>

            <Link
              href="/#gallery"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="/Contact"
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex space-x-6">
            <Link
              href="https://www.instagram.com/7thstreetburgernyc/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Instagram />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href="https://x.com/7thstburger"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Twitter />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link
              href="https://www.facebook.com/7thstreetburger/"
              target="_blank"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <Facebook />
              <span className="sr-only">Facebook</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
