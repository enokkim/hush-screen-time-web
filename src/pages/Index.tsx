import { Lock, Circle, Clock, Smartphone, CheckCircle, Users, Zap, Shield, AlarmClock, DollarSign, Leaf, Bed } from "lucide-react";
import AppIconsBackground from "../components/AppIconsBackground";
import { Separator } from "@/components/ui/separator";
import EmailForm from "@/components/EmailForm";
import FeatureCard from "@/components/FeatureCard";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { useContext, useState, useRef, useEffect } from "react";
import { HushContext } from "../context/HushContext";

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
    className="tracking-widest"
  >
    {children}
  </span>
);

const Index = () => {
  const { isHushed, setIsHushed } = useContext(HushContext);
  const [isBouncing, setIsBouncing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  const features = [
    {
      title: "Tap to Lock",
      description: "Lock distracting apps with a single tap of your Hush Key",
      icon: Lock,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "Be Present",
      description: "Stay engaged in the real world without digital interruptions",
      icon: Circle,
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Tap to Return",
      description: "Access your apps only when you consciously choose to",
      icon: Clock,
      gradient: "from-purple-500 to-pink-600",
    },
  ];

  const benefits = [
    "Reduce screen time by 40% on average",
    "Improve focus and productivity",
    "Better sleep quality",
    "More meaningful relationships",
    "Reduced anxiety and stress",
    "Increased mindfulness"
  ];

  const stats = [
    { number: "2,500+", label: "Waitlist Members" },
    { number: "40%", label: "Average Screen Time Reduction" },
    { number: "95%", label: "User Satisfaction" },
  ];

  // Use correct blob image for each mode
  const blobSrc = isHushed ? "/blob-light.png" : "/blob.png";
  const blobClass = isHushed
    ? "bg-black shadow-lg shadow-black/30"
    : "bg-[#e9eeed] shadow-lg shadow-gray-400/30";
  const blobImgClass = "w-24 h-24";
  const navbarBg = isHushed ? '#000' : '#fff';
  const navbarTextClass = isHushed ? 'text-white' : 'text-gray-700';

  return (
    <div
      className={`min-h-screen w-full flex flex-col transition-colors duration-700 ${isHushed ? "bg-[#7a7a7a]" : "bg-[#f6f6fa]"
        }`}
    >
      {/* Navbar absolutely positioned at the top */}
      <nav className="w-full flex justify-center pt-6 px-4 md:px-10 fixed top-0 left-0 z-20" style={{ pointerEvents: 'auto' }}>
        <div className="flex items-center justify-between w-full max-w-4xl px-6 md:px-10 py-3 rounded-full shadow-md"
          style={{ minHeight: 56, background: navbarBg }}>
          {/* Hamburger */}
          <div className="relative" ref={menuRef}>
            <button className={`p-2 ${navbarTextClass}`} aria-label="Menu" onClick={() => setMenuOpen((v) => !v)}>
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={navbarTextClass}>
                <line x1="6" y1="9" x2="22" y2="9" />
                <line x1="6" y1="14" x2="22" y2="14" />
                <line x1="6" y1="19" x2="22" y2="19" />
              </svg>
            </button>
            {menuOpen && (
              <div className={`absolute left-0 mt-2 w-40 rounded-xl shadow-lg z-50 flex flex-col text-left ${isHushed ? 'bg-black' : 'bg-white'} ${isHushed ? '' : 'border border-gray-200'}`}>
                <a href="/store" className={`px-5 py-3 font-medium ${isHushed ? 'text-white hover:bg-white/10' : 'text-black hover:bg-gray-100'}`}>Shop</a>
                <a href="mailto:contact@hushscreen.com" className={`px-5 py-3 font-medium rounded-b-xl ${isHushed ? 'text-white hover:bg-white/10' : 'text-black hover:bg-gray-100'}`} onClick={() => setMenuOpen(false)}>Contact Us</a>
              </div>
            )}
          </div>
          {/* Center Text */}
          <a href="/" className={`cursor-pointer ${navbarTextClass}`}>
            <span className="font-bold tracking-widest uppercase" style={{ fontFamily: 'Nunito, sans-serif', letterSpacing: '0.18em' }}>HUSH</span>
          </a>
          {/* Store Icon */}
          <a href="/store" className={`p-2 ${navbarTextClass}`} aria-label="Store">
            <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={navbarTextClass}>
              <rect x="5" y="10" width="18" height="10" rx="2" />
              <path d="M7 10V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
            </svg>
          </a>
        </div>
      </nav>
      {/* Hero Section: fills viewport, content truly centered */}
      <section className="w-full min-h-screen flex items-center justify-center relative">
        {!isHushed && <AppIconsBackground />}
        <div className="flex flex-col items-center justify-center w-full pt-[40px]">
          <h1
            className={`text-xl md:text-2xl font-semibold mb-2 text-center transition-colors duration-700 ${isHushed ? "text-white" : "text-black"
              }`}
          >
            {isHushed ? "TAP TO UNHUSH" : "TAP TO HUSH"}
          </h1>
          <button
            aria-label="Hush toggle"
            onClick={() => {
              setIsBouncing(true);
              setIsHushed(!isHushed);
              setTimeout(() => setIsBouncing(false), 400);
            }}
            className={`transition-all duration-500 rounded-[32px] flex items-center justify-center mb-10 ${blobClass}`}
            style={{ width: 180, height: 180 }}
          >
            <img
              src={blobSrc}
              alt="Hush Blob"
              className={blobImgClass + (isBouncing ? ' animate-bounce-once' : '')}
            />
          </button>
        </div>
      </section>
      {/* Statistics/Impact Section */}
      <section className={`w-full ${isHushed ? 'bg-[#181a1b]' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto py-16 px-4 md:px-0">
          <h2 className={`text-3xl font-bold mb-10 text-center ${isHushed ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'Nunito, sans-serif' }}>
            Why It Matters
          </h2>
          <p className={`text-center mb-12 text-lg ${isHushed ? 'text-gray-300' : 'text-gray-600'}`} style={{ fontFamily: 'Nunito, sans-serif' }}>
            Reducing distractions isn't just about focus<br className="hidden sm:inline" />—it's about saving time, money, and the planet.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
            {/* Hours Saved */}
            <div className={`w-64 h-48 rounded-2xl p-6 flex flex-col items-center text-center ${isHushed ? 'bg-[#181a1b] text-white' : 'bg-white text-black'}`} style={{ fontFamily: 'Nunito, sans-serif' }}>
              <AlarmClock className={`mb-2 w-10 h-10 ${isHushed ? 'text-white' : 'text-black'}`} />
              <div className="text-2xl font-bold mb-1">2.5h/day</div>
              <div className="text-gray-400 text-sm">Saved on average</div>
            </div>
            {/* Money Saved */}
            <div className={`w-64 h-48 rounded-2xl p-6 flex flex-col items-center text-center ${isHushed ? 'bg-[#181a1b] text-white' : 'bg-white text-black'}`} style={{ fontFamily: 'Nunito, sans-serif' }}>
              <DollarSign className={`mb-2 w-10 h-10 ${isHushed ? 'text-white' : 'text-black'}`} />
              <div className="text-2xl font-bold mb-1">$10k/year</div>
              <div className="text-gray-400 text-sm">Productivity boost per employee</div>
            </div>
            {/* CO2 Saved */}
            <div className={`w-64 h-48 rounded-2xl p-6 flex flex-col items-center text-center ${isHushed ? 'bg-[#181a1b] text-white' : 'bg-white text-black'}`} style={{ fontFamily: 'Nunito, sans-serif' }}>
              <Leaf className={`mb-2 w-10 h-10 ${isHushed ? 'text-white' : 'text-black'}`} />
              <div className="text-2xl font-bold mb-1">50kg CO₂</div>
              <div className="text-gray-400 text-sm">Less per user per year</div>
            </div>
            {/* Better Sleep */}
            <div className={`w-64 h-48 rounded-2xl p-6 flex flex-col items-center text-center ${isHushed ? 'bg-[#181a1b] text-white' : 'bg-white text-black'}`} style={{ fontFamily: 'Nunito, sans-serif' }}>
              <Bed className={`mb-2 w-10 h-10 ${isHushed ? 'text-white' : 'text-black'}`} />
              <div className="text-2xl font-bold mb-1">30% better</div>
              <div className="text-gray-400 text-sm">Sleep quality on average</div>
            </div>
          </div>
          <div className="text-xs text-gray-400 text-center mt-8" style={{ fontFamily: 'Nunito, sans-serif' }}>
            Sources: RescueTime, Harvard Business Review, Carbon Trust, Sleep Foundation
          </div>
        </div>
      </section>
      {/* Features Section: How Hush Works */}
      <section className={`w-full mb-0 ${isHushed ? 'bg-[#181a1b]' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto py-16 px-4 md:px-0">
          <h2 className={`text-3xl font-bold mb-10 text-center ${isHushed ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'Nunito, sans-serif' }}>
            How Hush Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`w-64 h-48 rounded-2xl p-6 flex flex-col items-center text-center ${isHushed ? 'bg-[#181a1b] text-white' : 'bg-white text-black'}`}
                style={{ fontFamily: 'Nunito, sans-serif' }}
              >
                <feature.icon className={`w-8 h-8 mb-4 ${isHushed ? 'text-gray-200' : 'text-black'}`} />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* New Section: Setup Video, Waitlist, Footer */}
      <section className={`w-full pt-16 pb-8 px-4 md:px-0 flex flex-col items-center mt-0 transition-colors duration-700 ${isHushed ? 'bg-[#181a1b]' : 'bg-white/90'}`}>
        <div className={`max-w-3xl w-full mx-auto transition-colors duration-700 ${isHushed ? 'text-white' : 'text-black'}`}>
          <VideoPlaceholder className="mb-8" isHushed={isHushed} />
          <div className="mb-12">
            <h2 className={`text-2xl font-bold text-center mb-4 transition-colors duration-700 ${isHushed ? 'text-white' : 'text-black'}`}>Join the Waitlist</h2>
            <EmailForm buttonText="Confirm" placeholderText="Your email address" />
          </div>
        </div>
        <footer className="w-full max-w-3xl mx-auto pt-8 border-t border-gray-400 text-center text-sm font-medium transition-colors duration-700 text-gray-400" style={{ fontFamily: 'Nunito, sans-serif' }}>
          <div className="mb-2">&copy; {new Date().getFullYear()} Hush. All rights reserved.</div>
          <div>
            <a href="mailto:contact@hushscreen.com" className={`underline transition-colors duration-700 ${!isHushed ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>Contact Us</a>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Index;
