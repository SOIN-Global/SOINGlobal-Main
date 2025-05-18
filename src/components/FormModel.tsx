import React, { useState } from "react";

export default function FormModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    email: "",
    telegram: "",
    subject: "Request for Early Access"
  });

  const [formStatus, setFormStatus] = useState({
    success: true,
    loading: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    setFormStatus(prev => ({
      ...prev,
      loading: true,
    }));

    e.preventDefault();
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setFormStatus({ success: true, loading: false });
    } else {
      setFormStatus(prev => ({
        ...prev,
        loading: false,
      }));
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      {!formStatus.success && (
        <div className="bg-white dark:bg-[#00091a] p-6 rounded-2xl shadow-lg w-full max-w-md text-black dark:text-white mx-4">
          <h2 className="text-black/80 dark:text-[#C6EFEF] text-2xl font-semibold mb-4 text-center">Get Early Access</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-black/80 dark:text-white/80 mb-1" htmlFor="email">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full px-4 py-2 dark:bg-[#0b1325] dark:text-white border border-gray-600 rounded-md focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-black/80 dark:text-white/80 mb-1" htmlFor="telegram">
                Telegram (Optional)
              </label>
              <input
                type="text"
                id="telegram"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                placeholder="Enter your username"
                className="w-full px-4 py-2 dark:bg-[#0b1325] dark:text-white border border-gray-600 rounded-md focus:outline-none"
              />
            </div>
            <div className="flex justify-end space-x-2 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 bg-gray-700 text-white hover:bg-gray-600 rounded-md text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-[#C6EFEF] text-[#00091a] font-medium rounded-md text-sm"
              >
                {formStatus.loading ? 'wait...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Success Modal */}
      {formStatus.success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center max-w-md w-full">
            <h2 className="text-green-600 text-xl font-semibold mb-2">🎉 Thank You!</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Your early access request has been submitted successfully. We'll contact you soon.
            </p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-green-500 dark:text-white rounded hover:bg-green-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
