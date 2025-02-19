// KycRegister.jsx
import React, { useState, useRef } from 'react';
import { Upload, Video, Camera, FileText } from 'lucide-react';

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
        videoFile: null,       // For uploaded video
        liveVideoFile: null,   // For recorded live video
        walletType: 'ethereum',
        idCardFront: null,
        idCardBack: null,
        creditCardFront: null,
        creditCardBack: null,
        selectedDocType: 'passport',
    });

    // Camera and recording states/refs
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [currentCaptureSide, setCurrentCaptureSide] = useState(null); // 'front' or 'back'
    const [isRecordingModalOpen, setIsRecordingModalOpen] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);

    // Refs for video, live video, canvas, stream, and file inputs
    const videoRef = useRef(null);             // For image capture
    const liveVideoRef = useRef(null);         // For live video recording
    const canvasRef = useRef(null);
    const streamRef = useRef(null);
    const frontFileInputRef = useRef(null);
    const backFileInputRef = useRef(null);
    const creditFrontFileInputRef = useRef(null);
    const creditBackFileInputRef = useRef(null);

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle file uploads (for ID card and video)
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        if (files.length) {
            if (name === 'idCardFrontUpload') {
                setFormData((prev) => ({ ...prev, idCardFront: URL.createObjectURL(files[0]) }));
            } else if (name === 'idCardBackUpload') {
                setFormData((prev) => ({ ...prev, idCardBack: URL.createObjectURL(files[0]) }));
            } else if (name === 'videoFile') {
                setFormData((prev) => ({ ...prev, videoFile: files[0] }));
            } else {
                setFormData((prev) => ({ ...prev, [name]: files[0] }));
            }
        }
    };

    // Handle image file upload using FileReader
    const handleImageFileUpload = (e, side, type = 'id') => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (type === 'id') {
                    if (side === 'front') {
                        setFormData((prev) => ({ ...prev, idCardFront: reader.result }));
                    } else if (side === 'back') {
                        setFormData((prev) => ({ ...prev, idCardBack: reader.result }));
                    }
                } else if (type === 'credit') {
                    if (side === 'front') {
                        setFormData((prev) => ({ ...prev, creditCardFront: reader.result }));
                    } else if (side === 'back') {
                        setFormData((prev) => ({ ...prev, creditCardBack: reader.result }));
                    }
                }
            };
            reader.readAsDataURL(file);
        }
    };

    // Trigger click on hidden file input based on side and type
    const triggerFileInput = (side, type = 'id') => {
        if (type === 'id') {
            if (side === 'front' && frontFileInputRef.current) {
                frontFileInputRef.current.click();
            } else if (side === 'back' && backFileInputRef.current) {
                backFileInputRef.current.click();
            }
        } else if (type === 'credit') {
            if (side === 'front' && creditFrontFileInputRef.current) {
                creditFrontFileInputRef.current.click();
            } else if (side === 'back' && creditBackFileInputRef.current) {
                creditBackFileInputRef.current.click();
            }
        }
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Implement your submission logic here (e.g., API call)
    };

    // --- Image Capture Functions ---
    const openCamera = (side, type = 'id') => {
        setCurrentCaptureSide(side);
        setIsCameraOpen(true);
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                streamRef.current = stream;
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                    videoRef.current.play();
                }
            })
            .catch((error) => {
                console.error('Error accessing camera: ', error);
            });
    };

    const captureImage = () => {
        const canvas = canvasRef.current;
        const video = videoRef.current;
        if (canvas && video) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            const context = canvas.getContext('2d');
            context.drawImage(video, 0, 0, canvas.width, canvas.height);
            const dataUrl = canvas.toDataURL('image/png');
            if (currentCaptureSide === 'front') {
                setFormData((prev) => ({ ...prev, idCardFront: dataUrl }));
            } else if (currentCaptureSide === 'back') {
                setFormData((prev) => ({ ...prev, idCardBack: dataUrl }));
            }
            // Stop the camera
            if (streamRef.current) {
                streamRef.current.getTracks().forEach((track) => track.stop());
            }
            setIsCameraOpen(false);
            setCurrentCaptureSide(null);
        }
    };

    const closeCamera = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop());
        }
        setIsCameraOpen(false);
        setCurrentCaptureSide(null);
    };

    // --- Live Video Recording Functions ---
    const handleLiveVideoCapture = () => {
        setIsRecordingModalOpen(true);
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => {
                streamRef.current = stream;
                if (liveVideoRef.current) {
                    liveVideoRef.current.srcObject = stream;
                    liveVideoRef.current.play();
                }
                const options = { mimeType: 'video/webm' };
                const recorder = new MediaRecorder(stream, options);
                let chunks = [];
                recorder.ondataavailable = (e) => {
                    if (e.data && e.data.size > 0) {
                        chunks.push(e.data);
                    }
                };
                recorder.onstop = () => {
                    const blob = new Blob(chunks, { type: 'video/webm' });
                    const videoURL = URL.createObjectURL(blob);
                    setFormData((prev) => ({ ...prev, liveVideoFile: videoURL }));
                    if (streamRef.current) {
                        streamRef.current.getTracks().forEach((track) => track.stop());
                    }
                    setIsRecording(false);
                    setIsRecordingModalOpen(false);
                };
                setMediaRecorder(recorder);
                recorder.start();
                setIsRecording(true);
            })
            .catch((error) => console.error('Error accessing camera for recording: ', error));
    };

    const stopRecording = () => {
        if (mediaRecorder && isRecording) {
            mediaRecorder.stop();
        }
    };

    const cancelRecording = () => {
        if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop());
        }
        setIsRecordingModalOpen(false);
        setIsRecording(false);
    };

    // Helper to handle document type selection (passport, national_card, driver's_license)
    const handleDocTypeSelect = (type) => {
        setFormData((prev) => ({ ...prev, selectedDocType: type }));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-4xl">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
                    KYC Verification
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Please fill out the form carefully. You won't be able to edit these details after submission.
                </p>

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
                            {/* <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">First Name*</label>
                <input 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleInputChange} 
                  className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150" 
                  required 
                />
              </div> */}
                            {/* Other personal details fields... */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Last Name <span className="text-red-500">*</span>
                                </label>
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Date of Birth <span className="text-red-500">*</span>
                                </label>
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
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Telegram Username
                                </label>
                                <input
                                    type="text"
                                    name="telegram"
                                    value={formData.telegram}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                />
                            </div>

                            <h3 className="text-lg font-medium text-blue-700 md:col-span-2 mt-4">Your Address</h3>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Address Line 1 <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="addressLine1"
                                    value={formData.addressLine1}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
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
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    City <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    State <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Nationality <span className="text-red-500">*</span>
                                </label>
                                <select
                                    name="nationality"
                                    value={formData.nationality}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                    required
                                >
                                    <option value="United State">United State</option>
                                    <option value="United Kingdom">United Kingdom</option>
                                    <option value="Canada">Canada</option>
                                    <option value="Australia">Australia</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">
                                    Zip Code <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                                    required
                                />
                            </div>

                            {/* Add additional personal details fields as needed */}
                        </div>
                    </div>

                    {/* Document Upload Section */}
                    <div className="border rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">02</div>
                            <h2 className="text-xl font-semibold text-gray-700">Document Upload</h2>
                        </div>

                        <div className="mb-6">
                            <p className="text-sm text-gray-600 mb-2">
                                <span className="inline-flex items-center mr-2">
                                    <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    In order to complete, please upload any of the following personal document.
                                </span>
                            </p>

                            {/* Document Type Selection */}
                            <div className="flex flex-wrap gap-4 mb-6">
                                <button
                                    type="button"
                                    onClick={() => handleDocTypeSelect('passport')}
                                    className={`flex items-center p-4 border rounded-lg transition-all ${formData.selectedDocType === 'passport'
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-200 hover:border-blue-300'
                                        }`}
                                >
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                        <FileText className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <span className="font-medium">PASSPORT</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleDocTypeSelect('national_card')}
                                    className={`flex items-center p-4 border rounded-lg transition-all ${formData.selectedDocType === 'national_card'
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-200 hover:border-blue-300'
                                        }`}
                                >
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                        <FileText className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <span className="font-medium">NATIONAL CARD</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => handleDocTypeSelect('drivers_license')}
                                    className={`flex items-center p-4 border rounded-lg transition-all ${formData.selectedDocType === 'drivers_license'
                                            ? 'border-blue-500 bg-blue-50'
                                            : 'border-gray-200 hover:border-blue-300'
                                        }`}
                                >
                                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                        <FileText className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <span className="font-medium">DRIVER'S LICENSE</span>
                                </button>
                            </div>

                            {/* Verification Requirements */}
                            <div className="mb-6">
                                <h3 className="text-lg font-medium text-gray-700 mb-3">
                                    To avoid delays when verifying your account, please ensure:
                                </h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-600">The credential is not expired.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-600">Document is in good condition and clearly visible.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                        <span className="text-gray-600">Ensure no glare is present on the card.</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Integrated ID Capture Section */}
                            <div>
                                <h3 className="text-lg font-medium text-gray-700 mb-3">
                                    Upload or Capture{' '}
                                    {formData.selectedDocType === 'passport'
                                        ? 'Passport'
                                        : formData.selectedDocType === 'national_card'
                                            ? 'National Card'
                                            : "Driver's License"}{' '}
                                    Images
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {/* Front Side */}
                                    <div className="border rounded-lg p-4">
                                        <h4 className="text-center font-medium mb-4">Front Side</h4>
                                        <input
                                            type="file"
                                            ref={frontFileInputRef}
                                            accept="image/*"
                                            onChange={(e) => handleImageFileUpload(e, 'front', 'id')}
                                            className="hidden"
                                        />
                                        {formData.idCardFront ? (
                                            <div className="relative">
                                                <img
                                                    src={formData.idCardFront}
                                                    alt="ID Card Front"
                                                    className="w-full h-48 object-contain border rounded"
                                                />
                                                <div className="absolute bottom-2 right-2 flex space-x-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => openCamera('front', 'id')}
                                                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                                                        title="Take photo"
                                                    >
                                                        <Camera className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => triggerFileInput('front', 'id')}
                                                        className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
                                                        title="Upload image"
                                                    >
                                                        <Upload className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-full h-48 border-2 border-dashed rounded-lg flex flex-col items-center justify-center bg-gray-50">
                                                <div className="grid grid-cols-2 gap-4 w-full px-8">
                                                    <button
                                                        type="button"
                                                        onClick={() => openCamera('front', 'id')}
                                                        className="flex flex-col items-center justify-center py-4 px-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                                                    >
                                                        <Camera className="w-8 h-8 text-blue-500 mb-2" />
                                                        <p className="text-sm text-gray-600">Take photo</p>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => triggerFileInput('front', 'id')}
                                                        className="flex flex-col items-center justify-center py-4 px-2 bg-green-50 rounded-lg hover:bg-green-100 transition"
                                                    >
                                                        <Upload className="w-8 h-8 text-green-500 mb-2" />
                                                        <p className="text-sm text-gray-600">Upload image</p>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Back Side */}
                                    <div className="border rounded-lg p-4">
                                        <h4 className="text-center font-medium mb-4">Back Side</h4>
                                        <input
                                            type="file"
                                            ref={backFileInputRef}
                                            accept="image/*"
                                            onChange={(e) => handleImageFileUpload(e, 'back', 'id')}
                                            className="hidden"
                                        />
                                        {formData.idCardBack ? (
                                            <div className="relative">
                                                <img
                                                    src={formData.idCardBack}
                                                    alt="ID Card Back"
                                                    className="w-full h-48 object-contain border rounded"
                                                />
                                                <div className="absolute bottom-2 right-2 flex space-x-2">
                                                    <button
                                                        type="button"
                                                        onClick={() => openCamera('back', 'id')}
                                                        className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                                                        title="Take photo"
                                                    >
                                                        <Camera className="w-5 h-5" />
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => triggerFileInput('back', 'id')}
                                                        className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
                                                        title="Upload image"
                                                    >
                                                        <Upload className="w-5 h-5" />
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="w-full h-48 border-2 border-dashed rounded-lg flex flex-col items-center justify-center bg-gray-50">
                                                <div className="grid grid-cols-2 gap-4 w-full px-8">
                                                    <button
                                                        type="button"
                                                        onClick={() => openCamera('back', 'id')}
                                                        className="flex flex-col items-center justify-center py-4 px-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                                                    >
                                                        <Camera className="w-8 h-8 text-blue-500 mb-2" />
                                                        <p className="text-sm text-gray-600">Take photo</p>
                                                    </button>
                                                    <button
                                                        type="button"
                                                        onClick={() => triggerFileInput('back', 'id')}
                                                        className="flex flex-col items-center justify-center py-4 px-2 bg-green-50 rounded-lg hover:bg-green-100 transition"
                                                    >
                                                        <Upload className="w-8 h-8 text-green-500 mb-2" />
                                                        <p className="text-sm text-gray-600">Upload image</p>
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Example ID Card Illustration */}
                                <div className="mt-6 flex justify-center">
                                    <div className="w-full relative">
                                        <img
                                            src="/image.png"
                                            alt="Example ID card"
                                            className="w-full rounded-lg shadow-md"
                                        />

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Credit Card Upload Section */}
                    <div className="border rounded-lg p-6 shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">03</div>
                            <h2 className="text-xl font-semibold text-gray-700">Credit Card Information</h2>
                        </div>
                        <div className="mb-6">
                            <p className="text-sm text-gray-600 mb-4">
                                <span className="inline-flex items-center">
                                    <svg className="w-4 h-4 text-blue-500 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                    Please provide clear images of the front and back of your credit card.
                                </span>
                            </p>
                            <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path
                                                fillRule="evenodd"
                                                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm text-yellow-700">
                                            For your security, cover the middle 8 digits of your card number and the CVV code on the back.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <h3 className="text-lg font-medium text-gray-700 mb-3">
                                Upload or Capture Credit Card Images
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Credit Card Front Side */}
                                <div className="border rounded-lg p-4">
                                    <h4 className="text-center font-medium mb-4">Front Side</h4>
                                    <input
                                        type="file"
                                        ref={creditFrontFileInputRef}
                                        accept="image/*"
                                        onChange={(e) => handleImageFileUpload(e, 'front', 'credit')}
                                        className="hidden"
                                    />
                                    {formData.creditCardFront ? (
                                        <div className="relative">
                                            <img
                                                src={formData.creditCardFront}
                                                alt="Credit Card Front"
                                                className="w-full h-48 object-contain border rounded"
                                            />
                                            <div className="absolute bottom-2 right-2 flex space-x-2">
                                                <button
                                                    type="button"
                                                    onClick={() => openCamera('front', 'credit')}
                                                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                                                    title="Take photo"
                                                >
                                                    <Camera className="w-5 h-5" />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => triggerFileInput('front', 'credit')}
                                                    className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
                                                    title="Upload image"
                                                >
                                                    <Upload className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-full h-48 border-2 border-dashed rounded-lg flex flex-col items-center justify-center bg-gray-50">
                                            <div className="grid grid-cols-2 gap-4 w-full px-8">
                                                <button
                                                    type="button"
                                                    onClick={() => openCamera('front', 'credit')}
                                                    className="flex flex-col items-center justify-center py-4 px-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                                                >
                                                    <Camera className="w-8 h-8 text-blue-500 mb-2" />
                                                    <p className="text-sm text-gray-600">Take photo</p>
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => triggerFileInput('front', 'credit')}
                                                    className="flex flex-col items-center justify-center py-4 px-2 bg-green-50 rounded-lg hover:bg-green-100 transition"
                                                >
                                                    <Upload className="w-8 h-8 text-green-500 mb-2" />
                                                    <p className="text-sm text-gray-600">Upload image</p>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                                {/* Credit Card Back Side */}
                                <div className="border rounded-lg p-4">
                                    <h4 className="text-center font-medium mb-4">Back Side</h4>
                                    <input
                                        type="file"
                                        ref={creditBackFileInputRef}
                                        accept="image/*"
                                        onChange={(e) => handleImageFileUpload(e, 'back', 'credit')}
                                        className="hidden"
                                    />
                                    {formData.creditCardBack ? (
                                        <div className="relative">
                                            <img
                                                src={formData.creditCardBack}
                                                alt="Credit Card Back"
                                                className="w-full h-48 object-contain border rounded"
                                            />
                                            <div className="absolute bottom-2 right-2 flex space-x-2">
                                                <button
                                                    type="button"
                                                    onClick={() => openCamera('back', 'credit')}
                                                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
                                                    title="Take photo"
                                                >
                                                    <Camera className="w-5 h-5" />
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => triggerFileInput('back', 'credit')}
                                                    className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700"
                                                    title="Upload image"
                                                >
                                                    <Upload className="w-5 h-5" />
                                                </button>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="w-full h-48 border-2 border-dashed rounded-lg flex flex-col items-center justify-center bg-gray-50">
                                            <div className="grid grid-cols-2 gap-4 w-full px-8">
                                                <button
                                                    type="button"
                                                    onClick={() => openCamera('back', 'credit')}
                                                    className="flex flex-col items-center justify-center py-4 px-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition"
                                                >
                                                    <Camera className="w-8 h-8 text-blue-500 mb-2" />
                                                    <p className="text-sm text-gray-600">Take photo</p>
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => triggerFileInput('back', 'credit')}
                                                    className="flex flex-col items-center justify-center py-4 px-2 bg-green-50 rounded-lg hover:bg-green-100 transition"
                                                >
                                                    <Upload className="w-8 h-8 text-green-500 mb-2" />
                                                    <p className="text-sm text-gray-600">Upload image</p>
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            {/* Example Credit Card Illustration */}
                            <div className="mt-6 flex justify-center">
                                <div className="w-full  relative">
                                    <img
                                        src="/ccc.png"
                                        alt="Example credit card"
                                        className="w-full rounded-lg shadow-md"
                                    />

                                </div>
                            </div>
                        </div>
                    </div>


                    {/* video upload and live record */}
                    <div className="mt-8 border rounded-lg p-6 bg-white shadow-sm">
                        <div className="mt-8">
                            <div className="flex items-center mb-6">
                                <div className="bg-blue-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">
                                    04
                                </div>
                                <h2 className="text-2xl font-semibold ml-3 text-gray-800">Video Verification</h2>
                            </div>

                            <div className="mb-4">
                                <p className="text-gray-700 mb-2">
                                    Please record a short video saying "I confirm this is my KYC application".
                                </p>

                                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm text-yellow-700">
                                                For verification purposes, ensure your face is clearly visible and you speak audibly.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Record Live Video Option */}
                                <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-blue-500 transition duration-150">
                                    <div className="flex flex-col items-center">
                                        <Camera className="w-12 h-12 text-gray-400 mb-4" />
                                        <h3 className="font-medium text-gray-800 mb-2">Record Live</h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            Record a live video directly from your camera
                                        </p>
                                        <button
                                            type="button"
                                            className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-150 w-full max-w-xs"
                                        >
                                            Record Video
                                        </button>
                                        <p className="mt-4 text-sm text-gray-500">No video recorded</p>
                                    </div>
                                </div>

                                {/* Upload Video Option */}
                                <div className="border-2 border-dashed rounded-lg p-6 text-center hover:border-blue-500 transition duration-150">
                                    <div className="flex flex-col items-center">
                                        <Video className="w-12 h-12 text-gray-400 mb-4" />
                                        <h3 className="font-medium text-gray-800 mb-2">Upload Video</h3>
                                        <p className="text-sm text-gray-600 mb-4">
                                            Upload a pre-recorded video from your device
                                        </p>
                                        <label
                                            htmlFor="video-upload"
                                            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 cursor-pointer transition duration-150 block w-full max-w-xs text-center"
                                        >
                                            Upload Video
                                        </label>
                                        <input
                                            type="file"
                                            id="video-upload"
                                            accept="video/mp4,video/webm"
                                            className="hidden"
                                        />
                                        <p className="mt-4 text-sm text-gray-500">No video uploaded</p>
                                    </div>
                                </div>
                            </div>
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
