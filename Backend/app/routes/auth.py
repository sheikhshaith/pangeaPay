# app/routes/auth.py
from flask import Blueprint, request, jsonify
import random
import requests
from datetime import datetime, timedelta

auth = Blueprint('auth', __name__)

# Store OTPs temporarily (in production, use Redis or database)
otp_store = {}

def send_sms(phone_number, message):
    # Fast2SMS API integration (replace with your API key)
    url = "https://www.fast2sms.com/dev/bulk"
    headers = {
        'authorization': 'YOUR_FAST2SMS_API_KEY',
        'Content-Type': 'application/json'
    }
    payload = {
        'sender_id': 'PANGEA',
        'message': message,
        'language': 'english',
        'route': 'p',
        'numbers': phone_number.replace('+91', '')
    }
    try:
        response = requests.post(url, headers=headers, json=payload)
        return response.json()
    except Exception as e:
        print(f"SMS sending failed: {str(e)}")
        return None

@auth.route('/api/auth/send-otp', methods=['POST'])
def send_otp():
    try:
        data = request.json
        phone_number = data.get('phoneNumber')
        
        if not phone_number:
            return jsonify({'error': 'Phone number is required'}), 400

        # Generate 6-digit OTP
        otp = ''.join([str(random.randint(0, 9)) for _ in range(6)])
        
        # Store OTP with expiration time (5 minutes)
        otp_store[phone_number] = {
            'otp': otp,
            'expires_at': datetime.now() + timedelta(minutes=5)
        }

        # Send OTP via SMS
        message = f"Your Pangea Pay verification code is: {otp}. Valid for 5 minutes."
        sms_response = send_sms(phone_number, message)

        if sms_response and sms_response.get('return'):
            return jsonify({
                'message': 'OTP sent successfully',
                'phoneNumber': phone_number
            })
        else:
            return jsonify({'error': 'Failed to send OTP'}), 500

    except Exception as e:
        return jsonify({'error': str(e)}), 500

@auth.route('/api/auth/verify-otp', methods=['POST'])
def verify_otp():
    try:
        data = request.json
        phone_number = data.get('phoneNumber')
        otp = data.get('otp')

        if not phone_number or not otp:
            return jsonify({'error': 'Phone number and OTP are required'}), 400

        stored_data = otp_store.get(phone_number)
        if not stored_data:
            return jsonify({'error': 'No OTP found for this number'}), 400

        if datetime.now() > stored_data['expires_at']:
            del otp_store[phone_number]
            return jsonify({'error': 'OTP has expired'}), 400

        if stored_data['otp'] != otp:
            return jsonify({'error': 'Invalid OTP'}), 400

        # Clear OTP after successful verification
        del otp_store[phone_number]

        return jsonify({
            'message': 'OTP verified successfully',
            'phoneNumber': phone_number
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500