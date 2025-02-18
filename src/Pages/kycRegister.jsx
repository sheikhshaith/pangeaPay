import React, { useState } from 'react';
import { Upload } from 'lucide-react';

const kycRegister = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    telegram: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    nationality: 'United States',
    zipCode: '',
    walletAddress: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Details Section */}
        <div className="border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
              01
            </div>
            <h2 className="text-xl font-semibold">Personal Details</h2>
          </div>
          
          <p className="text-gray-600 mb-6">
            Please note carefully and fill the form with your personal details. Your can't edit these details once
            you submitted the form.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name*
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name*
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number*
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Date of Birth*
              </label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telegram Username
              </label>
              <input
                type="text"
                name="telegram"
                value={formData.telegram}
                onChange={handleInputChange}
                className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-4">Your Address</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address Line 1*
                </label>
                <input
                  type="text"
                  name="addressLine1"
                  value={formData.addressLine1}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address Line 2
                </label>
                <input
                  type="text"
                  name="addressLine2"
                  value={formData.addressLine2}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City*
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  State*
                </label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nationality*
                </label>
                <select
                  name="nationality"
                  value={formData.nationality}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  {/* Add more countries as needed */}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Zip Code*
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Document Upload Section */}
        <div className="border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
              02
            </div>
            <h2 className="text-xl font-semibold">Document Upload</h2>
          </div>

          <p className="text-gray-600 mb-6">
            To verify your identity, please upload any of your document.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="border rounded p-4 text-center">
              <img src="/api/placeholder/48/48" alt="Passport" className="mx-auto mb-2" />
              <p className="text-sm font-medium">Passport</p>
            </div>
            <div className="border rounded p-4 text-center">
              <img src="/api/placeholder/48/48" alt="National ID" className="mx-auto mb-2" />
              <p className="text-sm font-medium">National ID</p>
            </div>
            <div className="border rounded p-4 text-center">
              <img src="/api/placeholder/48/48" alt="Driver's License" className="mx-auto mb-2" />
              <p className="text-sm font-medium">Driver's License</p>
            </div>
          </div>

          <div className="border-2 border-dashed rounded-lg p-6 text-center">
            <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-sm text-gray-600">Drag and drop your file here or click to browse</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Upload
            </button>
          </div>
        </div>

        {/* Wallet Section */}
        <div className="border rounded-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
              03
            </div>
            <h2 className="text-xl font-semibold">Your Paying Wallet</h2>
          </div>

          <p className="text-gray-600 mb-6">
            Submit your wallet address that you are going to spend funds
          </p>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Wallet
            </label>
            <select
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 mb-4"
            >
              <option value="ethereum">Ethereum</option>
              <option value="bitcoin">Bitcoin</option>
            </select>

            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Address for tokens
            </label>
            <input
              type="text"
              name="walletAddress"
              value={formData.walletAddress}
              onChange={handleInputChange}
              className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="0x0000000000000000000000000000000000000000"
              required
            />
            <p className="text-sm text-gray-500 mt-1">
              Note: address should be ERC20 compatible
            </p>
          </div>
        </div>

        {/* Terms and Submit */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="terms"
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              required
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I have Read The Terms Of Condition and Privacy Policy.
            </label>
          </div>

          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Proceed for Verify
          </button>
        </div>
      </form>
    </div>
  );
};

export default kycRegister;