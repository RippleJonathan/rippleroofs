'use client';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export function generateMaterialComparisonChartPDF() {
  const doc = new jsPDF();
  
  // Header
  doc.setFillColor(37, 99, 235);
  doc.rect(0, 0, 220, 35, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text("Roofing Material", 105, 16, { align: 'center' });
  doc.text("Comparison Chart", 105, 26, { align: 'center' });
  
  // Reset colors
  doc.setTextColor(0, 0, 0);
  
  let yPos = 45;
  
  // Introduction
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const intro = 'Choosing the right roofing material for Central Texas is critical. This guide compares all major options to help you make an informed decision based on your budget, home style, and long-term goals.';
  const splitIntro = doc.splitTextToSize(intro, 170);
  doc.text(splitIntro, 20, yPos);
  yPos += 18;
  
  // Quick Comparison Table
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text('Quick Comparison Overview', 20, yPos);
  yPos += 8;
  
  const quickComparisonData = [
    ['Material', 'Cost/SF', 'Lifespan', 'Best For', 'Rating'],
    ['3-Tab Shingles', '$5.50-7.50', '15-20 yrs', 'Budget/Rental', '⭐⭐'],
    ['Architectural', '$7.50-11', '25-30 yrs', 'Most Homes', '⭐⭐⭐⭐'],
    ['Impact-Resistant', '$8.50-12.50', '30-40 yrs', 'Hail Areas', '⭐⭐⭐⭐⭐'],
    ['Designer', '$11-17', '40-50 yrs', 'Premium', '⭐⭐⭐⭐⭐'],
    ['Metal Standing', '$12-20', '50-70 yrs', 'Long-term', '⭐⭐⭐⭐⭐'],
    ['Concrete Tile', '$13-18', '50+ yrs', 'Spanish/Med', '⭐⭐⭐⭐'],
    ['Clay Tile', '$18-30', '75-100 yrs', 'Luxury', '⭐⭐⭐⭐⭐']
  ];
  
  (doc as any).autoTable({
    startY: yPos,
    head: [quickComparisonData[0]],
    body: quickComparisonData.slice(1),
    theme: 'grid',
    styles: { fontSize: 8, cellPadding: 2 },
    headStyles: { fillColor: [37, 99, 235], textColor: 255 },
    columnStyles: {
      0: { cellWidth: 40 },
      1: { cellWidth: 25 },
      2: { cellWidth: 25 },
      3: { cellWidth: 35 },
      4: { cellWidth: 25 }
    }
  });
  
  yPos = (doc as any).lastAutoTable.finalY + 15;
  
  // Detailed Comparison by Category
  doc.addPage();
  yPos = 20;
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text('Detailed Material Analysis', 20, yPos);
  yPos += 10;
  
  // 3-Tab Shingles
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('1. 3-Tab Asphalt Shingles (Budget Option)', 20, yPos);
  yPos += 6;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  
  const threeTap = [
    ['Cost', '$5.50-$7.50 per sq ft'],
    ['Lifespan', '15-20 years in Central Texas'],
    ['Weight', 'Light (200-240 lbs per square)'],
    ['Wind Rating', '60-70 mph'],
    ['Hail Resistance', 'Poor (no impact rating)'],
    ['Energy Efficiency', 'Moderate'],
    ['Pros', '• Lowest upfront cost\n• Easy installation\n• Wide color selection\n• Adequate for rentals'],
    ['Cons', '• Shortest lifespan\n• Lower wind resistance\n• Thin (easily damaged)\n• Poor hail protection'],
    ['Best For', 'Budget-conscious, rental properties, short-term ownership'],
    ['Not Ideal For', 'Long-term homes, hail-prone areas, premium properties']
  ];
  
  (doc as any).autoTable({
    startY: yPos,
    body: threeTap,
    theme: 'plain',
    styles: { fontSize: 9, cellPadding: 2 },
    columnStyles: {
      0: { cellWidth: 40, fontStyle: 'bold' },
      1: { cellWidth: 135 }
    }
  });
  
  yPos = (doc as any).lastAutoTable.finalY + 8;
  
  // Architectural Shingles
  doc.addPage();
  yPos = 20;
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('2. Architectural Shingles (Most Popular)', 20, yPos);
  yPos += 6;
  
  const architectural = [
    ['Cost', '$7.50-$11.00 per sq ft'],
    ['Lifespan', '25-30 years in Central Texas'],
    ['Weight', 'Medium (300-350 lbs per square)'],
    ['Wind Rating', '110-130 mph'],
    ['Hail Resistance', 'Moderate (not impact-rated)'],
    ['Energy Efficiency', 'Good (reflective options available)'],
    ['Warranty', '25-30 years limited, 10-year algae'],
    ['Pros', '• Best value for money\n• 2-3x thicker than 3-tab\n• Dimensional appearance\n• Good wind resistance\n• Wide color/style selection'],
    ['Cons', '• More expensive than 3-tab\n• Not hail-resistant\n• Requires proper ventilation\n• Can still be damaged by branches'],
    ['Best For', 'Most Central Texas homeowners, standard residential'],
    ['Popular Brands', 'CertainTeed Landmark, Owens Corning Duration, GAF Timberline HDZ']
  ];
  
  (doc as any).autoTable({
    startY: yPos,
    body: architectural,
    theme: 'plain',
    styles: { fontSize: 9, cellPadding: 2 },
    columnStyles: {
      0: { cellWidth: 40, fontStyle: 'bold' },
      1: { cellWidth: 135 }
    }
  });
  
  // Impact-Resistant Shingles
  doc.addPage();
  yPos = 20;
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('3. Impact-Resistant Shingles (Highly Recommended)', 20, yPos);
  yPos += 6;
  
  const impactResistant = [
    ['Cost', '$8.50-$12.50 per sq ft'],
    ['Lifespan', '30-40 years in Central Texas'],
    ['Weight', 'Medium-Heavy (350-400 lbs per square)'],
    ['Wind Rating', '130 mph'],
    ['Hail Resistance', 'Excellent (Class 4 UL 2218)'],
    ['Energy Efficiency', 'Good to Excellent'],
    ['Insurance Discount', '10-35% annual premium reduction'],
    ['Warranty', '30-50 years limited, lifetime algae'],
    ['Pros', '• Best hail protection available\n• Insurance discounts (pays for itself)\n• Longer lifespan\n• Better wind resistance\n• SBS-modified asphalt (more flexible)'],
    ['Cons', '• Higher upfront cost ($2,000-3,000 more)\n• Heavier (may need structural check)\n• Slightly fewer color options'],
    ['Best For', 'All Central Texas homes (hail common), long-term investment'],
    ['ROI Analysis', '$3,000 extra cost ÷ $350/year insurance savings = 8.5 year payback'],
    ['Popular Brands', 'CertainTeed NorthGate, GAF Timberline HDZ, Owens Corning Duration Flex']
  ];
  
  (doc as any).autoTable({
    startY: yPos,
    body: impactResistant,
    theme: 'plain',
    styles: { fontSize: 9, cellPadding: 2 },
    columnStyles: {
      0: { cellWidth: 40, fontStyle: 'bold' },
      1: { cellWidth: 135 }
    }
  });
  
  // Metal Roofing
  doc.addPage();
  yPos = 20;
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('4. Standing Seam Metal Roofing (Premium)', 20, yPos);
  yPos += 6;
  
  const metal = [
    ['Cost', '$12-$20 per sq ft'],
    ['Lifespan', '50-70+ years'],
    ['Weight', 'Light (100-150 lbs per square)'],
    ['Wind Rating', '140+ mph'],
    ['Hail Resistance', 'Excellent (dent-resistant coatings)'],
    ['Energy Efficiency', 'Excellent (reflects 70% of sun heat)'],
    ['Fire Rating', 'Class A (best)'],
    ['Warranty', '30-50 years paint, 20-30 years panel'],
    ['Pros', '• Longest lifespan (last roof you buy)\n• Best energy efficiency ($30-50/mo savings)\n• Lowest maintenance\n• Environmentally friendly (recyclable)\n• Modern aesthetic\n• Solar-panel friendly'],
    ['Cons', '• Highest upfront cost\n• Louder in heavy rain (can be mitigated)\n• Expansion/contraction noise possible\n• Finding qualified installers\n• May not suit all home styles'],
    ['Best For', 'Long-term homeowners, modern homes, energy-conscious, hot climates'],
    ['ROI Analysis', 'Energy savings + never replacing = excellent long-term value'],
    ['Popular Types', 'Galvalume, Aluminum, Steel with Kynar finish']
  ];
  
  (doc as any).autoTable({
    startY: yPos,
    body: metal,
    theme: 'plain',
    styles: { fontSize: 9, cellPadding: 2 },
    columnStyles: {
      0: { cellWidth: 40, fontStyle: 'bold' },
      1: { cellWidth: 135 }
    }
  });
  
  // Tile Roofing
  doc.addPage();
  yPos = 20;
  
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('5. Concrete & Clay Tile (Mediterranean/Spanish)', 20, yPos);
  yPos += 6;
  
  const tile = [
    ['Cost', 'Concrete: $13-18/sf, Clay: $18-30/sf'],
    ['Lifespan', 'Concrete: 50+ years, Clay: 75-100+ years'],
    ['Weight', 'Very Heavy (900-1,200 lbs per square)'],
    ['Wind Rating', '110-150 mph (when properly installed)'],
    ['Hail Resistance', 'Good to Excellent'],
    ['Energy Efficiency', 'Excellent (thermal mass + air gap)'],
    ['Fire Rating', 'Class A'],
    ['Warranty', '30-50 years'],
    ['Pros', '• Extremely long lifespan\n• Distinctive appearance\n• Excellent energy efficiency\n• Fire resistant\n• Low maintenance\n• Increases home value'],
    ['Cons', '• Most expensive option\n• Very heavy (structural reinforcement needed)\n• More complex installation\n• Individual tile replacement if cracked\n• Limited qualified installers'],
    ['Best For', 'Mediterranean/Spanish style homes, premium properties, hot climates'],
    ['Structural Note', 'MUST verify roof structure can support weight (inspection required)'],
    ['Popular Styles', 'S-tile (barrel), Flat profile, Mission tile']
  ];
  
  (doc as any).autoTable({
    startY: yPos,
    body: tile,
    theme: 'plain',
    styles: { fontSize: 9, cellPadding: 2 },
    columnStyles: {
      0: { cellWidth: 40, fontStyle: 'bold' },
      1: { cellWidth: 135 }
    }
  });
  
  // Cost vs Lifespan Chart
  doc.addPage();
  yPos = 20;
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text('Cost vs. Lifespan Analysis', 20, yPos);
  yPos += 8;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text('Total cost of ownership over 50 years (2,000 sq ft home):', 20, yPos);
  yPos += 8;
  
  const lifespanData = [
    ['Material', 'Initial Cost', 'Replacements (50y)', 'Total Cost', 'Cost/Year'],
    ['3-Tab', '$11,000', '2.5 times', '$27,500', '$550'],
    ['Architectural', '$16,000', '1.7 times', '$27,200', '$544'],
    ['Impact-Resistant', '$19,000', '1.25 times', '$23,750', '$475'],
    ['Metal', '$32,000', '0 times', '$32,000', '$640*'],
    ['Concrete Tile', '$30,000', '0 times', '$30,000', '$600*'],
    ['Clay Tile', '$42,000', '0 times', '$42,000', '$840*']
  ];
  
  (doc as any).autoTable({
    startY: yPos,
    head: [lifespanData[0]],
    body: lifespanData.slice(1),
    theme: 'grid',
    styles: { fontSize: 8, cellPadding: 2 },
    headStyles: { fillColor: [37, 99, 235], textColor: 255 }
  });
  
  yPos = (doc as any).lastAutoTable.finalY + 5;
  doc.setFontSize(7);
  doc.setTextColor(100, 100, 100);
  doc.text('* Metal and Tile last 50+ years, so cost/year continues to decrease over time', 20, yPos);
  
  // Climate Suitability
  doc.addPage();
  yPos = 20;
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text('Central Texas Climate Suitability', 20, yPos);
  yPos += 10;
  
  const climateData = [
    ['Material', 'Heat (100°F+)', 'Hail', 'Wind', 'Overall Rating'],
    ['3-Tab', 'Fair', 'Poor', 'Fair', '⭐⭐'],
    ['Architectural', 'Good', 'Fair', 'Good', '⭐⭐⭐⭐'],
    ['Impact-Resistant', 'Good', 'Excellent', 'Excellent', '⭐⭐⭐⭐⭐'],
    ['Metal', 'Excellent', 'Excellent', 'Excellent', '⭐⭐⭐⭐⭐'],
    ['Concrete Tile', 'Excellent', 'Good', 'Good', '⭐⭐⭐⭐'],
    ['Clay Tile', 'Excellent', 'Good', 'Good', '⭐⭐⭐⭐⭐']
  ];
  
  (doc as any).autoTable({
    startY: yPos,
    head: [climateData[0]],
    body: climateData.slice(1),
    theme: 'striped',
    styles: { fontSize: 9, cellPadding: 3 },
    headStyles: { fillColor: [37, 99, 235], textColor: 255 }
  });
  
  yPos = (doc as any).lastAutoTable.finalY + 15;
  
  // Decision Guide
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text('Which Material Should YOU Choose?', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const decisionGuide = [
    'Choose 3-TAB SHINGLES if:',
    '• Budget is extremely tight (under $10,000)',
    '• Home is rental property or short-term ownership',
    '• You understand you\'ll replace sooner',
    '',
    'Choose ARCHITECTURAL SHINGLES if:',
    '• You want good value for money',
    '• Budget is $12,000-$18,000',
    '• Low/moderate hail risk area',
    '• Standard residential home',
    '',
    'Choose IMPACT-RESISTANT SHINGLES if:',
    '• You live in Central Texas (hail common)',
    '• Want insurance discounts',
    '• Long-term homeowner',
    '• Budget allows extra $2,000-3,000',
    '• Best overall value in hail-prone areas',
    '',
    'Choose METAL ROOFING if:',
    '• This is your forever home',
    '• Want lowest lifetime cost',
    '• Energy efficiency is priority',
    '• Modern/contemporary home style',
    '• Budget $25,000-$40,000',
    '',
    'Choose TILE ROOFING if:',
    '• Mediterranean/Spanish style home',
    '• Premium property',
    '• Want distinctive appearance',
    '• Roof structure can support weight',
    '• Budget $30,000-$50,000+'
  ];
  
  decisionGuide.forEach(line => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    
    if (line.startsWith('Choose')) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(10);
    } else {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(9);
    }
    
    doc.text(line, 20, yPos);
    yPos += line === '' ? 3 : 5;
  });
  
  // Final CTA
  doc.addPage();
  yPos = 100;
  
  doc.setFillColor(37, 99, 235);
  doc.rect(0, yPos - 10, 220, 80, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Still Not Sure? We Can Help!', 105, yPos + 5, { align: 'center' });
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('FREE Material Consultation', 105, yPos + 16, { align: 'center' });
  doc.text('See actual samples at our showroom', 105, yPos + 23, { align: 'center' });
  doc.text('Get personalized recommendation', 105, yPos + 30, { align: 'center' });
  doc.text('Detailed estimate with all options', 105, yPos + 37, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Call (512) 763-5277', 105, yPos + 48, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('www.rippleroofs.com/estimate', 105, yPos + 56, { align: 'center' });
  
  doc.setFontSize(8);
  doc.setTextColor(200, 220, 255);
  doc.text('Ripple Roofing & Construction - CertainTeed Shingle Master Certified', 105, yPos + 65, { align: 'center' });
  
  // Save the PDF
  doc.save('Ripple-Roofing-Material-Comparison-Chart.pdf');
}
