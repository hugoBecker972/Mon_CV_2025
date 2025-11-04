export default function MainContent() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Finastream",
      date: "2025",
      achievements: [
        "Développement d'ETL avancés et de macros .NET pour l'analyse automatisée de documents financiers complexes",
        "Architecture et implémentation de solutions de gestion de portefeuille haute performance",
        "Création de dashboards interactifs avec visualisations de données en temps réel (JSON, SurveyJS)",
        "Optimisation des processus batch ETL.NET avec amélioration des performances de 40%",
        "Développement de templates de documents dynamiques avec Stimulsoft"
      ],
      techStack: "C# / .NET Core, React, ETL.NET, Paillave, Azure DevOps"
    },
    {
      title: "Développeur Full Stack",
      company: "P2MK",
      date: "Déc. 2023",
      achievements: [
        "Conception et développement full-stack du site corporate avec architecture responsive",
        "Création d'une application SaaS de gestion hôtelière (réservations, facturation, reporting)",
        "Lead technique sur l'analyse des besoins, architecture solution et déploiement en production",
        "Développement de l'identité visuelle et stratégie de communication digitale 360°"
      ],
      techStack: "PHP 8, HTML5/CSS3, MySQL, JavaScript ES6+"
    },
    {
      title: "Développeur Web",
      company: "Élevage du Ralmar",
      date: "2023",
      achievements: [
        "Développement d'une application web métier sur mesure pour la gestion d'élevage",
        "Création du site vitrine avec CMS intégré et optimisation SEO",
        "Intégration de fonctionnalités de gestion des stocks et de traçabilité"
      ],
      techStack: "PHP, MySQL, HTML/CSS, JavaScript"
    },
    {
      title: "Assistant Ingénieur (Apprentissage)",
      company: "Stellantis - Trémery",
      date: "2019-2021",
      achievements: [
        "Optimisation des processus de gestion des stocks avec réduction des coûts de 15%",
        "Amélioration du rendement opérationnel par l'analyse de données de production",
        "Contribution aux projets d'amélioration continue en environnement industriel"
      ],
      techStack: "SolidWorks, Catia V5, ERP SAP"
    }
  ];

  const education = [
    {
      title: "Développeur Full Stack - Titre RNCP 6 (Bac+3)",
      school: "Metz Numeric School",
      date: "2024-2025",
      description: "Spécialisation en architectures cloud, microservices et développement agile"
    },
    {
      title: "Community Manager - Titre RNCP 6 (Bac+3)",
      school: "CCI Formation Metz",
      date: "2023-2024",
      description: "Marketing digital, stratégie de contenu et analytics"
    },
    {
      title: "Développeur Web/Mobile - Titre RNCP 5 (Bac+2)",
      school: "Metz Numeric School",
      date: "2022-2023",
      description: "Développement web moderne, frameworks JavaScript et mobile-first"
    }
  ];

  return (
    <main className="p-8 lg:p-12 space-y-12">
      
      {/* Expérience professionnelle */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-4">
          <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          Expérience professionnelle
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
            >
              {/* Gradient border top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-xl text-blue-600 font-semibold mb-6">
                    {exp.company}
                  </p>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start gap-3 text-gray-700 leading-relaxed">
                        <span className="text-blue-500 font-bold text-lg mt-1 flex-shrink-0">✦</span>
                        <span className="font-medium">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-gradient-to-r from-slate-50 to-blue-50 border border-blue-100 rounded-xl p-4 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                    <p className="text-sm text-gray-700 font-medium pl-4">
                      <span className="font-semibold text-gray-800">Stack technique :</span> {exp.techStack}
                    </p>
                  </div>
                </div>
                
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="bg-gradient-to-br from-emerald-500 to-blue-500 text-white px-6 py-3 rounded-2xl font-bold text-center shadow-lg hover:shadow-xl transition-shadow">
                    {exp.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Formation & Certifications */}
      <section>
        <h2 className="text-3xl font-bold text-gray-800 mb-8 flex items-center gap-4">
          <div className="w-1 h-10 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
          Formation & Certifications
        </h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] relative overflow-hidden"
            >
              {/* Gradient border top */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                <div className="lg:col-span-8">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors">
                    {edu.title}
                  </h3>
                  <p className="text-lg text-purple-600 font-semibold mb-4">
                    {edu.school}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {edu.description}
                  </p>
                </div>
                
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white px-6 py-3 rounded-2xl font-bold text-center shadow-lg hover:shadow-xl transition-shadow">
                    {edu.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12">
        <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-emerald-500 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-4">Prêt à collaborer ?</h3>
            <p className="text-lg mb-6 opacity-90">
              Contactez-moi pour discuter de vos projets et voir comment nous pouvons innover ensemble
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:hugo.becker@hotmail.fr"
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                ✉️ Me contacter
              </a>
              <a 
                href="tel:0698931523"
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-bold hover:bg-white/30 transition-colors inline-flex items-center justify-center gap-2"
              >
                📞 Appeler
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}