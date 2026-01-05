'use client';

import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ChevronDown } from 'lucide-react';
import type { StateCode } from '@/constants/business';

/**
 * State Selector Component
 * Allows users to manually switch between Texas and Arizona content
 * Updates cookie preference and navigates to equivalent page in other state
 */

const ARIZONA_REDIRECT_COOKIE = 'preferred_state';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export function StateSelector() {
  const pathname = usePathname();
  const router = useRouter();
  const [currentState, setCurrentState] = useState<StateCode>('TX');
  const [isOpen, setIsOpen] = useState(false);

  // Determine current state based on pathname
  useEffect(() => {
    if (pathname.startsWith('/arizona')) {
      setCurrentState('AZ');
    } else {
      setCurrentState('TX');
    }
  }, [pathname]);

  const handleStateChange = (newState: StateCode) => {
    if (newState === currentState) {
      setIsOpen(false);
      return;
    }

    // Set cookie to remember preference
    document.cookie = `${ARIZONA_REDIRECT_COOKIE}=${newState}; path=/; max-age=${COOKIE_MAX_AGE}; SameSite=Lax`;

    // Navigate to appropriate page
    if (newState === 'AZ') {
      // Switching to Arizona
      if (pathname === '/' || pathname.startsWith('/locations')) {
        router.push('/arizona');
      } else {
        // Try to find equivalent Arizona page
        router.push('/arizona');
      }
    } else {
      // Switching to Texas
      if (pathname.startsWith('/arizona')) {
        router.push('/');
      }
    }

    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 bg-white border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        aria-label="Select state"
        aria-expanded={isOpen}
      >
        <span className="text-base">{currentState === 'TX' ? '🇺🇸' : '🌵'}</span>
        <span className="hidden sm:inline">{currentState === 'TX' ? 'Texas' : 'Arizona'}</span>
        <span className="sm:hidden">{currentState}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown */}
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50 overflow-hidden">
            <button
              onClick={() => handleStateChange('TX')}
              className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center gap-3 ${
                currentState === 'TX' ? 'bg-blue-50 text-blue-900 font-semibold' : 'text-gray-700'
              }`}
            >
              <span className="text-xl">🇺🇸</span>
              <div>
                <div className="font-medium">Texas</div>
                <div className="text-xs text-gray-500">Round Rock</div>
              </div>
              {currentState === 'TX' && (
                <div className="ml-auto">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                </div>
              )}
            </button>

            <button
              onClick={() => handleStateChange('AZ')}
              className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center gap-3 border-t ${
                currentState === 'AZ' ? 'bg-blue-50 text-blue-900 font-semibold' : 'text-gray-700'
              }`}
            >
              <span className="text-xl">🌵</span>
              <div>
                <div className="font-medium">Arizona</div>
                <div className="text-xs text-gray-500">Glendale</div>
              </div>
              {currentState === 'AZ' && (
                <div className="ml-auto">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                </div>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
