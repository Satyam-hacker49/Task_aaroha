import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/recruitment", label: "Recruitment" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-aaroha-blue to-aaroha-teal rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <Link to="/" className="text-2xl font-bold text-aaroha-navy">
              Aaroha
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-aaroha-navy hover:text-aaroha-blue transition-colors duration-200 font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button className="bg-gradient-to-r from-aaroha-blue to-aaroha-teal hover:from-aaroha-teal hover:to-aaroha-blue text-white px-6">
              Join Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-aaroha-navy hover:text-aaroha-blue"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-aaroha-navy hover:text-aaroha-blue transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button className="bg-gradient-to-r from-aaroha-blue to-aaroha-teal hover:from-aaroha-teal hover:to-aaroha-blue text-white w-full mt-4">
                Join Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
