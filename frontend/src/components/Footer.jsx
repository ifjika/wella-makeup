import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="h-1 w-1/3 bg-primary mx-auto mb-4 rounded-full" />

      <div className="container mx-auto px-4 text-center text-dark">
        Copyright &copy; {new Date().getFullYear()} Wella Makeup All rights
        reserved.
      </div>
    </footer>
  );
}
