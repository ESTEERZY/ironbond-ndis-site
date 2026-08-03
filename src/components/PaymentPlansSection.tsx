import React from 'react';

interface PaymentPlansSectionProps {
  onOpenBooking?: (serviceName?: string) => void;
}

export const PaymentPlansSection: React.FC<PaymentPlansSectionProps> = ({ onOpenBooking }) => {
  return (
    <section id="payment-plans" className="py-20 lg:py-24 bg-[#E3D1BE]/50 border-y border-charcoal/10 font-sans overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Typography & Story */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Cursive Script Accent */}
            <div className="font-script text-4xl sm:text-5xl text-forest font-normal tracking-wide">
              Smile Now, Pay Later
            </div>

            {/* Serif Main Headline */}
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-charcoal leading-[1.1] tracking-tight">
              Flexible Payment Plans for you
            </h2>

            {/* Body Copy */}
            <div className="space-y-4 text-xs sm:text-sm text-charcoal-muted leading-relaxed font-sans pt-1">
              <p>
                At Harbour Dental Studio, we prioritise affordability to ensure access to premium and bespoke cosmetic dentistry. Recognising that upfront payments may not always be feasible, we offer a comprehensive range of flexible payment plans.
              </p>
              <p>
                Our dedicated coordinators work closely with you, tailoring a plan that suits your budget. Rest assured, in Hobart, no other practice is as accommodating as we are.
              </p>
            </div>

            {/* Vibrant Pill CTA Button */}
            <div className="pt-4">
              {onOpenBooking ? (
                <button
                  onClick={() => onOpenBooking('Payment Plans Enquiry')}
                  className="bg-[#E94B77] hover:bg-[#D43B66] text-white font-sans text-xs font-bold uppercase tracking-widest px-9 py-4 rounded-full shadow-2xl transition-all hover:scale-105"
                >
                  FIND THE BEST OPTION FOR YOU!
                </button>
              ) : (
                <a
                  href="#contact"
                  className="inline-block bg-[#E94B77] hover:bg-[#D43B66] text-white font-sans text-xs font-bold uppercase tracking-widest px-9 py-4 rounded-full shadow-2xl transition-all hover:scale-105"
                >
                  FIND THE BEST OPTION FOR YOU!
                </a>
              )}
            </div>

          </div>

          {/* Right Column: Woman with Tablet & Floating Badge Pills */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/3] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-charcoal/10 bg-white group">
              <img
                src="/images/payment_plans_woman.png"
                alt="Woman viewing flexible dental payment plans at Harbour Dental Studio"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-1000"
              />

              {/* Floating Badge Pills Overlay */}
              
              {/* Pill 1: BUPA */}
              <div className="absolute top-8 left-8 bg-white text-charcoal font-sans font-bold text-xs px-4 py-2 rounded-2xl shadow-xl border border-charcoal/10 animate-bounce duration-[3000ms]">
                BUPA
              </div>

              {/* Pill 2: Medibank Private */}
              <div className="absolute top-12 right-12 bg-[#4B5563] text-white font-sans font-bold text-xs px-4.5 py-2 rounded-2xl shadow-xl">
                Medibank Private
              </div>

              {/* Pill 3: Credit Card */}
              <div className="absolute top-36 left-12 bg-[#E87352] text-white font-sans font-bold text-xs px-4 py-2 rounded-2xl shadow-xl">
                Credit card
              </div>

              {/* Pill 4: No Credit Check */}
              <div className="absolute top-36 right-8 bg-[#E94B77] text-white font-sans font-bold text-xs px-4 py-2 rounded-2xl shadow-xl">
                No credit check
              </div>

              {/* Pill 5: Payment Plan */}
              <div className="absolute bottom-12 left-16 bg-[#879943] text-white font-sans font-bold text-xs px-5 py-2.5 rounded-2xl shadow-xl">
                Payment Plan
              </div>

              {/* Pill 6: HICAPS On-The-Spot */}
              <div className="absolute bottom-8 right-12 bg-forest text-white font-sans font-bold text-xs px-4.5 py-2 rounded-2xl shadow-xl">
                HICAPS On-The-Spot
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PaymentPlansSection;
