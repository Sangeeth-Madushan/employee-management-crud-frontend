import React from 'react';

function Navbar() {
  return (
    <header className="flex items-center justify-between bg-white border-b border-gray-200 px-6 py-4 shadow-sm">
      {/* SLT Company Logo/Name */}
      <div className="flex items-center space-x-2">
        <div className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0056a2" className="w-6 h-6">
            <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold tracking-tight">
          <span className="text-gray-800">SLT</span>
          <span className="text-[#50b748]">.</span>
        </h1>
      </div>

      {/* User Actions (Right side) */}
      <div className="flex items-center space-x-6">
        <button className="p-2 text-gray-800 hover:text-[#50b748] transition-colors relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
          </svg>
          <span className="absolute top-0 right-0 w-2 h-2 bg-[#50b748] rounded-full"></span>
        </button>
        
        <button className="p-2 text-gray-800 hover:text-[#50b748] transition-colors relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          <span className="absolute top-0 right-0 w-2 h-2 bg-[#50b748] rounded-full"></span>
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="relative">
            <img
              className="h-10 w-10 rounded-full object-cover border-2 border-gray-200"
              src="/profile.png"
              alt="Profile"
            />
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#50b748] rounded-full border-2 border-white"></span>
          </div>
          <span className="text-gray-700 font-medium hidden md:block">Admin</span>
        </div>
      </div>
    </header>
  );
}

export default Navbar;