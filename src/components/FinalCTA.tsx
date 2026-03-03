import { useState } from 'react';
import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { ArtistModal } from './ArtistModal';
import { useNavigate } from 'react-router-dom';

export function FinalCTA() {
  const navigate = useNavigate();
  const [showArtistModal, setShowArtistModal] = useState(false);
  const [showInvestorModal, setShowInvestorModal] = useState(false);
  
  const [investorForm, setInvestorForm] = useState({
    name: '',
    fund: '',
    email: '',
    ticketSize: ''
  });

  const [investorSubmitted, setInvestorSubmitted] = useState(false);
  const [isInvestorSubmitting, setIsInvestorSubmitting] = useState(false);

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
          subject: 'Rezonate One - Investment Pack Request',
          html: `
            <h2>New Investment Pack Request</h2>
            <p><strong>Name:</strong> ${investorForm.name}</p>
            <p><strong>Fund/Company:</strong> ${investorForm.fund}</p>
            <p><strong>Email:</strong> ${investorForm.email}</p>
            <p><strong>Typical Ticket Size:</strong> ${investorForm.ticketSize}</p>
          `,
        }),
      });

      const result = await response.json();
      
      if (response.ok) {
        console.log('Investment pack request sent successfully:', result);
      } else {
        console.error('Failed to send investment pack request:', result);
      }
    } catch (error) {
      console.error('Error sending email:', error);
    }
    
    setIsInvestorSubmitting(false);
    setInvestorSubmitted(true);
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
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black text-white rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-5xl md:text-6xl mb-6 leading-tight">
              Rezonate One is changing how artists build revenue.
            </h2>
            <p className="text-2xl mb-10">
              Be part of that change.
            </p>
            <button 
              onClick={() => setShowArtistModal(true)}
              className="bg-white hover:bg-gray-100 hover:scale-105 text-black px-10 py-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl"
            >
              Register Now
            </button>
          </div>
        </div>
      </section>

      {/* Artist Modal */}
      <ArtistModal 
        isOpen={showArtistModal} 
        onClose={() => setShowArtistModal(false)} 
      />

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
                  <h3 className="text-2xl mb-2 text-black">Request Investment Pack</h3>
                  <p className="text-gray-600 mb-8">
                    Get detailed information about the opportunity.
                  </p>

                  <form onSubmit={handleInvestorSubmit} className="space-y-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Name"
                        required
                        value={investorForm.name}
                        onChange={(e) => setInvestorForm({...investorForm, name: e.target.value})}
                        className="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Fund/Company"
                        value={investorForm.fund}
                        onChange={(e) => setInvestorForm({...investorForm, fund: e.target.value})}
                        className="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email"
                        required
                        value={investorForm.email}
                        onChange={(e) => setInvestorForm({...investorForm, email: e.target.value})}
                        className="w-full px-5 py-4 bg-white border border-gray-300 rounded-xl text-black placeholder-gray-400 focus:outline-none focus:border-black transition-colors"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="Typical Ticket Size"
                        required
                        value={investorForm.ticketSize}
                        onChange={(e) => setInvestorForm({...investorForm, ticketSize: e.target.value})}
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