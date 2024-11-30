"use client"

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

export function CarouselUBA() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const totalImages = 10;

  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
      setTimeout(() => setIsAnimating(false), 500); // Match this with CSS transition duration
    }
  }, [isAnimating]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000); // Auto advance every 3 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  const goToSlide = (index: number) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto px-4">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-zinc-900/50 to-black/50 p-4">
        <div className="relative aspect-[16/9] w-full">
          {/* Main carousel display */}
          <div className="flex gap-4">
            {/* Current Image */}
            <div className="relative w-2/3 aspect-video">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`relative w-full h-full transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
                  <Image
                    src={`/uba/${currentIndex + 1}.jpg`}
                    alt={`UBA Image ${currentIndex + 1}`}
                    fill
                    className="object-cover rounded-xl"
                    priority
                  />
                </div>
              </div>
            </div>
            
            {/* Side thumbnails */}
            <div className="w-1/3 grid grid-rows-3 gap-4">
              {[1, 2, 3].map((offset) => {
                const index = (currentIndex + offset) % totalImages;
                return (
                  <div
                    key={index}
                    className="relative aspect-video cursor-pointer overflow-hidden rounded-lg transition-transform hover:scale-105"
                    onClick={() => goToSlide(index)}
                  >
                    <Image
                      src={`/uba/${index + 1}.jpg`}
                      alt={`UBA Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Navigation dots */}
          <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2">
            {Array.from({ length: totalImages }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white w-4'
                    : 'bg-white/50 hover:bg-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
