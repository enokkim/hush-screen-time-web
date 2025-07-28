import React from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useContext, useState, useRef, useEffect } from "react";
import { HushContext } from "../context/HushContext";

const PrivacyPolicyPage = () => {
    const { isHushed } = useContext(HushContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const menuRef = useRef<HTMLDivElement>(null);
    const navbarBg = isHushed ? '#000' : '#fff';
    const navbarTextClass = isHushed ? 'text-white' : 'text-gray-700';

    useEffect(() => {
        if (!menuOpen) return;
        function handleClick(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setMenuOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, [menuOpen]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsNavbarVisible(false);
            } else if (currentScrollY < lastScrollY) {
                setIsNavbarVisible(true);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <div className={`min-h-screen flex flex-col ${isHushed ? "bg-[#7a7a7a]" : "bg-[#f6f6fa]"}`}>
            <SEO
                title="Privacy Policy - Hush Digital Wellness"
                description="Learn how Hush protects your privacy and handles your data. Our comprehensive privacy policy covers data collection, usage, and your rights under GDPR."
                keywords="privacy policy, data protection, GDPR, digital wellness, screen time app"
                url="https://hushscreentime.com/privacy"
                type="website"
            />
            <Navbar
                isHushed={isHushed}
                menuOpen={menuOpen}
                setMenuOpen={setMenuOpen}
                menuRef={menuRef}
                navbarBg={navbarBg}
                navbarTextClass={navbarTextClass}
                isNavbarVisible={isNavbarVisible}
            />

            <main className="flex-1 pt-32 pb-16">
                <div className={`max-w-4xl mx-auto px-4 ${isHushed ? 'text-white' : 'text-black'}`}>
                    <div className="mb-8">
                        <h1 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Nunito, sans-serif' }}>
                            Privacy Policy
                        </h1>
                        <p className="text-gray-500">
                            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                        </p>
                    </div>

                    <div className="space-y-8 text-base leading-relaxed">
                        <div>
                            <p>
                                Hush ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital wellness application and related services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-medium mb-2">Personal Information</h3>
                                    <p>We may collect personal information that you voluntarily provide to us, including:</p>
                                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                        <li>Email address (for waitlist and updates)</li>
                                        <li>Name (optional)</li>
                                        <li>Device information and usage statistics</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium mb-2">Usage Data</h3>
                                    <p>We automatically collect certain information about your device and how you interact with our app:</p>
                                    <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                        <li>App usage patterns and screen time data</li>
                                        <li>Device type and operating system</li>
                                        <li>App performance and crash reports</li>
                                        <li>Feature usage and preferences</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">How We Use Your Information</h2>
                            <p>We use the collected information for the following purposes:</p>
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>To provide and maintain our digital wellness services</li>
                                <li>To send you updates about product launches and features</li>
                                <li>To improve our app functionality and user experience</li>
                                <li>To analyze usage patterns and optimize performance</li>
                                <li>To provide customer support and respond to inquiries</li>
                                <li>To ensure the security and integrity of our services</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Data Storage and Security</h2>
                            <p>
                                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and encrypted in transit and at rest.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Data Sharing and Disclosure</h2>
                            <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:</p>
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>With your explicit consent</li>
                                <li>To comply with legal obligations</li>
                                <li>To protect our rights and safety</li>
                                <li>With trusted service providers who assist in operating our services (under strict confidentiality agreements)</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Your Rights (GDPR)</h2>
                            <p>If you are located in the European Union, you have the following rights regarding your personal data:</p>
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li><strong>Access:</strong> Request a copy of your personal data</li>
                                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                                <li><strong>Objection:</strong> Object to processing of your data</li>
                                <li><strong>Restriction:</strong> Limit how we process your data</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Cookies and Tracking</h2>
                            <p>
                                We use essential cookies to ensure our website functions properly. We do not use tracking cookies or third-party analytics that compromise your privacy. Our focus is on providing a distraction-free experience.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
                            <p>
                                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                            <p>
                                If you have any questions about this Privacy Policy or our data practices, please contact us at:
                            </p>
                            <div className="mt-2">
                                <p>Email: <a href="mailto:contact@hushscreen.com" className="underline">contact@hushscreen.com</a></p>
                                <p>Address: Made in Europe 🇪🇺</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer isHushed={isHushed} />
        </div>
    );
};

export default PrivacyPolicyPage; 