import { FC } from 'react'
import { Metadata } from 'next'
import { Container } from '@/components/layout/Container'
import { SITE_CONFIG } from '@/lib/constants'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Terms of Service | Ripple Roofing & Construction',
  description: 'Terms and conditions for using our website and roofing services.',
  robots: 'noindex, follow', // Don't index policy pages
}

const TermsOfService: FC = () => {
  const lastUpdated = 'November 14, 2025'

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 text-white py-16">
        <Container>
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Terms of Service
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
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Agreement to Terms</h2>
            <p className="text-primary-700">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and Ripple 
              Roofing & Construction ("Company," "we," "us," or "our") concerning your access to and use of 
              our website <strong>{SITE_CONFIG.url}</strong> and our roofing services.
            </p>
            <p className="text-primary-700">
              By accessing our website or using our services, you agree to be bound by these Terms. If you 
              do not agree with any part of these Terms, you may not access our website or use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Services Description</h2>
            <p className="text-primary-700 mb-4">
              Ripple Roofing & Construction provides residential and commercial roofing services in Central 
              Texas, including but not limited to:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2">
              <li>Roof inspections and assessments</li>
              <li>Roof installation and replacement</li>
              <li>Roof repairs and maintenance</li>
              <li>Emergency roofing services</li>
              <li>Insurance claim assistance and documentation</li>
              <li>Gutter installation and siding services</li>
              <li>Storm damage restoration</li>
            </ul>
            <p className="text-primary-700 mt-4">
              All services are subject to availability, scheduling, and weather conditions. We reserve the 
              right to refuse service at our discretion.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Estimates and Quotes</h2>
            <p className="text-primary-700">
              We provide free inspections and written estimates for roofing projects. Estimates are valid 
              for 30 days unless otherwise specified and are subject to:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2 mt-4">
              <li>Physical inspection of the property</li>
              <li>Material availability and current market pricing</li>
              <li>Discovery of unforeseen conditions (rot, structural damage, code violations)</li>
              <li>Changes in project scope requested by customer</li>
            </ul>
            <p className="text-primary-700 mt-4">
              Final pricing may vary if conditions differ from initial assessment. We will notify you of 
              any material changes before proceeding with additional work.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Payment Terms</h2>
            <p className="text-primary-700 mb-4">
              Payment terms are outlined in your written contract and typically include:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2">
              <li><strong>Deposit:</strong> A deposit may be required to schedule work and order materials</li>
              <li><strong>Progress Payments:</strong> Payments may be required at project milestones</li>
              <li><strong>Final Payment:</strong> Due upon completion and your satisfaction with the work</li>
              <li><strong>Financing:</strong> Third-party financing available (subject to credit approval)</li>
            </ul>
            <p className="text-primary-700 mt-4">
              Late payments may be subject to interest charges as permitted by Texas law. We accept cash, 
              checks, credit cards, and financing through approved partners.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Warranties</h2>
            
            <h3 className="text-2xl font-bold text-primary-800 mb-3">Workmanship Warranty</h3>
            <p className="text-primary-700 mb-4">
              We provide a 10-year workmanship warranty on all roof installations, covering defects in our 
              labor and installation. This warranty covers:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2 mb-6">
              <li>Installation defects and workmanship errors</li>
              <li>Leaks resulting from improper installation</li>
              <li>Flashing and penetration failures</li>
            </ul>

            <h3 className="text-2xl font-bold text-primary-800 mb-3">Manufacturer Warranties</h3>
            <p className="text-primary-700 mb-4">
              Roofing materials are covered by manufacturer warranties (typically 25-50 years for shingles, 
              longer for metal and tile). Manufacturer warranties cover material defects but not improper 
              installation (covered by our workmanship warranty).
            </p>

            <h3 className="text-2xl font-bold text-primary-800 mb-3">Warranty Exclusions</h3>
            <p className="text-primary-700 mb-4">
              Warranties do not cover:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2">
              <li>Normal wear and tear</li>
              <li>Damage from severe weather events (hurricanes, tornadoes, hail beyond material ratings)</li>
              <li>Damage from lack of maintenance</li>
              <li>Modifications or repairs by other contractors</li>
              <li>Structural failures not caused by our work</li>
              <li>Consequential damages (interior damage, mold, etc.)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Customer Responsibilities</h2>
            <p className="text-primary-700 mb-4">
              You agree to:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2">
              <li>Provide accurate property information and disclose known issues</li>
              <li>Obtain HOA approvals if required</li>
              <li>Provide access to property, electricity, and water during project</li>
              <li>Protect or remove valuables and fragile items</li>
              <li>Relocate vehicles and outdoor items from work areas</li>
              <li>Keep pets secured during work hours</li>
              <li>Maintain roof with recommended inspections and maintenance</li>
              <li>Notify us promptly of any issues or concerns</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Cancellation and Rescheduling</h2>
            <p className="text-primary-700">
              You may cancel your project with written notice. Cancellation terms:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2 mt-4">
              <li><strong>Before materials ordered:</strong> Full refund minus $150 inspection/admin fee</li>
              <li><strong>After materials ordered:</strong> Refund minus material costs and restocking fees</li>
              <li><strong>After work begun:</strong> Refund minus completed work and materials used</li>
            </ul>
            <p className="text-primary-700 mt-4">
              We may reschedule due to weather, material delays, or unforeseen circumstances. We will 
              communicate proactively and work to minimize delays.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Limitation of Liability</h2>
            <p className="text-primary-700">
              To the maximum extent permitted by law, our liability is limited to the amount you paid for 
              our services. We are not liable for indirect, incidental, consequential, or punitive damages, 
              including lost profits, business interruption, or property damage not caused by our negligence.
            </p>
            <p className="text-primary-700 mt-4">
              We maintain comprehensive general liability insurance and workers' compensation coverage. You 
              may request proof of insurance at any time.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Dispute Resolution</h2>
            <p className="text-primary-700 mb-4">
              We are committed to resolving any disputes amicably. If a dispute arises:
            </p>
            <ol className="list-decimal pl-6 text-primary-700 space-y-2">
              <li>Contact us immediately to discuss the issue</li>
              <li>We will investigate and respond within 3 business days</li>
              <li>If unresolved, we agree to mediation before pursuing litigation</li>
              <li>Any legal proceedings will be governed by Texas law and held in Williamson County, Texas</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Website Use and Intellectual Property</h2>
            <p className="text-primary-700 mb-4">
              All content on our website (text, images, logos, designs) is owned by Ripple Roofing & 
              Construction or licensed to us. You may not:
            </p>
            <ul className="list-disc pl-6 text-primary-700 space-y-2">
              <li>Copy, reproduce, or distribute our content without permission</li>
              <li>Use our trademarks or branding without authorization</li>
              <li>Scrape, data mine, or use automated tools on our website</li>
              <li>Attempt to hack, disrupt, or compromise our website security</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Privacy</h2>
            <p className="text-primary-700">
              Your privacy is important to us. Please review our <Link href="/privacy" className="text-accent-600 hover:text-accent-700 font-semibold">Privacy Policy</Link> to 
              understand how we collect, use, and protect your personal information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Changes to Terms</h2>
            <p className="text-primary-700">
              We reserve the right to modify these Terms at any time. Changes will be posted on this page 
              with an updated "Last Updated" date. Continued use of our website or services after changes 
              constitutes acceptance of the revised Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Severability</h2>
            <p className="text-primary-700">
              If any provision of these Terms is found to be unenforceable or invalid, that provision will 
              be limited or eliminated to the minimum extent necessary, and the remaining provisions will 
              remain in full force and effect.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary-900 mb-4">Contact Information</h2>
            <p className="text-primary-700 mb-4">
              Questions about these Terms? Contact us:
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

export default TermsOfService
