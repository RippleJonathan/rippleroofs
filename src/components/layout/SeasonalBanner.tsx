'use client'

import { FC, useMemo } from 'react'
import { Container } from '@/components/layout/Container'

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

export const SeasonalBanner: FC = () => {
  const bannerInfo: BannerInfo = useMemo(() => {
    const now = new Date()
    const month = now.getMonth() + 1 // 1-12

    // Texas: Hail Season (March-May)
    if (month >= 3 && month <= 5) {
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
    if (month >= 6 && month <= 11) {
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

    // Winter storm preparation (December-February)
    if (month === 12 || month <= 2) {
      return {
        show: true,
        icon: '❄️',
        message: 'Winter storm season: Get your roof inspected before freezing temperatures arrive.',
        ctaText: 'Book Inspection',
        ctaHref: '/contact',
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
  }, [])

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
