import React from "react";

export default function ContactModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative bg-[#00091a] backdrop-blur-xl p-6 rounded-2xl w-full max-w-lg shadow-2xl m-4">
        <h2 className="text-[#C6EFEF] text-2xl font-semibold mb-6 text-center">Contact Us</h2>
        <form className="space-y-4 text-white">
          {/* First & Last Name */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 mb-1">First Name</label>
              <div className="rounded-md p-[1px] bg-gradient-to-r from-[#8FF4F4] via-[#FFF597] to-[#CFBEFF]">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-2 bg-[#0b1325] text-white rounded-md focus:outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-white/80 mb-1">Last Name</label>
              <div className="rounded-md p-[1px] bg-gradient-to-r from-[#8FF4F4] via-[#FFF597] to-[#CFBEFF]">
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-2 bg-[#0b1325] text-white rounded-md focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-white/80 mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <div className="rounded-md p-[1px] bg-gradient-to-r from-[#8FF4F4] via-[#FFF597] to-[#CFBEFF]">
              <input
                type="email"
                required
                placeholder="Email address"
                className="w-full px-4 py-2 bg-[#0b1325] text-white rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* Telegram */}
          <div>
            <label className="block text-white/80 mb-1">Telegram Username</label>
            <div className="rounded-md p-[1px] bg-gradient-to-r from-[#8FF4F4] via-[#FFF597] to-[#CFBEFF]">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 bg-[#0b1325] text-white rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-white/80 mb-1">Subject</label>
            <div className="rounded-md p-[1px] bg-gradient-to-r from-[#8FF4F4] via-[#FFF597] to-[#CFBEFF]">
              <input
                type="text"
                placeholder="Add a subject"
                className="w-full px-4 py-2 bg-[#0b1325] text-white rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-white/80 mb-1">Message</label>
            <div className="rounded-md p-[1px]   bg-gradient-to-r from-[#8FF4F4] via-[#FFF597] to-[#CFBEFF]">
              <textarea
                rows={4}
                placeholder="Leave a message"
                className="w-full px-4 py-2 bg-[#0b1325] text-white rounded-md focus:outline-none"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end pt-2 space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-[#C6EFEF] text-[#00091a] font-medium rounded-md text-sm"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
