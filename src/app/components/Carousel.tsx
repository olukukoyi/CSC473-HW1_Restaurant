"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { LeftArrow, RightArrow } from "./Icons";

interface CarouselProps {
  autoPlay?: boolean;
  interval?: number;
  showControls?: boolean;
  showIndicators?: boolean;
}

const images = [
  {
    src: "/slider-new1.png",
    alt: "Slide1",
  },
  {
    src: "/Slider4.png",
    alt: "Slide 4",
  },
  {
    src: "/yelp-1.jpg",
    alt: "Slide 4",
  },
  {
    src: "/outside-double.avif",
    alt: "Slide 4",
  },
  {
    src: "/double-smashed-2.jpg",
    alt: "Slide 4",
  },
  {
    src: "/grubgrub.jpg",
    alt: "Slide 4",
  },
];

export function Carousel({
  autoPlay = true,
  interval = 5000,
  showControls = true,
  showIndicators = true,
}: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  }, []);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isPlaying) {
      intervalId = setInterval(goToNext, interval);
    }

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isPlaying, interval, goToNext]);

  const handleMouseEnter = () => {
    if (autoPlay) setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    if (autoPlay) setIsPlaying(true);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [goToNext, goToPrevious]);

  if (!images || images.length === 0) {
    return (
      <div className="h-64 bg-muted rounded-md flex items-center justify-center">
        No images to display
      </div>
    );
  }

  return (
    <div
      className="relative w-[75%] overflow-hidden rounded-lg h-[550px]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-roledescription="carousel"
    >
      <div
        className="flex transition-transform duration-500 ease-in-out h-[550px]"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${images.length}`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-contain"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {showControls && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            aria-label="Previous slide"
          >
            <LeftArrow />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            aria-label="Next slide"
          >
            <RightArrow />
          </button>
        </>
      )}

      {showIndicators && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary ${
                currentIndex === index
                  ? "bg-white"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={currentIndex === index ? "true" : "false"}
            />
          ))}
        </div>
      )}
    </div>
  );
}
