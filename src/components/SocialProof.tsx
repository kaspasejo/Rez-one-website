import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const reviews = [
  {
    quote: "Rezonate makes it so much easier to connect with my fans and actually make money from my music.",
    name: "Sarah Chen",
    role: "Independent Artist"
  },
  {
    quote: "Finally, a platform that understands what artists actually need - not just more streams.",
    name: "Marcus Webb",
    role: "Producer & DJ"
  },
  {
    quote: "The conversion tools are game-changing. I'm making more from 1000 real fans than I ever did chasing millions of streams.",
    name: "Elena Rodriguez",
    role: "Singer-Songwriter"
  },
  {
    quote: "Rezonate helped me turn my Instagram following into actual revenue. It's been incredible.",
    name: "Jamie Park",
    role: "Electronic Artist"
  },
  {
    quote: "This is the missing piece for independent artists. Everything in one place, designed for conversion.",
    name: "Alex Thompson",
    role: "Hip-Hop Artist"
  },
  {
    quote: "I doubled my monthly income within 3 months of using Rezonate. The fan CRM is pure gold.",
    name: "Maya Johnson",
    role: "R&B Artist"
  }
];

export function SocialProof() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getVisibleReviews = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(reviews[(currentIndex + i) % reviews.length]);
    }
    return visible;
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="pt-24 pb-16 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Reviews Carousel */}
        <div>
          {/* Desktop View - 3 cards */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 gap-6 mb-8">
              {getVisibleReviews().map((review, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 h-64 flex flex-col justify-between"
                >
                  <p className="text-gray-700 leading-relaxed mb-6">
                    "{review.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-black">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-black' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Mobile View - 1 card */}
          <div className="md:hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 min-h-64 flex flex-col justify-between mb-6"
              >
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{reviews[currentIndex].quote}"
                </p>
                <div>
                  <p className="font-semibold text-black">{reviews[currentIndex].name}</p>
                  <p className="text-sm text-gray-500">{reviews[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-black' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}