import { useNavigate } from 'react-router-dom';
import { useContext, useState, useRef, useEffect } from 'react';
import { HushContext } from '../context/HushContext';
import EmailForm from "@/components/EmailForm";
import SEO from "@/components/SEO";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    const menuRef = useRef<HTMLDivElement>(null);
    const navbarBg = isHushed ? '#000' : '#fff';
    const navbarTextClass = isHushed ? 'text-white' : 'text-gray-700';
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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
        <div className={`min-h-screen flex flex-col items-center justify-center ${isHushed ? 'bg-[#7a7a7a] text-white' : 'bg-[#f6f6fa] text-black'}`}>
            <SEO
                title="Join Hush Waitlist - Early Access to Digital Wellness App"
                description="Join the Hush waitlist for early access to our physical key that unlocks digital distractions. Be the first to experience 40% screen time reduction."
                keywords="hush waitlist, early access, digital wellness app, screen time reduction, focus app, productivity tool"
                url="https://hushscreentime.com/store"
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
            {/* Main content perfectly centered below navbar */}
            <div className="flex-1 flex flex-col items-center justify-center w-full px-4">
                <div className={`${isHushed ? 'bg-[#181a1b] text-white' : 'bg-white text-black'} rounded-3xl shadow-xl max-w-md w-full p-8 flex flex-col items-center`}>
                    <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>Join the Waitlist</h1>
                    <p className="text-gray-500 mb-6 text-center" style={{ fontFamily: 'Nunito, sans-serif' }}>
                        Be the first to know when the app launches and get exclusive early access!
                    </p>
                    <EmailForm buttonText="Join Waitlist" placeholderText="Your email address" />
                </div>
            </div>
            <Footer isHushed={isHushed} />
        </div>
    );
};

export default Store; 