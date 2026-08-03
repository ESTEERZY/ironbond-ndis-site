import React, { useState } from 'react';
import { Info } from 'lucide-react';


export const BeforeAfterGallery: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'whitening' | 'veneers' | 'aligners'>('whitening');
  const [sliderPos, setSliderPos] = useState(50);

  const galleryData = {
    whitening: {
      title: 'Professional Teeth Whitening',
      description: 'Brightening surface stains and discolouration under professional dental supervision.',
      beforeImg: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1571772996211-2f02c9727629?auto=format&fit=crop&w=800&q=80',
      tag: 'In-Chair Whitening Treatment Concept',
    },
    veneers: {
      title: 'Porcelain Veneer Restorations',
      description: 'Restoring tooth proportion, symmetry, and natural translucency.',
      beforeImg: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&w=800&q=80',
      tag: 'Custom Veneer Smile Design Concept',
    },
    aligners: {
      title: 'Clear Aligner Alignment',
      description: 'Gradual, discrete alignment of crowded front teeth without fixed metal braces.',
      beforeImg: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=800&q=80',
      afterImg: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
      tag: 'Clear Aligner Therapy Concept',
    },
  };

  const current = galleryData[activeTab];

  return (
    <div className="bg-slate-50 rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-sm my-12">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-teal font-bold text-xs uppercase tracking-widest bg-teal/10 border border-teal/20 px-3.5 py-1.5 rounded-full inline-block mb-3">
          Clinical Case Showcase
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-navy">
          Visual Treatment Transformations
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-2">
          Demonstration concepts inspired by leading Australian cosmetic dental clinics.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-8">
        {(['whitening', 'veneers', 'aligners'] as const).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${
              activeTab === tab
                ? 'bg-navy text-white shadow-md'
                : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Interactive Slider Container */}
      <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-lg relative">
        <div className="relative aspect-[16/10] select-none overflow-hidden">
          {/* AFTER Image (Full background) */}
          <img
            src={current.afterImg}
            alt="After treatment preview"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute top-4 right-4 bg-emerald text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-10">
            After Treatment
          </span>

          {/* BEFORE Image (Clipped overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={current.beforeImg}
              alt="Before treatment preview"
              className="absolute inset-0 w-full h-full object-cover max-w-none"
              style={{ width: '100%', height: '100%' }}
            />
            <span className="absolute top-4 left-4 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md z-10">
              Before Treatment
            </span>
          </div>

          {/* Slider Line Divider */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl z-20 cursor-ew-resize flex items-center justify-center"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-teal text-white shadow-xl border-2 border-white flex items-center justify-center text-xs font-bold">
              ↔
            </div>
          </div>

          {/* Range Input Overlay for Dragging */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-30"
            aria-label="Drag slider to compare before and after images"
          />
        </div>

        <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
          <div>
            <h4 className="font-bold text-navy text-sm">{current.title}</h4>
            <p className="text-slate-500">{current.description}</p>
          </div>
          <span className="text-[10px] text-teal font-bold bg-teal/10 px-2.5 py-1 rounded-full">
            {current.tag}
          </span>
        </div>
      </div>

      <div className="mt-4 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1 max-w-md mx-auto">
        <Info size={13} className="text-teal" />
        <span>Individual treatment outcomes vary. Results depend on existing tooth structure and overall health.</span>
      </div>
    </div>
  );
};

export default BeforeAfterGallery;
