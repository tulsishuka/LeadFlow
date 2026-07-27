
import { Send } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

const ContactSales = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus("");

      const response = await axios.post(
        "https://leadflow-s0bj.onrender.com/api/leads",
        formData
      );

      console.log(response.data);

      setStatus("Your inquiry has been submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error(error);

      setStatus("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#EDF1F5] flex flex-col items-center justify-center p-6 font-sans text-slate-800">
      <div className="w-full max-w-xl rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm">
       <div className="mb-6 text-center">
  <h1 className="text-2xl font-bold text-[#0F0069]">
    Ready To Scale?
  </h1>

  <p className="mt-1.5 text-xs text-slate-500">
    Tell us about your project and we'll get back to you within 24 hours.
  </p>
</div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-[10px] font-bold text-[#0F0069] uppercase mb-1.5 ">
                Full Name
              </label>

              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Sarah Connor"
                required
                className="w-full rounded-xl border border-[#C3C0FF] bg-white px-3.5 py-2.5 text-xs outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#0F0069] uppercase mb-1.5">
                Work Email
              </label>

              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="sarah@enterprise.com"
                required
                className="w-full rounded-xl border border-[#C3C0FF] bg-white px-3.5 py-2.5 text-xs outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block text-[10px] font-bold text-[#0F0069] uppercase mb-1.5">
                Phone Number
              </label>

              <input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full rounded-xl border border-[#C3C0FF] bg-white px-3.5 py-2.5 text-xs outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block text-[10px] font-bold text-[#0F0069] uppercase mb-1.5">
                Company
              </label>

              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                placeholder="Cyberdyne Systems"
                className="w-full rounded-xl border border-[#C3C0FF] bg-white px-3.5 py-2.5 text-xs outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-[10px] font-bold text-[#0F0069] uppercase mb-1.5">
              How can we help?
            </label>

            <textarea
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Briefly describe your lead management needs..."
              required
              className="w-full rounded-xl border border-[#C3C0FF] bg-white p-3.5 text-xs outline-none focus:border-indigo-500"
            />
          </div>

          {status && (
            <p className="text-center text-sm text-indigo-600">{status}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F0069] py-3 text-xs font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit Inquiry"}
            <Send className="h-3.5 w-3.5" />
          </button>
        </form>
      </div>

     
    </div>
  );
};

export default ContactSales;