import { useEffect, useState } from "react";
import { Mail, MessageCircle, Instagram, Twitter, Youtube, Bell, Calendar, Camera, ShoppingCart, Music, Star, Heart, Book, Globe, Cloud, MapPin, Sun, Moon, User, Lock, AlarmClock, DollarSign, Leaf, Bed, Zap, Shield, Smartphone, Users, CheckCircle } from "lucide-react";

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
    // More icons for a denser background
    { Icon: Sun, style: { top: '25%', left: '25%', fontSize: 34, rotate: '4deg' } },
    { Icon: Moon, style: { top: '50%', left: '10%', fontSize: 32, rotate: '-6deg' } },
    { Icon: User, style: { top: '65%', left: '60%', fontSize: 36, rotate: '7deg' } },
    { Icon: Lock, style: { top: '45%', left: '75%', fontSize: 38, rotate: '-7deg' } },
    { Icon: AlarmClock, style: { top: '70%', left: '35%', fontSize: 40, rotate: '5deg' } },
    { Icon: DollarSign, style: { top: '55%', left: '50%', fontSize: 36, rotate: '-5deg' } },
    { Icon: Leaf, style: { top: '20%', left: '60%', fontSize: 34, rotate: '6deg' } },
    { Icon: Bed, style: { top: '80%', left: '70%', fontSize: 38, rotate: '-4deg' } },
    { Icon: Zap, style: { top: '35%', left: '60%', fontSize: 36, rotate: '8deg' } },
    { Icon: Shield, style: { top: '60%', left: '30%', fontSize: 38, rotate: '-9deg' } },
    { Icon: Smartphone, style: { top: '25%', left: '80%', fontSize: 40, rotate: '10deg' } },
    { Icon: Users, style: { top: '75%', left: '80%', fontSize: 36, rotate: '-8deg' } },
    { Icon: CheckCircle, style: { top: '50%', left: '40%', fontSize: 38, rotate: '7deg' } },
];

export default function AppIconsBackground() {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        setAnimate(true);
    }, []);
    // Phone safe zone (percentages)
    const phoneLeft = 22; // %
    const phoneRight = 78; // %
    const phoneTop = 8; // %
    const phoneBottom = 92; // %
    return (
        <div
            aria-hidden
            className="pointer-events-none absolute inset-0 w-full h-full z-0"
            style={{ overflow: 'visible' }}
        >
            {icons.filter(({ style }) => {
                // Parse left/top as numbers
                const left = parseFloat((style.left || '0').replace('%', ''));
                const top = parseFloat((style.top || '0').replace('%', ''));
                // Only render if outside the phone bounding box
                return left < phoneLeft || left > phoneRight || top < phoneTop || top > phoneBottom;
            }).map(({ Icon, style }, i) => {
                // Later icons are bigger and darker
                const scale = 1 + i * 0.07;
                const opacity = 0.12 + i * 0.045;
                return (
                    <Icon
                        key={i}
                        style={{
                            position: 'absolute',
                            color: '#000',
                            opacity: 0,
                            ...style,
                            animation: animate ? `icon-fade-in-${i} 0.9s cubic-bezier(0.4,0,0.2,1) forwards, icon-shake-${i} 2.8s ${1.5 + i * 0.3}s infinite` : undefined,
                            animationDelay: animate ? `${i * 0.22 + 0.2}s, ${1.5 + i * 0.3}s` : undefined,
                        }}
                    />
                );
            })}
            <style>{`
                ${icons.map((_, i) => `
                  @keyframes icon-fade-in-${i} {
                    from { opacity: 0; transform: scale(0.7); }
                    to { opacity: ${0.12 + i * 0.045}; transform: scale(${1 + i * 0.07}); }
                  }
                  @keyframes icon-shake-${i} {
                    0%, 100% { transform: scale(${1 + i * 0.07}) rotate(0deg); }
                    10% { transform: scale(${1 + i * 0.07}) rotate(-6deg); }
                    20% { transform: scale(${1 + i * 0.07}) rotate(5deg); }
                    30% { transform: scale(${1 + i * 0.07}) rotate(-3deg); }
                    40% { transform: scale(${1 + i * 0.07}) rotate(2deg); }
                    50% { transform: scale(${1 + i * 0.07}) rotate(0deg); }
                  }
                `).join('')}
            `}</style>
        </div>
    );
} 