import React from 'react';
import { Facebook, Instagram, Play, Heart, Award } from 'lucide-react';


export const SocialFeedSection: React.FC = () => {
  const feedItems = [
    {
      id: 1,
      type: 'award',
      title: 'Tasmanian Healthcare Excellence Awards 2025 Winner',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80',
      tag: 'Award Category Winner',
      isVideo: false,
    },
    {
      id: 2,
      type: 'smile',
      title: 'Veneer Smile Transformation Journey',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
      tag: 'Patient Transformation',
      isVideo: true,
    },
    {
      id: 3,
      type: 'story',
      title: 'Behind the Scenes at Harbour Dental Studio Hobart',
      image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80',
      tag: 'Clinic Life',
      isVideo: false,
    },
    {
      id: 4,
      type: 'patient',
      title: 'Clear Aligners Reveal Day!',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
      tag: 'Patient Story',
      isVideo: true,
    },
    {
      id: 5,
      type: 'team',
      title: 'Meet Our Hobart Clinical & Support Team',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80',
      tag: 'Hobart Studio',
      isVideo: false,
    },
  ];

  return (
    <section id="social" className="py-20 bg-charcoal text-white font-sans border-t border-white/10 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 text-center space-y-8">
        
        {/* Headline Accent */}
        <div className="space-y-3">
          <div className="font-script text-5xl sm:text-6xl text-sand font-normal tracking-wide flex items-center justify-center gap-3">
            <span>Harbour</span>
            <span className="italic text-white">Social</span>
          </div>

          {/* Social Media Links */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-forest text-white flex items-center justify-center transition-all border border-white/15"
              aria-label="Harbour Dental Studio Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-forest text-white flex items-center justify-center transition-all border border-white/15"
              aria-label="Harbour Dental Studio Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        {/* Social Feed Grid / Horizontal Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 pt-4">
          {feedItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-2xl overflow-hidden bg-sand-light border border-white/15 shadow-xl group cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-[0.88] group-hover:brightness-100"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

              {/* Play / Badge Icon */}
              {item.isVideo ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play size={20} className="ml-0.5 fill-white" />
                  </div>
                </div>
              ) : (
                <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] p-1.5 rounded-lg">
                  {item.type === 'award' ? <Award size={14} className="text-sand" /> : <Heart size={14} className="text-rose-400 fill-rose-400" />}
                </div>
              )}

              {/* Bottom Caption */}
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-[9px] font-bold uppercase tracking-wider text-sand block">
                  {item.tag}
                </span>
                <p className="text-xs font-medium text-white line-clamp-1 mt-0.5 font-sans">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Follow CTA Footnote */}
        <p className="text-xs text-slate-400 font-sans tracking-wider pt-2">
          Follow <span className="text-sand font-bold">@harbourdentalstudio</span> on Instagram for smile transformations & clinic stories
        </p>

      </div>
    </section>
  );
};

export default SocialFeedSection;
