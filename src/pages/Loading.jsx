import React from 'react'

function Loading() {
 return (
        <div className="flex justify-center items-center min-h-[calc(100vh-280px)]">
            {/* DaisyUI-এর সুন্দর স্পিনার অ্যানিমেশন */}
            <span className="loading loading-bars loading-lg text-primary"></span>
        </div>
    );
}

export default Loading