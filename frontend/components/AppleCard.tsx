import React from 'react';
import { cn } from '@/lib/utils';

interface AppleCardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    backgroundImage?: string;
    noPadding?: boolean;
}

const AppleCard = ({ children, className, hoverEffect = true, backgroundImage, noPadding = false }: AppleCardProps) => {
    return (
        <div
            className={cn(
                "apple-card group transition-all duration-500",
                hoverEffect && "hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/5 cursor-pointer",
                className
            )}
            style={backgroundImage ? {
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            } : {}}
        >
            {/* Dark overlay for readability if there's an image */}
            {backgroundImage && (
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
            )}

            {/* Content */}
            <div className={cn("relative z-10 h-full", !noPadding && "p-8")}>
                {children}
            </div>
        </div>
    );
};

export default AppleCard;
