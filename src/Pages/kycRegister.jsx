import React, { useState } from 'react';
import { Upload, Video } from 'lucide-react';

const KycRegister = () => {
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
        walletAddress: '',
        documentFile: null,
        videoFile: null,
        walletType: 'ethereum'
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files.length) {  
            setFormData(prev => ({ ...prev, [name]: files[0] }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Implement file upload handling here if needed.
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">KYC Verification</h1>
                <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Details Section */}
                    <div className="border rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">01</div>
                            <h2 className="text-xl font-semibold text-gray-700">Personal Details</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">First Name*</label>
                                <input 
                                    type="text" 
                                    name="firstName" 
                                    value={formData.firstName} 
                                    onChange={handleInputChange} 
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Last Name*</label>
                                <input 
                                    type="text" 
                                    name="lastName" 
                                    value={formData.lastName} 
                                    onChange={handleInputChange} 
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Email Address*</label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleInputChange} 
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Phone Number*</label>
                                <input 
                                    type="tel" 
                                    name="phone" 
                                    value={formData.phone} 
                                    onChange={handleInputChange} 
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Date of Birth*</label>
                                <input 
                                    type="date" 
                                    name="dateOfBirth" 
                                    value={formData.dateOfBirth} 
                                    onChange={handleInputChange} 
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
                                    required 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">Telegram Username</label>
                                <input 
                                    type="text" 
                                    name="telegram" 
                                    value={formData.telegram} 
                                    onChange={handleInputChange} 
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
                                />
                            </div>
                        </div>
                    </div>

                    {/* Document Upload Section */}
                    <div className="border rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">02</div>
                            <h2 className="text-xl font-semibold text-gray-700">Document Upload</h2>
                        </div>
                        <div className="space-y-6">
                            <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-blue-500 transition duration-150">
                                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <p className="text-sm text-gray-600">Drag and drop your document here or click to browse</p>
                                <input 
                                    type="file" 
                                    name="documentFile" 
                                    onChange={handleFileChange} 
                                    style={{ display: 'none' }} 
                                    id="document-upload" 
                                />
                                <label 
                                    htmlFor="document-upload" 
                                    className="mt-4 inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer transition duration-150"
                                >
                                    Upload Document
                                </label>
                            </div>
                            <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-blue-500 transition duration-150">
                                <Video className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                                <p className="text-sm text-gray-600">Record or upload a short video saying "I confirm this is my KYC application"</p>
                                <input 
                                    type="file" 
                                    name="videoFile" 
                                    onChange={handleFileChange} 
                                    accept="video/*" 
                                    style={{ display: 'none' }} 
                                    id="video-upload" 
                                />
                                <label 
                                    htmlFor="video-upload" 
                                    className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer transition duration-150"
                                >
                                    Upload Video
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* Wallet Section */}
                    <div className="border rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">03</div>
                            <h2 className="text-xl font-semibold text-gray-700">Your Paying Wallet</h2>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Select Wallet</label>
                            <select 
                                name="walletType" 
                                value={formData.walletType} 
                                onChange={handleInputChange}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150 mb-4"
                            >
                                <option value="ethereum">Ethereum</option>
                                <option value="bitcoin">Bitcoin</option>
                            </select>
                            <label className="block text-sm font-medium text-gray-600 mb-1">Your Address for Tokens</label>
                            <input 
                                type="text" 
                                name="walletAddress" 
                                value={formData.walletAddress} 
                                onChange={handleInputChange}
                                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
                                placeholder="0x0000000000000000000000000000000000000000" 
                                required 
                            />
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
                            className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150"
                        >
                            Proceed for Verify
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default KycRegister;
