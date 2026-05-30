import { useState, FormEvent } from "react";
import { Mail, Calendar, Send, MessageSquare, Linkedin, Instagram } from "lucide-react";
import PortraitBlurredFill from "./PortraitBlurredFill";

const CONTACT_PORTRAIT = "/input_file_5.png";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    requirement: "",
    consultationType: "Strategy & Operational Alignment Briefing"
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [validationError, setValidationError] = useState("");

  const consultationTypes = [
    "Strategy & Operational Alignment Briefing",
    "Corporate Governance & Strategic Risk Review",
    "Venture Scaling & Investment Discussions",
    "Bespoke Business Process Refinement"
  ];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setValidationError("");

    if (!formData.name || !formData.email || !formData.requirement) {
      setValidationError("Please fill in all mandatory fields: Name, Email, and Challenge description.");
      return;
    }

    setIsSubmitting(true);

    // Perform state preservation to support persistent action
    setTimeout(() => {
      const submissions = JSON.parse(localStorage.getItem("sanket_consultations") || "[]");
      const record = {
        ...formData,
        id: "CONS-" + Math.floor(1000 + Math.random() * 9000),
        timestamp: new Date().toISOString()
      };
      submissions.push(record);
      localStorage.setItem("sanket_consultations", JSON.stringify(submissions));

      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      company: "",
      email: "",
      phone: "",
      requirement: "",
      consultationType: "Strategy & Operational Alignment Briefing"
    });
    setSubmitSuccess(false);
    setValidationError("");
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#0B101A] text-[#F8FAFC] border-t border-white/[0.04] overflow-hidden">
      {/* Background visual graphics */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading Editorial */}
        <div className="flex flex-col mb-16">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-[#5F7082]" />
            <span className="font-mono text-[9px] tracking-widest text-[#5F7082] uppercase font-bold">INQUIRY PATHWAY</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold tracking-tight text-[#F8FAFC] mt-4">
            Initiate Conversation
          </h2>
          <div className="h-0.5 bg-gradient-to-r from-[#5F7082]/40 to-transparent w-36 mt-4" />
        </div>

        {/* Double column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Executive Info Column (5 cols) */}
          <div className="col-span-1 lg:col-span-5 flex flex-col justify-between">
            
            <div className="space-y-6">
              {/* Executive portrait — Input File 5, blurred fill */}
              <div className="relative overflow-hidden rounded-xl bg-[#0B101A] border border-white/5 h-[300px] md:h-[360px] lg:h-[420px]">
                <PortraitBlurredFill
                  src={CONTACT_PORTRAIT}
                  alt="Sanket Kulshrestha — executive portrait"
                />
                <div className="absolute inset-x-0 bottom-0 z-30 h-1/4 bg-gradient-to-t from-[#0B101A]/70 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 z-30">
                  <span className="font-mono text-[9px] text-[#5F7082] uppercase tracking-widest font-bold">
                    SANKET KULSHRESTHA &bull; MANAGING PARTNER
                  </span>
                </div>
              </div>

              <p className="font-serif text-lg font-light text-[#CBD5E1] leading-relaxed">
                If you require strategic risk alignment, operational transformation advisory, or active consulting stewardship, connect securely via direct channels or schedule a brief.
              </p>
            </div>

            {/* Structured Contact Details */}
            <div className="space-y-5 mt-8 lg:mt-0">
              
              {/* Emails block */}
              <div className="flex gap-4">
                <div className="p-3 bg-[#111827] text-[#5F7082] rounded border border-white/[0.04] h-fit shrink-0">
                  <Mail size={16} />
                </div>
                <div>
                  <h4 className="font-mono text-[8.5px] text-[#64748B] tracking-widest uppercase font-bold">DIRECT CORRESPONDENCE</h4>
                  <div className="space-y-1 mt-1 block">
                    <a href="mailto:Sanket.kulshrestha@smarkitals.in" className="text-sm font-sans hover:text-[#5F7082] text-[#CBD5E1] transition-colors block">
                      Sanket.kulshrestha@smarkitals.in
                    </a>
                    <a href="mailto:Sanket@smarkitalstech.com" className="text-sm font-sans hover:text-[#5F7082] text-[#CBD5E1] transition-colors block">
                      Sanket@smarkitalstech.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct channels links block */}
              <div className="flex gap-4">
                <div className="p-3 bg-[#111827] text-[#5F7082] rounded border border-white/[0.04] h-fit shrink-0">
                  <MessageSquare size={16} />
                </div>
                <div className="w-full">
                  <h4 className="font-mono text-[8.5px] text-[#64748B] tracking-widest uppercase font-bold">NETWORKS &amp; DIRECT MESSAGE</h4>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 leading-none text-xs text-[#CBD5E1]">
                    <a 
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <Linkedin size={11} className="text-[#5F7082]" />
                      <span>LinkedIn</span>
                    </a>
                    <span className="text-white/10">|</span>
                    <a 
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <Instagram size={11} className="text-[#5F7082]" />
                      <span>Instagram</span>
                    </a>
                    <span className="text-white/10">|</span>
                    <a 
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 hover:text-white transition-colors"
                    >
                      <MessageSquare size={11} className="text-[#5F7082]" />
                      <span>WhatsApp Direct</span>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Consultation Form (7 cols) */}
          <div className="col-span-1 lg:col-span-7 bg-[#111827] border border-white/[0.04] p-8 md:p-10 rounded-xl relative">
            
            {submitSuccess ? (
              /* Success Panel */
              <div className="text-center py-12 flex flex-col items-center">
                <div className="p-4 bg-[#5F7082]/10 border border-[#5F7082]/20 text-[#5F7082] rounded-full mb-6">
                  <Calendar size={32} />
                </div>
                <h3 className="text-2xl font-serif text-[#F8FAFC] tracking-wide font-bold">
                  Inquiry Logged Successfully
                </h3>
                <p className="text-xs md:text-sm text-[#CBD5E1] font-sans mt-3 max-w-md leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your strategic brief has been received. Sanket Kulshrestha and the Smarkitals team will analyze your request and reach out to you directly within 24 hours.
                </p>

                <button
                  type="button"
                  onClick={resetForm}
                  className="mt-8 px-6 py-2.5 rounded bg-[#5F7082] text-white hover:bg-[#6D7E90] font-sans text-xs tracking-widest font-bold uppercase transition block cursor-pointer"
                >
                  Submit Alternative Inquiry
                </button>
              </div>
            ) : (
              /* Interactive input fields form */
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {validationError && (
                  <div className="p-3 text-xs font-semibold bg-red-500/10 border border-red-500/20 text-red-400 rounded">
                    {validationError}
                  </div>
                )}

                {/* Dual horizontal fields on large screens */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Name Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase font-bold">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Mahindra"
                      className="w-full bg-[#0B101A] border border-white/10 hover:border-[#5F7082]/30 focus:border-[#5F7082] rounded px-4 py-3 text-sm text-white focus:outline-none transition"
                    />
                  </div>

                  {/* Company Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase font-bold">
                      Company / Division
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Smarkitals Strategist"
                      className="w-full bg-[#0B101A] border border-white/10 hover:border-[#5F7082]/30 focus:border-[#5F7082] rounded px-4 py-3 text-sm text-white focus:outline-none transition"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  
                  {/* Email Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase font-bold">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. founder@enterprise.com"
                      className="w-full bg-[#0B101A] border border-white/10 hover:border-[#5F7082]/30 focus:border-[#5F7082] rounded px-4 py-3 text-sm text-white focus:outline-none transition"
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase font-bold">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-[#0B101A] border border-white/10 hover:border-[#5F7082]/30 focus:border-[#5F7082] rounded px-4 py-3 text-sm text-white focus:outline-none transition"
                    />
                  </div>

                </div>

                {/* Consultation Type Selector */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="consultationType" className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase font-bold">
                    Strategic Objective / Brief Topic
                  </label>
                  <select
                    id="consultationType"
                    value={formData.consultationType}
                    onChange={(e) => setFormData({ ...formData, consultationType: e.target.value })}
                    className="w-full bg-[#0B101A] border border-white/10 hover:border-[#5F7082]/30 focus:border-[#5F7082] rounded px-4 py-3 text-sm text-white focus:outline-none transition cursor-pointer"
                  >
                    {consultationTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#111827] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Requirement Narrative (Textarea) */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="requirement" className="font-mono text-[9px] text-[#94A3B8] tracking-widest uppercase font-bold">
                    Primary Scaling &amp; Execution Challenges *
                  </label>
                  <textarea
                    id="requirement"
                    required
                    rows={4}
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    placeholder="Briefly describe your structural friction, alignment barriers, or advisory objectives..."
                    className="w-full bg-[#0B101A] border border-white/10 hover:border-[#5F7082]/30 focus:border-[#5F7082] rounded px-4 py-3 text-sm text-white focus:outline-none transition resize-none leading-relaxed"
                  />
                </div>

                {/* Submit button layout */}
                <div className="pt-4 border-t border-white/[0.04]">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-4 rounded bg-[#5F7082] hover:bg-[#6D7E90] disabled:opacity-55 disabled:cursor-not-allowed text-xs font-mono font-bold text-white tracking-widest uppercase transition-colors duration-300"
                  >
                    <Send size={13} />
                    <span>{isSubmitting ? "PROCESSING REQUEST..." : "Submit Strategic Consultation Request"}</span>
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
