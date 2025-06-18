import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container mx-auto px-4 text-center text-gray-600">
        &copy; {new Date().getFullYear()} Wella Makeup. All rights reserved.
      </div>
    </footer>
  );
}
