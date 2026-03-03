import { Home, BookOpen, TrendingUp } from 'lucide-react';

export function WhatWeDo() {
  return (
    <section className="py-32 px-6 border-t border-gray-200 relative overflow-hidden">
      {/* No background gradient */}
      
      <div className="max-w-6xl mx-auto relative">
        <h2 className="text-4xl sm:text-5xl md:text-6xl mb-24 text-center text-black">
          Fan Commerce<br /><span className="italic">in <strong>One</strong> place.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Block 1 */}
          <div className="group relative">
            <div className="relative space-y-6 p-8 bg-white rounded-2xl border border-gray-200 group-hover:border-black transition-all duration-300">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center">
                <Home className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl text-black">Build your home base</h3>
              <p className="text-gray-600 leading-relaxed">
                One link for your fans. A single home for your community, content and drops - not five different tools stitched together.
              </p>
            </div>
          </div>

          {/* Block 2 */}
          <div className="group relative">
            <div className="relative space-y-6 p-8 bg-white rounded-2xl border border-gray-200 group-hover:border-black transition-all duration-300">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl text-black">Run proven playbooks</h3>
              <p className="text-gray-600 leading-relaxed">
                Weekly content rhythms and release frameworks built from real artist campaigns - not guesswork or generic "post more" advice.
              </p>
            </div>
          </div>

          {/* Block 3 */}
          <div className="group relative">
            <div className="relative space-y-6 p-8 bg-white rounded-2xl border border-gray-200 group-hover:border-black transition-all duration-300">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl text-black">Turn superfans into revenue</h3>
              <p className="text-gray-600 leading-relaxed">
                Tickets, merch, digital drops, memberships and fan requests — all wired into a fan-commerce engine with real data behind it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}