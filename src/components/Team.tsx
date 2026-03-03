import rezonateLogo from 'figma:asset/de3cd7aecd46cc84b49ba2954ebd936a87c7e34b.png';
import camImage from 'figma:asset/7bd5e41c6f94f207442e18d9c18dabec4a4c50f9.png';
import davidImage from 'figma:asset/4efab37f8ffe3f637edf53351d7c373bb3ce380d.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Team() {
  return (
    <section className="py-32 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-gray-100 border border-gray-200 rounded-full">
            <span className="text-sm text-gray-700">Meet the Team</span>
          </div>
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl mb-12 text-center text-black leading-tight">
          Made by people who've<br /><span className="italic">actually broken artists</span> before.
        </h2>

        {/* Team Members */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 max-w-5xl mx-auto">
          {/* Cam Blackwood */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-2 border-gray-200">
              <img
                src={camImage}
                alt="Cam Blackwood"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl text-black font-medium mb-2">Cam Blackwood</h3>
            <p className="text-gray-600 mb-4">Co-Founder</p>
            <p className="text-gray-700 leading-relaxed">
              One of the UK's most acclaimed music producers with unique community access, Cam's credits include global hits with George Ezra, London Grammar, and Lewis Capaldi.
            </p>
          </div>

          {/* David Graham */}
          <div className="flex flex-col items-center text-center">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-2 border-gray-200">
              <img
                src={davidImage}
                alt="David Graham"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl text-black font-medium mb-2">David Graham</h3>
            <p className="text-gray-600 mb-4">Co-Founder</p>
            <p className="text-gray-700 leading-relaxed">
              Founder and early-stage capital operator with multiple-exits. He's turning two decades of startup and fundraising experience into a new asset class: backing artists like startups.
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-xl text-gray-700 text-center max-w-3xl mx-auto leading-relaxed mb-12">
          Together, they're turning proven content, release and conversion playbooks into a platform that <span className="font-semibold text-black">any serious artist</span> can run.
        </p>

        {/* Backed by */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Backed by
          </p>
          <img src={rezonateLogo} alt="Rezonate" className="h-8 mx-auto" />
        </div>
      </div>
    </section>
  );
}