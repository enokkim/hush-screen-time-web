import React from "react";

const Footer = ({ isHushed = false }: { isHushed?: boolean }) => {
    return (
        <footer
            className={`w-full max-w-3xl mx-auto py-10 px-4 text-center text-sm font-medium transition-colors duration-700 ${isHushed ? "text-hush-text-light/70" : "text-hush-text-dark/60"}`}
            style={{ fontFamily: "Nunito, sans-serif" }}
        >
            <div className="mb-3">&copy; {new Date().getFullYear()} Hush. All rights reserved. Made in Europe <span role="img" aria-label="Europe">🇪🇺</span>.</div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                    href="mailto:contact@hushscreen.com"
                    className={`underline transition-colors duration-700 ${!isHushed ? "hover:text-hush-text-dark/80" : "hover:text-hush-text-light/90"}`}
                >
                    Contact Us
                </a>
                <span className="hidden sm:inline">•</span>
                <a
                    href="/privacy"
                    className={`underline transition-colors duration-700 ${!isHushed ? "hover:text-hush-text-dark/80" : "hover:text-hush-text-light/90"}`}
                >
                    Privacy Policy
                </a>
                <span className="hidden sm:inline">•</span>
                <a
                    href="/terms"
                    className={`underline transition-colors duration-700 ${!isHushed ? "hover:text-hush-text-dark/80" : "hover:text-hush-text-light/90"}`}
                >
                    Terms & Conditions
                </a>
            </div>
        </footer>
    );
};

export default Footer; 