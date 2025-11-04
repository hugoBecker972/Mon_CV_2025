import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Loading bar animation */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 z-50 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto bg-white shadow-2xl relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-emerald-500/5 rounded-full transform translate-x-48 -translate-y-48"></div>
        
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
          <div className="lg:col-span-4 bg-gradient-to-b from-slate-50 to-gray-50 border-r border-gray-200">
            <Sidebar />
          </div>
          <div className="lg:col-span-8">
            <MainContent />
          </div>
        </div>
      </div>
    </div>
  );
}
