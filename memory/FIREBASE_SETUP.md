# Firebase Firestore Setup Instructions

## Current Status
✅ Firebase Admin SDK installed and configured
✅ Backend endpoints created for demo requests
✅ Frontend integrated with backend
❌ **Firestore API needs to be enabled**

## Required Action: Enable Firestore

### Step 1: Enable Firestore API
1. Visit: https://console.developers.google.com/apis/api/firestore.googleapis.com/overview?project=corvus-debrief
2. Click "Enable" button
3. Wait 2-3 minutes for the API to activate

### Step 2: Create Firestore Database
1. Go to Firebase Console: https://console.firebase.google.com/project/corvus-debrief/firestore
2. Click "Create Database"
3. Select "Start in test mode" (for development)
4. Choose a location (us-central recommended)
5. Click "Enable"

### Step 3: Test the Integration
Once enabled, the backend will automatically start saving demo requests to Firestore.

## What's Already Working
- Firebase Admin SDK is properly initialized
- Backend has health check endpoint: `/api/health`
- Demo request endpoint: `/api/demo-request`
- Admin endpoint to view requests: `/api/demo-requests`
- Frontend form submits to backend successfully

## Optional: Get Web App Config (for future features)
If you want to add real-time features or client-side Firebase:
1. Go to Firebase Console > Project Settings
2. Under "Your apps", click the web icon (</>)  
3. Register your app and copy the config values
4. Add to `/app/frontend/.env`:
   ```
   REACT_APP_FIREBASE_API_KEY=your-api-key
   REACT_APP_FIREBASE_AUTH_DOMAIN=corvus-debrief.firebaseapp.com
   REACT_APP_FIREBASE_PROJECT_ID=corvus-debrief
   REACT_APP_FIREBASE_STORAGE_BUCKET=corvus-debrief.appspot.com
   ```

## Testing the Backend
After enabling Firestore, you can test with:
```bash
curl -X POST https://ops-dashboard-133.preview.emergentagent.com/api/demo-request \
  -H "Content-Type: application/json" \
  -d '{"name": "Test User", "email": "test@example.com", "company": "Test Corp", "request_type": "demo"}'
```

## View Demo Requests
Access: https://ops-dashboard-133.preview.emergentagent.com/api/demo-requests
