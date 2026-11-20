import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MessageCircle, Send, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';
import { ContactFormData, ServiceDivisionId } from '../types';

export const ContactPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialService = (searchParams.get('service') as ServiceDivisionId) || '';

  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    businessName: '',
    email: '',
    phone: '',
    service: initialService,
    projectDescription: '',
    budget: '',
    timeline: '',
  });

  // Honeypot field for spam prevention (PRD CON-5)
  const [honeypot, setHoneypot] = useState('');

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [endpointUnconfiguredNotice, setEndpointUnconfiguredNotice] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please provide a brief description of your project or enquiry.';
    } else if (formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription = 'Please provide at least 15 characters to help us understand your scope.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Silently reject bots filling honeypot
    if (honeypot) {
      return;
    }

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);
    setEndpointUnconfiguredNotice(false);

    const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT;

    if (!formEndpoint) {
      // PRD CON-4: "If unconfigured, show a clear 'not yet configured' message and offer WhatsApp."
      setTimeout(() => {
        setIsSubmitting(false);
        setEndpointUnconfiguredNotice(true);
      }, 500);
      return;
    }

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        setEndpointUnconfiguredNotice(true);
      }
    } catch {
      setEndpointUnconfiguredNotice(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const createWhatsAppPrefillUrl = () => {
    const text = encodeURIComponent(
      `Hello SCUBA!\n\nI would like to submit a project enquiry:\n` +
      `• Name: ${formData.fullName || 'Not specified'}\n` +
      `• Business: ${formData.businessName || 'Not specified'}\n` +
      `• Email: ${formData.email || 'Not specified'}\n` +
      `• Service: ${formData.service || 'General enquiry'}\n` +
      `• Scope: ${formData.projectDescription || 'Ready to discuss'}\n` +
      `• Budget: ${formData.budget || 'Open'}\n` +
      `• Timeline: ${formData.timeline || 'Flexible'}`
    );
    return `https://wa.me/917205325430?text=${text}`;
  };

  return (
    <main id="main-content" className="w-full pt-12 pb-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 py-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-scuba-violet/20 border border-scuba-violet/40 text-scuba-orchid text-xs font-semibold tracking-widest uppercase mb-6">
            Project Enquiries
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight mb-8">
            Let's turn your idea into reality<span className="text-scuba-orchid">.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[#A6A6A6] leading-relaxed max-w-3xl">
            Whether you have a fully formed technical specification or an early conceptual challenge, tell us about your goals. We review every enquiry within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Direct Contact Cards */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-[#0E0E10] border border-[#242428] rounded-3xl p-8 sm:p-12 relative">
            
            {submitSuccess ? (
              <div className="py-12 text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-3xl font-bold text-white tracking-tight">
                  Enquiry Received
                </h2>
                <p className="text-sm sm:text-base text-[#A6A6A6] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. A senior SCUBA engineer will review your project parameters and reach out via email shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitSuccess(false);
                    setFormData({
                      fullName: '',
                      businessName: '',
                      email: '',
                      phone: '',
                      service: '',
                      projectDescription: '',
                      budget: '',
                      timeline: '',
                    });
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#1A1A1A] hover:bg-scuba-violet text-white text-xs font-semibold tracking-wider transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                {/* Honeypot Spam Protection Field (Hidden) */}
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website-hp">Leave this field blank</label>
                  <input
                    type="text"
                    id="website-hp"
                    name="website-hp"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Unconfigured Notice Box per PRD CON-4 */}
                {endpointUnconfiguredNotice && (
                  <div className="p-5 rounded-2xl bg-[#19111c] border border-scuba-orchid/60 text-xs text-[#DCDCDC] space-y-3">
                    <div className="flex items-center space-x-2 text-scuba-orchid font-semibold text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Form Endpoint Not Yet Configured</span>
                    </div>
                    <p>
                      The production form backend (`VITE_FORM_ENDPOINT`) is currently in setup mode. You can instantly transmit your completed details directly to our engineering lead via WhatsApp:
                    </p>
                    <a
                      href={createWhatsAppPrefillUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Send My Form Data via WhatsApp</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )}

                {/* Name & Business */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold tracking-wider text-white uppercase mb-2">
                      Full Name <span className="text-scuba-orchid">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      aria-required="true"
                      aria-invalid={!!errors.fullName}
                      aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-[#08080A] border text-xs sm:text-sm text-white placeholder-scuba-muted focus:outline-none transition-colors ${
                        errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-[#242428] focus:border-scuba-orchid'
                      }`}
                    />
                    {errors.fullName && (
                      <p id="fullName-error" className="text-[11px] text-red-400 mt-1.5">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="businessName" className="block text-xs font-semibold tracking-wider text-white uppercase mb-2">
                      Business or Organisation
                    </label>
                    <input
                      type="text"
                      id="businessName"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Acme Technologies"
                      className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-[#242428] text-xs sm:text-sm text-white placeholder-scuba-muted focus:outline-none focus:border-scuba-orchid transition-colors"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold tracking-wider text-white uppercase mb-2">
                      Work Email <span className="text-scuba-orchid">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      aria-required="true"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3 rounded-xl bg-[#08080A] border text-xs sm:text-sm text-white placeholder-scuba-muted focus:outline-none transition-colors ${
                        errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#242428] focus:border-scuba-orchid'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-[11px] text-red-400 mt-1.5">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold tracking-wider text-white uppercase mb-2">
                      Phone / WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-[#242428] text-xs sm:text-sm text-white placeholder-scuba-muted focus:outline-none focus:border-scuba-orchid transition-colors"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-xs font-semibold tracking-wider text-white uppercase mb-2">
                    Primary Service Division Interested In
                  </label>
                  <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value as ServiceDivisionId })}
                    className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-[#242428] text-xs sm:text-sm text-white focus:outline-none focus:border-scuba-orchid transition-colors"
                  >
                    <option value="">General Project Discussion / Cross-Division</option>
                    <option value="digital-experience">Digital Experience & Development</option>
                    <option value="search-ai-visibility">Search & AI Visibility (SEO · AEO · GEO)</option>
                    <option value="ai-business-automation">AI & Business Automation</option>
                    <option value="business-growth-consultancy">Business Growth Consultancy</option>
                  </select>
                </div>

                {/* Project Description */}
                <div>
                  <label htmlFor="projectDescription" className="block text-xs font-semibold tracking-wider text-white uppercase mb-2">
                    Project Description & Requirements <span className="text-scuba-orchid">*</span>
                  </label>
                  <textarea
                    id="projectDescription"
                    rows={5}
                    value={formData.projectDescription}
                    onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
                    placeholder="Tell us about the idea, current bottlenecks, desired timeline, or key technical expectations..."
                    aria-required="true"
                    aria-invalid={!!errors.projectDescription}
                    aria-describedby={errors.projectDescription ? 'desc-error' : undefined}
                    className={`w-full px-4 py-3 rounded-xl bg-[#08080A] border text-xs sm:text-sm text-white placeholder-scuba-muted focus:outline-none transition-colors ${
                      errors.projectDescription ? 'border-red-500 focus:border-red-500' : 'border-[#242428] focus:border-scuba-orchid'
                    }`}
                  />
                  {errors.projectDescription && (
                    <p id="desc-error" className="text-[11px] text-red-400 mt-1.5">
                      {errors.projectDescription}
                    </p>
                  )}
                </div>

                {/* Budget & Timeline (Optional) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="budget" className="block text-xs font-semibold tracking-wider text-white uppercase mb-2">
                      Estimated Budget (Optional)
                    </label>
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-[#242428] text-xs sm:text-sm text-white focus:outline-none focus:border-scuba-orchid transition-colors"
                    >
                      <option value="">Select an estimated range</option>
                      <option value="under-5k">&lt; $5,000</option>
                      <option value="5k-15k">$5,000 – $15,000</option>
                      <option value="15k-30k">$15,000 – $30,000</option>
                      <option value="30k-plus">$30,000+</option>
                      <option value="retainer">Monthly Retainer</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-xs font-semibold tracking-wider text-white uppercase mb-2">
                      Target Timeline (Optional)
                    </label>
                    <select
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#08080A] border border-[#242428] text-xs sm:text-sm text-white focus:outline-none focus:border-scuba-orchid transition-colors"
                    >
                      <option value="">Select expected timeline</option>
                      <option value="immediate">Immediate (&lt; 4 weeks)</option>
                      <option value="1-3-months">1 – 3 months</option>
                      <option value="3-6-months">3 – 6 months</option>
                      <option value="flexible">Flexible / Planning stage</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button (PRD CON-3) */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-scuba-violet hover:bg-scuba-orchid text-white font-semibold text-xs tracking-[0.2em] rounded-xl transition-all duration-300 shadow-glow-violet hover:shadow-glow-orchid flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed uppercase"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING ENQUIRY...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEND PROJECT ENQUIRY</span>
                      </>
                    )}
                  </button>
                  <p className="text-[11px] text-scuba-muted text-center mt-3">
                    By submitting, you agree to our confidential handling of your data.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Direct Details Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* WhatsApp Direct Card */}
            <div className="p-8 rounded-3xl bg-[#0E0E10] border border-[#242428] hover:border-scuba-orchid/60 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Instant WhatsApp Channel</h3>
              <p className="text-sm text-[#A6A6A6] leading-relaxed mb-6">
                Need a rapid response or want to share documents directly? Chat live with our technical team.
              </p>
              <a
                href="https://wa.me/917205325430?text=Hello%20SCUBA!%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>OPEN WHATSAPP (+91 7205325430)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Email Card */}
            <div className="p-8 rounded-3xl bg-[#0E0E10] border border-[#242428] hover:border-scuba-orchid/60 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-scuba-violet/20 border border-scuba-orchid/40 flex items-center justify-center text-scuba-orchid mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Agency Communications</h3>
              <p className="text-sm text-[#A6A6A6] leading-relaxed mb-6">
                For RFP submissions, NDA signing requests, and formal vendor evaluations.
              </p>
              <a
                href="mailto:contact@scuba.agency"
                className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-scuba-orchid hover:text-white transition-colors"
              >
                <span>contact@scuba.agency</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Response Promise */}
            <div className="p-6 rounded-2xl bg-[#08080A] border border-[#1F1F24] text-xs text-scuba-muted space-y-2">
              <p className="font-semibold text-white">Our 24-Hour Review Protocol:</p>
              <p>
                Every enquiry is reviewed directly by a senior engineer and strategy partner—never an automated autoresponder queue or junior salesperson.
              </p>
            </div>

          </div>

        </div>
      </section>
    </main>
  );
};
