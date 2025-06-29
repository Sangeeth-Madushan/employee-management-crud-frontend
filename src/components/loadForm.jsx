import React from 'react';

function FormLoading() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Form Header Skeleton */}
          <div className="px-6 py-4 border-b border-gray-200 bg-gradient-to-r from-gray-200 to-gray-300">
            <div className="h-8 w-48 bg-gray-300 rounded animate-pulse"></div>
            <div className="mt-2 h-4 w-64 bg-gry-200 rounded animate-pulse"></div>
          </div>
          
          {/* Form Content Skeleton */}
          <div className="px-6 py-4">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* First Name */}
              <div>
                <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse"></div>
              </div>

              {/* Last Name */}
              <div>
                <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse"></div>
              </div>

              {/* Email */}
              <div className="sm:col-span-2">
                <div className="h-5 w-16 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse"></div>
              </div>

              {/* Phone */}
              <div className="sm:col-span-2">
                <div className="h-5 w-20 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse"></div>
              </div>

              {/* Department */}
              <div>
                <div className="h-5 w-28 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse"></div>
              </div>

              {/* Position */}
              <div>
                <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mb-1"></div>
                <div className="h-10 w-full bg-gray-200 rounded-md animate-pulse"></div>
              </div>
            </div>

            {/* Form Actions Skeleton */}
            <div className="mt-8 flex justify-end space-x-3">
              <div className="h-10 w-24 bg-gray-200 rounded-md animate-pulse"></div>
              <div className="h-10 w-40 bg-gray-200 rounded-md animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormLoading;