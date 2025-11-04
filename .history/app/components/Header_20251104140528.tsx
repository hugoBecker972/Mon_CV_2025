import Image from 'next/image';

export default function Header() {
  return (
    <header className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-500 text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full transform translate-x-32 -translate-y-32 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-16 translate-y-16 animate-pulse delay-1000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Photo de profil */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-white/20 to-white/5 border-4 border-white/30 backdrop-blur-sm flex items-center justify-center overflow-hidden group hover:scale-105 transition-transform duration-300">
                {/* Placeholder pour la photo - remplacer par votre vraie photo */}
                <div className="w-full h-full bg-gradient-to-br from-blue-300 to-purple-300 flex items-center justify-center text-6xl font-bold text-white">
                  HB
                </div>
              </div>
              {/* Ring animé */}
              <div className="absolute inset-0 rounded-full border-2 border-white/50 animate-spin-slow"></div>
            </div>
          </div>
          
          {/* Informations principales */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight">
              HUGO BECKER
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold mb-6 text-blue-100">
              Développeur Full Stack
            </h2>
            <p className="text-lg lg:text-xl text-blue-50 max-w-2xl leading-relaxed">
              Spécialisé en technologies .NET, React & solutions cloud pour l'innovation digitale
            </p>
          </div>
          
          {/* Carte de contact */}
          <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <span className="text-white/90">57970 YUTZ, France</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    📞
                  </div>
                  <span className="text-white/90">06 98 93 15 23</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    ✉️
                  </div>
                  <span className="text-white/90">hugo.becker@hotmail.fr</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                    🚗
                  </div>
                  <span className="text-white/90">23 ans • Permis B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}