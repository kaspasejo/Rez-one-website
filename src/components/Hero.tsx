import { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { ArtistModal } from './ArtistModal';
import logo from 'figma:asset/598a6adb03d1a9fa03310ca046baabbb1929b290.png';
import heroImage from 'figma:asset/f76159e335151b3599fda3d6e5779dcdda7f7d25.png';
import { projectId, publicAnonKey } from '../utils/supabase/info';

interface HeroProps {
  isModalOpen: boolean;
  setIsModalOpen: (open: boolean) => void;
}

export function Hero({ isModalOpen, setIsModalOpen }: HeroProps) {
  const [showModal, setShowModal] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    artistName: '',
    email: '',
    handle: '',
    location: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync local modal state with parent
  useEffect(() => {
    setIsModalOpen(showModal || showWaitlistModal);
  }, [showModal, showWaitlistModal, setIsModalOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-85e49125/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify({
          to: ['david@rez-music.com'],
          bcc: ['sam@kulcho.com'],
          subject: 'Rezonate One - Artist Waitlist Signup',
          html: `
            <h2>New Artist Waitlist Signup</h2>
            <p><strong>Full Name:</strong> ${formData.name}</p>
            <p><strong>Artist Name:</strong> ${formData.artistName}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Instagram or TikTok Handle:</strong> ${formData.handle}</p>
            <p><strong>Location:</strong> ${formData.location}</p>
          `,
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log('Artist waitlist signup sent successfully:', result);
      } else {
        console.error('Failed to send artist waitlist signup:', result);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
    
    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setFormData({ name: '', artistName: '', email: '', handle: '', location: '' });
    }, 2000);
  };

  // Memoize onClose to prevent modal re-renders when Hero re-renders
  const handleCloseModal = useCallback(() => {
    setShowModal(false);
    setShowWaitlistModal(false);
  }, []);

  return (
    <>
      {/* Header Navigation */}
      <header className="py-6 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Rezonate One" className="h-8" />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex gap-8">
              <Link to="/" className="text-black font-medium relative">
                Home
                <span className="absolute left-0 right-0 bottom-[-4px] h-[1px] bg-black opacity-40"></span>
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-black transition-colors">
                About
              </Link>
            </nav>
            <button
              onClick={() => setShowWaitlistModal(true)}
              className="px-6 py-2.5 bg-black text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-black transition-all"
            >
              Start Earning
            </button>
          </div>
          
          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-black"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 border-t border-gray-200 pt-4">
            <nav className="flex flex-col gap-4 mb-4">
              <Link 
                to="/" 
                className="text-black font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className="text-gray-600 hover:text-black transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
            </nav>
            <button
              onClick={() => {
                setShowWaitlistModal(true);
                setMobileMenuOpen(false);
              }}
              className="w-full px-6 py-2.5 bg-black text-white rounded-full hover:bg-gray-800 transition-all"
            >
              Start Earning
            </button>
          </div>
        )}
      </header>

      <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
        {/* No background gradients - clean white */}

        <div className="relative w-full">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Tagline */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-8 text-black tracking-tight leading-[1.1]">
              The revenue OS for independent artists.
            </h1>

            {/* Subheader */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              <span className="font-semibold">Rezonate One</span> provides a home for your core fans, 
              with proven growth playbooks, and a commerce engine that turns your reach into predictable, sustainable income.
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setShowModal(true)}
              className="bg-black hover:bg-gray-800 text-white px-10 py-5 rounded-full transition-all duration-300"
            >
              <span className="relative z-10">Build Your Empire</span>
            </button>
          </div>

          {/* Hero Image */}
          <div className="mt-24 flex justify-center">
            <img 
              src={heroImage} 
              alt="Rezonate One Platform" 
              className="w-[90vw] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Artist Modal */}
      <ArtistModal 
        isOpen={showModal || showWaitlistModal} 
        onClose={handleCloseModal} 
      />
    </>
  );
}