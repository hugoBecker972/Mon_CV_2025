import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-500 text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-32 -translate-y-32 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-16 translate-y-16 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white rounded-full transform -translate-x-16 -translate-y-16 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
        <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-white/35 rounded-full animate-bounce" style={{ animationDelay: '2.5s', animationDuration: '5s' }}></div>
        <div className="absolute top-60 right-20 w-2 h-2 bg-white/25 rounded-full animate-bounce" style={{ animationDelay: '3s', animationDuration: '3.5s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Photo de profil */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div className="relative group">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-white/20 to-white/5 border-4 border-white/30 backdrop-blur-sm flex items-center justify-center overflow-hidden group-hover:scale-105 transition-all duration-500 shadow-2xl">
                {/* Placeholder pour la photo - remplacer par votre vraie photo */}
                <div className="w-full h-full bg-gradient-to-br from-blue-300 via-purple-300 to-emerald-300 flex items-center justify-center text-6xl font-black text-white relative">
                  <span className="relative z-10 drop-shadow-lg">HB</span>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent"></div>
                </div>
              </div>
              {/* Multiple rotating rings */}
              <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-spin-slow"></div>
              <div className="absolute inset-2 rounded-full border border-white/30 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '12s' }}></div>
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 blur-xl scale-110 group-hover:scale-125 transition-transform duration-500"></div>
            </div>
          </div>
          
          {/* Informations principales */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-black mb-4 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                  HUGO
                </span>
                <br />
                <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent drop-shadow-lg">
                  BECKER
                </span>
              </h1>
              
              <div className="relative">
                <h2 className="text-2xl lg:text-4xl font-bold mb-6 text-blue-100 relative">
                  <span className="relative z-10">Développeur Full Stack</span>
                  {/* Underline animation */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                </h2>
              </div>
              
              <p className="text-lg lg:text-xl text-blue-50 max-w-2xl leading-relaxed font-medium">
                Spécialisé en technologies{" "}
                <span className="font-bold text-white">.NET</span>,{" "}
                <span className="font-bold text-white">React</span> &{" "}
                <span className="font-bold text-white">solutions cloud</span>{" "}
                pour l'innovation digitale
              </p>

              {/* Status badge */}
              <div className="flex justify-center lg:justify-start">
                <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 hover:bg-white/15 transition-all duration-300">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-white">Disponible pour nouveaux projets</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Carte de contact améliorée */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105 group shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-4 text-center">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm group-hover:text-blue-100 transition-colors">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                    📍
                  </div>
                  <span className="text-white/90 font-medium">57970 YUTZ, France</span>
                </div>
                <a href="tel:0698931523" className="flex items-center gap-3 text-sm hover:text-blue-100 transition-colors group cursor-pointer">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group-hover:scale-110">
                    📞
                  </div>
                  <span className="text-white/90 font-medium group-hover:underline">06 98 93 15 23</span>
                </a>
                <a href="mailto:hugo.becker@hotmail.fr" className="flex items-center gap-3 text-sm hover:text-blue-100 transition-colors group cursor-pointer">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors group-hover:scale-110">
                    ✉️
                  </div>
                  <span className="text-white/90 font-medium group-hover:underline">hugo.becker@hotmail.fr</span>
                </a>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    🚗
                  </div>
                  <span className="text-white/90 font-medium">23 ans • Permis B</span>
                </div>
              </div>
              
              {/* Quick action buttons */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <div className="flex gap-2">
                  <a 
                    href="mailto:hugo.becker@hotmail.fr"
                    className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-all duration-300 text-center hover:scale-105"
                  >
                    Email
                  </a>
                  <a 
                    href="tel:0698931523"
                    className="flex-1 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-all duration-300 text-center hover:scale-105"
                  >
                    Appeler
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}