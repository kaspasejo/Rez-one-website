import mobileApp from 'figma:asset/6a2c5e0cb896293a5aec7e750d77bc945c26a8df.png';

interface ProblemProps {
  isModalOpen: boolean;
}

export function Problem({ isModalOpen }: ProblemProps) {
  return (
    <section className="py-32 px-6 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl mb-20 text-black max-w-4xl">
          Discovery isn't the problem. <span className="italic font-semibold">Conversion is.</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="space-y-3 group">
            <div className="h-1 w-12 bg-black rounded-full mb-4 transition-all duration-300 group-hover:w-20" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Artists don't struggle to be seen - the difficulty is turning attention into revenue.
            </p>
          </div>
          <div className="space-y-3 group">
            <div className="h-1 w-12 bg-black rounded-full mb-4 transition-all duration-300 group-hover:w-20" />
            <p className="text-lg text-gray-700 leading-relaxed">
              TikTok, Instagram and Spotify own the audience. Artists don't own anything.
            </p>
          </div>
          <div className="space-y-3 group">
            <div className="h-1 w-12 bg-black rounded-full mb-4 transition-all duration-300 group-hover:w-20" />
            <p className="text-lg text-gray-700 leading-relaxed">
              Every release, tour and merch drop is a gamble without a proper system.
            </p>
          </div>
        </div>

        {/* New Platform Features Section */}
        <div className="bg-black text-white rounded-3xl p-12 md:p-16">
          <p className="text-sm mb-6 text-gray-400">Introducing rezonate.one</p>
          
          <h3 className="text-3xl sm:text-4xl md:text-5xl mb-4 leading-tight">
            Turn reach into predictable income.
          </h3>

          <div className="grid md:grid-cols-2 gap-12 mb-12 items-start">
            <div>
              <p className="text-3xl sm:text-4xl md:text-5xl mb-12 leading-tight">
                All in <strong>One</strong> platform.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-white">1</span>
                  <p className="text-lg pt-2">Dynamic link-in-bio storefront</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-white">2</span>
                  <p className="text-lg pt-2">Fan CRM and tagged segmentation</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-white">3</span>
                  <p className="text-lg pt-2">Retention & multi-channel messaging</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-white">4</span>
                  <p className="text-lg pt-2">Transactional engagement framework</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-4xl font-bold text-white">5</span>
                  <p className="text-lg pt-2">Revenue Engine subscriptions, drops and requests</p>
                </div>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <img 
                src={mobileApp} 
                alt="Rezonate One Mobile App" 
                className="w-[80%] max-w-[400px] h-auto"
              />
            </div>
          </div>

          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-400">Artists get discovered on socials.</p>
            <p className="text-white font-medium">They get paid on rezonate.one.</p>
          </div>
        </div>
      </div>
    </section>
  );
}