import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Footer } from './Footer';
import { ArtistModal } from './ArtistModal';
import logo from 'figma:asset/598a6adb03d1a9fa03310ca046baabbb1929b290.png';
import camImage from 'figma:asset/7bd5e41c6f94f207442e18d9c18dabec4a4c50f9.png';
import davidImage from 'figma:asset/4efab37f8ffe3f637edf53351d7c373bb3ce380d.png';
import georgeEzraImage from 'figma:asset/a0967db4e9a43de9b42cfaa361d9a079564e261e.png';
import christabelImage from 'figma:asset/36afa453a0638b100de1133c82117c0de034f6f4.png';
import andyKnoxImage from 'figma:asset/47fc8cee1ae03a699ce2b7f0ba80e0c27700ce1e.png';
import owenCuttsImage from 'figma:asset/1305b07025a9a4ffd97f595d466ec9273c706e50.png';
import lornaBlackwoodImage from 'figma:asset/c80c6bbeaac1de67fe99ef48bbfa87d077a13687.png';

export function About() {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  const managementTeam = [
    {
      name: 'Cam Backwood',
      image: camImage,
      bio: 'A multi-platinum producer & artist developer for George Ezra, London Grammar, Billie Marten using a proven development blueprint.'
    },
    {
      name: 'David Graham',
      image: davidImage,
      bio: 'A seasoned founder, with four exits and 20 years scaling tech-enabled businesses. Leads product, GTM, strategy and operations.'
    },
    {
      name: 'Christabel Zahnd',
      image: christabelImage,
      bio: 'Artist manager & festival programmer. Deep insight into artist needs, onboarding and community activation.'
    }
  ];

  const advisoryTeam = [
    {
      name: 'Owen Cutts',
      image: owenCuttsImage,
      bio: 'BRIT award-winning songwriter/producer (Stormzy, Dave) Modern content frameworks and creator strategy.'
    },
    {
      name: 'Andy Knox',
      image: andyKnoxImage,
      bio: 'Manager: Lewis Capaldi, JP Cooper, Nina Nesbitt, BANNERS. Pipeline, manager network, early-market adoption.'
    },
    {
      name: 'Lorna Blackwood',
      image: lornaBlackwoodImage,
      bio: 'Grammy, BRIT & MPG award-winning vocal coach/producer (Dua Lipa, Mabel) Artist identity, performance psychology, craft.'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header */}
      <header className="py-6 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link to="/">
            <img src={logo} alt="Rezonate One" className="h-8" />
          </Link>
          <div className="flex items-center gap-8">
            <nav className="flex gap-8">
              <Link to="/" className="text-gray-600 hover:text-black transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-black font-medium relative">
                About
                <span className="absolute left-0 right-0 bottom-[-4px] h-[1px] bg-black opacity-40"></span>
              </Link>
            </nav>
            <button
              onClick={() => setShowWaitlistModal(true)}
              className="px-6 py-2.5 bg-black text-white rounded-full hover:bg-white hover:text-black hover:border hover:border-black transition-all"
            >
              Start Earning
            </button>
          </div>
        </div>
      </header>

      {/* Team Section */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Text instead of badge */}
          <p className="text-sm text-gray-600 font-semibold text-center mb-4">
            We've done this before
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl mb-12 text-center text-black leading-tight max-w-4xl mx-auto">
            A team that's developed global artists and scaled tech platforms
          </h2>

          {/* Management Team */}
          <div className="mb-12">
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-200 rounded-full">
                <span className="text-sm text-gray-700">Management</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-12 mb-16">
              {managementTeam.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-2 border-gray-200 bg-gray-100">
                    {member.image && (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <h4 className="text-xl text-black font-medium mb-3">{member.name}</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Advisory Team */}
          <div>
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-200 rounded-full">
                <span className="text-sm text-gray-700">Advisory</span>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-12">
              {advisoryTeam.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-2 border-gray-200 bg-gray-100">
                    {member.image && (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale"
                      />
                    )}
                  </div>
                  <h4 className="text-xl text-black font-medium mb-3">{member.name}</h4>
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-32 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left column */}
            <div>
              <p className="text-sm text-gray-600 mb-4 font-semibold">
                Before a platform, there was a process.
              </p>
              <h2 className="text-4xl sm:text-5xl mb-8 text-black leading-tight">
                A development blueprint born in a studio.
              </h2>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                Cam took a 19-year-old George Ezra from raw demos to a global multi-platinum artist, using a repeatable development process built around identity, writing discipline, content, and release strategy.
              </p>

              <div className="mb-8">
                <h3 className="text-xl text-black mb-4">
                  Artist success follows a pattern -<br />
                  <span className="font-medium">but independent artists are never given the pattern.</span>
                </h3>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Rezonate One takes that proven development blueprint and turns it into a scalable platform any serious artist can follow.
              </p>

              <div>
                <p className="text-black mb-1">
                  What worked for one artist can now work for thousands.
                </p>
                <p className="text-black font-medium">
                  Rezonate One productises this expertise.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div>
              <img 
                src={georgeEzraImage} 
                alt="George Ezra in studio" 
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling CTA Banner */}
      <div 
        className="border-t border-gray-200 bg-black text-white py-6 overflow-hidden cursor-pointer hover:bg-gray-900 transition-colors"
        onClick={() => setShowWaitlistModal(true)}
      >
        <div className="flex whitespace-nowrap animate-scroll">
          {[...Array(20)].map((_, i) => (
            <span key={i} className="inline-block mx-8 text-2xl font-medium">
              Build Your Sustainable Future
            </span>
          ))}
        </div>
      </div>

      {/* Artist Modal */}
      <ArtistModal 
        isOpen={showWaitlistModal} 
        onClose={() => setShowWaitlistModal(false)} 
      />

      <Footer />
    </div>
  );
}