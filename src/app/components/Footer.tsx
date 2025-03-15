import Link from "next/link";
import { Instagram, Twitter, Facebook, Clock } from "./Icons";

export function Footer() {
  return (
    <footer className="w-full absolute bottom-0 border-t bg-[#8B403C] ">
      <div className="container px-4 py-6 mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <span className="ml-3 text-xl font-bold">7th St Burger</span>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-2">
              <Clock />
              <span className="font-medium pl-2">Business Hours</span>
            </div>
            <ul className="text-sm text-muted-foreground">
              <li>Monday - Friday: 9:00 AM - 2 AM</li>
              <li>Saturday: 10:00 AM - 1:00 AM</li>
              <li>Sunday: 10:00 AM - 1:00 AM</li>
            </ul>
          </div>

          <div className="flex space-x-6">
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
    </footer>
  );
}
