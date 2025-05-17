import React from "react";

export default function FormModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#00091a] p-6 rounded-2xl shadow-lg w-full max-w-md text-white mx-4">
        <h2 className="text-[#C6EFEF] text-2xl font-semibold mb-4 text-center">Get Early Access</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-white/80 mb-1" htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 bg-[#0b1325] text-white border border-gray-600 rounded-md focus:outline-none"
              required
            />
          </div>
          <div>
            <label className="block text-white/80 mb-1" htmlFor="telegram">
              Telegram (Optional)
            </label>
            <input
              type="text"
              id="telegram"
              placeholder="Enter your username"
              className="w-full px-4 py-2 bg-[#0b1325] text-white border border-gray-600 rounded-md focus:outline-none"
            />
          </div>
          <div className="flex justify-end space-x-2 pt-2">
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
