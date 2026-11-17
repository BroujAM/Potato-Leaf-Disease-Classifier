
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="bg-green-600 p-1.5 rounded-lg">
          <i className="fas fa-seedling text-white"></i>
        </div>
        <span className="text-xl font-black text-gray-800 tracking-tight">PDC.AI</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 font-medium text-gray-600">
        <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">Home</a>
        <a href="#" className="hover:text-gray-900 transition-colors">About Model</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Dataset</a>
        <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
      </div>

      <div className="flex items-center gap-3">
        <span className="hidden sm:inline-block text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded border">v1.0.4-LTS</span>
        <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 text-gray-600">
          <i className="fas fa-user-circle text-xl"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
