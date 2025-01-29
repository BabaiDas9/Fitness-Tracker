import { useState, useEffect, useRef } from 'react';

const HeroSection = () => {
    
  const [email, setEmail] = useState('');
  const [activeSection, setActiveSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const sections = [
     
    { 
      id: 'hero',
      component: (         
        <div className="space-y-8">
          <div className="grid grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl font-bold leading-tight">
                Join Legends of Fitness World
              </h1>
              <p className="text-gray-600 text-lg">
                With our Platform, you can communicate with friends, share moments of built-in app feature
              </p>
              <div className="flex gap-4 max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">
                  Try for free
                </button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/api/placeholder/400/500"
                alt="Fitness enthusiast"
                className="rounded-lg object-cover"
              />
              <div className="absolute bottom-4 -left-4 bg-black text-white p-4 rounded-lg shadow-xl">
                <p className="text-gray-400 text-sm">Earn Weekly</p>
                <p className="text-2xl font-bold">2.67</p>
                <button className="mt-2 text-sm text-gray-400 hover:text-white">
                  Get Early Access
                </button>
              </div>
              <div className="absolute -bottom-4 right-4 flex gap-1">
                <span className="w-8 h-8 rounded-full bg-yellow-400"></span>
                <span className="w-8 h-8 rounded-full bg-blue-400"></span>
                <span className="w-8 h-8 rounded-full bg-green-400"></span>
                <span className="w-8 h-8 rounded-full bg-red-400"></span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'challenge',
      component: (
        <div className="grid grid-cols-2 gap-8 items-center text-white">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold">Challenge your friend</h2>
            <p className="text-gray-400">
              Stop doing your sport alone and challenge your friend who will be the Best?
            </p>
            <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">
              Join Community
            </button>
          </div>
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Get Inspired</h3>
              <p className="text-gray-400">Fusce consectetur facilisis urna, eu gravida risus porttitor at tortor at purus.</p>
              <button className="text-purple-400 mt-4 flex items-center gap-2">
                Explore More
              </button>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Inspire Others</h3>
              <p className="text-gray-400">Fusce consectetur facilisis urna, eu gravida risus porttitor at tortor at purus.</p>
              <button className="text-purple-400 mt-4 flex items-center gap-2">
                Explore More
              </button>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'testimonials',
      component: (
        <div className="space-y-12">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-4">Know what our users says</h2>
            <p className="text-gray-600">
              Stop doing your sport alone and challenge your friend who will be the Best?
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-2xl font-bold">4.9</span>
              <div className="flex gap-1">
                <span className="w-6 h-6 rounded-full bg-yellow-400"></span>
                <span className="w-6 h-6 rounded-full bg-blue-400"></span>
                <span className="w-6 h-6 rounded-full bg-green-400"></span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {[
              { name: 'Ekene Obassey', rating: 5 },
              { name: 'Xu Jianhong', rating: 4 },
              { name: 'Sanne Viscaal', rating: 5 }
            ].map((user, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-600 mb-4">
                  "Formed a great hindrance to my speed, resolved, contrary to my first."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-300"></div>
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <div className="flex gap-1">
                      {Array(user.rating).fill(null).map((_, i) => (
                        <span key={i} className="text-yellow-400">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'sponsors',
      component: (
        <div className="text-center space-y-8 text-white">
          <h2 className="text-4xl font-bold">Meet our Sponsors</h2>
          <div className="flex justify-center gap-12">
            <div className="w-8 h-8 bg-red-500 rounded-full"></div>
            <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
          </div>
          <button className="bg-purple-500 text-white px-6 py-3 rounded-lg hover:bg-purple-600 transition-colors">
            Become a Partner
          </button>
        </div>
      )
    }
  ];

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;
      
      setIsScrolling(true);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      if (e.deltaY > 0 && activeSection < sections.length - 1) {
        setActiveSection(prev => prev + 1);
      } else if (e.deltaY < 0 && activeSection > 0) {
        setActiveSection(prev => prev - 1);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [activeSection, isScrolling, sections.length]);

  return (
    <div className="h-screen overflow-hidden relative">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-2">
              <div className="bg-purple-500 w-6 h-6 rounded"></div>
              <span className="font-semibold text-xl">Fitclick</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">About Us</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Community</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Login</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg">
                Get App
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Sections Container */}
      <div 
        className="h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateY(-${activeSection * 100}%)` }}
      >
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`h-screen px-8 flex items-center justify-center transition-opacity duration-1000
              ${index === activeSection ? 'opacity-100' : 'opacity-0'}
              ${index % 2 === 0 ? 'bg-white' : 'bg-gray-900'}`}
          >
            <div className="container mx-auto">
              {section.component}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;