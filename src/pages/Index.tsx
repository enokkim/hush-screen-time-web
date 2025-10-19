import { Lock, Circle, Clock, Smartphone, CheckCircle, Users, Zap, Shield, AlarmClock, DollarSign, Leaf, Bed } from "lucide-react";
import AppIconsBackground from "../components/AppIconsBackground";
import EmailForm from "@/components/EmailForm";
import VideoPlaceholder from "@/components/VideoPlaceholder";
import SEO from "@/components/SEO";
import { useContext, useState, useRef, useEffect } from "react";
import { HushContext } from "../context/HushContext";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "../components/ui/carousel";
import { toast } from "@/components/ui/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  const { isHushed, setIsHushed } = useContext(HushContext);
  const [isBouncing, setIsBouncing] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showSpeech, setShowSpeech] = useState(false);
  const [bubbleVisible, setBubbleVisible] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showShop, setShowShop] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [carouselApi, setCarouselApi] = useState<any>(null);

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

  useEffect(() => {
    if (!carouselApi) return;
    const onSelect = () => setCarouselIndex(carouselApi.selectedScrollSnap());
    carouselApi.on("select", onSelect);
    onSelect();
    return () => carouselApi.off("select", onSelect);
  }, [carouselApi]);

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
    { number: "2,500+", label: "Hush Token Recipients" },
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
      className={`min-h-screen w-full flex flex-col transition-colors duration-700 ${isHushed ? "bg-hush-hushed-bg" : "bg-hush-unhushed-bg"
        }`}
    >
      <SEO />
      <Navbar
        isHushed={isHushed}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuRef={menuRef}
        navbarBg={navbarBg}
        navbarTextClass={navbarTextClass}
        isNavbarVisible={isNavbarVisible}
        onShopClick={() => setShowShop(true)}
      />
      <main className="flex-1">
        {showShop ? (
          /* Shop/Waitlist Content */
          <div className={`min-h-screen flex flex-col items-center justify-center pt-[96px] ${isHushed ? 'bg-hush-hushed-bg text-hush-text-light' : 'bg-hush-unhushed-bg text-hush-text-dark'}`}>
            <div className="flex-1 flex flex-col items-center justify-center w-full px-4">
              <div className={`${isHushed ? 'bg-hush-hushed-card text-hush-text-light' : 'bg-hush-unhushed-card text-hush-text-dark'} rounded-3xl shadow-xl max-w-md w-full p-8 flex flex-col items-center`}>
                <h1 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Nunito, sans-serif' }}>Receive a Hush Token</h1>
                <p className="text-gray-500 mb-6 text-center" style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Be the first to know when the app launches and get exclusive early access!
                </p>
                <EmailForm buttonText="Receive Hush Token" placeholderText="Your email address" />
                <button
                  onClick={() => setShowShop(false)}
                  className={`mt-6 px-4 py-2 rounded-lg transition-colors duration-300 ${isHushed ? 'text-hush-text-light hover:bg-hush-text-light/10' : 'text-hush-text-dark hover:bg-hush-border'}`}
                >
                  ← Back to Home
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Main Content */
          <>
            {/* Hero Section: fills viewport, content truly centered */}
            <section className="w-full min-h-screen flex flex-col justify-center items-center relative pt-[96px]" aria-labelledby="hero-heading">
              {!isHushed && <AppIconsBackground />}
              <div className="w-full flex flex-col items-center justify-center flex-1">
                {/* Desktop: phone frame, button, and bubble centered together */}
                <div className="hidden md:flex flex-col items-center justify-center relative h-[900px] w-full">
                  <img
                    src="/phone.png"
                    alt="Phone frame showing Hush app interface"
                    className="block mx-auto w-[44rem] md:w-[52rem] h-auto pointer-events-none"
                    style={{ zIndex: 1 }}
                  />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center w-full" style={{ zIndex: 2 }}>
                    {/* Speech bubble absolutely above the button */}
                    {!isHushed && showSpeech && (
                      <div className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center speech-bubble-pos transition-opacity duration-700 ${bubbleVisible ? 'opacity-100' : 'opacity-0'}`} style={{ top: '-180px' }}>
                        <img src="/speech-bubble.png" alt="Speech bubble with helpful tip" className="w-56 h-auto" />
                        <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-center text-black text-xl font-semibold -translate-y-[20px] transition-opacity duration-700 px-6" style={{ fontFamily: 'Nunito, sans-serif', pointerEvents: 'none', padding: '1.5rem 1.2rem 0.5rem 1.2rem', opacity: bubbleVisible ? 1 : 0 }}>
                          {speechBubbleTexts[speechIndex]}
                        </span>
                      </div>
                    )}
                    {/* Hush button always centered */}
                    <button
                      aria-label="Toggle Hush mode to block or unblock digital distractions"
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
                        alt="Hush Blob - Physical key to unlock digital distractions"
                        className={blobImgClass + (isBouncing ? ' animate-bounce-once' : '')}
                      />
                    </button>
                  </div>
                </div>
                {/* Mobile: button and bubble up higher */}
                <div className="flex flex-col items-center justify-start mt-8 md:hidden w-full flex-1" style={{ zIndex: 2 }}>
                  {/* Hush button always centered */}
                  <button
                    aria-label="Toggle Hush mode to block or unblock digital distractions"
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
                      alt="Hush Blob - Physical key to unlock digital distractions"
                      className={blobImgClass + (isBouncing ? ' animate-bounce-once' : '')}
                    />
                  </button>
                  {/* Speech bubble absolutely above the button */}
                  {!isHushed && showSpeech && (
                    <div className={`absolute left-1/2 -translate-x-1/2 flex flex-col items-center speech-bubble-pos transition-opacity duration-700 ${bubbleVisible ? 'opacity-100' : 'opacity-0'}`} style={{ top: 'calc(46% - 180px - 120px)' }}>
                      <img src="/speech-bubble.png" alt="Speech bubble with helpful tip" className="w-48 md:w-64 h-auto" />
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

            {/* Receive Hush Token Section - moved up for better conversion */}
            <section className={`w-full py-16 px-4 md:px-0 flex flex-col items-center transition-colors duration-700 ${isHushed ? 'bg-hush-hushed-card' : 'bg-hush-unhushed-card'}`} aria-labelledby="waitlist-heading">
              <div className={`max-w-3xl w-full mx-auto transition-colors duration-700 ${isHushed ? 'text-hush-text-light' : 'text-hush-text-dark'}`}>
                <div className="mb-8">
                  <h2 id="waitlist-heading" className={`text-3xl font-bold text-center mb-4 transition-colors duration-700 ${isHushed ? 'text-hush-text-light' : 'text-hush-text-dark'}`} style={{ fontFamily: 'Nunito, sans-serif' }}>Receive a Hush Token</h2>
                  <p className={`text-center text-lg mb-6 ${isHushed ? 'text-hush-text-light/80' : 'text-hush-text-dark/70'}`} style={{ fontFamily: 'Nunito, sans-serif' }}>
                    Be the first to experience Hush and transform your relationship with technology.
                  </p>
                  <EmailForm buttonText="Receive Hush Token" placeholderText="Your email address" />
                </div>
              </div>
            </section>

            {/* Carousel/Grid Section: Why It Matters & How Hush Works */}
            <section className={`w-full flex flex-col items-center py-24 ${isHushed ? 'bg-hush-hushed-card' : 'bg-hush-unhushed-card'}`} aria-labelledby="features-heading">
              <div className="max-w-2xl w-full mx-auto mb-8">
                <h2 id="features-heading" className={`text-3xl font-bold text-center mb-2 px-4 md:px-0 ${isHushed ? 'text-hush-text-light' : 'text-hush-text-dark'}`} style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Why It Matters & How Hush Works
                </h2>
                <p className={`text-center text-lg px-4 md:px-0 ${isHushed ? 'text-hush-text-light/80' : 'text-hush-text-dark/70'}`} style={{ fontFamily: 'Nunito, sans-serif' }}>
                  Reducing distractions isn't just about focus<br className="hidden sm:inline" />—it's about saving time, money, and the planet.
                </p>
              </div>
              {/* Mobile: Carousel */}
              <div className="relative w-full max-w-2xl md:hidden">
                <Carousel className="w-full" aria-label="Hush features and benefits" setApi={setCarouselApi}>
                  <CarouselContent>
                    {carouselSlides.map((slide, idx) => (
                      <CarouselItem key={idx} className="flex justify-center">
                        <Card className={`w-80 h-60 flex flex-col items-center justify-center ${isHushed ? 'bg-hush-hushed-bg text-hush-text-light' : 'bg-hush-unhushed-card text-hush-text-dark'} shadow-xl`}>
                          <CardHeader className="flex flex-col items-center">
                            <slide.icon className="w-12 h-12 mb-2" aria-hidden="true" />
                            <CardTitle className="text-2xl mb-1">{slide.title}</CardTitle>
                            <CardDescription className={`text-lg mb-2 text-center ${isHushed ? 'text-hush-text-light/70' : 'text-hush-text-dark/60'}`}>{slide.description}</CardDescription>
                          </CardHeader>
                          <CardContent className="text-center text-xs font-semibold uppercase tracking-widest opacity-60">
                            {slide.section}
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* Absolutely positioned arrows */}
                  <CarouselPrevious className="absolute left-[-2.5rem] top-1/2 -translate-y-1/2 w-8 h-8 min-w-0 min-h-0 bg-transparent border border-gray-200 text-gray-400 hover:bg-gray-100 hover:text-black shadow-none z-10" aria-label="Previous slide" />
                  <CarouselNext className="absolute right-[-2.5rem] top-1/2 -translate-y-1/2 w-8 h-8 min-w-0 min-h-0 bg-transparent border border-gray-200 text-gray-400 hover:bg-gray-100 hover:text-black shadow-none z-10" aria-label="Next slide" />
                </Carousel>
                {/* Carousel Dots */}
                <div className="flex justify-center mt-4 gap-2">
                  {carouselSlides.map((_, idx) => (
                    <button
                      key={idx}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${carouselIndex === idx ? (isHushed ? 'bg-hush-text-light' : 'bg-hush-text-dark') : (isHushed ? 'bg-hush-text-light/50' : 'bg-hush-text-dark/30')}`}
                      style={{ outline: 'none', border: 'none' }}
                      onClick={() => carouselApi && carouselApi.scrollTo(idx)}
                    />
                  ))}
                </div>
              </div>
              {/* Desktop: Grid */}
              <div className="hidden md:grid grid-cols-3 gap-8 w-full max-w-4xl mt-8">
                {carouselSlides.map((slide, idx) => {
                  // If it's the last card and there are 7 cards, center it
                  const isLast = idx === carouselSlides.length - 1 && carouselSlides.length % 3 !== 0;
                  return (
                    <Card
                      key={idx}
                      className={`h-60 flex flex-col items-center justify-center ${isHushed ? 'bg-hush-hushed-bg text-hush-text-light' : 'bg-hush-unhushed-card text-hush-text-dark'} shadow-xl ${isLast ? 'col-span-1 md:col-span-1 md:col-start-2' : ''}`}
                    >
                      <CardHeader className="flex flex-col items-center">
                        <slide.icon className="w-12 h-12 mb-2" aria-hidden="true" />
                        <CardTitle className="text-2xl mb-1">{slide.title}</CardTitle>
                        <CardDescription className={`text-lg mb-2 text-center ${isHushed ? 'text-hush-text-light/70' : 'text-hush-text-dark/60'}`}>{slide.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="text-center text-xs font-semibold uppercase tracking-widest opacity-60">
                        {slide.section}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>

            {/* Video Section */}
            <section className={`w-full pt-16 pb-8 px-4 md:px-0 flex flex-col items-center mt-0 transition-colors duration-700 ${isHushed ? 'bg-hush-hushed-card' : 'bg-hush-unhushed-card/90'}`}>
              <div className={`max-w-3xl w-full mx-auto transition-colors duration-700 ${isHushed ? 'text-hush-text-light' : 'text-hush-text-dark'}`}>
                <VideoPlaceholder className="mb-8" isHushed={isHushed} />
              </div>
            </section>
          </>
        )}
      </main>
      <Footer isHushed={isHushed} />
    </div>
  );
};

export default Index;
