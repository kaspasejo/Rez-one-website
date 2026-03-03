import { useEffect, useRef } from 'react';

const artists = [
  {
    image: "https://images.unsplash.com/photo-1593459866242-426f7768f3dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBwb3J0cmFpdCUyMG11c2ljaWFufGVufDF8fHx8MTc2NTMxODc0Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Artist 1"
  },
  {
    image: "https://images.unsplash.com/photo-1762160773119-adb4c011e4d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaW5nZXIlMjBoZWFkc2hvdCUyMHN0dWRpb3xlbnwxfHx8fDE3NjUzNjQxMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Artist 2"
  },
  {
    image: "https://images.unsplash.com/photo-1683023939412-c1c7d991f037?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpY2lhbiUyMHBlcmZvcm1lciUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTM2NDEyN3ww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Artist 3"
  },
  {
    image: "https://images.unsplash.com/photo-1592405374489-f022e685d65e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjUzNjQxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Artist 4"
  },
  {
    image: "https://images.unsplash.com/photo-1760458955495-9712cc8f79c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpZSUyMGFydGlzdCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NTMxNDczNXww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Artist 5"
  },
  {
    image: "https://images.unsplash.com/photo-1762288045707-dfd64fe6eb4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxESiUyMHByb2R1Y2VyJTIwaGVhZHNob3R8ZW58MXx8fHwxNzY1MzY0MTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Artist 6"
  },
  {
    image: "https://images.unsplash.com/photo-1595963202332-e837eb8e466c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYXBwZXIlMjBoaXAlMjBob3AlMjBhcnRpc3R8ZW58MXx8fHwxNzY1MzY0MTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Artist 7"
  },
  {
    image: "https://images.unsplash.com/photo-1615748562188-07be820cff5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBzaW5nZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUzNjQxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Artist 8"
  },
  {
    image: "https://images.unsplash.com/photo-1754678103585-b5f6cd27fe5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW5kJTIwbWVtYmVyJTIwbXVzaWNpYW58ZW58MXx8fHwxNzY1MzY0MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Artist 9"
  }
];

export function ArtistCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one set of images
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      requestAnimationFrame(animate);
    };

    const animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Duplicate the artists array to create seamless infinite scroll
  const duplicatedArtists = [...artists, ...artists];

  return (
    <section className="py-16 overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden"
        style={{ scrollBehavior: 'auto' }}
      >
        {duplicatedArtists.map((artist, index) => (
          <div 
            key={index}
            className="flex-shrink-0"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-gray-200"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
