export default function Header() {
  return (
    <header className="bg-white/90 dark:bg-gray-800/90 shadow-lg backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/logo.png" 
              alt="Ajker Akash Logo" 
              className="h-12 sm:h-14 md:h-16 w-auto transform hover:scale-105 transition-transform duration-300" 
            />
          </div>
          <div className="hidden sm:flex items-center space-x-4">
            <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
              আজকের আকাশ - আপনার আবহাওয়ার বিশ্বস্ত সঙ্গী
            </span>
          </div>
        </div>
      </div>
    </header>
  );
} 