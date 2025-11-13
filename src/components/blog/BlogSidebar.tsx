'use client';

import { FC, useState } from 'react';
import Link from 'next/link';
import { Download, Mail, Phone, ArrowRight } from 'lucide-react';

interface LeadMagnet {
  title: string;
  description: string;
  slug: string;
  icon: string;
}

const LEAD_MAGNETS: LeadMagnet[] = [
  {
    title: 'Roof Inspection Checklist',
    description: 'Essential checklist for quarterly roof inspections',
    slug: 'roof-inspection-checklist',
    icon: '📋',
  },
  {
    title: 'Storm Damage Insurance Guide',
    description: 'Navigate insurance claims with confidence',
    slug: 'storm-damage-insurance-guide',
    icon: '⛈️',
  },
  {
    title: 'Material Comparison Chart',
    description: 'Compare roofing materials for your project',
    slug: 'material-comparison-chart',
    icon: '📊',
  },
  {
    title: 'Seasonal Maintenance Calendar',
    description: 'Year-round roof maintenance schedule',
    slug: 'seasonal-maintenance-calendar',
    icon: '📅',
  },
];

interface BlogSidebarProps {
  featuredMagnetSlug?: string; // Optional: highlight a specific lead magnet
}

export const BlogSidebar: FC<BlogSidebarProps> = ({ featuredMagnetSlug }) => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'blog_sidebar',
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to subscribe');
      }

      setSubmitStatus('success');
      setEmail('');
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get featured magnet or default to first one
  const featuredMagnet = LEAD_MAGNETS.find(m => m.slug === featuredMagnetSlug) || LEAD_MAGNETS[0];

  return (
    <aside className="space-y-6">
      {/* Newsletter Signup */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-2 mb-3">
          <Mail className="w-5 h-5 text-accent-400" />
          <h3 className="text-lg font-bold">Get Roofing Tips</h3>
        </div>
        <p className="text-primary-100 text-sm mb-4">
          Join our newsletter for expert advice, maintenance tips, and exclusive offers.
        </p>
        
        {submitStatus === 'success' ? (
          <div className="bg-green-500/20 border border-green-400 text-green-100 px-4 py-3 rounded-lg text-sm">
            ✓ Successfully subscribed! Check your email.
          </div>
        ) : (
          <form onSubmit={handleNewsletterSubmit} className="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-primary-300 focus:outline-none focus:ring-2 focus:ring-accent-400"
            />
            {submitStatus === 'error' && (
              <p className="text-red-300 text-xs">{errorMessage}</p>
            )}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        )}
      </div>

      {/* Featured Lead Magnet */}
      <div className="bg-white border border-primary-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-3xl">{featuredMagnet.icon}</span>
          <h3 className="text-lg font-bold text-primary-900">Free Resource</h3>
        </div>
        <h4 className="font-semibold text-primary-900 mb-2">
          {featuredMagnet.title}
        </h4>
        <p className="text-sm text-primary-600 mb-4">
          {featuredMagnet.description}
        </p>
        <Link
          href={`/resources/${featuredMagnet.slug}`}
          className="inline-flex items-center gap-2 bg-primary-900 hover:bg-primary-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
        >
          <Download className="w-4 h-4" />
          Download Free
        </Link>
      </div>

      {/* Other Lead Magnets */}
      <div className="bg-primary-50 rounded-xl p-6">
        <h3 className="text-lg font-bold text-primary-900 mb-4">More Free Resources</h3>
        <div className="space-y-3">
          {LEAD_MAGNETS.filter(m => m.slug !== featuredMagnet.slug).map((magnet) => (
            <Link
              key={magnet.slug}
              href={`/resources/${magnet.slug}`}
              className="block p-3 bg-white rounded-lg hover:shadow-md transition-shadow border border-primary-100"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{magnet.icon}</span>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm text-primary-900 mb-1">
                    {magnet.title}
                  </h4>
                  <p className="text-xs text-primary-600">
                    {magnet.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Get Free Estimate CTA */}
      <div className="bg-gradient-to-br from-accent-500 to-accent-600 text-white rounded-xl p-6 shadow-lg">
        <h3 className="text-lg font-bold mb-2">Need a Roof Expert?</h3>
        <p className="text-white/90 text-sm mb-4">
          Get a free, no-obligation estimate from our certified team.
        </p>
        <div className="space-y-2">
          <a
            href="tel:+15127635277"
            className="flex items-center justify-center gap-2 bg-white text-accent-600 font-semibold py-2 px-4 rounded-lg hover:bg-accent-50 transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call (512) 763-5277
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 bg-accent-700 hover:bg-accent-800 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
          >
            Get Free Estimate
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </aside>
  );
};
