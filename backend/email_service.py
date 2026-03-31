import os
import asyncio
import logging
import resend
from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Configure Resend
resend.api_key = os.environ.get('RESEND_API_KEY')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL')

logger = logging.getLogger(__name__)

async def send_demo_request_notification(demo_data: dict):
    """Send email notification when a demo request is submitted"""
    
    html_content = f"""
    <!DOCTYPE html>
    <html>
    <head>
        <style>
            body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
            .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
            .header {{ background: linear-gradient(135deg, #2563EB 0%, #1d4ed8 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }}
            .content {{ background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }}
            .info-row {{ margin: 15px 0; padding: 12px; background: white; border-left: 4px solid #2563EB; }}
            .label {{ font-weight: bold; color: #1f2937; }}
            .value {{ color: #4b5563; margin-top: 5px; }}
            .footer {{ text-align: center; margin-top: 20px; color: #6b7280; font-size: 14px; }}
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1 style="margin: 0;">🎯 New Demo Request</h1>
                <p style="margin: 10px 0 0 0; opacity: 0.9;">Corvus MFG Landing Page</p>
            </div>
            <div class="content">
                <p style="font-size: 16px; color: #1f2937;">You have a new {demo_data.get('request_type', 'demo')} request!</p>
                
                <div class="info-row">
                    <div class="label">👤 Name</div>
                    <div class="value">{demo_data.get('name')}</div>
                </div>
                
                <div class="info-row">
                    <div class="label">📧 Email</div>
                    <div class="value">{demo_data.get('email')}</div>
                </div>
                
                <div class="info-row">
                    <div class="label">🏢 Company</div>
                    <div class="value">{demo_data.get('company')}</div>
                </div>
                
                <div class="info-row">
                    <div class="label">📝 Request Type</div>
                    <div class="value">{demo_data.get('request_type', 'demo').title()}</div>
                </div>
                
                <div class="info-row">
                    <div class="label">⏰ Timestamp</div>
                    <div class="value">{demo_data.get('timestamp', 'N/A')}</div>
                </div>
                
                <div style="margin-top: 30px; padding: 20px; background: #eff6ff; border-radius: 8px; text-align: center;">
                    <p style="margin: 0; color: #1e40af; font-weight: bold;">Next Steps</p>
                    <p style="margin: 10px 0 0 0; color: #3b82f6;">Reach out to them within 24 hours for best conversion rates!</p>
                </div>
            </div>
            <div class="footer">
                <p>This notification was sent from your Corvus MFG landing page.</p>
            </div>
        </div>
    </body>
    </html>
    """
    
    params = {
        "from": SENDER_EMAIL,
        "to": [ADMIN_EMAIL],
        "subject": f"New {demo_data.get('request_type', 'Demo').title()} Request from {demo_data.get('company')}",
        "html": html_content
    }
    
    try:
        # Run sync SDK in thread to keep FastAPI non-blocking
        email = await asyncio.to_thread(resend.Emails.send, params)
        logger.info(f"Email sent successfully to {ADMIN_EMAIL}, ID: {email.get('id')}")
        return {
            "status": "success",
            "email_id": email.get("id")
        }
    except Exception as e:
        logger.error(f"Failed to send email notification: {str(e)}")
        # Don't raise exception - we don't want email failures to break the API
        return {
            "status": "failed",
            "error": str(e)
        }
