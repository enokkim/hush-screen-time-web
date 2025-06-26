import React from "react";

const Footer = ({ isHushed = false }: { isHushed?: boolean }) => (
    <footer
        className={`w-full max-w-3xl mx-auto py-10 px-4 text-center text-sm font-medium transition-colors duration-700 ${isHushed ? "text-gray-300" : "text-gray-400"}`}
        style={{ fontFamily: "Nunito, sans-serif" }}
    >
        <div className="mb-3">&copy; {new Date().getFullYear()} Hush. All rights reserved. Made in Europe <span role="img" aria-label="Europe">🇪🇺</span>.</div>
        <div>
            <a
                href="mailto:contact@hushscreen.com"
                className={`underline transition-colors duration-700 ${!isHushed ? "hover:text-gray-300" : "hover:text-gray-700"}`}
            >
                Contact Us
            </a>
        </div>
    </footer>
);

export default Footer; 