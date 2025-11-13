// Google Analytics event tracking utilities

// Extend Window interface to include gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      eventName: string,
      eventParams?: Record<string, any>
    ) => void;
  }
}

/**
 * Track a custom event in Google Analytics
 * @param eventName - Name of the event (e.g., 'lead_magnet_download')
 * @param eventParams - Additional parameters for the event
 */
export const trackEvent = (
  eventName: string,
  eventParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
};

/**
 * Track lead magnet form submission
 * @param leadMagnetTitle - Title of the lead magnet
 * @param leadMagnetSlug - Slug/ID of the lead magnet
 */
export const trackLeadMagnetSubmission = (
  leadMagnetTitle: string,
  leadMagnetSlug: string
) => {
  trackEvent('lead_magnet_submission', {
    lead_magnet_title: leadMagnetTitle,
    lead_magnet_slug: leadMagnetSlug,
    event_category: 'Lead Generation',
    event_label: leadMagnetTitle,
  });
};

/**
 * Track PDF download
 * @param pdfName - Name of the PDF being downloaded
 * @param leadMagnetSlug - Slug/ID of the lead magnet
 */
export const trackPdfDownload = (pdfName: string, leadMagnetSlug: string) => {
  trackEvent('pdf_download', {
    pdf_name: pdfName,
    lead_magnet_slug: leadMagnetSlug,
    event_category: 'Downloads',
    event_label: pdfName,
  });
};

/**
 * Track phone number click
 * @param location - Where the phone number was clicked (e.g., 'header', 'footer', 'cta')
 */
export const trackPhoneClick = (location: string) => {
  trackEvent('phone_click', {
    click_location: location,
    event_category: 'Contact',
    event_label: `Phone Click - ${location}`,
  });
};

/**
 * Track estimate form submission
 * @param formLocation - Where the form was submitted from
 */
export const trackEstimateSubmission = (formLocation: string = 'estimate_page') => {
  trackEvent('estimate_submission', {
    form_location: formLocation,
    event_category: 'Lead Generation',
    event_label: 'Estimate Request',
    value: 1, // Can be used to calculate conversion value
  });
};

/**
 * Track contact form submission
 * @param formLocation - Where the form was submitted from
 */
export const trackContactSubmission = (formLocation: string = 'contact_page') => {
  trackEvent('contact_submission', {
    form_location: formLocation,
    event_category: 'Lead Generation',
    event_label: 'Contact Form',
    value: 1,
  });
};

/**
 * Track CTA button clicks
 * @param ctaText - Text of the CTA button
 * @param ctaLocation - Where the CTA is located
 */
export const trackCtaClick = (ctaText: string, ctaLocation: string) => {
  trackEvent('cta_click', {
    cta_text: ctaText,
    cta_location: ctaLocation,
    event_category: 'Engagement',
    event_label: ctaText,
  });
};
