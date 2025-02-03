"use client";

import { useState } from "react";
import { useTranslation } from "next-i18next";

export default function RequestConsultation() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    location: "",
    industryType: "",
    otherIndustry: "",
    inquiry: "",
    contactPreference: "email",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert(t("Thank you for your request! We will contact you soon."));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-lg">
        <h1 className="text-2xl font-semibold text-green-950 text-center mb-4">
          {t("Request Consultation")}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* نام و نام خانوادگی */}
          <div className="flex flex-col">
            <label htmlFor="fullName" className="text-sm font-medium text-gray-700">
              {t("Full Name")}
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500   "
              required
            />
          </div>

          {/* ایمیل */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              {t("Email")}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500  "
              required
            />
          </div>

          {/* شماره تماس */}
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium text-gray-700">
              {t("Phone Number")}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500  "
              required
            />
          </div>

          {/* کشور/شهر */}
          <div className="flex flex-col">
            <label htmlFor="location" className="text-sm font-medium text-gray-700">
              {t("Country/City")}
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500  "
              required
            />
          </div>

          {/* زمینه‌ی فعالیت */}
          <div className="flex flex-col">
            <label htmlFor="industryType" className="text-sm font-medium text-gray-700">
              {t("Industry Type")}
            </label>
            <select
              id="industryType"
              name="industryType"
              value={formData.industryType}
              onChange={handleChange}
              className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500  "
              required
            >
              <option value="" disabled>
                {t("Select an option")}
              </option>
              <option value="agriculture">{t("Agriculture")}</option>
              <option value="scientific-research">{t("Scientific Research")}</option>
              <option value="municipal-greenery">{t("Municipal Greenery")}</option>
              <option value="environmental-protection">{t("Environmental Protection")}</option>
              <option value="other">{t("Other")}</option>
            </select>
          </div>

          {/* سایر (در صورت انتخاب گزینه "Other") */}
          {formData.industryType === "other" && (
            <div className="flex flex-col">
              <label htmlFor="otherIndustry" className="text-sm font-medium text-gray-700">
                {t("Please specify")}
              </label>
              <input
                type="text"
                id="otherIndustry"
                name="otherIndustry"
                value={formData.otherIndustry}
                onChange={handleChange}
                className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500  "
              />
            </div>
          )}

          {/* توضیحات */}
          <div className="flex flex-col">
            <label htmlFor="inquiry" className="text-sm font-medium text-gray-700">
              {t("What information do you need?")}
            </label>
            <textarea
              id="inquiry"
              name="inquiry"
              value={formData.inquiry}
              onChange={handleChange}
              className="w-full p-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500  "
              rows={4}
              required
            />
          </div>

          {/* دکمه ارسال */}
          <button
            type="submit"
            className="w-full bg-green-950 text-white py-2 rounded-lg hover:bg-green-700 transition duration-200"
          >
            {t("Submit")}
          </button>
        </form>
      </div>

    </div>
  );
}
