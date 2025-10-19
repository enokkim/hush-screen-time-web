import React from "react";

interface PrivacyPolicyProps {
  isHushed: boolean;
  onClose: () => void;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ isHushed, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-xl ${isHushed ? 'bg-hush-hushed-card text-hush-text-light' : 'bg-hush-unhushed-card text-hush-text-dark'}`}>
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold" style={{ fontFamily: 'Nunito, sans-serif' }}>
              Privacy Policy
            </h1>
            <button
              onClick={onClose}
              className={`p-2 rounded-lg transition-colors ${isHushed ? 'hover:bg-hush-text-light/10' : 'hover:bg-hush-border'}`}
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
                Hush ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our digital wellness application and related services.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Information We Collect</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-medium">Personal Information</h3>
                  <p>We may collect personal information that you voluntarily provide to us, including:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>Email address (for Hush token and updates)</li>
                    <li>Name (optional)</li>
                    <li>Device information and usage statistics</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium">Usage Data</h3>
                  <p>We automatically collect certain information about your device and how you interact with our app:</p>
                  <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                    <li>App usage patterns and screen time data</li>
                    <li>Device type and operating system</li>
                    <li>App performance and crash reports</li>
                    <li>Feature usage and preferences</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">How We Use Your Information</h2>
              <p>We use the collected information for the following purposes:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>To provide and maintain our digital wellness services</li>
                <li>To send you updates about product launches and features</li>
                <li>To improve our app functionality and user experience</li>
                <li>To analyze usage patterns and optimize performance</li>
                <li>To provide customer support and respond to inquiries</li>
                <li>To ensure the security and integrity of our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Data Storage and Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your data is stored securely and encrypted in transit and at rest.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Data Sharing and Disclosure</h2>
              <p>We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li>With your explicit consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and safety</li>
                <li>With trusted service providers who assist in operating our services (under strict confidentiality agreements)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Your Rights (GDPR)</h2>
              <p>If you are located in the European Union, you have the following rights regarding your personal data:</p>
              <ul className="list-disc list-inside ml-4 mt-2 space-y-1">
                <li><strong>Access:</strong> Request a copy of your personal data</li>
                <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
                <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                <li><strong>Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Objection:</strong> Object to processing of your data</li>
                <li><strong>Restriction:</strong> Limit how we process your data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Cookies and Tracking</h2>
              <p>
                We use essential cookies to ensure our website functions properly. We do not use tracking cookies or third-party analytics that compromise your privacy. Our focus is on providing a distraction-free experience.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Children's Privacy</h2>
              <p>
                Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
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
      </div>
    </div>
  );
};

export default PrivacyPolicy; 