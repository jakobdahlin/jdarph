"use client";

import { useState } from "react";

type FormType = "Licensing" | "Custom Photography" | "General";

export default function ContactForm() {
  const [formType, setFormType] = useState<FormType>("General");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    purpose: "",
    licenseType: "",
    budget: "",
    projectDescription: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType,
          ...formData,
        }),
      });
  
      const result = await response.json();
      if (result.success) {
        setModalMessage("Your message has been sent successfully!");
        setShowModal(true);
        setFormData({
          name: "",
          company: "",
          email: "",
          purpose: "",
          licenseType: "",
          budget: "",
          projectDescription: "",
          message: "",
        });
      } else {
        setModalMessage("There was an issue sending your message.");
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error:", error);
      setModalMessage("Failed to send the message. Please try again.");
      setShowModal(true);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-6 p-6 text-left">
      <div>
        <label htmlFor="formType" className="text-gray-300 block rounded-xl pl-4">
          Inquiry Type
        </label>
        <select
          id="formType"
          className="w-full mt-1 bg-neutral-800 border text-gray-200 border-neutral-600 p-2 rounded-xl h-10"
          value={formType}
          onChange={(e) => setFormType(e.target.value as FormType)}
        >
          <option value="Licensing">Licensing</option>
          <option value="Custom Photography">Custom Photography</option>
          <option value="General">General</option>
        </select>

      </div>

      <div>
        <label htmlFor="name" className="text-gray-300 block pl-4">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full mt-1 bg-neutral-800 border text-gray-200 border-neutral-600 p-2 rounded-xl"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      {formType !== "General" && (
        <div>
          <label htmlFor="company" className="text-gray-300 block pl-4">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            className="w-full mt-1 bg-neutral-800 border text-gray-200 border-neutral-600 p-2 rounded-xl"
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>
      )}

      <div>
        <label htmlFor="email" className="text-gray-300 block pl-4">
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full mt-1 bg-neutral-800 border text-gray-200 border-neutral-600 p-2 rounded-xl"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>

      {formType === "Licensing" && (
        <>
          <div>
            <label htmlFor="purpose" className="text-gray-300 block pl-4">
              Purpose *
            </label>
            <textarea
              id="purpose"
              name="purpose"
              required
              className="w-full mt-1 bg-neutral-800 border text-gray-200 border-neutral-600 p-2 rounded-xl"
              value={formData.purpose}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="licenseType" className="text-gray-300 block pl-4">
              License Type *
            </label>
            <select
              id="licenseType"
              name="licenseType"
              required
              className="w-full mt-1 bg-neutral-800 border text-gray-200 border-neutral-600 p-2 h-10 rounded-xl"
              value={formData.licenseType}
              onChange={handleInputChange}
            >
              <option value="">Select license type</option>
              <option value="standard">Standard</option>
              <option value="extended">Extended</option>
              <option value="exclusive">Exclusive</option>
            </select>
          </div>
        </>
      )}

      {formType === "Custom Photography" && (
        <>
          <div>
            <label htmlFor="budget" className="text-gray-300 block pl-4">
              Budget  *
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              required
              className="w-full mt-1 bg-neutral-800 border text-gray-200 border-neutral-600 p-2 rounded-xl"
              value={formData.budget}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="projectDescription" className="text-gray-300 block pl-4">
              Project Description *
            </label>
            <textarea
              id="projectDescription"
              name="projectDescription"
              required
              className="w-full mt-1 bg-neutral-800 border text-gray-200 border-neutral-600 p-2 rounded-xl"
              value={formData.projectDescription}
              onChange={handleInputChange}
            />
          </div>
        </>
      )}

<div>
  <label htmlFor="message" className="text-gray-300 block pl-4">
    Message *
  </label>
  <textarea
    id="message"
    name="message"
    required
    className="w-full mt-1 bg-neutral-800 border text-gray-200 border-neutral-600 p-2 rounded-xl resize-none"
    value={formData.message}
    onChange={handleInputChange}
    onInput={(e) => {
      e.currentTarget.style.height = "auto"; // Reset height to auto to shrink if needed
      e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`; // Expand to fit content
    }}
  />
</div>


      <button type="submit" className="w-full mt-1 bg-neutral-800 border text-gray-200 border-neutral-600 p-2 rounded-xl
      hover:border-neutral-500">
        Submit
      </button>


      {showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div className="backdrop-blur-md border border-neutral-600 p-6 rounded-3xl shadow-xl shadow-neutral-950/90 text-white max-w-sm w-full">
      <h2 className="text-xl font-semibold">Notification</h2>
      <p>{modalMessage}</p>
      <button
        onClick={() => setShowModal(false)}
        className="mt-8 px-4 py-2 hover:bg-neutral-800 bg-neutral-800/30 border border-netural-800 rounded-xl w-full cursor-pointer"
      >
        Close
      </button>
    </div>
  </div>
)}

    </form>
    
  );
  
}