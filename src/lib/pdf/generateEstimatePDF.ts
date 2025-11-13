import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { RoofMeasurement } from '@/types/estimate'
import { RoofingPackage } from '@/types/packages'
import { CustomerInfo } from '@/components/estimate/CustomerInfoForm'

interface EstimatePDFData {
  customerInfo: CustomerInfo
  address: string
  measurement: RoofMeasurement
  package: RoofingPackage
}

// Helper function to load image as base64
async function loadImageAsBase64(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.width
      canvas.height = img.height
      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.drawImage(img, 0, 0)
        resolve(canvas.toDataURL('image/png'))
      } else {
        reject(new Error('Could not get canvas context'))
      }
    }
    img.onerror = () => reject(new Error('Could not load image'))
    img.src = url
  })
}

export async function generateEstimatePDF(data: EstimatePDFData): Promise<Blob> {
  const doc = new jsPDF()
  const pageWidth = doc.internal.pageSize.getWidth()
  const pageHeight = doc.internal.pageSize.getHeight()
  let yPos = 20

  // Colors matching the website
  const primaryColor: [number, number, number] = [26, 35, 126] // primary-900
  const accentColor: [number, number, number] = [217, 119, 6] // accent-600
  const lightGray: [number, number, number] = [243, 244, 246] // gray-100
  const greenColor: [number, number, number] = [34, 197, 94] // green-500
  const blueColor: [number, number, number] = [59, 130, 246] // blue-500

  // Helper function to check if we need a new page
  const checkPageBreak = (neededSpace: number) => {
    if (yPos + neededSpace > pageHeight - 20) {
      doc.addPage()
      yPos = 20
      return true
    }
    return false
  }

  // Header - Company Info with Logo (White background)
  doc.setFillColor(255, 255, 255) // White background
  doc.rect(0, 0, pageWidth, 50, 'F')
  
  // Add a subtle accent bar at bottom
  doc.setFillColor(...accentColor)
  doc.rect(0, 47, pageWidth, 3, 'F')
  
  // Add logo (centered at top)
  try {
    const logoBase64 = await loadImageAsBase64('https://www.rippleroofs.com/images/logo.png')
    doc.addImage(logoBase64, 'PNG', pageWidth / 2 - 20, 8, 40, 15)
  } catch (error) {
    console.log('Logo not loaded, using text fallback')
    // Fallback to text if logo doesn't load
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(24)
    doc.setFont('helvetica', 'bold')
    doc.text('Ripple Roofing & Construction', pageWidth / 2, 18, { align: 'center' })
  }
  
  doc.setTextColor(0, 0, 0) // Black text
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.text('Professional Roofing Estimate', pageWidth / 2, 32, { align: 'center' })
  doc.setFontSize(9)
  doc.text('estimates@rippleroofs.com | (512) 763-5277', pageWidth / 2, 42, { align: 'center' })

  yPos = 60

  // Enhanced Success Banner with gradient effect
  doc.setFillColor(...accentColor)
  doc.roundedRect(15, yPos, pageWidth - 30, 22, 3, 3, 'F')
  
  // Add checkmark circle
  doc.setFillColor(255, 255, 255)
  doc.circle(25, yPos + 11, 5, 'F')
  doc.setTextColor(...accentColor)
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('✓', 25, yPos + 14, { align: 'center' })
  
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text('Your Professional Roofing Estimate is Ready!', pageWidth / 2, yPos + 14, { align: 'center' })
  
  yPos += 32

  // Estimate Date
  doc.setTextColor(100, 100, 100)
  doc.setFontSize(10)
  doc.text(`Generated: ${new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}`, pageWidth - 15, yPos, { align: 'right' })
  yPos += 10

  // Customer Information Section - Styled Box
  doc.setFillColor(...lightGray)
  doc.roundedRect(15, yPos, pageWidth - 30, 40, 3, 3, 'F')
  
  // Border accent
  doc.setDrawColor(...accentColor)
  doc.setLineWidth(0.5)
  doc.roundedRect(15, yPos, pageWidth - 30, 40, 3, 3, 'S')
  
  doc.setTextColor(...primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('Customer Information', 20, yPos + 10)
  
  doc.setTextColor(0, 0, 0)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Name:', 20, yPos + 20)
  doc.text('Email:', 20, yPos + 26)
  doc.text('Phone:', 20, yPos + 32)
  
  doc.setFont('helvetica', 'normal')
  doc.text(`${data.customerInfo.firstName} ${data.customerInfo.lastName}`, 45, yPos + 20)
  
  // Make email blue and underlined (looks like a link)
  doc.setTextColor(...blueColor)
  doc.textWithLink(data.customerInfo.email, 45, yPos + 26, { url: `mailto:${data.customerInfo.email}` })
  
  doc.setTextColor(0, 0, 0)
  doc.text(data.customerInfo.phone, 45, yPos + 32)
  
  yPos += 50

  // Property Address - Styled Box
  doc.setFillColor(...lightGray)
  doc.roundedRect(15, yPos, pageWidth - 30, 18, 3, 3, 'F')
  
  doc.setDrawColor(...accentColor)
  doc.setLineWidth(0.5)
  doc.roundedRect(15, yPos, pageWidth - 30, 18, 3, 3, 'S')
  
  doc.setTextColor(...primaryColor)
  doc.setFontSize(12)
  doc.setFont('helvetica', 'bold')
  doc.text('Property Address:', 20, yPos + 12)
  
  doc.setTextColor(0, 0, 0)
  doc.setFont('helvetica', 'normal')
  doc.text(data.address, 68, yPos + 12)
  
  yPos += 28

  // Roof Measurements
  checkPageBreak(60)
  
  doc.setTextColor(...primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('Roof Measurements', 15, yPos)
  yPos += 8

  autoTable(doc, {
    startY: yPos,
    head: [['Measurement', 'Value']],
    body: [
      ['Base Area', `${data.measurement.squareFeet.toLocaleString()} sq ft`],
      ['Roof Pitch', `${data.measurement.pitch}`],
      ['Pitch Multiplier', `${data.measurement.pitchMultiplier.toFixed(2)}x`],
      ['Adjusted Area (with pitch)', `${data.measurement.adjustedSquareFeet.toLocaleString()} sq ft`],
      ['Waste Factor', `${(data.measurement.wasteFactor * 100).toFixed(0)}%`],
      ['Total Squares', `${data.measurement.totalSquares} squares`],
    ],
    theme: 'grid',
    headStyles: { fillColor: primaryColor, fontSize: 11 },
    styles: { fontSize: 10 },
    margin: { left: 15, right: 15 },
  })

  yPos = (doc as any).lastAutoTable.finalY + 15

  // Package Details - Eye-catching header
  checkPageBreak(85)
  
  // Large colored header box
  doc.setFillColor(...accentColor)
  doc.roundedRect(15, yPos, pageWidth - 30, 18, 3, 3, 'F')
  
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(18)
  doc.setFont('helvetica', 'bold')
  doc.text('Selected Package', pageWidth / 2, yPos + 12, { align: 'center' })
  
  yPos += 25

  // Package name with icon box
  doc.setFillColor(247, 247, 247)
  doc.roundedRect(15, yPos, pageWidth - 30, 25, 3, 3, 'F')
  
  doc.setTextColor(...primaryColor)
  doc.setFontSize(16)
  doc.setFont('helvetica', 'bold')
  doc.text(data.package.name, pageWidth / 2, yPos + 10, { align: 'center' })
  
  doc.setTextColor(...accentColor)
  doc.setFontSize(12)
  doc.setFont('helvetica', 'normal')
  doc.text(data.package.brand, pageWidth / 2, yPos + 18, { align: 'center' })
  
  yPos += 30
  
  doc.setTextColor(60, 60, 60)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  const descLines = doc.splitTextToSize(data.package.description, pageWidth - 40)
  doc.text(descLines, pageWidth / 2, yPos, { align: 'center' })
  
  yPos += (descLines.length * 5) + 10
  
  // Brochure link if available
  if (data.package.brochureUrl) {
    doc.setFontSize(9)
    doc.setTextColor(...blueColor)
    doc.setFont('helvetica', 'normal')
    doc.textWithLink('View Product Brochure (Click to Open)', pageWidth / 2, yPos, { 
      url: data.package.brochureUrl,
      align: 'center'
    })
    yPos += 10
  }

  // Pricing - Large Prominent Box
  checkPageBreak(55)
  
  const totalPrice = data.measurement.totalSquares * data.package.pricePerSquare
  
  // Enhanced pricing box with better visual hierarchy
  doc.setFillColor(250, 250, 255) // Very light blue
  doc.roundedRect(15, yPos, pageWidth - 30, 50, 3, 3, 'F')
  
  doc.setDrawColor(...accentColor)
  doc.setLineWidth(1.5)
  doc.roundedRect(15, yPos, pageWidth - 30, 50, 3, 3, 'S')
  
  // Title with icon
  doc.setTextColor(...primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('Your Investment', pageWidth / 2, yPos + 10, { align: 'center' })
  
  // Pricing breakdown
  doc.setTextColor(80, 80, 80)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'normal')
  doc.text(`${data.measurement.totalSquares} squares × $${data.package.pricePerSquare}/square`, pageWidth / 2, yPos + 20, { align: 'center' })
  
  // Total price - Extra prominent with background
  doc.setFillColor(...accentColor)
  doc.roundedRect((pageWidth - 110) / 2, yPos + 26, 110, 17, 2, 2, 'F')
  
  doc.setFontSize(22)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(255, 255, 255)
  doc.text(`$${totalPrice.toLocaleString()}`, pageWidth / 2, yPos + 38, { align: 'center' })
  
  doc.setFontSize(7)
  doc.setTextColor(120, 120, 120)
  doc.setFont('helvetica', 'italic')
  doc.text('*Final pricing subject to on-site inspection', pageWidth / 2, yPos + 48, { align: 'center' })
  
  yPos += 60

  // Key Features - Styled with icons
  checkPageBreak(40 + (data.package.features.length * 6))
  
  doc.setTextColor(...primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('Key Features', 15, yPos)
  yPos += 10

  doc.setTextColor(0, 0, 0)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'normal')
  
  data.package.features.forEach((feature) => {
    checkPageBreak(8)
    
    // Green checkmark circle
    doc.setFillColor(...greenColor)
    doc.circle(22, yPos - 2, 2, 'F')
    
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(7)
    doc.setFont('helvetica', 'bold')
    doc.text('✓', 22, yPos + 0.5, { align: 'center' })
    
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'normal')
    const featureLines = doc.splitTextToSize(feature, pageWidth - 50)
    doc.text(featureLines, 28, yPos)
    yPos += featureLines.length * 5 + 2
  })

  yPos += 5

  // Warranty & Lifespan - Side by side colored boxes
  checkPageBreak(30)
  
  let boxWidth = (pageWidth - 35) / 2
  
  // Warranty box (blue theme)
  doc.setFillColor(239, 246, 255) // Light blue
  doc.roundedRect(15, yPos, boxWidth, 25, 3, 3, 'F')
  doc.setDrawColor(59, 130, 246) // Blue border
  doc.setLineWidth(0.5)
  doc.roundedRect(15, yPos, boxWidth, 25, 3, 3, 'S')
  
  doc.setTextColor(...blueColor)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Warranty', 20, yPos + 8)
  
  doc.setTextColor(0, 0, 0)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  const warrantyLines = doc.splitTextToSize(data.package.warranty, boxWidth - 10)
  doc.text(warrantyLines, 20, yPos + 15)
  
  // Lifespan box (green theme)
  doc.setFillColor(240, 253, 244) // Light green
  doc.roundedRect(15 + boxWidth + 5, yPos, boxWidth, 25, 3, 3, 'F')
  doc.setDrawColor(...greenColor)
  doc.setLineWidth(0.5)
  doc.roundedRect(15 + boxWidth + 5, yPos, boxWidth, 25, 3, 3, 'S')
  
  doc.setTextColor(...greenColor)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Expected Lifespan', 20 + boxWidth + 5, yPos + 8)
  
  doc.setTextColor(0, 0, 0)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text(data.package.lifespan, 20 + boxWidth + 5, yPos + 18)
  
  yPos += 35

  // Materials (New Page) - Styled with links
  doc.addPage()
  yPos = 20

  doc.setTextColor(...primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('Materials Included', 15, yPos)
  yPos += 5
  
  doc.setTextColor(100, 100, 100)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'italic')
  doc.text('Click on blue links to view product details', 15, yPos)
  yPos += 8

  // Materials with clickable brochure links
  const materials = [
    { label: 'Shingles/Panels', value: data.package.materials.shingles },
    { label: 'Underlayment', value: data.package.materials.underlayment },
    { label: 'Starter', value: data.package.materials.starter },
    { label: 'Ridge Cap', value: data.package.materials.ridgeCap },
    { label: 'Ventilation', value: data.package.materials.ventilation },
    { label: 'Ice & Water Shield', value: data.package.materials.iceAndWater },
    { label: 'Drip Edge', value: data.package.materials.drip },
  ]

  const brochureLinks: { [key: string]: { text: string; url: string }[] } = {}
  
  // Add brochure links based on package
  if (data.package.id === 'climateflex') {
    brochureLinks['Shingles/Panels'] = [
      { text: 'Product Brochure', url: 'https://certainteed.widen.net/content/4azmgr9hvd/pdf/landmark-climateflex-brochure-00-00-558-US-EN-2509.pdf?u=nwk4fd' },
      { text: 'Life Cycle Guide', url: 'https://certainteed.widen.net/content/wulhpo5uwc/pdf/life-cycle-roof-brochure-00-00-3651-NA-EN-2308-v3.pdf?u=nwk4fd' }
    ]
    brochureLinks['Underlayment'] = [
      { text: 'Roof Runner Info', url: 'https://certainteed.widen.net/content/rcyansauox/pdf/roofrunner-sellsheet-00-04-2102-NA-EN-2304.pdf?u=nwk4fd' }
    ]
    brochureLinks['Starter'] = [
      { text: 'SwiftStart Details', url: 'https://certainteed.widen.net/content/iin4o10rja/pdf/swiftstart-sellsheet-00-04-768-NA-EN-2305.pdf?u=nwk4fd' }
    ]
    brochureLinks['Ridge Cap'] = [
      { text: 'Shadow Ridge Info', url: 'https://certainteed.widen.net/content/rk1me8ewzg/pdf/shadowridge-sellsheet-00-04-1156-NA-EN-2301.pdf?u=nwk4fd' }
    ]
    brochureLinks['Ice & Water Shield'] = [
      { text: 'DryRoof SA Info', url: 'https://certainteed.widen.net/content/qm4sk7drs1/pdf/dryroofsa-sellsheet-00-04-494-NA-EN-2111.pdf?u=nwk4fd' }
    ]
  } else if (data.package.id === 'metal') {
    brochureLinks['Shingles/Panels'] = [
      { text: 'Product Catalog', url: 'https://www.mcelroymetal.com/hubfs/assets/176181%20MM101%20Product%20Catalog%2036pg%20web%20(1).pdf' }
    ]
  } else if (data.package.id === 'economy') {
    brochureLinks['Shingles/Panels'] = [
      { text: 'Spec Sheet', url: 'https://www.gaf.com/en-us/document-library/documents/specifications/timberline-ns-shingles-spec-sheet-resgn467ns.pdf' }
    ]
  }

  materials.forEach((material, index) => {
    checkPageBreak(20)
    
    // Material row with border
    doc.setFillColor(index % 2 === 0 ? 250 : 255, index % 2 === 0 ? 250 : 255, index % 2 === 0 ? 250 : 255)
    doc.rect(15, yPos, pageWidth - 30, 15, 'F')
    
    doc.setDrawColor(220, 220, 220)
    doc.setLineWidth(0.1)
    doc.line(15, yPos + 15, pageWidth - 15, yPos + 15)
    
    doc.setTextColor(...primaryColor)
    doc.setFontSize(10)
    doc.setFont('helvetica', 'bold')
    doc.text(material.label, 20, yPos + 6)
    
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    doc.text(material.value, 20, yPos + 11)
    
    // Add clickable brochure links if available
    if (brochureLinks[material.label]) {
      let linkX = pageWidth - 20
      brochureLinks[material.label].forEach((link) => {
        doc.setFontSize(8)
        doc.setTextColor(...blueColor)
        const linkWidth = doc.getTextWidth(link.text)
        doc.textWithLink(link.text, linkX - linkWidth, yPos + 11, { url: link.url })
        linkX -= linkWidth + 5
      })
    }
    
    yPos += 15
  })

  yPos += 10

  // Scope of Work - Styled with numbered circles
  checkPageBreak(40 + (data.package.scopeOfWork.length * 6))
  
  doc.setTextColor(...primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('Scope of Work', 15, yPos)
  yPos += 10

  doc.setTextColor(0, 0, 0)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  
  data.package.scopeOfWork.forEach((item, index) => {
    checkPageBreak(12)
    
    // Numbered circle
    doc.setFillColor(...accentColor)
    doc.circle(22, yPos - 2, 3, 'F')
    
    doc.setTextColor(255, 255, 255)
    doc.setFontSize(8)
    doc.setFont('helvetica', 'bold')
    doc.text((index + 1).toString(), 22, yPos + 0.5, { align: 'center' })
    
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    const itemLines = doc.splitTextToSize(item, pageWidth - 55)
    doc.text(itemLines, 29, yPos)
    yPos += itemLines.length * 4.5 + 3
  })

  yPos += 10

  // Project Timeline & Colors - Styled boxes
  checkPageBreak(40)
  
  // Reuse boxWidth variable for timeline section
  boxWidth = (pageWidth - 35) / 2
  
  // Timeline box
  doc.setFillColor(254, 243, 199) // Light amber
  doc.roundedRect(15, yPos, boxWidth, 30, 3, 3, 'F')
  doc.setDrawColor(...accentColor)
  doc.setLineWidth(0.5)
  doc.roundedRect(15, yPos, boxWidth, 30, 3, 3, 'S')
  
  doc.setTextColor(...primaryColor)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Project Timeline', 20, yPos + 8)
  
  doc.setTextColor(0, 0, 0)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text(data.package.timeframe, 20, yPos + 18)
  
  doc.setFontSize(8)
  doc.setFont('helvetica', 'italic')
  doc.setTextColor(100, 100, 100)
  doc.text('Weather dependent', 20, yPos + 25)
  
  // Colors box
  doc.setFillColor(243, 232, 255) // Light purple
  doc.roundedRect(15 + boxWidth + 5, yPos, boxWidth, 30, 3, 3, 'F')
  doc.setDrawColor(147, 51, 234) // Purple border
  doc.setLineWidth(0.5)
  doc.roundedRect(15 + boxWidth + 5, yPos, boxWidth, 30, 3, 3, 'S')
  
  doc.setTextColor(...primaryColor)
  doc.setFontSize(11)
  doc.setFont('helvetica', 'bold')
  doc.text('Available Colors', 20 + boxWidth + 5, yPos + 8)
  
  doc.setTextColor(0, 0, 0)
  doc.setFontSize(9)
  doc.setFont('helvetica', 'normal')
  const colorsList = data.package.colorOptions.slice(0, 3).join(', ')
  const colorsText = doc.splitTextToSize(`${colorsList}${data.package.colorOptions.length > 3 ? ', and more...' : ''}`, boxWidth - 10)
  doc.text(colorsText, 20 + boxWidth + 5, yPos + 15)
  
  doc.setFontSize(7)
  doc.setTextColor(100, 100, 100)
  doc.setFont('helvetica', 'italic')
  doc.text('Final selection during consultation', 20 + boxWidth + 5, yPos + 26)
  
  yPos += 40

  // Interesting Facts - Styled boxes
  if (yPos + 70 > pageHeight - 20) {
    doc.addPage()
    yPos = 20
  }
  
  doc.setTextColor(...primaryColor)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('Did You Know?', 15, yPos)
  yPos += 10

  data.package.facts.forEach((fact, index) => {
    checkPageBreak(18)
    
    // Fact box
    doc.setFillColor(index % 2 === 0 ? 249 : 243, index % 2 === 0 ? 250 : 244, index % 2 === 0 ? 251 : 246)
    doc.roundedRect(15, yPos, pageWidth - 30, 15, 2, 2, 'F')
    
    doc.setTextColor(0, 0, 0)
    doc.setFontSize(9)
    doc.setFont('helvetica', 'normal')
    
    // Lightbulb emoji
    doc.setTextColor(...accentColor)
    doc.text('•', 20, yPos + 5)
    
    doc.setTextColor(0, 0, 0)
    const factLines = doc.splitTextToSize(fact, pageWidth - 50)
    doc.text(factLines, 25, yPos + 5)
    yPos += 17
  })

  // Footer on last page - Styled and prominent
  const pageCount = (doc as any).getNumberOfPages()
  doc.setPage(pageCount)
  
  yPos = pageHeight - 70

  // What Happens Next Section - Styled Box
  doc.setFillColor(255, 255, 255) // White background
  doc.roundedRect(15, yPos, pageWidth - 30, 60, 3, 3, 'F')
  
  // Add border
  doc.setDrawColor(...primaryColor)
  doc.setLineWidth(0.5)
  doc.roundedRect(15, yPos, pageWidth - 30, 60, 3, 3, 'S')
  
  // Title with accent background
  doc.setFillColor(...accentColor)
  doc.roundedRect(15, yPos, pageWidth - 30, 12, 3, 3, 'F')
  
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(14)
  doc.setFont('helvetica', 'bold')
  doc.text('What Happens Next?', pageWidth / 2, yPos + 8, { align: 'center' })
  
  // Steps with icons (circles with numbers)
  const stepY = yPos + 20
  const stepSpacing = (pageWidth - 30) / 3
  const startX = 15
  
  // Step 1
  let stepX = startX + stepSpacing / 2
  doc.setFillColor(...primaryColor)
  doc.circle(stepX, stepY, 4, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text('1', stepX, stepY + 1, { align: 'center' })
  
  doc.setTextColor(...primaryColor)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text('Check Your Email', stepX, stepY + 8, { align: 'center' })
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(80, 80, 80)
  const step1Text = doc.splitTextToSize('Your PDF estimate arrives within minutes', stepSpacing - 10)
  doc.text(step1Text, stepX, stepY + 14, { align: 'center' })
  
  // Step 2
  stepX = startX + stepSpacing * 1.5
  doc.setFillColor(...accentColor)
  doc.circle(stepX, stepY, 4, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text('2', stepX, stepY + 1, { align: 'center' })
  
  doc.setTextColor(...accentColor)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text("We'll Contact You", stepX, stepY + 8, { align: 'center' })
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(80, 80, 80)
  const step2Text = doc.splitTextToSize('Our team reaches out within 24 hours', stepSpacing - 10)
  doc.text(step2Text, stepX, stepY + 14, { align: 'center' })
  
  // Step 3
  stepX = startX + stepSpacing * 2.5
  doc.setFillColor(...primaryColor)
  doc.circle(stepX, stepY, 4, 'F')
  doc.setTextColor(255, 255, 255)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text('3', stepX, stepY + 1, { align: 'center' })
  
  doc.setTextColor(...primaryColor)
  doc.setFontSize(10)
  doc.setFont('helvetica', 'bold')
  doc.text('Free Inspection', stepX, stepY + 8, { align: 'center' })
  doc.setFontSize(8)
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(80, 80, 80)
  const step3Text = doc.splitTextToSize('On-site visit to finalize details', stepSpacing - 10)
  doc.text(step3Text, stepX, stepY + 14, { align: 'center' })
  
  // Contact info bar at bottom
  const contactY = yPos + 48
  doc.setFillColor(...lightGray)
  doc.rect(15, contactY, pageWidth - 30, 12, 'F')
  
  doc.setFontSize(9)
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...primaryColor)
  doc.text('Questions? Call us:', pageWidth / 2 - 35, contactY + 5.5)
  
  doc.setFont('helvetica', 'bold')
  doc.setTextColor(...accentColor)
  doc.textWithLink('(512) 763-5277', pageWidth / 2 - 5, contactY + 5.5, { url: 'tel:+15127635277' })
  
  doc.setFont('helvetica', 'normal')
  doc.setTextColor(100, 100, 100)
  doc.text('|', pageWidth / 2 + 19, contactY + 5.5, { align: 'center' })
  
  doc.setTextColor(...primaryColor)
  doc.textWithLink('estimates@rippleroofs.com', pageWidth / 2 + 23, contactY + 5.5, { url: 'mailto:estimates@rippleroofs.com' })
  
  doc.setFontSize(7)
  doc.setTextColor(120, 120, 120)
  doc.text('Mon-Sat: 8am-6pm', pageWidth / 2, contactY + 9, { align: 'center' })

  // Page numbers
  for (let i = 1; i <= pageCount; i++) {
    doc.setPage(i)
    doc.setFontSize(8)
    doc.setTextColor(150, 150, 150)
    doc.text(`Page ${i} of ${pageCount}`, pageWidth - 15, pageHeight - 10, { align: 'right' })
  }

  return doc.output('blob')
}
