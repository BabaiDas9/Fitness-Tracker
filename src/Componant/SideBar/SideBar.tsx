// Sidebar.tsx
import React, { useState } from 'react';
import { RightArrow } from '../../assets/Icon/allAppIcon';
import { useNavigate } from 'react-router-dom';

interface SidebarProps {
  defaultExpanded?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ defaultExpanded = false }) => {
    
  const [isOpen, setIsOpen] = useState(false);
  const [showSidebar, setShowSidebar] = useState(defaultExpanded);
  const navigate = useNavigate();
  
    
  const menuItems = [
    { title: 'Profile' },
    { title: 'DashBoard' },
    { title: 'Workout' },
    { title: 'Settings' },
    { title: 'Help' },
    { title: 'logout' },
  ];

  const toggleSidebar = () => {
    if (!showSidebar) {
      setShowSidebar(true);
      setTimeout(() => setIsOpen(true), 100);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setShowSidebar(false), 300);
  };

  const handleNavigation = (title: string) => {
    
    setIsOpen(false);
    setShowSidebar(false);

    if (title === 'Workout') { 
      navigate('/Workout/WorkoutPlan');
    }

  };

  return (
    <>
      {/* Menu Toggle Button */}
      <button 
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-md shadow-lg hover:bg-gray-100"
        onClick={toggleSidebar}
      >
        <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <RightArrow />
        </div>
      </button>

      {/* Overlay */}
      {showSidebar && (
        <div 
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40
            ${isOpen ? 'opacity-100' : 'opacity-0'}
            ${isOpen ? 'visible' : 'invisible'}
          `}
          onClick={handleClose}
        />
      )}

      {/* Sidebar */}
      {showSidebar && (
        <aside 
          className={`
            fixed top-0 left-0 h-screen w-64 z-50
            bg-white shadow-xl
            transition-transform duration-300 ease-in-out
            ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          {/* Logo Section */}
          <div className="flex items-center justify-between h-16 px-4 border-b">
            <div className="font-bold text-xl">Logo</div>
            <button 
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <div className="transform rotate-180">
                <RightArrow />
              </div>
            </button>
          </div>

          {/* Menu Items */}
          <nav className="p-4">
            <ul className="space-y-2">
              {menuItems.map(({ title }) => (
                  <li key={title} >
                      <div className='flex flex-row 
                        hover:bg-gray-100  transition-colors
                          justify-start items-center 
                          hover:translate-x-2 hover:font-semibold
                        '
                        onClick={() =>  handleNavigation(title)  }
                      >
                            <RightArrow />
                            <button className=" p-3 rounded-lg "
                                >
                                <span>{title}</span>
                            </button>
                        </div>   
                    </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </>
  );
};

export default Sidebar;