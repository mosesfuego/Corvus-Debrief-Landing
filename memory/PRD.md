# Corvus MFG Landing Page - Product Requirements Document

## Original Problem Statement
Build a clean, modern landing page for a startup called "Corvus MFG" with Firebase Firestore integration. The website should clearly explain what the company does within 5 seconds, targeting manufacturing operations teams, with an enhanced sophisticated design.

## User Personas
- **Primary**: Manufacturing operations teams (production managers, QA leads, ops leaders)
- **Goal**: Understand how Corvus can help turn messy production data into clear daily decisions

## Core Requirements

### Design Principles (Enhanced)
- Sophisticated minimalist design with premium feel
- Generous whitespace and refined spacing
- Bold, impactful typography (larger headings, better hierarchy)
- Professional blue accent color (#2563EB)
- Subtle animations and micro-interactions
- Enhanced visual depth with shadows and layering
- Color-coded status indicators in sample reports
- Smooth scroll navigation

### Page Structure
1. **Hero Section**: Large impactful headline with underline accent, badge, trust indicators
2. **Problem Section**: Gray background with border-left quotation style
3. **Solution Section**: Two-column layout with benefits card
4. **How It Works**: Enhanced 3-step cards with numbered badges and arrows
5. **Output/Example Section**: Premium report display with icons and color coding
6. **Value Proposition Section**: 2x2 grid with hover effects
7. **Final CTA Section**: Blue gradient card with prominent button
8. **Navigation**: Fixed header with scroll shadow effect
9. **Footer**: Clean layout with navigation links

### Backend Integration
- **Firebase Firestore** for storing demo requests
- **FastAPI** backend with endpoints:
  - POST `/api/demo-request` - Submit demo requests
  - GET `/api/demo-requests` - List all requests (admin)
  - GET `/api/health` - Health check with Firestore status

## What's Been Implemented (December 2025)

### Frontend Components
✅ `/app/frontend/src/pages/LandingPage.jsx` - Enhanced landing page with sophisticated design
✅ `/app/frontend/src/components/DemoModal.jsx` - Modal with backend integration
✅ `/app/frontend/src/data/mock.js` - Mock data for sample reports
✅ Updated `/app/frontend/src/App.js` - Routes to landing page
✅ Updated `/app/frontend/src/App.css` - Landing page styles

### Backend Components
✅ `/app/backend/firebase_config.py` - Firebase Admin SDK initialization
✅ `/app/backend/models.py` - Pydantic models for demo requests
✅ `/app/backend/server.py` - FastAPI endpoints with Firebase integration
✅ `/app/backend/secrets/firebase-admin.json` - Service account credentials
✅ Firebase Admin SDK installed

### Design Enhancements Implemented
✅ Larger, bolder typography (4xl-7xl headings)
✅ Enhanced spacing and padding (py-32 sections)
✅ Scroll-based navigation shadow
✅ Color-coded status badges (red, amber, blue)
✅ Status icons (AlertCircle, Clock, CheckCircle)
✅ Enhanced CTA with gradient background
✅ Hover effects on cards and buttons
✅ Micro-animations (chevron arrows, button hovers)
✅ Section labels with badges
✅ Trust indicators (checkmarks, features list)
✅ Premium sample report design with shadows
✅ Refined color palette with blue accent
✅ Better visual hierarchy throughout

### Features Completed
✅ Fixed navigation header with scroll effect
✅ Hero section with underline accent and badges
✅ Problem section with border-left styling
✅ Solution section with two-column layout
✅ How It Works 3-step visualization with enhanced cards
✅ Inline sample report with color-coded statuses and icons
✅ Value proposition cards with hover effects
✅ Final CTA with gradient background
✅ Footer with navigation
✅ Demo request modal with loading states
✅ Backend API integration
✅ Firebase Firestore setup (pending API enable)
✅ Responsive design
✅ Professional enhanced blue accent design

## Technology Stack
- **Frontend**: React 19, Tailwind CSS, Shadcn UI components, Lucide icons
- **Backend**: FastAPI, Firebase Admin SDK
- **Database**: Firebase Firestore
- **Components Used**: Button, Card, Dialog, Input, Label
- **Icons**: Lucide-react (ChevronRight, AlertCircle, Clock, CheckCircle, ArrowUpRight, etc.)

## Prioritized Backlog

### P0 (Immediate - User Action Required)
- **Enable Firestore API** in Firebase Console (see /app/memory/FIREBASE_SETUP.md)
- Create Firestore database in test mode
- Test end-to-end demo request submission

### P1 (Enhancement Features)
- Add testimonials section
- Add customer logos section
- Add FAQ accordion section
- Admin dashboard to view demo requests
- Email notifications for new requests
- Analytics tracking (Google Analytics)

### P2 (Nice to Have)
- Video demo embed
- Interactive sample report builder
- Case studies page
- Blog section
- Real-time Firestore listeners on frontend

## Next Tasks
1. **URGENT**: Enable Firestore API (see FIREBASE_SETUP.md)
2. Test demo request submission after Firestore is enabled
3. Consider adding more visual elements or sections
4. Add email notifications for demo requests
5. Create admin page to view submissions

## Firebase Setup Status
- ✅ Admin SDK installed
- ✅ Service account configured
- ✅ Backend endpoints created
- ❌ Firestore API needs to be enabled (user action required)
- ⏳ Database creation pending

See `/app/memory/FIREBASE_SETUP.md` for detailed setup instructions.
