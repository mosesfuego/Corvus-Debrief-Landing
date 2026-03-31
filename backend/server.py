from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
from pathlib import Path
from models import DemoRequest, DemoRequestResponse
from firebase_config import save_demo_request, get_demo_requests, db

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Corvus MFG API - Firebase Connected"}

@api_router.post("/demo-request", response_model=DemoRequestResponse)
async def create_demo_request(request: DemoRequest):
    """Submit a demo request"""
    try:
        result = await save_demo_request(request.dict())
        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/demo-requests")
async def list_demo_requests():
    """Get all demo requests (admin endpoint)"""
    try:
        requests = await get_demo_requests()
        return {"success": True, "data": requests, "count": len(requests)}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@api_router.get("/health")
async def health_check():
    """Health check endpoint with Firebase connection test"""
    try:
        # Test Firestore connection
        test_ref = db.collection('_health_check').document('test')
        test_ref.set({'status': 'ok', 'timestamp': 'test'})
        test_ref.delete()
        
        return {
            "status": "healthy",
            "firebase": "connected",
            "firestore": "operational"
        }
    except Exception as e:
        return {
            "status": "unhealthy",
            "error": str(e)
        }

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

# No shutdown needed for Firebase Admin SDK