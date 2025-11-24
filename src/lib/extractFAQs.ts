/**
 * Extract FAQ data from MDX content for structured data markup
 * Parses Q&A patterns commonly used in blog posts
 */

export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Extract FAQs from markdown content
 * Supports multiple Q&A patterns:
 * - **Q: Question?** followed by A: Answer
 * - **Question:** followed by answer text
 * - Q: Question followed by answer paragraph
 */
export function extractFAQs(content: string): FAQItem[] {
  const faqs: FAQItem[] = [];
  
  // Pattern 1: **Q: Question?** \n\n A: Answer
  const pattern1 = /\*\*Q:\s*([^*]+?)\*\*\s*\n\s*A:\s*([^*\n]+(?:\n(?!\*\*Q:)[^\n]+)*)/gi;
  let match;
  
  while ((match = pattern1.exec(content)) !== null) {
    const question = cleanText(match[1]);
    const answer = cleanText(match[2]);
    
    if (question && answer) {
      faqs.push({ question, answer });
    }
  }
  
  // If no FAQs found with pattern 1, try pattern 2: **Question:** answer
  if (faqs.length === 0) {
    const pattern2 = /\*\*([^*]+\?)\*\*\s*\n\s*([^*\n]+(?:\n(?!\*\*)[^\n]+)*)/gi;
    
    while ((match = pattern2.exec(content)) !== null) {
      const question = cleanText(match[1]);
      const answer = cleanText(match[2]);
      
      if (question && answer && question.includes('?')) {
        faqs.push({ question, answer });
      }
    }
  }
  
  return faqs;
}

/**
 * Clean text by removing markdown formatting and extra whitespace
 */
function cleanText(text: string): string {
  return text
    .replace(/\*\*/g, '') // Remove bold
    .replace(/\*/g, '') // Remove italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Remove links but keep text
    .replace(/`([^`]+)`/g, '$1') // Remove code formatting
    .replace(/\n+/g, ' ') // Replace newlines with spaces
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
}

/**
 * Check if content has FAQ section
 */
export function hasFAQs(content: string): boolean {
  return /\*\*Q:/i.test(content) || 
         /##\s*Frequently Asked Questions/i.test(content) ||
         /##\s*FAQ/i.test(content);
}
