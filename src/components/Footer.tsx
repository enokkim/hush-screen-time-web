import React, { useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";
import TermsConditions from "./TermsConditions";

const Footer = ({ isHushed = false }: { isHushed?: boolean }) => {
    const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
    const [showTermsConditions, setShowTermsConditions] = useState(false);

    return (
        <>
            <footer
                className={`w-full max-w-3xl mx-auto py-10 px-4 text-center text-sm font-medium transition-colors duration-700 ${isHushed ? "text-gray-300" : "text-gray-400"}`}
                style={{ fontFamily: "Nunito, sans-serif" }}
            >
                <div className="mb-3">&copy; {new Date().getFullYear()} Hush. All rights reserved. Made in Europe <span role="img" aria-label="Europe">🇪🇺</span>.</div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                        href="mailto:contact@hushscreen.com"
                        className={`underline transition-colors duration-700 ${!isHushed ? "hover:text-gray-300" : "hover:text-gray-700"}`}
                    >
                        Contact Us
                    </a>
                    <span className="hidden sm:inline">•</span>
                    <button
                        onClick={() => setShowPrivacyPolicy(true)}
                        className={`underline transition-colors duration-700 ${!isHushed ? "hover:text-gray-300" : "hover:text-gray-700"}`}
                    >
                        Privacy Policy
                    </button>
                    <span className="hidden sm:inline">•</span>
                    <button
                        onClick={() => setShowTermsConditions(true)}
                        className={`underline transition-colors duration-700 ${!isHushed ? "hover:text-gray-300" : "hover:text-gray-700"}`}
                    >
                        Terms & Conditions
                    </button>
                </div>
            </footer>

            {showPrivacyPolicy && (
                <PrivacyPolicy isHushed={isHushed} onClose={() => setShowPrivacyPolicy(false)} />
            )}

            {showTermsConditions && (
                <TermsConditions isHushed={isHushed} onClose={() => setShowTermsConditions(false)} />
            )}
        </>
    );
};

export default Footer; 