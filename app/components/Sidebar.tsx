export default function Sidebar() {
  const skills = {
    "Backend": {
      icon: "⚡",
      items: ["C# / .NET", "PHP", "ETL.NET"]
    },
    "Frontend": {
      icon: "🎨",
      items: ["React", "Angular", "JavaScript", "HTML/CSS"]
    },
    "Données": {
      icon: "🗄️", 
      items: ["SQL Server", "MariaDB", "SQLite"]
    },
    "DevOps & Cloud": {
      icon: "☁️",
      items: ["Azure", "Git", "Linux", "Docker"]
    }
  };

  const languages = [
    { name: "🇫🇷 Français", level: "Natif" },
    { name: "🇬🇧 Anglais", level: "Professionnel" },
    { name: "🇩🇪 Allemand", level: "Scolaire" }
  ];

  const interests = [
    { name: "🥊 Sports de combat", tag: "Passion" },
    { name: "🤼 Lutte & MMA", tag: "Pratique" },
    { name: "⚡ Innovation tech", tag: "Veille" }
  ];

  return (
    <aside className="p-8 lg:p-12 space-y-8">
      
      {/* Expertise technique */}
      <section>
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          Expertise technique
        </h3>
        
        <div className="space-y-6">
          {Object.entries(skills).map(([category, data]) => (
            <div key={category} className="group">
              <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 relative overflow-hidden">
                {/* Gradient border top */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
                
                <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-3">
                  <span className="text-xl">{data.icon}</span>
                  {category}
                </h4>
                
                <div className="flex flex-wrap gap-2">
                  {data.items.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-sm rounded-full font-medium hover:scale-110 transition-transform duration-200 cursor-pointer"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Langues */}
      <section>
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          Langues
        </h3>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="space-y-4">
            {languages.map((lang, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <span className="font-medium text-gray-700">{lang.name}</span>
                <span className="px-3 py-1 bg-gradient-to-r from-emerald-500 to-blue-500 text-white text-xs rounded-full font-semibold">
                  {lang.level}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centres d'intérêt */}
      <section>
        <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-3">
          <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          Centres d'intérêt
        </h3>
        
        <div className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
          <div className="space-y-4">
            {interests.map((interest, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <span className="font-medium text-gray-700">{interest.name}</span>
                <span className="px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs rounded-full font-semibold">
                  {interest.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </aside>
  );
}