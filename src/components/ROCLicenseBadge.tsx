'use client';

import { ExternalLink, Shield } from 'lucide-react';
import { BUSINESS_INFO_ARIZONA } from '@/constants/business';

/**
 * ROC License Badge Component
 * Displays Arizona Registrar of Contractors license number
 * with verification link in top bar
 */

export function ROCLicenseBadge() {
  if (!BUSINESS_INFO_ARIZONA.license) {
    return null;
  }

  return (
    <a
      href={BUSINESS_INFO_ARIZONA.license.verifyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-2 px-3 py-1.5 bg-green-50 hover:bg-green-100 border border-green-200 rounded-md transition-colors"
      title="Arizona Registrar of Contractors - Verify License"
    >
      <Shield className="w-4 h-4 text-green-600" />
      <span className="text-sm font-semibold text-green-900">
        ROC #{BUSINESS_INFO_ARIZONA.license.number.replace('ROC ', '')}
      </span>
      <ExternalLink className="w-3 h-3 text-green-600 opacity-0 group-hover:opacity-100 transition-opacity" />
    </a>
  );
}

/**
 * Inline ROC License Display (for footers, etc.)
 */
export function ROCLicenseInline() {
  if (!BUSINESS_INFO_ARIZONA.license) {
    return null;
  }

  return (
    <div className="flex items-center gap-2 text-sm text-gray-600">
      <Shield className="w-4 h-4 text-green-600" />
      <span>Arizona {BUSINESS_INFO_ARIZONA.license.number}</span>
      <a
        href={BUSINESS_INFO_ARIZONA.license.verifyUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline"
      >
        Verify
      </a>
    </div>
  );
}
