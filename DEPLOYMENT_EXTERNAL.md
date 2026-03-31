# 🚀 Quick Deployment Guide - External Platforms

## ✅ Your App Is Ready!

All features working:
- ✅ Landing page with Corvus branding
- ✅ Admin dashboard at `/admin`
- ✅ Firebase Firestore (6 demo requests stored)
- ✅ Email notifications to mosesmakangila1@gmail.com
- ✅ All environment variables configured
- ✅ Code on GitHub

---

## 🎯 RECOMMENDED: Vercel + Railway (Easiest)

### Total Time: ~20 minutes

---

## 📦 STEP 1: Deploy Backend to Railway

### 1.1 Sign Up & Connect
```bash
1. Go to https://railway.app
2. Click "Start a New Project"
3. Choose "Deploy from GitHub repo"
4. Select: mosesfuego/Corvus-Debrief-Landing
```

### 1.2 Configure Backend Service
```yaml
Root Directory: backend
Build Command: pip install -r requirements.txt
Start Command: uvicorn server:app --host 0.0.0.0 --port $PORT
```

### 1.3 Add Environment Variables in Railway
```bash
RESEND_API_KEY=re_658u3kfD_A2NzyyDZPZMG14GvXF6iMNdQ
ADMIN_EMAIL=mosesmakangila1@gmail.com
SENDER_EMAIL=onboarding@resend.dev
CORS_ORIGINS=*
FIREBASE_PROJECT_ID=corvus-debrief
```

### 1.4 Add Firebase Credentials
**Option A: Upload File (Easier)**
1. In Railway dashboard, go to Settings
2. Upload `firebase-admin.json` as a secret file

**Option B: Environment Variable**
```bash
# Copy the entire JSON content from firebase-admin.json
FIREBASE_CREDENTIALS='{"type":"service_account","project_id":"corvus-debrief",...}'
```

### 1.5 Deploy & Get URL
```bash
1. Click "Deploy"
2. Wait 2-3 minutes
3. Copy your backend URL (e.g., https://your-app.railway.app)
```

---

## 🌐 STEP 2: Deploy Frontend to Vercel

### 2.1 Install Vercel CLI
```bash
npm install -g vercel
```

### 2.2 Deploy Frontend
```bash
cd /app/frontend
vercel --prod
```

### 2.3 Configure During Deployment
```
? Set up and deploy? Yes
? Which scope? Your account
? Link to existing project? No
? What's your project's name? corvus-mfg-landing
? In which directory is your code located? ./
? Want to override settings? Yes
? Build Command? yarn build
? Output Directory? build
? Development Command? yarn start
```

### 2.4 Add Environment Variable
```bash
# In Vercel dashboard or during deployment:
REACT_APP_BACKEND_URL=https://your-backend.railway.app
```

### 2.5 Redeploy with Backend URL
```bash
vercel --prod
```

---

## ✅ STEP 3: Verify Deployment

### Test Your Live Site
```bash
1. Visit your Vercel URL (e.g., https://corvus-mfg-landing.vercel.app)
2. Submit a demo request
3. Check your email (mosesmakangila1@gmail.com)
4. Visit /admin to see the request
```

### Health Check
```bash
curl https://your-backend.railway.app/api/health
# Should return: {"status":"healthy","firebase":"connected","firestore":"operational"}
```

---

## 🎨 STEP 4: Add Custom Domain (Optional)

### Vercel (Frontend)
```bash
1. Go to Vercel Dashboard → Settings → Domains
2. Add your domain (e.g., corvusmfg.com)
3. Update DNS records as shown
4. Wait for verification (5-10 minutes)
```

### Railway (Backend)
```bash
1. Go to Railway Dashboard → Settings → Domains
2. Add custom domain (e.g., api.corvusmfg.com)
3. Update DNS records
4. Update REACT_APP_BACKEND_URL in Vercel to new domain
```

---

## 🔐 Production Checklist

After deployment:
- [ ] Test demo form submission
- [ ] Verify email notifications arrive
- [ ] Check admin dashboard works
- [ ] Test all status updates in admin
- [ ] Update CORS_ORIGINS to your domains (optional)
- [ ] Add authentication to admin dashboard (recommended)
- [ ] Set up monitoring (Railway has built-in monitoring)
- [ ] Configure custom domain (optional)

---

## 🆘 Troubleshooting

### Frontend can't connect to backend
```bash
✓ Check REACT_APP_BACKEND_URL is correct
✓ Verify CORS_ORIGINS includes your frontend domain
✓ Check backend is deployed and running
```

### Email notifications not working
```bash
✓ Verify RESEND_API_KEY is correct
✓ Check Railway logs for errors
✓ Verify sender email in Resend dashboard
```

### Firebase connection failed
```bash
✓ Check FIREBASE_CREDENTIALS or firebase-admin.json uploaded
✓ Verify FIREBASE_PROJECT_ID matches your project
✓ Check Railway logs for specific Firebase errors
```

---

## 📊 Monitoring

### Railway Dashboard
- View logs: Click on your service → Logs tab
- Check metrics: CPU, Memory, Network usage
- Environment variables: Settings tab

### Vercel Dashboard  
- View deployments: Deployments tab
- Check analytics: Analytics tab
- Domain settings: Settings → Domains

---

## 💰 Costs

**Railway:**
- Free tier: $5 credit/month (enough for MVP)
- Paid: ~$5-20/month depending on usage

**Vercel:**
- Free tier: Unlimited personal projects
- Paid: $20/month for team features (not needed for MVP)

**Firebase Firestore:**
- Free tier: 50,000 reads/20,000 writes per day
- Paid: Pay-as-you-go (very affordable for startup)

**Resend:**
- Free tier: 3,000 emails/month
- Paid: $20/month for 50,000 emails

**Total for MVP: $0-10/month** 🎉

---

## 🎉 You're Live!

Your Corvus MFG landing page is now deployed and accessible worldwide!

**Next Steps:**
1. Share your live URL with customers
2. Monitor demo requests in admin dashboard
3. Respond to leads within 24 hours
4. Consider adding Google Analytics
5. Set up uptime monitoring

---

**Need Help?**
- Railway Support: https://railway.app/help
- Vercel Support: https://vercel.com/support
- GitHub Issues: https://github.com/mosesfuego/Corvus-Debrief-Landing/issues
