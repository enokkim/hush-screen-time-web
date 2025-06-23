import { useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { HushContext } from '../context/HushContext';
import EmailForm from "@/components/EmailForm";

const PixelText = ({ children }: { children: string }) => (
    <span
        style={{
            fontFamily: 'monospace',
            letterSpacing: '0.2em',
            fontWeight: 700,
            fontSize: '1.3rem',
            textTransform: 'uppercase',
            textShadow: '0 1px 0 #888',
        }}
        className="tracking-widest cursor-pointer"
    >
        {children}
    </span>
);

const Store = () => {
    const navigate = useNavigate();
    const { isHushed } = useContext(HushContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const navbarBg = isHushed ? '#000' : '#fff';
    const navbarTextClass = isHushed ? 'text-white' : 'text-gray-700';

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#f6f6fa]">
            {/* Navbar */}
            <nav className="w-full flex justify-center mb-12 pt-6 px-4 md:px-10 fixed top-0 left-0 z-20" style={{ pointerEvents: 'auto' }}>
                <div className="flex items-center justify-between w-full max-w-4xl px-6 md:px-10 py-3 rounded-full shadow-md" style={{ minHeight: 56, background: navbarBg }}>
                    <div className="relative">
                        <button className={`p-2 ${navbarTextClass}`} aria-label="Menu" onClick={() => setMenuOpen((v) => !v)}>
                            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={navbarTextClass}>
                                <line x1="6" y1="9" x2="22" y2="9" />
                                <line x1="6" y1="14" x2="22" y2="14" />
                                <line x1="6" y1="19" x2="22" y2="19" />
                            </svg>
                        </button>
                        {menuOpen && (
                            <div className="absolute left-0 mt-2 w-40 rounded-xl shadow-lg bg-white border border-gray-200 z-50 flex flex-col text-left">
                                <a href="/store" className="px-5 py-3 hover:bg-gray-100 text-black font-medium">Shop</a>
                                <a href="mailto:contact@hushscreen.com" className="px-5 py-3 hover:bg-gray-100 text-black font-medium rounded-b-xl" onClick={() => setMenuOpen(false)}>Contact Us</a>
                            </div>
                        )}
                    </div>
                    {/* Center Text */}
                    <span onClick={() => navigate('/')} className={navbarTextClass + ' cursor-pointer'}>
                        <span className="font-bold tracking-widest uppercase" style={{ fontFamily: 'Nunito, sans-serif', letterSpacing: '0.18em' }}>HUSH</span>
                    </span>
                    {/* Store Icon (inactive here) */}
                    <span className={`p-2 ${navbarTextClass}`} aria-label="Store">
                        <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={navbarTextClass}>
                            <rect x="5" y="10" width="18" height="10" rx="2" />
                            <path d="M7 10V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
                        </svg>
                    </span>
                </div>
            </nav>
            {/* Main content perfectly centered below navbar */}
            <div className="flex-1 flex flex-col items-center justify-center w-full px-4">
                <div className="bg-white rounded-3xl shadow-xl max-w-md w-full p-8 flex flex-col items-center">
                    <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>Join the Waitlist</h1>
                    <p className="text-gray-500 mb-6 text-center" style={{ fontFamily: 'Nunito, sans-serif' }}>
                        Be the first to know when the app launches and get exclusive early access!
                    </p>
                    <EmailForm buttonText="Join Waitlist" placeholderText="Your email address" />
                </div>
            </div>
        </div>
    );
};

export default Store; 