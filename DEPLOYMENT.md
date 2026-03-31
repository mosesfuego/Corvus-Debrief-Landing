# 🚀 Deployment Guide

Complete guide for deploying Corvus MFG Landing Page to production.

## 📋 Pre-Deployment Checklist

- [ ] Firebase Firestore enabled and configured
- [ ] Resend API key obtained
- [ ] Environment variables prepared
- [ ] Firebase service account key downloaded
- [ ] Domain/hosting platform selected

---

## 🌐 Deployment Options

### Option 1: Vercel (Recommended for Frontend)

#### Frontend Deployment

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy Frontend**
   ```bash
   cd frontend
   vercel --prod
   ```

3. **Configure Environment Variables**
   - Go to Vercel Dashboard → Project Settings → Environment Variables
   - Add: `REACT_APP_BACKEND_URL` = Your backend URL

4. **Custom Domain** (Optional)
   - Vercel Dashboard → Domains
   - Add your custom domain
   - Update DNS records

#### Backend Deployment (Vercel Serverless)

1. **Create `vercel.json` in backend/**
   ```json
   {
     "builds": [
       {
         "src": "server.py",
         "use": "@vercel/python"
       }
     ],
     "routes": [
       {
         "src": "/(.*)",
         "dest": "server.py"
       }
     ]
   }
   ```

2. **Deploy**
   ```bash
   cd backend
   vercel --prod
   ```

3. **Add Environment Variables** in Vercel Dashboard
   - `RESEND_API_KEY`
   - `ADMIN_EMAIL`
   - `SENDER_EMAIL`
   - `CORS_ORIGINS`

4. **Add Firebase Credentials**
   - Upload `firebase-admin.json` as a secret file
   - Or add as base64 encoded environment variable

---

### Option 2: Railway (Full-Stack)

#### Deploy Backend

1. **Create New Project**
   - Go to [Railway.app](https://railway.app)
   - Click "New Project" → "Deploy from GitHub repo"
   - Select your repository

2. **Configure Backend Service**
   - Root Directory: `backend`
   - Build Command: `pip install -r requirements.txt`
   - Start Command: `uvicorn server:app --host 0.0.0.0 --port $PORT`

3. **Add Environment Variables**
   ```
   RESEND_API_KEY=your_key
   ADMIN_EMAIL=your_email
   SENDER_EMAIL=onboarding@resend.dev
   CORS_ORIGINS=*
   ```

4. **Add Firebase Credentials**
   - Upload `firebase-admin.json` via Railway CLI
   - Or add as base64 environment variable

#### Deploy Frontend

1. **Create Another Service**
   - Same project, new service
   - Root Directory: `frontend`
   - Build Command: `yarn build`
   - Start Command: `yarn start`

2. **Add Environment Variable**
   ```
   REACT_APP_BACKEND_URL=https://your-backend.railway.app
   ```

---

### Option 3: AWS (Production-Grade)

#### Frontend (S3 + CloudFront)

1. **Build Frontend**
   ```bash
   cd frontend
   yarn build
   ```

2. **Create S3 Bucket**
   ```bash
   aws s3 mb s3://corvus-mfg-landing
   ```

3. **Upload Build**
   ```bash
   aws s3 sync build/ s3://corvus-mfg-landing
   ```

4. **Configure CloudFront**
   - Create distribution pointing to S3 bucket
   - Enable HTTPS
   - Add custom domain (optional)

#### Backend (ECS Fargate)

1. **Create Dockerfile**
   ```dockerfile
   FROM python:3.11-slim
   WORKDIR /app
   COPY . .
   RUN pip install -r requirements.txt
   EXPOSE 8001
   CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001"]
   ```

2. **Build and Push to ECR**
   ```bash
   docker build -t corvus-backend .
   aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin your-account.dkr.ecr.us-east-1.amazonaws.com
   docker tag corvus-backend:latest your-account.dkr.ecr.us-east-1.amazonaws.com/corvus-backend:latest
   docker push your-account.dkr.ecr.us-east-1.amazonaws.com/corvus-backend:latest
   ```

3. **Create ECS Service**
   - Use AWS Console or CLI
   - Configure environment variables
   - Add Load Balancer

---

### Option 4: Google Cloud Platform

#### Frontend (Cloud Storage + CDN)

1. **Build and Deploy**
   ```bash
   cd frontend
   yarn build
   gsutil -m rsync -r build/ gs://corvus-landing
   ```

2. **Enable CDN**
   ```bash
   gcloud compute backend-buckets create corvus-landing-bucket --gcs-bucket-name=corvus-landing
   ```

#### Backend (Cloud Run)

1. **Create Dockerfile** (same as AWS)

2. **Build and Deploy**
   ```bash
   gcloud builds submit --tag gcr.io/your-project/corvus-backend
   gcloud run deploy corvus-backend --image gcr.io/your-project/corvus-backend --platform managed
   ```

3. **Set Environment Variables**
   ```bash
   gcloud run services update corvus-backend \
     --set-env-vars RESEND_API_KEY=your_key,ADMIN_EMAIL=your_email
   ```

---

## 🔐 Security Configuration

### Firestore Security Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Demo requests - public write, admin read
    match /demo_requests/{request} {
      allow read: if request.auth != null; // Add admin auth
      allow create: if request.resource.data.keys().hasAll(['name', 'email', 'company']);
      allow update, delete: if request.auth != null; // Add admin auth
    }
  }
}
```

### CORS Configuration

For production, update `CORS_ORIGINS` in `.env`:
```
CORS_ORIGINS=https://corvusmfg.com,https://www.corvusmfg.com
```

### Environment Variables Checklist

**Backend:**
- [ ] `RESEND_API_KEY` - Email service
- [ ] `ADMIN_EMAIL` - Notification recipient
- [ ] `SENDER_EMAIL` - Email sender
- [ ] `CORS_ORIGINS` - Allowed origins
- [ ] Firebase credentials file

**Frontend:**
- [ ] `REACT_APP_BACKEND_URL` - Backend API URL

---

## 📧 Email Domain Configuration

### Custom Sender Domain (Optional)

1. **Add Domain in Resend**
   - Go to Resend Dashboard → Domains
   - Click "Add Domain"
   - Enter your domain (e.g., `corvusmfg.com`)

2. **Verify DNS Records**
   - Add provided DNS records to your domain
   - Wait for verification (usually 5-10 minutes)

3. **Update Environment Variable**
   ```
   SENDER_EMAIL=hello@corvusmfg.com
   ```

---

## 🔄 CI/CD Pipeline

Your GitHub Actions workflow automatically:
- ✅ Lints frontend and backend code
- ✅ Builds frontend
- ✅ Runs security scans
- ✅ Ready to add deployment steps

### Add Deployment to Workflow

Edit `.github/workflows/ci-cd.yml`:

```yaml
deploy:
  name: Deploy to Production
  needs: [frontend, backend]
  runs-on: ubuntu-latest
  if: github.ref == 'refs/heads/main'
  
  steps:
    - name: Deploy Frontend to Vercel
      run: |
        cd frontend
        vercel --prod --token=${{ secrets.VERCEL_TOKEN }}
        
    - name: Deploy Backend
      run: |
        # Add your deployment commands
```

### Required GitHub Secrets

Add these in: Settings → Secrets and variables → Actions

- `VERCEL_TOKEN` - For Vercel deployment
- `AWS_ACCESS_KEY_ID` - For AWS deployment
- `GCP_SA_KEY` - For GCP deployment
- `RESEND_API_KEY` - For testing

---

## 🎯 Post-Deployment

### 1. Test Everything

- [ ] Visit landing page
- [ ] Submit demo request
- [ ] Check email received
- [ ] Access admin dashboard
- [ ] Update request status
- [ ] Check Firestore data

### 2. Monitor

- [ ] Set up error tracking (Sentry, LogRocket)
- [ ] Configure uptime monitoring
- [ ] Set up analytics (Google Analytics, Plausible)

### 3. Performance

- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Optimize images if needed
- [ ] Enable CDN caching

---

## 🆘 Troubleshooting

### Common Issues

**Frontend can't connect to backend:**
- Check `REACT_APP_BACKEND_URL` is correct
- Verify CORS is configured
- Check backend is running

**Email notifications not working:**
- Verify `RESEND_API_KEY` is correct
- Check sender email is verified in Resend
- Check backend logs for errors

**Firestore connection failed:**
- Verify Firebase credentials file exists
- Check Firestore API is enabled
- Verify project ID matches

**Admin dashboard not updating:**
- Hard refresh browser (Ctrl+Shift+R)
- Check browser console for errors
- Verify API endpoints are accessible

---

## 📞 Support

- **Email**: mosesmakangila1@gmail.com
- **GitHub Issues**: [Create an issue](https://github.com/mosesfuego/Corvus-Debrief-Landing/issues)
- **Documentation**: See README.md

---

## 🎉 You're Ready!

Your Corvus MFG landing page is ready for production deployment. Choose your preferred platform and follow the steps above. Good luck! 🚀
