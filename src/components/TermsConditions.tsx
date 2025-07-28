import React from "react";

interface TermsConditionsProps {
    isHushed: boolean;
    onClose: () => void;
}

const TermsConditions: React.FC<TermsConditionsProps> = ({ isHushed, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl ${isHushed ? 'bg-[#181a1b] text-white' : 'bg-white text-black'}`}>
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold" style={{ fontFamily: 'Nunito, sans-serif' }}>
                            Terms & Conditions
                        </h1>
                        <button
                            onClick={onClose}
                            className={`p-2 rounded-lg transition-colors ${isHushed ? 'hover:bg-white/10' : 'hover:bg-gray-100'}`}
                            aria-label="Close"
                        >
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </button>
                    </div>

                    <div className="space-y-6 text-sm leading-relaxed">
                        <div>
                            <p className="text-gray-500 mb-4">
                                <strong>Last updated:</strong> {new Date().toLocaleDateString()}
                            </p>
                            <p>
                                These Terms and Conditions ("Terms") govern your use of the Hush digital wellness application and related services ("Service") operated by Hush ("we," "our," or "us").
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Acceptance of Terms</h2>
                            <p>
                                By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the Service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Description of Service</h2>
                            <p>
                                Hush is a digital wellness application designed to help users manage their screen time and reduce digital distractions. The Service includes:
                            </p>
                            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                <li>Screen time tracking and management</li>
                                <li>App blocking and distraction control features</li>
                                <li>Focus and productivity tools</li>
                                <li>Digital wellness insights and analytics</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">User Accounts and Registration</h2>
                            <p>
                                To access certain features of the Service, you may be required to create an account. You are responsible for:
                            </p>
                            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                <li>Maintaining the confidentiality of your account credentials</li>
                                <li>All activities that occur under your account</li>
                                <li>Providing accurate and complete information</li>
                                <li>Notifying us immediately of any unauthorized use</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Acceptable Use</h2>
                            <p>You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:</p>
                            <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                                <li>Use the Service for any illegal or unauthorized purpose</li>
                                <li>Attempt to gain unauthorized access to our systems</li>
                                <li>Interfere with or disrupt the Service or servers</li>
                                <li>Reverse engineer, decompile, or disassemble the Service</li>
                                <li>Use the Service to harm others or their devices</li>
                                <li>Violate any applicable laws or regulations</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Privacy and Data Protection</h2>
                            <p>
                                Your privacy is important to us. Our collection and use of personal information is governed by our Privacy Policy, which is incorporated into these Terms by reference.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Intellectual Property Rights</h2>
                            <p>
                                The Service and its original content, features, and functionality are and will remain the exclusive property of Hush and its licensors. The Service is protected by copyright, trademark, and other laws.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">User Content</h2>
                            <p>
                                You retain ownership of any content you submit to the Service. By submitting content, you grant us a non-exclusive, worldwide, royalty-free license to use, modify, and display such content in connection with the Service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Subscription and Payment</h2>
                            <p>
                                Some features of the Service may require a subscription. Subscription terms, pricing, and payment methods will be clearly communicated before purchase. All payments are non-refundable unless otherwise stated.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Service Availability</h2>
                            <p>
                                We strive to maintain the Service's availability but do not guarantee uninterrupted access. We may temporarily suspend the Service for maintenance, updates, or other operational reasons.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, Hush shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Disclaimer of Warranties</h2>
                            <p>
                                The Service is provided "as is" and "as available" without warranties of any kind, either express or implied. We do not warrant that the Service will be error-free or uninterrupted.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Indemnification</h2>
                            <p>
                                You agree to defend, indemnify, and hold harmless Hush from and against any claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of the Service.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Termination</h2>
                            <p>
                                We may terminate or suspend your account and access to the Service immediately, without prior notice, for any reason, including breach of these Terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Governing Law</h2>
                            <p>
                                These Terms shall be governed by and construed in accordance with the laws of the European Union, without regard to its conflict of law provisions.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Changes to Terms</h2>
                            <p>
                                We reserve the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-3">Contact Information</h2>
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
            </div>
        </div>
    );
};

export default TermsConditions; 