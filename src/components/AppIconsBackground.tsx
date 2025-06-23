import { useEffect, useState } from "react";
import { Mail, MessageCircle, Instagram, Twitter, Youtube, Bell, Calendar, Camera, ShoppingCart, Music, Star, Heart, Book, Globe, Cloud, MapPin } from "lucide-react";

// Ensure the parent hero section does NOT have overflow:hidden for icons to show
const icons = [
    { Icon: Mail, style: { top: '10%', left: '12%', fontSize: 38, rotate: '-12deg' } },
    { Icon: MessageCircle, style: { top: '18%', left: '80%', fontSize: 44, rotate: '8deg' } },
    { Icon: Instagram, style: { top: '60%', left: '8%', fontSize: 40, rotate: '-8deg' } },
    { Icon: Twitter, style: { top: '70%', left: '85%', fontSize: 36, rotate: '10deg' } },
    { Icon: Youtube, style: { top: '80%', left: '30%', fontSize: 48, rotate: '-6deg' } },
    { Icon: Bell, style: { top: '8%', left: '60%', fontSize: 36, rotate: '6deg' } },
    { Icon: Calendar, style: { top: '30%', left: '90%', fontSize: 38, rotate: '-10deg' } },
    { Icon: Camera, style: { top: '75%', left: '60%', fontSize: 40, rotate: '12deg' } },
    { Icon: ShoppingCart, style: { top: '20%', left: '40%', fontSize: 36, rotate: '-8deg' } },
    { Icon: Music, style: { top: '60%', left: '70%', fontSize: 38, rotate: '8deg' } },
    { Icon: Star, style: { top: '40%', left: '5%', fontSize: 36, rotate: '6deg' } },
    { Icon: Heart, style: { top: '85%', left: '50%', fontSize: 44, rotate: '-10deg' } },
    { Icon: Book, style: { top: '15%', left: '55%', fontSize: 36, rotate: '8deg' } },
    { Icon: Globe, style: { top: '35%', left: '20%', fontSize: 40, rotate: '-6deg' } },
    { Icon: Cloud, style: { top: '55%', left: '90%', fontSize: 36, rotate: '10deg' } },
    { Icon: MapPin, style: { top: '80%', left: '15%', fontSize: 38, rotate: '-8deg' } },
];

export default function AppIconsBackground() {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 w-full h-full z-10"
            style={{ overflow: 'visible' }}
        >
            {icons.map(({ Icon, style }, i) => (
                <Icon
                    key={i}
                    style={{
                        position: 'absolute',
                        color: '#000',
                        opacity: 0,
                        ...style,
                        animation: animate ? `icon-fade-in 0.7s cubic-bezier(0.4,0,0.2,1) forwards` : undefined,
                        animationDelay: animate ? `${i * 0.18 + 0.2}s` : undefined,
                    }}
                />
            ))}
            <style>{`
                @keyframes icon-fade-in {
                    from { opacity: 0; }
                    to { opacity: 0.18; }
                }
            `}</style>
        </div>
    );
} 