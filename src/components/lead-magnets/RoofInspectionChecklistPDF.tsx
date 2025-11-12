'use client';

import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function generateRoofInspectionChecklistPDF() {
  const doc = new jsPDF();
  
  // Header
  doc.setFillColor(37, 99, 235); // Blue
  doc.rect(0, 0, 220, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.setFont('helvetica', 'bold');
  doc.text("Homeowner's Roof", 105, 18, { align: 'center' });
  doc.text("Inspection Checklist", 105, 28, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Your Complete Guide to Seasonal Roof Maintenance', 105, 35, { align: 'center' });
  
  // Reset colors
  doc.setTextColor(0, 0, 0);
  
  let yPos = 50;
  
  // Introduction
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  const intro = 'Regular roof inspections can save you thousands in costly repairs. Use this checklist quarterly to catch problems early and extend your roof\'s life by 5-10 years.';
  const splitIntro = doc.splitTextToSize(intro, 170);
  doc.text(splitIntro, 20, yPos);
  yPos += 15;
  
  // When to Inspect
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text('When to Inspect Your Roof', 20, yPos);
  yPos += 8;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  const schedule = [
    '✓ Spring (March-April): After winter freezes and before storm season',
    '✓ Summer (July-August): Check for heat damage and prepare for fall',
    '✓ Fall (October-November): Before winter, after summer heat',
    '✓ After any severe storm: Hail, high winds (60+ mph), or fallen trees'
  ];
  schedule.forEach(item => {
    doc.text(item, 25, yPos);
    yPos += 6;
  });
  yPos += 5;
  
  // Ground Level Inspection
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text('Ground-Level Inspection (Safe - Start Here)', 20, yPos);
  yPos += 8;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const groundChecks = [
    { item: 'Shingle Granules in Gutters', concern: 'Excessive loss = aging shingles', action: 'Normal: Small amount. Concern: Cups full' },
    { item: 'Shingles on Ground', concern: 'Wind damage', action: 'Call roofer if more than 2-3 shingles' },
    { item: 'Curling/Cupping Shingles', concern: 'Age or poor ventilation', action: 'Visible from ground = replacement soon' },
    { item: 'Sagging Roof Lines', concern: 'Structural damage', action: 'Emergency - call immediately' },
    { item: 'Stains/Streaks on Roof', concern: 'Algae (cosmetic) or moss (concern)', action: 'Dark streaks OK, green moss = problem' },
    { item: 'Gutter Issues', concern: 'Water not draining properly', action: 'Clean or repair if sagging/detached' }
  ];
  
  groundChecks.forEach((check, index) => {
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setFont('helvetica', 'bold');
    doc.text(`${index + 1}. ${check.item}`, 25, yPos);
    yPos += 5;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(`   Why It Matters: ${check.concern}`, 25, yPos);
    yPos += 4;
    doc.text(`   What to Do: ${check.action}`, 25, yPos);
    yPos += 7;
    doc.setFontSize(10);
  });
  
  // New page for attic inspection
  doc.addPage();
  yPos = 20;
  
  // Attic Inspection
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text('Attic Inspection (Indoor - Very Important)', 20, yPos);
  yPos += 8;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  doc.text('Tip: Best done during daytime - look for light penetrating through roof', 20, yPos);
  yPos += 10;
  
  const atticChecks = [
    { item: 'Water Stains', concern: 'Active or past leaks', action: 'Brown stains = call roofer for inspection' },
    { item: 'Light Coming Through', concern: 'Holes in roof deck', action: 'Any daylight visible = immediate repair' },
    { item: 'Mold/Mildew', concern: 'Moisture problems', action: 'Black/green growth = ventilation issue' },
    { item: 'Wet Insulation', concern: 'Active leak', action: 'Damp insulation = emergency repair' },
    { item: 'Sagging Decking', concern: 'Water damage or structural', action: 'Call professional immediately' },
    { item: 'Proper Ventilation', concern: 'Heat/moisture buildup', action: 'Should feel air flow, not excessive heat' }
  ];
  
  atticChecks.forEach((check, index) => {
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setFont('helvetica', 'bold');
    doc.text(`${index + 1}. ${check.item}`, 25, yPos);
    yPos += 5;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(`   Why It Matters: ${check.concern}`, 25, yPos);
    yPos += 4;
    doc.text(`   What to Do: ${check.action}`, 25, yPos);
    yPos += 7;
    doc.setFontSize(10);
  });
  
  // New page for professional inspection
  doc.addPage();
  yPos = 20;
  
  // Professional Inspection
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text('When to Call a Professional', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const professionalSigns = [
    '□ Your roof is 15+ years old',
    '□ You found any of the issues above',
    '□ You\'re buying or selling a home',
    '□ After any hailstorm (even if you see no damage)',
    '□ Your energy bills suddenly increased',
    '□ You see interior ceiling stains or spots',
    '□ Your neighbors are replacing their roofs',
    '□ You notice missing, cracked, or curling shingles',
    '□ Flashing around chimneys/vents looks damaged'
  ];
  
  professionalSigns.forEach(sign => {
    doc.text(sign, 25, yPos);
    yPos += 7;
  });
  yPos += 5;
  
  // Photo Documentation
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text('Photo Documentation Tips', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const photoTips = [
    '1. Take overview photos from all 4 corners of your house',
    '2. Close-ups of any problem areas you identify',
    '3. Photos inside gutters (granule accumulation)',
    '4. Attic photos showing any stains or light penetration',
    '5. Date-stamp your photos (helps track changes)',
    '6. Store photos with your home maintenance records',
    '7. Compare photos quarterly to spot new issues'
  ];
  
  photoTips.forEach(tip => {
    doc.text(tip, 25, yPos);
    yPos += 7;
  });
  yPos += 10;
  
  // Maintenance Tips
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text('Simple Maintenance (Safe DIY)', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const maintenance = [
    '✓ Clean gutters twice yearly (spring and fall)',
    '✓ Trim tree branches within 6 feet of roof',
    '✓ Remove debris (leaves, branches) from roof valleys',
    '✓ Check and clean bathroom/kitchen vent exits',
    '✓ Ensure attic ventilation isn\'t blocked by insulation',
    '✓ Keep your inspection photos organized by date'
  ];
  
  maintenance.forEach(task => {
    doc.text(task, 25, yPos);
    yPos += 7;
  });
  
  // New page for reference guide
  doc.addPage();
  yPos = 20;
  
  // Texas-Specific Concerns
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text('Central Texas Climate Concerns', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const texasConcerns = [
    {
      issue: 'Hail Damage (March-June peak)',
      check: 'Circular bruises, dents in shingles, damaged granules',
      action: 'File insurance claim within 1 year, ideally within 60 days'
    },
    {
      issue: 'Heat Damage (100°F+ summers)',
      check: 'Curling, blistering, excessive granule loss',
      action: 'Ensure proper attic ventilation (should be 140°F or less)'
    },
    {
      issue: 'Algae/Moss (humidity)',
      check: 'Dark streaks (algae) or green growth (moss)',
      action: 'Algae = cosmetic. Moss = needs removal + zinc strips'
    },
    {
      issue: 'Wind Damage (storms)',
      check: 'Lifted or missing shingles, especially ridge caps',
      action: 'Can lead to water infiltration - repair promptly'
    }
  ];
  
  texasConcerns.forEach(concern => {
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setFont('helvetica', 'bold');
    doc.text(`• ${concern.issue}`, 25, yPos);
    yPos += 5;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text(`   Look For: ${concern.check}`, 25, yPos);
    yPos += 4;
    doc.text(`   Action: ${concern.action}`, 25, yPos);
    yPos += 8;
    doc.setFontSize(10);
  });
  
  yPos += 10;
  
  // Cost Estimates
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(37, 99, 235);
  doc.text('Typical Repair Costs (Central Texas)', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const costs = [
    { repair: 'Missing shingles (5-10)', cost: '$200-$400' },
    { repair: 'Small leak repair', cost: '$300-$600' },
    { repair: 'Flashing replacement', cost: '$400-$800' },
    { repair: 'Valley repair', cost: '$500-$1,000' },
    { repair: 'Decking replacement (per sheet)', cost: '$75-$150' },
    { repair: 'Full roof replacement (2,000 sf)', cost: '$11,000-$17,000' }
  ];
  
  costs.forEach(item => {
    doc.text(`${item.repair}:`, 25, yPos);
    doc.text(item.cost, 150, yPos);
    yPos += 7;
  });
  
  yPos += 10;
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text('Note: Early detection saves money. A $400 repair today prevents a $4,000+ repair later.', 20, yPos);
  
  // Footer
  doc.addPage();
  yPos = 120;
  
  doc.setFillColor(37, 99, 235);
  doc.rect(0, yPos - 10, 220, 60, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text('Need a Professional Inspection?', 105, yPos + 5, { align: 'center' });
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Ripple Roofing & Construction', 105, yPos + 15, { align: 'center' });
  doc.text('FREE 50-Point Roof Inspection', 105, yPos + 22, { align: 'center' });
  doc.text('Call: (512) 763-5277', 105, yPos + 29, { align: 'center' });
  doc.text('www.rippleroofs.com', 105, yPos + 36, { align: 'center' });
  
  doc.setFontSize(8);
  doc.setTextColor(200, 200, 200);
  doc.text('Serving Austin, Round Rock, Georgetown, Cedar Park, and Central Texas', 105, yPos + 45, { align: 'center' });
  
  return doc;
}
