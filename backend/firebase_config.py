import firebase_admin
from firebase_admin import credentials, firestore
import os
from pathlib import Path

# Initialize Firebase Admin SDK
ROOT_DIR = Path(__file__).parent
FIREBASE_CREDS_PATH = ROOT_DIR / 'secrets' / 'firebase-admin.json'

# Initialize app only once
if not firebase_admin._apps:
    cred = credentials.Certificate(str(FIREBASE_CREDS_PATH))
    firebase_app = firebase_admin.initialize_app(cred, {
        'projectId': 'corvus-debrief',
    })
    print("Firebase Admin SDK initialized successfully")

# Get Firestore client
db = firestore.client()

# Helper functions for demo requests
async def save_demo_request(data: dict) -> dict:
    """Save a demo request to Firestore"""
    try:
        # Create a new document with auto-generated ID
        doc_ref = db.collection('demo_requests').document()
        
        # Add timestamp
        from datetime import datetime
        data['timestamp'] = datetime.utcnow()
        data['status'] = 'pending'
        
        # Save to Firestore
        doc_ref.set(data)
        
        return {
            'id': doc_ref.id,
            'success': True,
            'message': 'Demo request saved successfully',
            'data': data
        }
    except Exception as e:
        print(f"Error saving demo request: {str(e)}")
        raise Exception(f"Failed to save demo request: {str(e)}")

async def get_demo_requests():
    """Get all demo requests"""
    try:
        docs = db.collection('demo_requests').order_by('timestamp', direction=firestore.Query.DESCENDING).limit(100).stream()
        requests = []
        for doc in docs:
            data = doc.to_dict()
            data['id'] = doc.id
            # Convert timestamp to string for JSON serialization
            if 'timestamp' in data:
                data['timestamp'] = data['timestamp'].isoformat() if hasattr(data['timestamp'], 'isoformat') else str(data['timestamp'])
            requests.append(data)
        return requests
    except Exception as e:
        print(f"Error fetching demo requests: {str(e)}")
        raise Exception(f"Failed to fetch demo requests: {str(e)}")

async def update_demo_request_status(request_id: str, new_status: str) -> dict:
    """Update the status of a demo request"""
    try:
        doc_ref = db.collection('demo_requests').document(request_id)
        doc_ref.update({
            'status': new_status,
            'updated_at': firestore.SERVER_TIMESTAMP
        })
        return {
            'success': True,
            'message': f'Status updated to {new_status}'
        }
    except Exception as e:
        print(f"Error updating demo request: {str(e)}")
        raise Exception(f"Failed to update demo request: {str(e)}")

async def delete_demo_request(request_id: str) -> dict:
    """Delete a demo request"""
    try:
        doc_ref = db.collection('demo_requests').document(request_id)
        doc_ref.delete()
        return {
            'success': True,
            'message': 'Demo request deleted successfully'
        }
    except Exception as e:
        print(f"Error deleting demo request: {str(e)}")
        raise Exception(f"Failed to delete demo request: {str(e)}")
