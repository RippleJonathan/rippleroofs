import { FC } from 'react'
import { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Privacy Policy | Ripple Roofing & Construction',
  description: 'Our privacy policy explains how we collect, use, and protect your personal information.',
  robots: 'noindex, follow', // Don't index policy pages
}

const PrivacyPolicy: FC = () => {
  const lastUpdated = 'November 14, 2025'

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-primary-100">
            Last updated: {lastUpdated}
          </p>
        </Container>
      </div>

      {/* Content */}
      <Container className="py-16">
        <div className="max-w-4xl mx-auto prose prose-lg">
          
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Introduction</h2>
            <p className="text-primary-700">
              Ripple Roofing & Construction ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when 
              you visit our website <strong>{SITE_CONFIG.url}</strong> or use our services.
            </p>
            <p className="text-primary-700">
              By using our website or services, you agree to the collection and use of information in accordance 
              with this policy. If you do not agree with our policies and practices, please do not use our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-2xl font-bold text-primary-800 mb-3">Personal Information</h3>
            <p className="text-primary-700 mb-4">
              When you contact us for estimates, inspections, or services, we may collect:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2 mb-6">
              <li><strong>Contact Information:</strong> Name, email address, phone number, mailing address</li>
              <li><strong>Property Information:</strong> Property address, home details, roof information</li>
              <li><strong>Service Details:</strong> Nature of roofing needs, project preferences, budget information</li>
              <li><strong>Payment Information:</strong> Billing address and payment details (processed securely through third-party payment processors)</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary-800 mb-3">Automatically Collected Information</h3>
            <p className="text-primary-700 mb-4">
              When you visit our website, we automatically collect:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2">
              <li><strong>Usage Data:</strong> Pages visited, time spent, links clicked</li>
              <li><strong>Device Information:</strong> IP address, browser type, device type, operating system</li>
              <li><strong>Location Data:</strong> General geographic location based on IP address</li>
              <li><strong>Cookies:</strong> Small data files stored on your device (see Cookies section)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">How We Use Your Information</h2>
            <p className="text-primary-700 mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2">
              <li>Provide roofing estimates, inspections, and services</li>
              <li>Communicate with you about your project, appointments, and inquiries</li>
              <li>Process payments and maintain records</li>
              <li>Send service updates, maintenance reminders, and important notifications</li>
              <li>Improve our website, services, and customer experience</li>
              <li>Comply with legal obligations and protect our rights</li>
              <li>Send marketing communications (with your consent, and you can opt-out anytime)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">How We Share Your Information</h2>
            <p className="text-primary-700 mb-4">
              We do not sell your personal information. We may share your information with:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2">
              <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business (payment processors, CRM systems, email services)</li>
              <li><strong>Business Partners:</strong> Suppliers and manufacturers for warranty registration and product support</li>
              <li><strong>Insurance Companies:</strong> When assisting with insurance claims (with your consent)</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or to protect our legal rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-primary-700 mb-4">
              We use cookies and similar tracking technologies to improve your experience:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2 mb-4">
              <li><strong>Essential Cookies:</strong> Required for website functionality (form submissions, session management)</li>
              <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website (Google Analytics, page views, time on site)</li>
              <li><strong>Marketing Cookies:</strong> Used to deliver relevant ads and track campaign effectiveness (Facebook Pixel, Google Ads)</li>
              <li><strong>Preference Cookies:</strong> Remember your settings and preferences for future visits</li>
            </ul>
            <p className="text-primary-700 mb-4">
              You can control cookies through your browser settings. However, disabling cookies may affect 
              website functionality. Most browsers allow you to:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2 mb-4">
              <li>View and delete cookies stored on your device</li>
              <li>Block third-party cookies</li>
              <li>Block cookies from specific sites</li>
              <li>Block all cookies (may affect site functionality)</li>
              <li>Delete all cookies when you close your browser</li>
            </ul>
            <p className="text-primary-700">
              For more information about cookies and how to manage them, visit{' '}
              <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-accent-600 hover:text-accent-700 font-semibold">
                www.allaboutcookies.org
              </a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Data Security</h2>
            <p className="text-primary-700">
              We implement appropriate technical and organizational security measures to protect your personal 
              information from unauthorized access, disclosure, alteration, or destruction. However, no internet 
              transmission or electronic storage is 100% secure. While we strive to protect your information, 
              we cannot guarantee absolute security.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Data Retention</h2>
            <p className="text-primary-700 mb-4">
              We retain your personal information only as long as necessary to fulfill the purposes outlined 
              in this Privacy Policy, unless a longer retention period is required or permitted by law.
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2">
              <li><strong>Customer Project Records:</strong> Retained for 7-10 years for warranty, legal, and tax purposes</li>
              <li><strong>Quote/Estimate Requests:</strong> Retained for 3 years or until you request deletion</li>
              <li><strong>Marketing Communications:</strong> Retained until you unsubscribe</li>
              <li><strong>Website Analytics:</strong> Aggregated data retained indefinitely (not personally identifiable)</li>
              <li><strong>Payment Information:</strong> Processed securely by third parties; we do not store credit card numbers</li>
            </ul>
            <p className="text-primary-700 mt-4">
              After the retention period expires, we securely delete or anonymize your personal information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">California Privacy Rights (CCPA)</h2>
            <p className="text-primary-700 mb-4">
              If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA):
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2 mb-4">
              <li><strong>Right to Know:</strong> Request disclosure of personal information we collect, use, disclose, or sell</li>
              <li><strong>Right to Delete:</strong> Request deletion of your personal information (subject to legal exceptions)</li>
              <li><strong>Right to Opt-Out:</strong> Opt-out of the sale of personal information (we do NOT sell personal information)</li>
              <li><strong>Right to Non-Discrimination:</strong> We will not discriminate against you for exercising your privacy rights</li>
            </ul>
            <p className="text-primary-700">
              To exercise these rights, contact us at <a href={`mailto:${SITE_CONFIG.email}`} className="text-accent-600 hover:text-accent-700 font-semibold">{SITE_CONFIG.email}</a> or call <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-accent-600 hover:text-accent-700 font-semibold">{SITE_CONFIG.phone}</a>. 
              We will verify your identity and respond within 45 days.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Texas-Specific Privacy Information</h2>
            <p className="text-primary-700 mb-4">
              As a Texas-based business, we comply with all applicable Texas privacy laws and regulations:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2">
              <li><strong>Texas Business and Commerce Code:</strong> We protect consumer information per Chapter 521</li>
              <li><strong>Data Breach Notification:</strong> We will notify you promptly of any data breach affecting your information</li>
              <li><strong>Biometric Information:</strong> We do not collect or use biometric information</li>
              <li><strong>Local Business:</strong> Your data is managed by our Texas-based team in Round Rock, TX</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Do Not Track Signals</h2>
            <p className="text-primary-700">
              Some web browsers have "Do Not Track" features that send a signal to websites you visit, 
              requesting that your browsing not be tracked. Our website does not currently respond to 
              Do Not Track signals, as there is no industry standard for how to respond to such signals. 
              However, you can control cookies and tracking through your browser settings as described above.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">International Users</h2>
            <p className="text-primary-700">
              Our services are directed to users in the United States, specifically Central Texas. If you 
              access our website from outside the United States, please be aware that your information may 
              be transferred to, stored, and processed in the United States where our servers are located 
              and our central database is operated. By using our website, you consent to the transfer of 
              your information to the United States.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Your Privacy Rights</h2>
            <p className="text-primary-700 mb-4">
              Depending on your location, you may have the following rights:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time</li>
              <li><strong>Data Portability:</strong> Request transfer of your data to another service provider</li>
            </ul>
            <p className="text-primary-700 mt-4">
              To exercise these rights, contact us at <a href={`mailto:${SITE_CONFIG.email}`} className="text-accent-600 hover:text-accent-700 font-semibold">{SITE_CONFIG.email}</a> or call <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-accent-600 hover:text-accent-700 font-semibold">{SITE_CONFIG.phone}</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Children's Privacy</h2>
            <p className="text-primary-700">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect 
              personal information from children. If you believe we have inadvertently collected information 
              from a child, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Third-Party Links</h2>
            <p className="text-primary-700">
              Our website may contain links to third-party websites (e.g., manufacturer websites, social media). 
              We are not responsible for the privacy practices of these external sites. We encourage you to 
              review their privacy policies.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-primary-700">
              We may update this Privacy Policy from time to time. We will notify you of any material changes 
              by posting the new policy on this page with an updated "Last Updated" date. We encourage you to 
              review this policy periodically.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Contact Us</h2>
            <p className="text-primary-700 mb-4">
              If you have questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="bg-primary-50 rounded-lg p-6 border border-primary-200">
              <p className="text-primary-900 font-semibold mb-2">{SITE_CONFIG.name}</p>
              <p className="text-primary-700">{SITE_CONFIG.address}</p>
              <p className="text-primary-700 mt-2">
                Phone: <a href={`tel:${SITE_CONFIG.phoneRaw}`} className="text-accent-600 hover:text-accent-700 font-semibold">{SITE_CONFIG.phone}</a>
              </p>
              <p className="text-primary-700">
                Email: <a href={`mailto:${SITE_CONFIG.email}`} className="text-accent-600 hover:text-accent-700 font-semibold">{SITE_CONFIG.email}</a>
              </p>
            </div>
          </section>

        </div>
      </Container>
    </div>
  )
}

export default PrivacyPolicy
