import { useState } from 'react';
import { Mail, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import logo from 'figma:asset/598a6adb03d1a9fa03310ca046baabbb1929b290.png';
import kulchoLogo from 'figma:asset/eaf06d86b6bddd515bf4663f807063b29281b461.png';
import { useNavigate } from 'react-router-dom';

export function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [showInvestorModal, setShowInvestorModal] = useState(false);
  
  const [investorForm, setInvestorForm] = useState({
    name: '',
    fund: '',
    email: '',
    ticketSize: ''
  });

  const [investorSubmitted, setInvestorSubmitted] = useState(false);
  const [isInvestorSubmitting, setIsInvestorSubmitting] = useState(false);

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
          subject: 'Rezonate One - Contact Form Submission',
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log('Contact form sent successfully:', result);
      } else {
        console.error('Failed to send contact form:', result);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
    
    setIsSubmitting(false);
    setSubmitted(true);
  };

  const handleInvestorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsInvestorSubmitting(true);
    
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
          subject: 'Rezonate One - Investor Form Submission',
          html: `
            <h2>New Investor Form Submission</h2>
            <p><strong>Name:</strong> ${investorForm.name}</p>
            <p><strong>Fund:</strong> ${investorForm.fund}</p>
            <p><strong>Email:</strong> ${investorForm.email}</p>
            <p><strong>Ticket Size:</strong> ${investorForm.ticketSize}</p>
          `,
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log('Investor form sent successfully:', result);
      } else {
        console.error('Failed to send investor form:', result);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
    
    setIsInvestorSubmitting(false);
    setInvestorSubmitted(true);
  };

  const handleCloseContactModal = () => {
    setShowContactModal(false);
    setSubmitted(false);
    setEmail('');
    setMessage('');
    navigate('/');
  };

  const handleCloseInvestorModal = () => {
    setShowInvestorModal(false);
    setInvestorSubmitted(false);
    setInvestorForm({
      name: '',
      fund: '',
      email: '',
      ticketSize: ''
    });
    navigate('/');
  };

  return (
    <>
      <footer className="py-16 px-6 border-t border-gray-200 pb-8">
        <div className="max-w-6xl mx-auto">
          {/* Desktop layout */}
          <div className="hidden md:block">
            <div className="grid grid-cols-3 mb-8">
              {/* Logo - Left */}
              <div className="flex flex-col justify-end">
                <img src={logo} alt="Rezonate One" className="h-9 mb-3 object-contain object-left" />
                <p className="text-black text-sm">
                  Fan Commerce in <span className="font-semibold">One</span> Place.
                </p>
              </div>

              {/* Copyright - Center */}
              <div className="flex items-end justify-center">
                <p className="text-gray-500 text-sm">
                  © Rezonate One 2026.
                </p>
              </div>

              {/* Links - Right */}
              <div className="flex items-end justify-end gap-8 text-sm">
                <a 
                  href="https://rezonatemusicrights.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Rezonate Rights
                </a>
                <button
                  onClick={() => setShowContactModal(true)}
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Contact
                </button>
                <button
                  onClick={() => setShowInvestorModal(true)}
                  className="text-gray-600 hover:text-black transition-colors text-sm"
                >
                  Investors
                </button>
              </div>
            </div>

            {/* Powered by line */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mt-8">
              <span>Informed by real artist data, powered by</span>
              <a 
                href="https://kulcho.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img src={kulchoLogo} alt="Kulcho" className="h-3.5" />
              </a>
            </div>
          </div>

          {/* Mobile layout */}
          <div className="md:hidden flex flex-col items-center text-center space-y-6">
            {/* Logo */}
            <div className="flex flex-col items-center">
              <img src={logo} alt="Rezonate One" className="h-9 mb-3 mx-auto" />
              <p className="text-black text-sm">
                Fan Commerce in <span className="font-semibold">One</span> Place.
              </p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8 text-sm">
              <a 
                href="https://rezonatemusicrights.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors text-sm"
              >
                Rezonate Rights
              </a>
              <button
                onClick={() => setShowContactModal(true)}
                className="text-gray-600 hover:text-black transition-colors text-sm"
              >
                Contact
              </button>
              <button
                onClick={() => setShowInvestorModal(true)}
                className="text-gray-600 hover:text-black transition-colors text-sm"
              >
                Investors
              </button>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm">
              © Rezonate One 2026.
            </p>

            {/* Powered by line */}
            <div className="flex items-center justify-center gap-2 text-xs text-gray-500">
              <span>Informed by real artist data, powered by</span>
              <a 
                href="https://kulcho.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:opacity-80 transition-opacity"
              >
                <img src={kulchoLogo} alt="Kulcho" className="h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      <AnimatePresence>
        {showContactModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowContactModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl p-8 max-w-md w-full border border-gray-200 shadow-2xl"
            >
              <button
                onClick={handleCloseContactModal}
                className="absolute top-6 right-6 text-gray-600 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>

              {!submitted ? (
                <>
                  <h3 className="text-2xl mb-2 text-black">Get in touch</h3>
                  <p className="text-gray-600 mb-8">
                    Have a question or want to learn more?
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <textarea
                        placeholder="Your message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex items-center justify-center py-12">
                  <h3 className="text-3xl text-black">Submitted</h3>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Investor Modal */}
      <AnimatePresence>
        {showInvestorModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowInvestorModal(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl p-8 max-w-md w-full border border-gray-200 shadow-2xl"
            >
              <button
                onClick={handleCloseInvestorModal}
                className="absolute top-6 right-6 text-gray-600 hover:text-black transition-colors"
              >
                <X size={24} />
              </button>

              {!investorSubmitted ? (
                <>
                  <h3 className="text-2xl mb-2 text-black">Investor Inquiry</h3>
                  <p className="text-gray-600 mb-8">
                    We'd love to hear from you!
                  </p>

                  <form onSubmit={handleInvestorSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        value={investorForm.name}
                        onChange={(e) => setInvestorForm({ ...investorForm, name: e.target.value })}
                        className="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Fund"
                        required
                        value={investorForm.fund}
                        onChange={(e) => setInvestorForm({ ...investorForm, fund: e.target.value })}
                        className="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        value={investorForm.email}
                        onChange={(e) => setInvestorForm({ ...investorForm, email: e.target.value })}
                        className="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Ticket Size"
                        required
                        value={investorForm.ticketSize}
                        onChange={(e) => setInvestorForm({ ...investorForm, ticketSize: e.target.value })}
                        className="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={isInvestorSubmitting}
                      className="w-full bg-black hover:bg-gray-800 text-white px-6 py-4 rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isInvestorSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex items-center justify-center py-12">
                  <h3 className="text-3xl text-black">Submitted</h3>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}