"use client";

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function TiltCard({ children, className = "", href }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | HTMLAnchorElement | any>(null);

  // Normalized mouse coordinates (-0.5 to 0.5) from card center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Spring physics setup for smooth, tactile luxury response
  const springConfig = { damping: 25, stiffness: 220, mass: 0.6 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  // Map spring outputs to 3D rotation degrees (max 10deg for subtle, elegant luxury motion)
  const rotateX = useTransform(ySpring, [-0.5, 0.5], [40, -40]);
  const rotateY = useTransform(xSpring, [-0.5, 0.5], [-40, 40]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized position from center (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Component = href ? motion.a : motion.div;

  return (
    <div style={{ perspective: 1000 }} className="h-full w-full">
      <Component
        ref={cardRef}
        href={href}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className={className}
      >
        {children}
      </Component>
    </div>
  );
}
