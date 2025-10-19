import React from "react";

interface NavbarProps {
    isHushed: boolean;
    menuOpen: boolean;
    setMenuOpen: (open: boolean) => void;
    menuRef: React.RefObject<HTMLDivElement>;
    navbarBg: string;
    navbarTextClass: string;
    isNavbarVisible: boolean;
    onShopClick?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
    isHushed,
    menuOpen,
    setMenuOpen,
    menuRef,
    navbarBg,
    navbarTextClass,
    isNavbarVisible,
    onShopClick,
}) => (
    <header className={`w-full flex justify-center pt-6 px-4 md:px-10 fixed top-0 left-0 z-30 transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'}`} style={{ pointerEvents: 'auto' }}>
        <nav className="flex items-center justify-between w-full max-w-4xl px-6 md:px-10 py-3 rounded-full shadow-md" style={{ minHeight: 56, background: navbarBg }}>
            {/* Hamburger */}
            <div className="relative" ref={menuRef}>
                <button className={`p-2 ${navbarTextClass}`} aria-label="Menu" onClick={() => setMenuOpen(!menuOpen)}>
                    <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={navbarTextClass}>
                        <line x1="6" y1="9" x2="22" y2="9" />
                        <line x1="6" y1="14" x2="22" y2="14" />
                        <line x1="6" y1="19" x2="22" y2="19" />
                    </svg>
                </button>
                {menuOpen && (
                    <div className={`absolute left-0 mt-2 w-40 rounded-xl shadow-lg z-50 flex flex-col text-left ${isHushed ? 'bg-hush-hushed-card' : 'bg-hush-unhushed-card'} ${isHushed ? '' : 'border border-hush-border'}`}>
                        <button
                            onClick={() => {
                                onShopClick?.();
                                setMenuOpen(false);
                            }}
                            className={`px-5 py-3 font-medium text-left w-full ${isHushed ? 'text-hush-text-light hover:bg-hush-text-light/10' : 'text-hush-text-dark hover:bg-hush-border'}`}
                        >
                            Shop
                        </button>
                        <a href="mailto:contact@hushscreen.com" className={`px-5 py-3 font-medium rounded-b-xl ${isHushed ? 'text-hush-text-light hover:bg-hush-text-light/10' : 'text-hush-text-dark hover:bg-hush-border'}`} onClick={() => setMenuOpen(false)}>Contact Us</a>
                    </div>
                )}
            </div>
            {/* Center Logo */}
            <a href="/" className="cursor-pointer">
                <img 
                    src="/logo.png" 
                    alt="Hush Logo" 
                    className="h-8 w-auto"
                />
            </a>
            {/* Store Icon */}
            <button
                onClick={onShopClick}
                className={`p-2 ${navbarTextClass}`}
                aria-label="Shop"
            >
                <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={navbarTextClass}>
                    <rect x="5" y="10" width="18" height="10" rx="2" />
                    <path d="M7 10V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3" />
                </svg>
            </button>
        </nav>
    </header>
);

export default Navbar; 