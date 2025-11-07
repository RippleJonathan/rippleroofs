# Blog Auto-Posting Setup Guide

This guide will walk you through setting up automatic social media posting when you publish new blog posts on your Ripple Roofing website.

## Overview

When you publish a new blog post, it will automatically:
- Post to Facebook Business Page
- Post to Google Business Profile
- Share on LinkedIn (optional)
- Share on Twitter/X (optional)
- Send to email subscribers (optional)

## RSS Feed

Your blog automatically generates an RSS feed at:
```
https://rippleroofs.com/blog/rss.xml
```

This feed updates whenever you add a new blog post and includes:
- Post title and description
- Publication date
- Featured image
- Author information
- Categories and tags
- Direct link to full article

## Option 1: Zapier Setup (Recommended)

### Prerequisites
- Zapier account (starts at $20/month for multi-step zaps)
- Admin access to your Facebook Page
- Admin access to your Google Business Profile
- Your website RSS feed URL

### Step 1: Create Facebook Zap

1. **Log into Zapier** at zapier.com
2. **Click "Create Zap"**
3. **Set up Trigger:**
   - App: RSS by Zapier
   - Event: "New Item in Feed"
   - RSS Feed URL: `https://rippleroofs.com/blog/rss.xml`
   - Test: Zapier will fetch your latest blog post

4. **Set up Action:**
   - App: Facebook Pages
   - Event: "Create Page Post"
   - Connect your Facebook account
   - Select your business page
   - Customize the post:
     ```
     New Blog Post! {{title}}
     
     {{description}}
     
     Read the full article: {{link}}
     
     #RoofingTips #CentralTexas #HomeImprovement
     ```
   - Image: Use {{image}} from the RSS feed

5. **Test & Turn On**

### Step 2: Create Google Business Profile Zap

1. **Create a new Zap**
2. **Trigger: Same RSS setup** as above
3. **Action:**
   - App: Google My Business (requires Zapier premium)
   - Event: "Create Post"
   - Connect your Google account
   - Select your business location
   - Customize:
     ```
     {{title}}
     
     {{description}}
     
     Learn more: {{link}}
     ```
   - Add image from RSS feed

4. **Test & Turn On**

### Step 3: Additional Platform Zaps (Optional)

**LinkedIn:**
- Similar setup to Facebook
- Post to company page or personal profile
- Professional tone in caption

**Twitter/X:**
- Character limit: Keep under 280 characters
- Use relevant hashtags
- Include featured image

**Instagram Business:**
- Requires Facebook connection
- Image required (from RSS feed)
- First comment can include full description

## Option 2: Make.com (Cheaper Alternative)

Make.com offers similar functionality at $9/month

### Basic Setup:

1. **Create Scenario**
2. **Add RSS Module:**
   - Watch RSS Feed
   - URL: Your RSS feed
   - Limit: 1 (check for newest post only)

3. **Add Router** (to post to multiple platforms)

4. **Add Social Media Modules:**
   - Facebook: Create a Post
   - Google My Business: Create Post
   - Twitter: Create Tweet

5. **Map RSS fields** to each platform
6. **Set schedule** (check every 15-60 minutes)
7. **Activate scenario**

## Option 3: Manual Posting (Free)

If you prefer manual control:

1. **Write your blog post** in MDX format
2. **Publish on your website**
3. **Copy the URL**
4. **Post manually** to each platform with:
   - Title as headline
   - Description excerpt
   - Featured image
   - Link to full article

## Creating Blog Posts

### File Location
Place MDX files in: `content/blog/`

### File Naming
Use descriptive, SEO-friendly slugs:
- `5-signs-roof-replacement-texas.mdx`
- `texas-storm-season-preparation.mdx`
- `certainteed-vs-gaf-shingles.mdx`

### Required Frontmatter

```yaml
---
title: "Your Blog Post Title"
description: "A compelling meta description for SEO and social sharing"
date: "2024-11-07"
author: "Ripple Roofing Team"
category: "Roof Maintenance"
image: "/images/blog/your-image.jpg"
tags: ["Tag 1", "Tag 2", "Tag 3"]
---
```

### Content Best Practices

1. **Use Headers** (##, ###) for structure
2. **Include Images** throughout the post
3. **Add Links** to relevant service pages
4. **Include CTAs** for contact/quotes
5. **Optimize Length**: 1,000-2,000 words ideal
6. **Add Value**: Answer real questions

### Example Post Structure

```markdown
---
(frontmatter here)
---

## Introduction
Hook readers with the problem/question

## Main Point 1
Detailed explanation with subheadings

### Subpoint
Supporting details

## Main Point 2
More valuable content

## Call to Action
Link to contact page or quote form

---
*Related: [Link to other resources]*
```

## Social Media Best Practices

### Facebook
- **Timing**: Post between 9 AM - 3 PM weekdays
- **Tone**: Friendly, informative, helpful
- **Include**: Eye-catching image, clear CTA
- **Hashtags**: 2-3 relevant tags

### Google Business Profile
- **Timing**: Business hours for best visibility
- **Length**: Keep concise (1,500 characters max)
- **Include**: Clear value proposition, CTA
- **Frequency**: 2-4 posts per week ideal

### LinkedIn
- **Timing**: Tuesday-Thursday, 7-9 AM or 5-6 PM
- **Tone**: Professional, industry insights
- **Include**: Statistics, expertise signals
- **Hashtags**: Professional industry tags

### Instagram
- **Timing**: 11 AM - 2 PM weekdays
- **Visual**: High-quality featured image required
- **Caption**: First line must hook viewers
- **Hashtags**: 10-15 relevant tags

## Monitoring & Analytics

Track performance in:
- **Zapier Dashboard**: See successful posts
- **Facebook Insights**: Engagement metrics
- **Google Analytics**: Traffic from social
- **Google Business Profile**: Views and actions

## Troubleshooting

### Zap Not Triggering
- Verify RSS feed is accessible
- Check that new content was published
- Review Zap history for errors
- Ensure connected accounts are active

### Posts Not Formatting Correctly
- Check RSS feed structure
- Verify image URLs are absolute (not relative)
- Test with Zapier's formatter if needed
- Adjust character limits per platform

### Authentication Issues
- Reconnect social media accounts
- Verify admin permissions
- Check API access hasn't been revoked

## Content Calendar Suggestions

### Weekly Topics
- **Monday**: Maintenance tips
- **Wednesday**: Industry news/updates
- **Friday**: Customer stories/testimonials

### Monthly Themes
- **Spring**: Storm preparation
- **Summer**: Heat/energy efficiency
- **Fall**: Pre-winter checklist
- **Winter**: Emergency services/ice dams

### Quarterly Focus
- Q1: Storm season prep
- Q2: Insurance and claims
- Q3: Material comparisons
- Q4: Year-end maintenance

## Support

Need help with blog setup or social media automation?

- **Email**: info@rippleroofs.com
- **Phone**: (512) 763-5277
- **Documentation**: This file!

---

## Quick Start Checklist

- [ ] Choose automation platform (Zapier/Make/Manual)
- [ ] Create account and connect RSS feed
- [ ] Connect Facebook Business Page
- [ ] Connect Google Business Profile
- [ ] Set up LinkedIn (optional)
- [ ] Set up Twitter (optional)
- [ ] Test with existing blog post
- [ ] Write and publish first new post
- [ ] Verify auto-posting works
- [ ] Monitor engagement and adjust

---

**Ready to dominate local SEO and social media? Start publishing valuable content today!**
