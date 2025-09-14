import React from 'react';
import { ChevronDown, Code, Palette, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* 🔥 Video Background (drop your video into /public and update src) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="\Public\bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div
          className="mb-8 opacity-0 animate-fadeInUp"
          style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
        >
  

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight" >
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Syed Faraz Ahmed
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
            BSCS 28’ | GSSoC ’25 Contributor | Oracle AI Foundations (1Z0-1122-25) <br/>C Developer | Python Developer
          </p>
        </div>
      </div>

      {/* Scroll Button */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={scrollToAbout}
          className="text-slate-400 hover:text-blue-600 transition-colors"
        >
          <ChevronDown size={32} />
        </button>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Hero;
