import { ChefHat, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps {
  isScrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ isScrolled }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-gray-900">Foodify</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#benefits"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Benefits
            </a>
            <a
              href="#success-stories"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Success Stories
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              FAQ
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-orange-500 transition-colors"
            >
              Support
            </a>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors font-medium">
              Register Your Restaurant
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-gray-700">
                Home
              </a>
              <a href="#benefits" className="block px-3 py-2 text-gray-700">
                Benefits
              </a>
              <a
                href="#success-stories"
                className="block px-3 py-2 text-gray-700"
              >
                Success Stories
              </a>
              <a href="#faq" className="block px-3 py-2 text-gray-700">
                FAQ
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700">
                Support
              </a>
              <button className="w-full mt-2 bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                Register Your Restaurant
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
