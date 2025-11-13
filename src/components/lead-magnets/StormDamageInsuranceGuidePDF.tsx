'use client';

import jsPDF from 'jspdf';
import 'jspdf-autotable';

export function generateStormDamageInsuranceGuidePDF() {
  const doc = new jsPDF();
  
  // Header
  doc.setFillColor(220, 38, 38); // Red for emergency
  doc.rect(0, 0, 220, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text("Central Texas Storm Damage", 105, 16, { align: 'center' });
  doc.text("Insurance Claims Guide", 105, 26, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('Your Step-by-Step Action Plan for Maximum Recovery', 105, 35, { align: 'center' });
  
  // Reset colors
  doc.setTextColor(0, 0, 0);
  
  let yPos = 50;
  
  // Critical First Steps
  doc.setFillColor(220, 38, 38);
  doc.rect(15, yPos - 5, 180, 8, 'F');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('FIRST 24 HOURS: CRITICAL ACTIONS', 20, yPos);
  yPos += 12;
  
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  const first24Hours = [
    '1. SAFETY FIRST - Do not go on your roof if damaged',
    '2. Document the storm:',
    '   • Time and date',
    '   • Weather conditions (hail size, wind speed if known)',
    '   • Take photos/video of storm itself if safe',
    '3. Prevent further damage:',
    '   • Cover any interior leaks with buckets/tarps',
    '   • Move valuables away from leaks',
    '   • Take photos of interior damage',
    '4. Do NOT make permanent repairs yet',
    '   • Temporary protection is OK',
    '   • Permanent repairs may void insurance claim',
    '5. Call your insurance company:',
    '   • Report claim within 24-48 hours',
    '   • Get claim number',
    '   • Ask about their timeline',
    '6. Call a trusted local roofer for inspection:',
    '   • FREE inspection to assess damage',
    '   • Get documentation for your records',
    '   • Beware of "storm chasers" (see page 4)'
  ];
  
  first24Hours.forEach(item => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    const lines = doc.splitTextToSize(item, 170);
    doc.text(lines, 20, yPos);
    yPos += lines.length * 5 + 2;
  });
  
  // New page for documentation
  doc.addPage();
  yPos = 20;
  
  // Documentation Requirements
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(220, 38, 38);
  doc.text('What to Document (CRITICAL)', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  doc.text('The more documentation you have, the stronger your claim. Create a "Claim Binder":', 20, yPos);
  yPos += 10;
  
  const documentation = [
    {
      category: 'Exterior Photos (Take from ground)',
      items: [
        '□ All 4 sides of house (wide shots)',
        '□ Close-ups of visible damage (shingles, flashing, gutters)',
        '□ Roof valleys and ridges',
        '□ Vents, chimneys, and skylights',
        '□ Damaged fence, siding, windows',
        '□ Debris in yard (hail, shingles, branches)'
      ]
    },
    {
      category: 'Interior Photos',
      items: [
        '□ Any water stains on ceilings/walls',
        '□ Wet insulation in attic',
        '□ Light penetrating through roof',
        '□ Damaged belongings from water',
        '□ Before/after photos if possible'
      ]
    },
    {
      category: 'Written Documentation',
      items: [
        '□ Date and time of storm',
        '□ Weather report/hail size from news',
        '□ Insurance claim number',
        '□ All communication with insurance (dates, names, summaries)',
        '□ Contractor estimates (get 2-3)',
        '□ Receipts for temporary repairs',
        '□ Home original roof cost/age if known'
      ]
    }
  ];
  
  documentation.forEach(section => {
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setFont('helvetica', 'bold');
    doc.text(section.category, 20, yPos);
    yPos += 6;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    section.items.forEach(item => {
      doc.text(item, 25, yPos);
      yPos += 5;
    });
    doc.setFontSize(10);
    yPos += 5;
  });
  
  // New page for claims process
  doc.addPage();
  yPos = 20;
  
  // 8-Step Claims Process
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(220, 38, 38);
  doc.text('8-Step Insurance Claims Process', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const claimsProcess = [
    {
      step: 'Step 1: File Claim (Day 1-2)',
      details: 'Call insurance company, provide claim info, get claim number. Texas law: they must acknowledge within 15 days.'
    },
    {
      step: 'Step 2: Get Independent Assessment (Day 1-7)',
      details: 'Have trusted local roofer inspect. They work for YOU, not insurance. Free inspection, detailed report.'
    },
    {
      step: 'Step 3: Adjuster Inspection (Day 5-14)',
      details: 'Insurance sends adjuster. Have YOUR roofer present if possible. Don\'t sign anything immediately.'
    },
    {
      step: 'Step 4: Review Adjuster Estimate (Day 10-20)',
      details: 'Compare adjuster estimate to your contractor\'s. Look for: Missing items, low square footage, outdated pricing.'
    },
    {
      step: 'Step 5: Negotiate if Needed (Day 15-30)',
      details: 'If estimates don\'t match, provide documentation. Your contractor can help. May require reinspection.'
    },
    {
      step: 'Step 6: Receive Payment (Day 20-45)',
      details: 'Initial check: ACV (Actual Cash Value minus depreciation). Final check: RCV (Recoverable depreciation after work done).'
    },
    {
      step: 'Step 7: Complete Repairs (Day 30-60)',
      details: 'Hire licensed contractor. Don\'t start until claim approved. Keep all receipts and documentation.'
    },
    {
      step: 'Step 8: Submit for Recoverable Depreciation (Day 60-75)',
      details: 'After repairs complete, submit invoice to insurance for final payment. Usually receive within 30 days.'
    }
  ];
  
  claimsProcess.forEach(item => {
    if (yPos > 250) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setFont('helvetica', 'bold');
    doc.text(item.step, 20, yPos);
    yPos += 6;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    const lines = doc.splitTextToSize(item.details, 165);
    doc.text(lines, 25, yPos);
    yPos += lines.length * 4 + 6;
    doc.setFontSize(10);
  });
  
  // New page for payment explanation
  doc.addPage();
  yPos = 20;
  
  // ACV vs RCV
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(220, 38, 38);
  doc.text('Understanding ACV vs. RCV (IMPORTANT!)', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const avcRcvInfo = [
    'Most homeowners policies have "Replacement Cost Value" (RCV) coverage, but insurance pays in 2 checks:',
    '',
    'FIRST CHECK - ACV (Actual Cash Value):',
    '• Total claim amount MINUS depreciation',
    '• Example: $16,000 roof, 15 years old = ~$8,000-$10,000 first check',
    '• Insurance keeps the "depreciation" until work is done',
    '',
    'SECOND CHECK - Recoverable Depreciation:',
    '• Paid AFTER repairs are complete',
    '• Must submit final invoice and completion certificate',
    '• Usually within 30 days of submission',
    '• Example: Remaining $6,000-$8,000',
    '',
    'CRITICAL: Never settle for ACV only! Always file for recoverable depreciation.',
    '',
    'Typical Payment Example (2,000 sf roof):',
    '• Total Approved Claim: $16,500',
    '• Your Deductible: -$2,500 (1% or 2% of home value typical)',
    '• ACV Payment (First Check): $8,000',
    '• Recoverable Depreciation (Second Check): $6,000',
    '• Your Total Recovery: $14,000'
  ];
  
  avcRcvInfo.forEach(line => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    const lines = doc.splitTextToSize(line, 170);
    doc.text(lines, 20, yPos);
    yPos += lines.length * 5 + 1;
  });
  
  // New page for storm chasers
  doc.addPage();
  yPos = 20;
  
  // Storm Chaser Warning
  doc.setFillColor(255, 230, 230);
  doc.rect(15, yPos - 5, 180, 8, 'F');
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(220, 38, 38);
  doc.text('⚠️ WARNING: Beware of Storm Chasers', 20, yPos);
  yPos += 12;
  
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  
  const stormChaserInfo = [
    'After major storms, out-of-state contractors flood the area. RED FLAGS:',
    '',
    '❌ Knocking door-to-door offering "free inspections"',
    '❌ Pressure to sign contract immediately ("today only")',
    '❌ Offer to "waive your deductible" (ILLEGAL in Texas)',
    '❌ No local address, just PO Box or out-of-state',
    '❌ Willing to "negotiate directly with your insurance"',
    '❌ Want you to sign over insurance check',
    '❌ No verifiable local references',
    '❌ Can\'t provide insurance certificate',
    '',
    'Why Storm Chasers are Dangerous:',
    '• Disappear after payment (no warranty service)',
    '• Poor workmanship (won\'t be around for call-backs)',
    '• May commit insurance fraud on your behalf',
    '• Often unlicensed/uninsured',
    '• Take your deposit and never return',
    '',
    '✓ Choose LOCAL contractors with:',
    '• 5+ years serving your area',
    '• Physical business address you can visit',
    '• Multiple local references (call them!)',
    '• Proper insurance and licensing',
    '• Good BBB rating',
    '• NOT pushy or high-pressure'
  ];
  
  stormChaserInfo.forEach(line => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    doc.text(line, 20, yPos);
    yPos += 5;
  });
  
  // New page for common denials
  doc.addPage();
  yPos = 20;
  
  // Common Claim Denials
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(220, 38, 38);
  doc.text('Common Claim Denials (And How to Fight)', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const denials = [
    {
      reason: '"Pre-existing damage"',
      counter: 'Provide photos from before storm. Compare hail patterns on roof vs. other surfaces. Your roofer can identify storm-specific damage patterns.'
    },
    {
      reason: '"Normal wear and tear"',
      counter: 'Hail damage isn\'t wear and tear. Get second opinion from experienced roofer. Request re-inspection.'
    },
    {
      reason: '"Insufficient damage to warrant replacement"',
      counter: 'Texas law: If 25%+ of any slope is damaged, full slope replacement justified. Document all damage, not just obvious spots.'
    },
    {
      reason: '"Claim filed too late"',
      counter: 'Texas: Usually 1 year to file, but some policies less. File ASAP. If you missed deadline, consult attorney - exceptions exist.'
    },
    {
      reason: '"That\'s cosmetic damage"',
      counter: 'Any functional impairment is covered. Granule loss = shorter roof life = functional. Fight this with documentation.'
    }
  ];
  
  denials.forEach(denial => {
    if (yPos > 240) {
      doc.addPage();
      yPos = 20;
    }
    
    doc.setFont('helvetica', 'bold');
    doc.text(`Denial: ${denial.reason}`, 20, yPos);
    yPos += 6;
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(9);
    doc.text('How to Counter:', 25, yPos);
    yPos += 5;
    const lines = doc.splitTextToSize(denial.counter, 160);
    doc.text(lines, 25, yPos);
    yPos += lines.length * 4 + 8;
    doc.setFontSize(10);
  });
  
  // New page for negotiation tips
  doc.addPage();
  yPos = 20;
  
  // Negotiation Tips
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(220, 38, 38);
  doc.text('Negotiation Tips for Maximum Recovery', 20, yPos);
  yPos += 10;
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(0, 0, 0);
  
  const negotiationTips = [
    '1. Never accept first offer without review',
    '   Have your contractor compare line-by-line with their estimate',
    '',
    '2. Be professional but firm',
    '   You pay premiums for this coverage. Don\'t be intimidated.',
    '',
    '3. Document everything in writing',
    '   Follow up phone calls with emails summarizing conversation',
    '',
    '4. Know your policy',
    '   Read it before filing. Know what you\'re entitled to.',
    '',
    '5. Don\'t accept "standard" or "industry practice"',
    '   YOUR policy terms matter, not their usual practices',
    '',
    '6. Request reinspection if needed',
    '   You have the right. Use it if estimates way off.',
    '',
    '7. Get your contractor involved',
    '   They deal with adjusters daily and know fair pricing',
    '',
    '8. Consider public adjuster if claim denied/lowballed',
    '   They work for you (10-15% of settlement)',
    '   Only use if insurance won\'t negotiate fairly',
    '',
    '9. Know when to hire an attorney',
    '   If claim unfairly denied, attorney may work on contingency',
    '   Usually last resort, but sometimes necessary'
  ];
  
  negotiationTips.forEach(tip => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    const lines = doc.splitTextToSize(tip, 170);
    doc.text(lines, 20, yPos);
    yPos += lines.length * 5 + 1;
  });
  
  // Final page with CTA
  doc.addPage();
  yPos = 100;
  
  doc.setFillColor(220, 38, 38);
  doc.rect(0, yPos - 10, 220, 80, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(18);
  doc.setFont('helvetica', 'bold');
  doc.text('Storm Damage? We Can Help.', 105, yPos + 5, { align: 'center' });
  
  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');
  doc.text('FREE Storm Damage Inspection', 105, yPos + 16, { align: 'center' });
  doc.text('Insurance Documentation Assistance', 105, yPos + 23, { align: 'center' });
  doc.text('Local Company - Not Storm Chasers', 105, yPos + 30, { align: 'center' });
  doc.text('500+ Claims Successfully Handled', 105, yPos + 37, { align: 'center' });
  
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Call (512) 763-5277', 105, yPos + 48, { align: 'center' });
  
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text('www.rippleroofs.com', 105, yPos + 56, { align: 'center' });
  
  doc.setFontSize(8);
  doc.setTextColor(255, 200, 200);
  doc.text('Ripple Roofing & Construction - Serving Central Texas Since 2010', 105, yPos + 65, { align: 'center' });
  
  // Save the PDF
  doc.save('Ripple-Roofing-Storm-Damage-Insurance-Guide.pdf');
}
