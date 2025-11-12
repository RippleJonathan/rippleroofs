'use client';

import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function generateSeasonalMaintenanceCalendarPDF() {
  const doc = new jsPDF();
  
  // Header
  doc.setFillColor(34, 197, 94); // Green for maintenance/growth
  doc.rect(0, 0, 220, 35, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text("Seasonal Roof Maintenance", 105, 16, { align: 'center' });
  doc.text("Calendar for Central Texas", 105, 26, { align: 'center' });
  
  // Reset colors
  doc.setTextColor(0, 0, 0);
  
  let yPos = 45;
  
  // Introduction
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  const intro = 'Regular maintenance extends your roof life by 5-10 years and prevents costly repairs. Follow this Central Texas-specific calendar to keep your roof in peak condition year-round.';
  const splitIntro = doc.splitTextToSize(intro, 170);
  doc.text(splitIntro, 20, yPos);
  yPos += 15;
  
  // Annual Overview
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 197, 94);
  doc.text('Your Year at a Glance', 20, yPos);
  yPos += 8;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const yearOverview = [
    '🌸 SPRING (March-May): Post-storm inspection, prepare for summer heat',
    '☀️ SUMMER (June-August): Heat damage check, ventilation assessment',
    '🍂 FALL (October-November): Pre-winter prep, gutter cleaning, tree trimming',
    '❄️ WINTER (December-February): Ideal time for replacement, light maintenance'
  ];
  
  yearOverview.forEach(item => {
    doc.text(item, 20, yPos);
    yPos += 6;
  });
  
  // SPRING SECTION
  doc.addPage();
  yPos = 20;
  
  doc.setFillColor(255, 182, 193);
  doc.rect(15, yPos - 5, 180, 10, 'F');
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('🌸 SPRING (March-May)', 20, yPos + 3);
  yPos += 15;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Spring is prime hail season in Central Texas. This is your most important inspection period.', 20, yPos);
  yPos += 10;
  
  // March tasks
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 197, 94);
  doc.text('MARCH - Storm Season Begins', 20, yPos);
  yPos += 7;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const marchTasks = [
    '□ Inspect for winter freeze damage (cracked shingles, lifted flashing)',
    '□ Check attic for any leaks or moisture from winter',
    '□ Clean gutters of winter debris',
    '□ Trim tree branches within 6 feet of roof',
    '□ Check and clear all roof vents',
    '□ Inspect flashing around chimneys and vents',
    '□ After ANY hailstorm: Full damage assessment immediately',
    '',
    'Time Required: 2-3 hours | DIY or Professional',
    'Cost if Hiring: $200-400 for cleaning/inspection'
  ];
  
  marchTasks.forEach(task => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    doc.text(task, 25, yPos);
    yPos += task === '' ? 3 : 5;
  });
  
  yPos += 5;
  
  // April tasks
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 197, 94);
  doc.text('APRIL - Peak Hail Season', 20, yPos);
  yPos += 7;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const aprilTasks = [
    '□ Weekly: Check for storm damage if hail/high winds',
    '□ Document any storm events with photos',
    '□ Look for granule loss in gutters (sign of hail impact)',
    '□ Inspect shingles for bruising or circular marks',
    '□ Check roof valleys for debris accumulation',
    '□ Test attic ventilation (should not feel excessively hot)',
    '□ If damage found: Call insurance and local roofer immediately',
    '',
    'Time Required: 30 min weekly checks',
    'Critical: Don\'t wait to file insurance claims - 60 day window ideal'
  ];
  
  aprilTasks.forEach(task => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    doc.text(task, 25, yPos);
    yPos += task === '' ? 3 : 5;
  });
  
  yPos += 5;
  
  // May tasks
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 197, 94);
  doc.text('MAY - Prepare for Summer Heat', 20, yPos);
  yPos += 7;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const mayTasks = [
    '□ Final spring inspection before summer',
    '□ Verify all previous storm damage was repaired',
    '□ Check attic insulation levels (R-38 to R-49 recommended)',
    '□ Ensure ridge vents are clear and functional',
    '□ Look for any curling/lifting shingles',
    '□ Clean all gutters and downspouts',
    '□ Apply zinc or copper strips if algae is present',
    '□ Schedule professional inspection if roof is 15+ years old',
    '',
    'Time Required: 2-3 hours',
    'Spring Maintenance Total Cost: $0-600 (DIY to professional)'
  ];
  
  mayTasks.forEach(task => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    doc.text(task, 25, yPos);
    yPos += task === '' ? 3 : 5;
  });
  
  // SUMMER SECTION
  doc.addPage();
  yPos = 20;
  
  doc.setFillColor(255, 215, 0);
  doc.rect(15, yPos - 5, 180, 10, 'F');
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('☀️ SUMMER (June-August)', 20, yPos + 3);
  yPos += 15;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Extreme heat stresses roofs. Focus on ventilation and heat-related damage prevention.', 20, yPos);
  yPos += 10;
  
  // June tasks
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 197, 94);
  doc.text('JUNE - Early Summer Check', 20, yPos);
  yPos += 7;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const juneTasks = [
    '□ Check attic temperature (should be <140°F with proper ventilation)',
    '□ Inspect for heat-related shingle damage (curling, blistering)',
    '□ Verify attic vents are not blocked',
    '□ Look for signs of inadequate ventilation (excessive heat, odors)',
    '□ Monitor energy bills (sudden increase may indicate roof issues)',
    '□ Clean debris from roof surface (traps heat)',
    '',
    'Time Required: 1 hour',
    'Key Focus: Ventilation is critical in Texas heat'
  ];
  
  juneTasks.forEach(task => {
    doc.text(task, 25, yPos);
    yPos += task === '' ? 3 : 5;
  });
  
  yPos += 5;
  
  // July-August tasks
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 197, 94);
  doc.text('JULY-AUGUST - Minimal Activity (Too Hot!)', 20, yPos);
  yPos += 7;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const julyAugTasks = [
    '□ Avoid walking on roof during extreme heat (150°F+ surface temps)',
    '□ From ground: Check for obvious damage or issues',
    '□ Monitor for leaks after summer storms',
    '□ Keep gutters clear (summer storms can be intense)',
    '□ If replacement needed: Wait for fall (better pricing, conditions)',
    '',
    'Time Required: Minimal ground-level checks only',
    'Safety Note: Do NOT get on roof when temperatures exceed 95°F',
    '',
    'Summer Maintenance Total Cost: $0-200 (mostly observation)'
  ];
  
  julyAugTasks.forEach(task => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    doc.text(task, 25, yPos);
    yPos += task === '' ? 3 : 5;
  });
  
  // FALL SECTION
  doc.addPage();
  yPos = 20;
  
  doc.setFillColor(255, 140, 0);
  doc.rect(15, yPos - 5, 180, 10, 'F');
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('🍂 FALL (October-November)', 20, yPos + 3);
  yPos += 15;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Fall is BEST time for roof work in Texas. Ideal weather for maintenance and replacement.', 20, yPos);
  yPos += 10;
  
  // October tasks
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 197, 94);
  doc.text('OCTOBER - Major Maintenance Month', 20, yPos);
  yPos += 7;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const octoberTasks = [
    '□ Comprehensive roof inspection (all areas)',
    '□ Clean ALL gutters and downspouts thoroughly',
    '□ Trim all tree branches (falling leaves heavy on gutters)',
    '□ Check and repair any loose or damaged shingles',
    '□ Inspect and repair flashing',
    '□ Clear all roof valleys of debris',
    '□ Check attic for any moisture, mold, or pest issues',
    '□ Inspect chimney and repair mortar if needed',
    '□ If replacement needed: Schedule now (best pricing)',
    '',
    'Time Required: 3-4 hours or hire professional',
    'Cost if Hiring: $300-500 for complete fall service',
    'This is your MOST IMPORTANT maintenance month'
  ];
  
  octoberTasks.forEach(task => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    doc.text(task, 25, yPos);
    yPos += task === '' ? 3 : 5;
  });
  
  yPos += 5;
  
  // November tasks
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 197, 94);
  doc.text('NOVEMBER - Pre-Winter Final Check', 20, yPos);
  yPos += 7;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const novemberTasks = [
    '□ Final gutter cleaning after leaves fall',
    '□ Verify all repairs from October completed',
    '□ Check weather stripping around roof penetrations',
    '□ Inspect for any animal/pest entry points',
    '□ Clean final debris from roof surface',
    '□ Document roof condition with photos (good records)',
    '',
    'Time Required: 1-2 hours',
    'Fall Maintenance Total Cost: $300-700 (most intensive season)'
  ];
  
  novemberTasks.forEach(task => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    doc.text(task, 25, yPos);
    yPos += task === '' ? 3 : 5;
  });
  
  // WINTER SECTION
  doc.addPage();
  yPos = 20;
  
  doc.setFillColor(173, 216, 230);
  doc.rect(15, yPos - 5, 180, 10, 'F');
  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(0, 0, 0);
  doc.text('❄️ WINTER (December-February)', 20, yPos + 3);
  yPos += 15;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Mild Texas winters = BEST time for roof replacement. Light maintenance otherwise.', 20, yPos);
  yPos += 10;
  
  // Winter tasks
  doc.setFontSize(11);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 197, 94);
  doc.text('DECEMBER-FEBRUARY - Light Maintenance', 20, yPos);
  yPos += 7;
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const winterTasks = [
    '□ Monthly: Check for visible damage from ground',
    '□ After any freeze: Inspect for ice damage',
    '□ Monitor for leaks during winter rains',
    '□ Keep gutters clear of winter debris',
    '□ If replacement needed: BOOK NOW (10-20% savings + better availability)',
    '□ Perfect time for professional inspection and planning',
    '',
    'Time Required: Minimal (30 min monthly checks)',
    'Cost: $0 (observation only)',
    '',
    'REPLACEMENT TIMING:',
    '• Winter = lowest prices, best contractor availability',
    '• 50-65°F days perfect for shingle installation',
    '• Complete before spring storm season',
    '• Save $2,000-4,000 vs peak season',
    '',
    'Winter Maintenance Total Cost: $0-200'
  ];
  
  winterTasks.forEach(task => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    doc.text(task, 25, yPos);
    yPos += task === '' ? 3 : 5;
  });
  
  // Cost-Saving Tips
  doc.addPage();
  yPos = 20;
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(34, 197, 94);
  doc.text('Cost-Saving Maintenance Tips', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const costSavingTips = [
    '1. Clean your own gutters: Saves $150-300 annually',
    '   DIY with ladder safety or gutter scoop. Twice yearly minimum.',
    '',
    '2. Trim trees yourself: Saves $200-400 annually',
    '   Only branches you can reach safely. Hire pros for tall/dangerous.',
    '',
    '3. Do visual inspections: Saves $200-300 per inspection',
    '   You can spot obvious issues. Call pro for detailed assessment.',
    '',
    '4. Address small issues immediately: Saves $1,000s',
    '   $300 repair now prevents $3,000+ repair later.',
    '',
    '5. Keep photo records: Helps insurance claims',
    '   Prove storm damage vs. wear and tear. Take photos quarterly.',
    '',
    '6. Schedule work in off-season: Saves 10-20%',
    '   Winter roof replacement typically $2,000-4,000 cheaper.',
    '',
    '7. Bundle services: Saves 10-15%',
    '   Roof + gutter + siding work together = better pricing.',
    '',
    '8. Maintain good ventilation: Saves on energy & extends life',
    '   Proper ventilation adds 3-5 years to roof life = $4,000-8,000 value.',
    '',
    'Total Annual Maintenance Investment: $500-1,200',
    'Value Protected: $15,000-30,000 (avoiding premature replacement)',
    'ROI: 15-60x return on investment!'
  ];
  
  costSavingTips.forEach(tip => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    const lines = doc.splitTextToSize(tip, 170);
    doc.text(lines, 20, yPos);
    yPos += lines.length * 5 + 1;
  });
  
  // Red Flags
  doc.addPage();
  yPos = 20;
  
  doc.setFillColor(255, 230, 230);
  doc.rect(15, yPos - 5, 180, 8, 'F');
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(220, 38, 38);
  doc.text('⚠️ Call Professional Immediately If You See:', 20, yPos);
  yPos += 12;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const redFlags = [
    '• Sagging roof deck or roof line',
    '• Interior water stains or active leaks',
    '• Large sections of missing shingles (5+ in one area)',
    '• Daylight visible through roof in attic',
    '• Granules covering 50%+ of gutter bottoms',
    '• Widespread shingle curling, cracking, or loss',
    '• After ANY hailstorm with golf-ball size or larger',
    '• Moss growth (not just algae stains)',
    '• Damaged or missing flashing',
    '• Your roof is 20+ years old'
  ];
  
  redFlags.forEach(flag => {
    doc.text(flag, 25, yPos);
    yPos += 6;
  });
  
  yPos += 10;
  
  doc.setFontSize(9);
  doc.setTextColor(100, 100, 100);
  doc.text('These issues require professional assessment and likely indicate need for significant repair or replacement.', 20, yPos);
  
  // Final CTA
  doc.addPage();
  yPos = 100;
  
  doc.setFillColor(34, 197, 94);
  doc.rect(0, yPos - 10, 220, 80, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Need Help with Maintenance?', 105, yPos + 5, { align: 'center' });
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('Professional Maintenance Programs Available', 105, yPos + 16, { align: 'center' });
  doc.text('Semi-Annual Inspections: $150-300/year', 105, yPos + 23, { align: 'center' });
  doc.text('Full Service Plan: $400-600/year', 105, yPos + 30, { align: 'center' });
  doc.text('Includes: Inspections, Cleaning, Minor Repairs', 105, yPos + 37, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Call (512) 763-5277', 105, yPos + 48, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('www.rippleroofs.com', 105, yPos + 56, { align: 'center' });
  
  doc.setFontSize(8);
  doc.setTextColor(200, 255, 200);
  doc.text('Serving Central Texas with Professional Roof Care Since 2010', 105, yPos + 65, { align: 'center' });
  
  return doc;
}
