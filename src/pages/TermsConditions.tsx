import React from "react";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useContext, useState, useRef, useEffect } from "react";
import { HushContext } from "../context/HushContext";

const TermsConditionsPage = () => {
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
                title="Terms & Conditions - Hush Digital Wellness"
                description="Read Hush's terms and conditions. Learn about your rights and responsibilities when using our digital wellness app and services."
                keywords="terms and conditions, user agreement, digital wellness, screen time app, legal terms"
                url="https://hushscreentime.com/terms"
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
                            Terms & Conditions
                        </h1>
                        <p className="text-gray-500">
                            <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                        </p>
                    </div>

                    <div className="space-y-8 text-base leading-relaxed">
                        <div>
                            <p>
                                These Terms and Conditions ("Terms") govern your use of the Hush digital wellness application and related services ("Service") operated by Hush ("we," "our," or "us").
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Acceptance of Terms</h2>
                            <p>
                                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Description of Service</h2>
                            <p>
                                Hush is a digital wellness application designed to help users manage their screen time and reduce digital distractions. The Service includes:
                            </p>
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>Screen time tracking and management</li>
                                <li>App blocking and distraction control features</li>
                                <li>Focus and productivity tools</li>
                                <li>Digital wellness insights and analytics</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">User Accounts and Registration</h2>
                            <p>
                                To access certain features of the Service, you may be required to create an account. You are responsible for:
                            </p>
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>Maintaining the confidentiality of your account credentials</li>
                                <li>All activities that occur under your account</li>
                                <li>Providing accurate and complete information</li>
                                <li>Notifying us immediately of any unauthorized use</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Acceptable Use</h2>
                            <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                                <li>Use the Service for any illegal or unauthorized purpose</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                                <li>Interfere with or disrupt the Service or servers</li>
                                <li>Reverse engineer, decompile, or disassemble the Service</li>
                                <li>Use the Service to harm others or their devices</li>
                                <li>Violate any applicable laws or regulations</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Privacy and Data Protection</h2>
                            <p>
                                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Intellectual Property Rights</h2>
                            <p>
                                The Service and its original content, features, and functionality are and will remain the exclusive property of Hush and its licensors. The Service is protected by copyright, trademark, and other laws.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">User Content</h2>
                            <p>
                                You retain ownership of any content you submit to the Service. By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and display such content in connection with the Service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Subscription and Payment</h2>
                            <p>
                                Some features of the Service may require a subscription. Subscription terms, pricing, and payment methods will be clearly communicated before purchase. All payments are non-refundable unless otherwise stated.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Service Availability</h2>
                            <p>
                                We strive to maintain the Service's availability but do not guarantee uninterrupted access. We may temporarily suspend the Service for maintenance, updates, or other operational reasons.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, Hush shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Disclaimer of Warranties</h2>
                            <p>
                                The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Service will be error-free or uninterrupted.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Indemnification</h2>
                            <p>
                                You agree to defend, indemnify, and hold harmless Hush from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Termination</h2>
                            <p>
                                We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of the European Union, without regard to its conflict of law provisions.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Changes to Terms</h2>
                            <p>
                                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
                            <p>
                                If you have any questions about these Terms, please contact us at:
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

export default TermsConditionsPage; 