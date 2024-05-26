import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">City Scape Apartment - Indonesia</h1>
        <nav>
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" className="ml-4 text-gray-700 hover:text-gray-900">About</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
