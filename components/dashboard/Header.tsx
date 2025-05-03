"use client";
import { useState } from 'react';

const Header = () => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <p className="text-xl font-bold">Absensi Eskul</p>
          <p className="text-sm opacity-80">{new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
        </div>
        <div className="relative">
          <button 
            onClick={() => setShowNotification(!showNotification)}
            className="p-2 rounded-full hover:bg-blue-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          {showNotification && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg text-gray-800 p-2">
              <p className="p-2 border-b">Pemberitahuan baru</p>
              <p className="p-2">Pertemuan Pramuka besok jam 14:00</p>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;