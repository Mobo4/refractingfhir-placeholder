import React from 'react';
import { AlertCircle } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">RefractingFHIR</h1>
          <p className="text-xl text-blue-700">FHIR Integration Service</p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6 mb-8">
          <div className="flex items-center mb-4">
            <AlertCircle className="text-blue-500 mr-2" />
            <h2 className="text-xl font-semibold text-gray-800">Integration Status</h2>
          </div>
          <p className="text-gray-600 mb-4">
            This is a placeholder page for RefractingFHIR FHIR integration. 
            OAuth2 endpoints are configured and ready for testing.
          </p>
          
          <div className="bg-blue-50 rounded-md p-4">
            <h3 className="font-medium text-blue-900 mb-2">Configured Endpoints:</h3>
            <ul className="space-y-2 text-blue-800">
              <li>• Main App URL: https://app.refract.ing</li>
              <li>• OAuth Callback: https://app.refract.ing/callback</li>
              <li>• Logout Redirect: https://app.refract.ing/logout</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Integration Details</h2>
          <div className="space-y-4 text-gray-600">
            <p>• OAuth2 Flow: Authorization Code Flow with PKCE</p>
            <p>• FHIR Version: R4</p>
            <p>• Scopes: openid, fhirUser, offline_access, patient/*.read</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;