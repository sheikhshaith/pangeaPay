# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS
import random
from datetime import datetime, timedelta

app = Flask(__name__)
# Enable CORS for all routes and origins
CORS(app, resources={r"/*": {"origins": "*"}})

# Store OTPs temporarily (in development)
otp_store = {}

# Root route for health check
@app.route('/')
def home():
    return jsonify({"message": "Server is running"}), 200

# Send OTP route
@app.route('/api/auth/send-otp', methods=['POST'])
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

        # For development: Print OTP to console
        print(f"\n=== DEVELOPMENT OTP ===")
        print(f"Phone: {phone_number}")
        print(f"OTP: {otp}")
        print("=====================\n")

        return jsonify({
            'message': 'OTP sent successfully',
            'phoneNumber': phone_number,
            # For development only
            'otp': otp
        })

    except Exception as e:
        print(f"Error in send_otp: {str(e)}")  # Debug log
        return jsonify({'error': str(e)}), 500

# Verify OTP route
@app.route('/api/auth/verify-otp', methods=['POST'])
def verify_otp():
    try:
        data = request.json
        print(f"Received verification request: {data}")  # Debug log
        
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
        print(f"Error in verify_otp: {str(e)}")  # Debug log
        return jsonify({'error': str(e)}), 500

# Error handler for 404
@app.errorhandler(404)
def not_found(e):
    return jsonify({"error": "Route not found"}), 404

# Error handler for 500
@app.errorhandler(500)
def server_error(e):
    return jsonify({"error": "Internal server error"}), 500

if __name__ == '__main__':
    # Add debug logs when server starts
    print("\n=== Flask Server Starting ===")
    print("Available routes:")
    print("  - / (GET)")
    print("  - /api/auth/send-otp (POST)")
    print("  - /api/auth/verify-otp (POST)")
    print("==========================\n")
    
    app.run(debug=True, port=5000)