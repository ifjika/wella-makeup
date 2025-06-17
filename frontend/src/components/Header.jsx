import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-white via-pink-100 to-pink-200">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-2xl font-display font-bold text-primary">
          Wella Makeup
        </h1>
        <nav className="space-x-6">
          <a href="#features" className="text-gray-700 hover:text-blue-600">
            Fitur
          </a>
          <a href="#courses" className="text-gray-700 hover:text-blue-600">
            Kursus
          </a>
          <a href="#about" className="text-gray-700 hover:text-blue-600">
            Tentang
          </a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">
            Kontak
          </a>
          <button className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-700">
            Masuk
          </button>
        </nav>
      </div>
    </header>
  );
}
