# Corvus MFG Landing Page - Product Requirements Document

## Original Problem Statement
Build a clean, modern landing page for a startup called "Corvus MFG" following YC-style minimalist design principles. The website should clearly explain what the company does within 5 seconds, targeting manufacturing operations teams.

## User Personas
- **Primary**: Manufacturing operations teams (production managers, QA leads, ops leaders)
- **Goal**: Understand how Corvus can help turn messy production data into clear daily decisions

## Core Requirements

### Design Principles
- Minimalist, YC-style startup website
- Lots of whitespace
- Clean sans-serif font
- Subtle colors (white, black, light gray, blue accent)
- Professional and technical, but simple
- No clutter, no heavy animations

### Page Structure
1. **Hero Section**: Main headline, subheadline, 2 CTA buttons
2. **Problem Section**: Explain manufacturing pain points
3. **Solution Section**: Explain Corvus value proposition
4. **How It Works**: 3-step process visualization
5. **Output/Example Section**: Inline sample report display
6. **Value Proposition Section**: 4 key benefits
7. **Final CTA Section**: Call to action
8. **Navigation**: Smooth scroll to sections (Product, How it works, Contact)
9. **Footer**: Basic company info and navigation links

### Functionality
- Smooth scroll navigation
- Demo request modal with simple form (name, email, company)
- Sample report modal (same form structure)
- Inline sample report display with color-coded status indicators

## What's Been Implemented (December 2025)

### Frontend Components
✅ `/app/frontend/src/pages/LandingPage.jsx` - Main landing page
✅ `/app/frontend/src/components/DemoModal.jsx` - Modal for demo/report requests
✅ `/app/frontend/src/data/mock.js` - Mock data for sample reports
✅ Updated `/app/frontend/src/App.js` - Routes to landing page
✅ Updated `/app/frontend/src/App.css` - Landing page styles

### Features Completed
✅ Fixed navigation header with smooth scroll
✅ Hero section with clear value proposition
✅ Problem section explaining pain points
✅ Solution section explaining Corvus
✅ How It Works 3-step visualization with blue accent
✅ Inline sample report display with color-coded statuses (red/yellow/blue)
✅ Value proposition cards with hover effects
✅ Final CTA section
✅ Footer with navigation
✅ Demo request modal (frontend only with mock submission)
✅ Responsive design
✅ Professional blue accent color scheme

## Technology Stack
- **Frontend**: React, Tailwind CSS, Shadcn UI components
- **Components Used**: Button, Card, Dialog, Input, Label
- **Icons**: Lucide-react
- **Current State**: Frontend only with mock data

## Prioritized Backlog

### P0 (Future Backend Integration)
- Backend API for demo request submissions
- Email notification system for demo requests
- Database storage for leads
- Analytics tracking

### P1 (Enhancement Features)
- Add testimonials section
- Add customer logos section
- Add FAQ section
- Enhanced animations and micro-interactions

### P2 (Nice to Have)
- Video demo embed
- Interactive sample report builder
- Case studies page
- Blog section

## Next Tasks
1. User to review the landing page design and provide feedback
2. Consider adding testimonials or customer logos (if available)
3. Backend development for demo request handling (when ready)
4. Add analytics tracking (Google Analytics, etc.)
