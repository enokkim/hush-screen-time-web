import { Lock, Circle, Clock, Smartphone, CheckCircle, Users, Zap, Shield, AlarmClock, DollarSign, Leaf, Bed } from "lucide-react";
import AppIconsBackground from "../components/AppIconsBackground";
import EmailForm from "@/components/EmailForm";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import { useContext, useState, useRef, useEffect } from "react";
import { HushContext } from "../context/HushContext";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../components/ui/carousel";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  const { isHushed, setIsHushed } = useContext(HushContext);
  const [isBouncing, setIsBouncing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSpeech, setShowSpeech] = useState(false);
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const speechBubbleTexts = [
    "Let's hush to block distractions!",
    "Click me for some peace and focus",
    "Ready to block the noise?"
  ];
  const [speechIndex, setSpeechIndex] = useState(0);

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
    let fadeTimeout: NodeJS.Timeout;
    let hideTimeout: NodeJS.Timeout;
    if (showSpeech) {
      setSpeechIndex((prev) => (prev + 1) % speechBubbleTexts.length);
      fadeTimeout = setTimeout(() => setBubbleVisible(true), 50); // fade in
      const totalVisible = 3500; // ms visible after fade in
      hideTimeout = setTimeout(() => {
        setBubbleVisible(false); // fade out
        setTimeout(() => setShowSpeech(false), 600); // hide after fade out
      }, totalVisible);
    } else {
      setBubbleVisible(false);
    }
    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(hideTimeout);
    };
  }, [showSpeech]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide navbar
        setIsNavbarVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show navbar
        setIsNavbarVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // Show the speech bubble after 3s if not hushed and not already showing
    if (!isHushed && !showSpeech) {
      const timer = setTimeout(() => setShowSpeech(true), 3000);
      return () => clearTimeout(timer);
    }
  }, [isHushed, showSpeech]);

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

  // Carousel slides: combine Why It Matters and How Hush Works
  const carouselSlides = [
    // Why It Matters
    {
      section: "Why It Matters",
      title: "2.5h/day",
      description: "Saved on average",
      icon: AlarmClock,
    },
    {
      section: "Why It Matters",
      title: "$10k/year",
      description: "Productivity boost per employee",
      icon: DollarSign,
    },
    {
      section: "Why It Matters",
      title: "50kg CO₂",
      description: "Less per user per year",
      icon: Leaf,
    },
    {
      section: "Why It Matters",
      title: "30% better",
      description: "Sleep quality on average",
      icon: Bed,
    },
    // How Hush Works
    {
      section: "How Hush Works",
      title: "Tap to Lock",
      description: "Lock distracting apps with a single tap of your Hush Key",
      icon: Lock,
    },
    {
      section: "How Hush Works",
      title: "Be Present",
      description: "Stay engaged in the real world without digital interruptions",
      icon: Circle,
    },
    {
      section: "How Hush Works",
      title: "Tap to Return",
      description: "Access your apps only when you consciously choose to",
      icon: Clock,
    },
  ];

  return (
    <div
      className={`min-h-screen w-full flex flex-col transition-colors duration-700 ${isHushed ? "bg-[#7a7a7a]" : "bg-[#f6f6fa]"
        }`}
    >
      {/* Navbar absolutely positioned at the top */}
      <nav className={`w-full flex justify-center pt-6 px-4 md:px-10 fixed top-0 left-0 z-30 transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`} style={{ pointerEvents: 'auto' }}>
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
      <section className="w-full min-h-screen flex flex-col justify-center items-center relative pt-[96px]">
        {!isHushed && <AppIconsBackground />}
        <div className="w-full flex flex-col items-center justify-center flex-1">
          {/* Desktop: phone frame, button, and bubble centered together */}
          <div className="hidden md:flex flex-col items-center justify-center relative h-[900px] w-full">
            <img
              src="/phone.png"
              alt="Phone frame"
              className="block mx-auto w-[44rem] md:w-[52rem] h-auto pointer-events-none"
              style={{ zIndex: 1 }}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full" style={{ zIndex: 2 }}>
              {/* Speech bubble absolutely above the button */}
              {!isHushed && showSpeech && (
                <div className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center speech-bubble-pos transition-opacity duration-700 ${bubbleVisible ? 'opacity-100' : 'opacity-0'}`} style={{ top: '-180px' }}>
                  <img src="/speech-bubble.png" alt="Speech bubble" className="w-56 h-auto" />
                  <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-black text-xl font-semibold -translate-y-[20px] transition-opacity duration-700 px-6" style={{ fontFamily: 'Nunito, sans-serif', pointerEvents: 'none', padding: '1.5rem 1.2rem 0.5rem 1.2rem', opacity: bubbleVisible ? 1 : 0 }}>
                    {speechBubbleTexts[speechIndex]}
                  </span>
                </div>
              )}
              {/* Hush button always centered */}
              <button
                aria-label="Hush toggle"
                onClick={() => {
                  setIsBouncing(true);
                  if (!isHushed) {
                    toast({
                      title: "Hush mode activated",
                      description: "Distractions are now blocked. Stay focused.",
                      variant: "hushed",
                    });
                  } else {
                    toast({
                      title: "Hush mode deactivated",
                      description: "You're back to normal. Welcome back.",
                    });
                  }
                  setIsHushed(!isHushed);
                  setTimeout(() => setIsBouncing(false), 400);
                }}
                className={`transition-all duration-500 rounded-[32px] flex items-center justify-center ${blobClass}`}
                style={{ width: 180, height: 180 }}
              >
                <img
                  src={blobSrc}
                  alt="Hush Blob"
                  className={blobImgClass + (isBouncing ? ' animate-bounce-once' : '')}
                />
              </button>
            </div>
          </div>
          {/* Mobile: button and bubble up higher */}
          <div className="flex flex-col items-center justify-start mt-8 md:hidden w-full flex-1" style={{ zIndex: 2 }}>
            {/* Hush button always centered */}
            <button
              aria-label="Hush toggle"
              onClick={() => {
                setIsBouncing(true);
                if (!isHushed) {
                  toast({
                    title: "Hush mode activated",
                    description: "Distractions are now blocked. Stay focused.",
                    variant: "hushed",
                  });
                } else {
                  toast({
                    title: "Hush mode deactivated",
                    description: "You're back to normal. Welcome back.",
                  });
                }
                setIsHushed(!isHushed);
                setTimeout(() => setIsBouncing(false), 400);
              }}
              className={`absolute top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 rounded-[32px] flex items-center justify-center ${blobClass}`}
              style={{ width: 180, height: 180 }}
            >
              <img
                src={blobSrc}
                alt="Hush Blob"
                className={blobImgClass + (isBouncing ? ' animate-bounce-once' : '')}
              />
            </button>
            {/* Speech bubble absolutely above the button */}
            {!isHushed && showSpeech && (
              <div className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center speech-bubble-pos transition-opacity duration-700 ${bubbleVisible ? 'opacity-100' : 'opacity-0'}`} style={{ top: 'calc(46% - 180px - 120px)' }}>
                <img src="/speech-bubble.png" alt="Speech bubble" className="w-48 md:w-64 h-auto" />
                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-black text-base md:text-xl font-semibold -translate-y-[20px] transition-opacity duration-700 px-4 md:px-6" style={{ fontFamily: 'Nunito, sans-serif', pointerEvents: 'none', padding: '1.5rem 1.2rem 0.5rem 1.2rem', opacity: bubbleVisible ? 1 : 0 }}>
                  {speechBubbleTexts[speechIndex]}
                </span>
              </div>
            )}
            <style>{`
              @media (max-width: 768px) {
                .speech-bubble-pos { top: calc(51% - 280px) !important; }
              }
            `}</style>
          </div>
        </div>
      </section>
      {/* Carousel Section: Why It Matters & How Hush Works */}
      <section className={`w-full flex flex-col items-center py-24 ${isHushed ? 'bg-[#181a1b]' : 'bg-white'}`}>
        <div className="max-w-2xl w-full mx-auto mb-8">
          <h2 className={`text-3xl font-bold text-center mb-2 ${isHushed ? 'text-white' : 'text-black'}`} style={{ fontFamily: 'Nunito, sans-serif' }}>
            Why It Matters & How Hush Works
          </h2>
          <p className={`text-center text-lg ${isHushed ? 'text-gray-300' : 'text-gray-600'}`} style={{ fontFamily: 'Nunito, sans-serif' }}>
            Reducing distractions isn't just about focus<br className="hidden sm:inline" />—it's about saving time, money, and the planet.
          </p>
        </div>
        <div className="relative w-full max-w-2xl">
          <Carousel className="w-full">
            <CarouselContent>
              {carouselSlides.map((slide, idx) => (
                <CarouselItem key={idx} className="flex justify-center">
                  <Card className={`w-80 h-60 flex flex-col items-center justify-center ${isHushed ? 'bg-[#181a1b] text-white' : 'bg-white text-black'} shadow-xl`}>
                    <CardHeader className="flex flex-col items-center">
                      <slide.icon className="w-12 h-12 mb-2" />
                      <CardTitle className="text-2xl mb-1">{slide.title}</CardTitle>
                      <CardDescription className="text-lg text-gray-400 mb-2 text-center">{slide.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center text-xs font-semibold uppercase tracking-widest opacity-60">
                      {slide.section}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Absolutely positioned arrows */}
            <CarouselPrevious className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 w-8 h-8 min-w-0 min-h-0 bg-transparent border border-gray-200 text-gray-400 hover:bg-gray-100 hover:text-black shadow-none z-10" />
            <CarouselNext className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 w-8 h-8 min-w-0 min-h-0 bg-transparent border border-gray-200 text-gray-400 hover:bg-gray-100 hover:text-black shadow-none z-10" />
          </Carousel>
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
          <div className="mb-2">&copy; {new Date().getFullYear()} Hush. All rights reserved. Made in Europe 🇪🇺.</div>
          <div>
            <a href="mailto:contact@hushscreen.com" className={`underline transition-colors duration-700 ${!isHushed ? 'hover:text-gray-300' : 'hover:text-gray-700'}`}>Contact Us</a>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Index;
