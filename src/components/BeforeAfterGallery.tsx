import React, { useState } from 'react';
import { Info, Sparkles } from 'lucide-react';


export const BeforeAfterGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'whitening' | 'veneers' | 'aligners'>('whitening');
  const [sliderPos, setSliderPos] = useState(50);
  const [viewMode, setViewMode] = useState<'split' | 'before' | 'after'>('split');

  const galleryData = {
    whitening: {
      title: 'Professional In-Chair Teeth Whitening',
      description: 'Lifting enamel stains and discolouration under professional dentist supervision.',
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
      afterImg: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=1200&q=80',
      tag: 'In-Chair Whitening Case',
    },
    veneers: {
      title: 'Porcelain Veneer Restorations',
      description: 'Restoring tooth symmetry, chip damage, and natural enamel translucency.',
      beforeImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
      afterImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=1200&q=80',
      tag: 'Custom Veneer Smile Design',
    },
    aligners: {
      title: 'Clear Aligner Orthodontics',
      description: 'Discrete alignment of crowded front teeth without traditional metal brackets.',
      beforeImg: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80',
      afterImg: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80',
      tag: 'Clear Aligner Alignment Case',
    },
  };

  const current = galleryData[activeTab];

  return (
    <section className="py-24 bg-ivory border-b border-charcoal/10 font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center space-y-3 mb-12">
          <div className="font-script text-3xl sm:text-4xl text-forest font-normal">
            Smile Transformations
          </div>
          <span className="text-[11px] font-sans font-bold uppercase tracking-[0.25em] text-forest block">
            CLINICAL TEETH CASE GALLERY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-charcoal">
            Before & After Teeth Photos
          </h2>
          <p className="text-xs sm:text-sm text-charcoal-muted max-w-lg mx-auto font-sans leading-relaxed">
            Drag the slider horizontally or toggle view modes to compare before and after teeth photos for our clinical treatment cases.
          </p>
        </div>

        {/* Treatment Category Tabs */}
        <div className="flex justify-center flex-wrap gap-3 mb-8">
          {(['whitening', 'veneers', 'aligners'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all uppercase tracking-widest ${
                activeTab === tab
                  ? 'bg-forest text-white shadow-md'
                  : 'bg-white text-charcoal border border-charcoal/15 hover:bg-sand-light'
              }`}
            >
              {tab === 'whitening' ? 'Teeth Whitening' : tab === 'veneers' ? 'Porcelain Veneers' : 'Clear Aligners'}
            </button>
          ))}
        </div>

        {/* View Mode Switcher (Split / Before Only / After Only) */}
        <div className="flex justify-center items-center gap-2 mb-8 text-xs font-sans">
          <span className="text-charcoal-muted font-medium text-[11px] uppercase tracking-wider mr-2">View Mode:</span>
          <button
            onClick={() => setViewMode('split')}
            className={`px-3.5 py-1.5 rounded-lg font-bold border transition-colors ${
              viewMode === 'split' ? 'bg-charcoal text-white border-charcoal' : 'bg-white text-charcoal border-charcoal/20 hover:bg-sand-light'
            }`}
          >
            ↔ Interactive Split
          </button>
          <button
            onClick={() => setViewMode('before')}
            className={`px-3.5 py-1.5 rounded-lg font-bold border transition-colors ${
              viewMode === 'before' ? 'bg-charcoal text-white border-charcoal' : 'bg-white text-charcoal border-charcoal/20 hover:bg-sand-light'
            }`}
          >
            Before Photo
          </button>
          <button
            onClick={() => setViewMode('after')}
            className={`px-3.5 py-1.5 rounded-lg font-bold border transition-colors ${
              viewMode === 'after' ? 'bg-charcoal text-white border-charcoal' : 'bg-white text-charcoal border-charcoal/20 hover:bg-sand-light'
            }`}
          >
            After Photo
          </button>
        </div>

        {/* Interactive Comparison Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-charcoal/10 overflow-hidden shadow-xl">
          
          {/* Main Visual Container */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] select-none overflow-hidden bg-sand-light">
            
            {viewMode === 'before' && (
              <div className="w-full h-full relative">
                <img
                  src={current.beforeImg}
                  alt={`${current.title} Before`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-charcoal text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                  BEFORE TREATMENT (INITIAL)
                </span>
              </div>
            )}

            {viewMode === 'after' && (
              <div className="w-full h-full relative">
                <img
                  src={current.afterImg}
                  alt={`${current.title} After`}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-forest text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md">
                  AFTER TREATMENT (RESULT)
                </span>
              </div>
            )}

            {viewMode === 'split' && (
              <>
                {/* AFTER Image (Underneath) */}
                <img
                  src={current.afterImg}
                  alt={`${current.title} After Result`}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 bg-forest text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-10">
                  AFTER RESULT
                </span>

                {/* BEFORE Image (Clipped Overlay) */}
                <div
                  className="absolute inset-y-0 left-0 overflow-hidden z-10"
                  style={{ width: `${sliderPos}%` }}
                >
                  <div className="absolute inset-0 w-[100vw] max-w-[896px] h-full">
                    <img
                      src={current.beforeImg}
                      alt={`${current.title} Before Initial`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute top-4 left-4 bg-charcoal text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-20 whitespace-nowrap">
                    BEFORE INITIAL
                  </span>
                </div>

                {/* Vertical Divider Line */}
                <div
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 cursor-ew-resize flex items-center justify-center pointer-events-none"
                  style={{ left: `${sliderPos}%` }}
                >
                  <div className="w-9 h-9 rounded-full bg-forest text-white shadow-2xl border-2 border-white flex items-center justify-center text-xs font-bold">
                    ↔
                  </div>
                </div>

                {/* Drag Overlay Slider */}
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={sliderPos}
                  onChange={(e) => setSliderPos(Number(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
                  aria-label="Drag slider to compare before and after teeth photos"
                />
              </>
            )}

          </div>

          {/* Side-by-side Thumbnail Cards for Quick Reference */}
          <div className="p-6 bg-ivory/50 border-t border-charcoal/10 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            
            <div className="flex items-center gap-4 bg-white p-3 border border-charcoal/10 rounded-2xl shadow-sm">
              <div className="w-20 h-14 rounded-lg overflow-hidden bg-sand-light flex-shrink-0 border border-charcoal/10">
                <img src={current.beforeImg} alt="Before thumbnail" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-charcoal-muted block">BEFORE PHOTO</span>
                <p className="text-xs font-bold text-charcoal">Initial Teeth Condition</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-3 border border-charcoal/10 rounded-2xl shadow-sm">
              <div className="w-20 h-14 rounded-lg overflow-hidden bg-sand-light flex-shrink-0 border border-charcoal/10">
                <img src={current.afterImg} alt="After thumbnail" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-forest block">AFTER PHOTO</span>
                <p className="text-xs font-bold text-forest">Treatment Outcome</p>
              </div>
            </div>

          </div>

          {/* Case Description & Tag */}
          <div className="p-6 bg-white border-t border-charcoal/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl font-normal text-charcoal">{current.title}</h3>
              <p className="text-xs text-charcoal-muted font-sans mt-0.5">{current.description}</p>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-forest bg-forest/10 px-3.5 py-1.5 rounded-full border border-forest/20 flex items-center gap-1">
              <Sparkles size={12} /> {current.tag}
            </span>
          </div>

        </div>

        {/* Clinical Disclaimer */}
        <div className="mt-6 text-center text-[11px] text-charcoal-muted flex items-center justify-center gap-1.5 max-w-lg mx-auto font-sans">
          <Info size={14} className="text-forest flex-shrink-0" />
          <span>Individual treatment outcomes vary. Results depend on existing tooth structure and individual dentist consultation.</span>
        </div>

      </div>
    </section>
  );
};

export default BeforeAfterGallery;
