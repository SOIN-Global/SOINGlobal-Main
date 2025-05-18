import React, { useState } from "react";

export default function ContactModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telegram: "",
    subject: "",
    message: ""
  });

  const [formStatus, setFormStatus] = useState({
    success: false,
    loading: false,
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-white dark:bg-[#00091a] backdrop-blur-xl p-6 rounded-2xl w-full max-w-lg shadow-2xl m-4">
        <h2 className="text-black/80 dark:text-[#C6EFEF] text-2xl font-semibold mb-6 text-center">Contact Us</h2>
        <form className="space-y-4 dark:text-white" onSubmit={handleSubmit}>
          {/* First & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-black/80 dark:dark:text-white/80 mb-1">First Name</label>
              <div className="rounded-md p-[1px] bg-gradient-to-r from-[#8FF4F4] via-[#FFF597] to-[#CFBEFF]">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full px-4 py-2 dark:bg-[#0b1325] dark:text-white rounded-md focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-black/80 dark:dark:text-white/80 mb-1">Last Name</label>
              <div className="rounded-md p-[1px] bg-gradient-to-r from-[#8FF4F4] via-[#FFF597] to-[#CFBEFF]">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full px-4 py-2 dark:bg-[#0b1325] dark:text-white rounded-md focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-black/80 dark:dark:text-white/80 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="rounded-md p-[1px] bg-gradient-to-r from-[#8FF4F4] via-[#FFF597] to-[#CFBEFF]">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email address"
                className="w-full px-4 py-2 dark:bg-[#0b1325] dark:text-white rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* Telegram */}
          <div>
            <label className="block text-black/80 dark:dark:text-white/80 mb-1">Telegram Username</label>
            <div className="rounded-md p-[1px] bg-gradient-to-r from-[#8FF4F4] via-[#FFF597] to-[#CFBEFF]">
              <input
                type="text"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                placeholder="Username"
                className="w-full px-4 py-2 dark:bg-[#0b1325] dark:text-white rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-black/80 dark:dark:text-white/80 mb-1">Subject <span className="text-red-500">*</span></label>
            <div className="rounded-md p-[1px] bg-gradient-to-r from-[#8FF4F4] via-[#FFF597] to-[#CFBEFF]">
              <input
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="Add a subject"
                className="w-full px-4 py-2 dark:bg-[#0b1325] dark:text-white rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-black/80 dark:dark:text-white/80 mb-1">Message <span className="text-red-500">*</span></label>
            <div className="rounded-md p-[1px] bg-gradient-to-r from-[#8FF4F4] via-[#FFF597] to-[#CFBEFF]">
              <textarea
                name="message"
                required
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="Leave a message"
                className="w-full px-4 py-2 dark:bg-[#0b1325] dark:text-white rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end pt-2 space-x-3">
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
              {formStatus.loading ? 'wait...' : 'Send Message'}
            </button>
          </div>
        </form>
      </div>

      {/* show sucess data  */}
      {formStatus.success && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-10 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center max-w-md w-full">
            <h2 className="text-green-600 text-xl font-semibold mb-2">🎉 Thank You!</h2>
            <p className="text-gray-700 dark:text-gray-200">
              Your message has been sent successfully. We'll get back to you shortly.
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
