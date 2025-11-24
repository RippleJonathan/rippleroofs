'use client';

import { FC } from 'react';
import Link from 'next/link';
import { Building2, DollarSign, CloudRain, Wrench } from 'lucide-react';

interface Hub {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  postCount?: number;
}

const CONTENT_HUBS: Hub[] = [
  {
    title: 'Austin Roofing',
    description: 'Complete roofing guides for Austin metro area homeowners',
    href: '/hubs/austin-roofing',
    icon: <Building2 className="w-5 h-5" />,
  },
  {
    title: 'Metal Roofing',
    description: 'Standing seam, stone-coated steel & metal roof guides',
    href: '/hubs/metal-roofing',
    icon: <Wrench className="w-5 h-5" />,
  },
  {
    title: 'Materials & Cost',
    description: 'Roofing material comparisons, pricing & ROI analysis',
    href: '/hubs/materials-cost',
    icon: <DollarSign className="w-5 h-5" />,
  },
  {
    title: 'Storm Damage',
    description: 'Hail damage, insurance claims & emergency repairs',
    href: '/hubs/storm-damage',
    icon: <CloudRain className="w-5 h-5" />,
  },
];

interface ContentHubsProps {
  variant?: 'sidebar' | 'page' | 'footer';
  className?: string;
}

export const ContentHubs: FC<ContentHubsProps> = ({ variant = 'sidebar', className = '' }) => {
  if (variant === 'footer') {
    return (
      <div className={className}>
        <h4 className="text-lg font-display font-bold mb-4">Browse by Topic</h4>
        <ul className="space-y-2">
          {CONTENT_HUBS.map((hub) => (
            <li key={hub.href}>
              <Link
                href={hub.href}
                className="text-primary-200 hover:text-accent-500 transition-colors duration-200 text-sm flex items-center gap-2"
              >
                <span className="text-accent-400">{hub.icon}</span>
                <span>{hub.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (variant === 'page') {
    return (
      <div className={className}>
        <div className="text-center mb-8">
          <h2 className="text-2xl font-display font-bold text-primary-900 mb-3">
            Browse Content by Topic
          </h2>
          <p className="text-primary-600">
            Explore our comprehensive guides organized by category
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {CONTENT_HUBS.map((hub) => (
            <Link
              key={hub.href}
              href={hub.href}
              className="group bg-white border-2 border-primary-200 rounded-xl p-6 hover:border-accent-500 hover:shadow-lg transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  {hub.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-primary-900 mb-1 group-hover:text-accent-600 transition-colors">
                    {hub.title}
                  </h3>
                  <p className="text-sm text-primary-600">
                    {hub.description}
                  </p>
                </div>
                <svg 
                  className="w-5 h-5 text-primary-400 group-hover:text-accent-500 group-hover:translate-x-1 transition-all"
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Sidebar variant (default)
  return (
    <div className={`bg-gradient-to-br from-primary-50 to-accent-50 rounded-xl p-6 border border-primary-200 ${className}`}>
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 bg-accent-500 text-white rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-primary-900">Browse by Topic</h3>
      </div>
      <p className="text-sm text-primary-600 mb-4">
        Explore our comprehensive roofing guides organized by category
      </p>
      <div className="space-y-2">
        {CONTENT_HUBS.map((hub) => (
          <Link
            key={hub.href}
            href={hub.href}
            className="group block bg-white rounded-lg p-4 border border-primary-200 hover:border-accent-500 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-10 h-10 bg-accent-100 text-accent-600 rounded-lg flex items-center justify-center group-hover:bg-accent-500 group-hover:text-white transition-colors">
                {hub.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-primary-900 mb-1 group-hover:text-accent-600 transition-colors">
                  {hub.title}
                </h4>
                <p className="text-xs text-primary-600 line-clamp-2">
                  {hub.description}
                </p>
              </div>
              <svg 
                className="w-4 h-4 text-primary-400 group-hover:text-accent-500 group-hover:translate-x-0.5 transition-all flex-shrink-0 mt-1"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
