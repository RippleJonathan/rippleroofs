'use client'

import { FC, useMemo } from 'react'
import { Container } from '@/components/layout/Container'

interface SeasonalBannerProps {
  state?: 'TX' | 'AZ'
}

interface BannerInfo {
  show: boolean
  icon: string
  message: string
  ctaText: string
  ctaHref: string
  bgColor: string
  textColor: string
  iconColor: string
}

export const SeasonalBanner: FC<SeasonalBannerProps> = ({ state = 'TX' }) => {
  const bannerInfo: BannerInfo = useMemo(() => {
    const now = new Date()
    const month = now.getMonth() + 1 // 1-12

    // Arizona: Monsoon Season (June-September)
    if (state === 'AZ' && month >= 6 && month <= 9) {
      return {
        show: true,
        icon: '⛈️',
        message: 'Monsoon Season Alert: Free roof inspections to check for storm damage',
        ctaText: 'Schedule Inspection',
        ctaHref: '/arizona/quote',
        bgColor: 'bg-gradient-to-r from-blue-900 to-blue-800',
        textColor: 'text-white',
        iconColor: 'text-yellow-300'
      }
    }

    // Arizona: Extreme Heat (May-October)
    if (state === 'AZ' && ((month >= 5 && month <= 10) && !(month >= 6 && month <= 9))) {
      return {
        show: true,
        icon: '☀️',
        message: 'Extreme heat season: Check your roof before summer peaks. Free inspections available.',
        ctaText: 'Get Free Inspection',
        ctaHref: '/arizona/quote',
        bgColor: 'bg-gradient-to-r from-orange-600 to-red-600',
        textColor: 'text-white',
        iconColor: 'text-yellow-200'
      }
    }

    // Texas: Hail Season (March-May)
    if (state === 'TX' && month >= 3 && month <= 5) {
      return {
        show: true,
        icon: '🌩️',
        message: 'Hail Season Alert: Recent storm? Get a free roof inspection to check for damage.',
        ctaText: 'Free Inspection',
        ctaHref: '/contact',
        bgColor: 'bg-gradient-to-r from-primary-900 to-primary-800',
        textColor: 'text-white',
        iconColor: 'text-blue-300'
      }
    }

    // Texas: Hurricane Season (June-November)
    if (state === 'TX' && month >= 6 && month <= 11) {
      return {
        show: true,
        icon: '🌀',
        message: 'Hurricane Season: Protect your home with a pre-storm roof inspection.',
        ctaText: 'Schedule Now',
        ctaHref: '/contact',
        bgColor: 'bg-gradient-to-r from-slate-800 to-slate-700',
        textColor: 'text-white',
        iconColor: 'text-cyan-300'
      }
    }

    // Winter storm preparation (December-February) - Both states
    if (month === 12 || month <= 2) {
      return {
        show: true,
        icon: '❄️',
        message: state === 'AZ' 
          ? 'Winter weather coming: Ensure your roof is ready for cooler temps and rain.'
          : 'Winter storm season: Get your roof inspected before freezing temperatures arrive.',
        ctaText: 'Book Inspection',
        ctaHref: state === 'AZ' ? '/arizona/quote' : '/contact',
        bgColor: 'bg-gradient-to-r from-blue-700 to-indigo-700',
        textColor: 'text-white',
        iconColor: 'text-blue-200'
      }
    }

    // No banner
    return {
      show: false,
      icon: '',
      message: '',
      ctaText: '',
      ctaHref: '',
      bgColor: '',
      textColor: '',
      iconColor: ''
    }
  }, [state])

  if (!bannerInfo.show) {
    return null
  }

  return (
    <div className={`${bannerInfo.bgColor} ${bannerInfo.textColor} py-3 shadow-lg`}>
      <Container>
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <span className={`text-2xl ${bannerInfo.iconColor}`}>{bannerInfo.icon}</span>
            <p className="text-sm md:text-base font-medium">
              {bannerInfo.message}
            </p>
          </div>
          <a
            href={bannerInfo.ctaHref}
            className="bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm transition-all shadow-sm hover:shadow-md whitespace-nowrap"
          >
            {bannerInfo.ctaText} →
          </a>
        </div>
      </Container>
    </div>
  )
}
