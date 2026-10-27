import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  MapPin, 
  Copy, 
  Check, 
  ExternalLink 
} from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import { TechIcons } from './TechIcons';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please enter a message subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);

    const mailSubject = encodeURIComponent(`[Portfolio Contact] ${formData.subject}`);
    const mailBody = encodeURIComponent(
      `Hello Darshan,\n\n${formData.message}\n\n---\nSender: ${formData.name}\nEmail: ${formData.email}`
    );
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${mailSubject}&body=${mailBody}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setSubmissionStatus({
        type: 'opened',
        title: 'Opening Email Client',
        message: `Your message has been pre-formatted for ${personalInfo.email}. If your email app does not launch automatically, you can also send directly using the copied address.`
      });
    }, 400);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-[#090d16] border-t border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-medium tracking-wider uppercase mb-4">
            <span>// 05. CONTACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight">
            Let's Start a Conversation
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed font-sans">
            Interested in hiring me for an internship, junior role, or discussing a full-stack project? Reach out directly or fill out the message form below.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Direct Email Card with One-Click Copy */}
            <div className="p-6 rounded-2xl bg-[#0d1322] border border-white/[0.08] shadow-card space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    Primary Email
                  </span>
                  <p className="text-base sm:text-lg font-semibold text-white truncate mt-0.5">
                    {personalInfo.email}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">
                    Direct channel for recruiters, opportunities, and inquiries.
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 bg-white/[0.05] hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-300">Email Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-400" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span>Launch Mail</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-[#0d1322] border border-white/[0.08] shadow-card flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  Location & Availability
                </span>
                <p className="text-base font-semibold text-white mt-0.5">
                  {personalInfo.location}
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Open to remote full-stack roles worldwide, as well as on-site positions in Gujarat.
                </p>
              </div>
            </div>

            {/* Professional Profiles */}
            <div className="p-6 rounded-2xl bg-[#0d1322] border border-white/[0.08] shadow-card space-y-4">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Professional Links
              </span>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500/40 hover:bg-slate-800 transition-colors text-xs font-medium text-slate-200 group"
                >
                  <TechIcons.github className="w-5 h-5 text-slate-300 group-hover:text-blue-400 transition-colors" />
                  <div>
                    <span className="font-semibold block text-white">GitHub</span>
                    <span className="text-[10px] font-mono text-slate-400">darshanjoshi10022008</span>
                  </div>
                </a>

                <a
                  href={personalInfo.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-900 border border-white/10 hover:border-blue-500/40 hover:bg-slate-800 transition-colors text-xs font-medium text-slate-200 group"
                >
                  <TechIcons.linkedin className="w-5 h-5 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  <div>
                    <span className="font-semibold block text-white">LinkedIn</span>
                    <span className="text-[10px] font-mono text-slate-400">darshan-h-joshi</span>
                  </div>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="p-6 sm:p-8 rounded-2xl bg-[#0d1322] border border-white/[0.08] shadow-card space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Hiring Manager / Team Lead"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.name ? 'border-red-500 focus:ring-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1.5 font-mono">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                    Your Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. recruiter@company.com"
                    className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                      errors.email ? 'border-red-500 focus:ring-red-500' : 'border-white/10'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-red-400 mt-1.5 font-mono">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Subject <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g. Full-Stack Developer Internship Opportunity"
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors ${
                    errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-white/10'
                  }`}
                />
                {errors.subject && (
                  <p className="text-xs text-red-400 mt-1.5 font-mono">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                  Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role, project, or collaboration details..."
                  className={`w-full px-4 py-3 rounded-xl bg-slate-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors resize-none ${
                    errors.message ? 'border-red-500 focus:ring-red-500' : 'border-white/10'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs text-red-400 mt-1.5 font-mono">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-sm transition-all duration-200 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Preparing Mail Client...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-blue-200" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Notice */}
              {submissionStatus && (
                <div className="p-4 rounded-xl bg-blue-950/60 border border-blue-500/30 text-xs text-slate-300 space-y-1">
                  <p className="font-semibold text-blue-300">{submissionStatus.title}</p>
                  <p>{submissionStatus.message}</p>
                </div>
              )}

              <p className="text-[11px] text-slate-500 font-mono text-center">
                Pre-fills user mail client • Connects directly to {personalInfo.email}
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
