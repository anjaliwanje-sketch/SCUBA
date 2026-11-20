import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, MessageCircle, AlertCircle, ArrowUpRight } from 'lucide-react';
import { ContactFormData, ServiceDivisionId } from '../types';
import { InternationalPhoneInput } from '../components/common/InternationalPhoneInput';

// Official WhatsApp Vector Icon
const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

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
  const [whatsAppOpened, setWhatsAppOpened] = useState(false);
  const [isPopupBlocked, setIsPopupBlocked] = useState(false);
  const [lastWhatsAppUrl, setLastWhatsAppUrl] = useState('');

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
    } else if (!/^[^\s@]+@[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Please provide a brief description of your project or enquiry.';
    } else if (formData.projectDescription.trim().length < 15) {
      newErrors.projectDescription = 'Please provide at least 15 characters to help us understand your scope.';
    }

    if (formData.phone.trim()) {
      const digitsOnly = formData.phone.replace(/\D/g, '');
      if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        newErrors.phone = 'Please enter a valid international phone number.';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const generateWhatsAppMessage = (data: ContactFormData): string => {
    const serviceLabels: Record<string, string> = {
      'digital-experience': 'Digital Experience & Development',
      'search-ai-visibility': 'Search & AI Visibility (SEO · AEO · GEO)',
      'ai-business-automation': 'AI & Business Automation',
      'business-growth-consultancy': 'Business Growth Consultancy',
    };

    const timelineLabels: Record<string, string> = {
      'immediate': 'Immediate (< 4 weeks)',
      '1-3-months': '1 – 3 months',
      '3-6-months': '3 – 6 months',
      'flexible': 'Flexible / Planning stage',
    };

    const service = data.service
      ? serviceLabels[data.service] || data.service
      : 'General Project Discussion / Cross-Division';
    const business = data.businessName.trim() || 'Not specified';
    const phone = data.phone.trim() || 'Not specified';
    const budget = data.budget.trim() || 'Not specified';
    const timeline = data.timeline
      ? timelineLabels[data.timeline] || data.timeline
      : 'Not specified';

    return (
      `Hello SCUBA! 👋\n\n` +
      `I'd like to discuss a project with your team.\n\n` +
      `CLIENT INFORMATION:\n` +
      `- Full Name: ${data.fullName.trim()}\n` +
      `- Business / Organisation: ${business}\n` +
      `- Work Email: ${data.email.trim()}\n` +
      `- Phone / WhatsApp: ${phone}\n\n` +
      `PROJECT INFORMATION:\n` +
      `- Interested Service: ${service}\n` +
      `- Project Description: ${data.projectDescription.trim()}\n` +
      `- Estimated Budget: ${budget}\n` +
      `- Target Timeline: ${timeline}\n\n` +
      `Looking forward to discussing my project with your team!\n\n` +
      `— Submitted through the SCUBA Website.`
    );
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

    // Format message and build WhatsApp URL with encodeURIComponent
    const message = generateWhatsAppMessage(formData);
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/917205325430?text=${encodedMessage}`;

    setLastWhatsAppUrl(whatsappUrl);
    setWhatsAppOpened(true);

    // If an optional form endpoint is configured, also post in background
    const formEndpoint = import.meta.env.VITE_FORM_ENDPOINT;
    if (formEndpoint) {
      try {
        fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        }).catch(() => {
          // Non-blocking background sync
        });
      } catch {
        // Non-blocking
      }
    }

    // Attempt to open WhatsApp in a new tab/window
    let popupBlocked = false;
    try {
      const newWindow = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      if (!newWindow || newWindow.closed || typeof newWindow.closed === 'undefined') {
        popupBlocked = true;
      }
    } catch {
      popupBlocked = true;
    }

    setIsPopupBlocked(popupBlocked);
    setIsSubmitting(false);
  };

  return (
    <main id="main-content" className="w-full pt-8 sm:pt-12 pb-20 sm:pb-24">
      {/* Hero Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-scuba-violet/20 border border-scuba-violet/40 text-scuba-orchid text-xs font-semibold tracking-widest uppercase mb-6 font-mono">
            Project Enquiries
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 sm:mb-8 leading-[1.1]">
            Let's turn your idea into reality<span className="text-scuba-orchid">.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#A6A6A6] leading-relaxed max-w-3xl">
            Whether you have a fully formed technical specification or an early conceptual challenge, tell us about your goals. We review every enquiry within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Direct Contact Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Form Container (7 cols) */}
          <div className="lg:col-span-7 bg-[#0E0E10] border border-[#242428] rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 relative">
            <form onSubmit={handleSubmit} noValidate className="space-y-5 sm:space-y-6">
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

              {/* WhatsApp Redirect Status Notification */}
              {whatsAppOpened && (
                <div className="p-4 sm:p-5 rounded-2xl bg-[#150b20] border border-scuba-orchid/60 text-xs text-[#DCDCDC] space-y-3 animate-fadeIn">
                  <div className="flex items-center space-x-2.5 text-white font-semibold text-sm">
                    <WhatsAppIcon className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span>WhatsApp Opened with Your Pre-Formatted Enquiry</span>
                  </div>
                  <p className="leading-relaxed text-[#A6A6A6]">
                    Your project details have been formatted and transferred to WhatsApp. <strong className="text-white">Please press "Send" in WhatsApp</strong> to deliver your message directly to our engineering lead.
                  </p>
                  
                  {isPopupBlocked ? (
                    <div className="pt-2 border-t border-[#29173d] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                      <span className="text-amber-300 font-medium">
                        Popup blocked by browser? Click to open directly:
                      </span>
                      <a
                        href={lastWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors shadow-md min-h-[44px]"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                        <span>Continue to WhatsApp</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  ) : (
                    <div className="pt-1 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-scuba-muted gap-2">
                      <span>Did WhatsApp not open?</span>
                      <a
                        href={lastWhatsAppUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-scuba-orchid hover:underline inline-flex items-center space-x-1 py-1"
                      >
                        <span>Click here to launch manually</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              )}

              {/* Name & Business */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold tracking-wider text-white uppercase mb-2">
                    Full Name <span className="text-scuba-orchid">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => {
                      setFormData({ ...formData, fullName: e.target.value });
                      if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                    }}
                    placeholder="e.g. Alex Morgan"
                    aria-required="true"
                    aria-invalid={!!errors.fullName}
                    aria-describedby={errors.fullName ? 'fullName-error' : undefined}
                    className={`w-full h-[48px] px-4 rounded-xl bg-[#08080A] border text-xs sm:text-sm text-white placeholder-scuba-muted focus:outline-none transition-colors ${
                      errors.fullName ? 'border-red-500 focus:border-red-500' : 'border-[#242428] focus:border-scuba-orchid'
                    }`}
                  />
                  {errors.fullName && (
                    <p id="fullName-error" className="text-[11px] text-red-400 mt-1.5 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{errors.fullName}</span>
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
                    className="w-full h-[48px] px-4 rounded-xl bg-[#08080A] border border-[#242428] text-xs sm:text-sm text-white placeholder-scuba-muted focus:outline-none focus:border-scuba-orchid transition-colors"
                  />
                </div>
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold tracking-wider text-white uppercase mb-2">
                    Work Email <span className="text-scuba-orchid">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: undefined });
                    }}
                    placeholder="alex@company.com"
                    aria-required="true"
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`w-full h-[48px] px-4 rounded-xl bg-[#08080A] border text-xs sm:text-sm text-white placeholder-scuba-muted focus:outline-none transition-colors ${
                      errors.email ? 'border-red-500 focus:border-red-500' : 'border-[#242428] focus:border-scuba-orchid'
                    }`}
                  />
                  {errors.email && (
                    <p id="email-error" className="text-[11px] text-red-400 mt-1.5 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold tracking-wider text-white uppercase mb-2">
                    Phone / WhatsApp Number
                  </label>
                  <InternationalPhoneInput
                    id="phone"
                    value={formData.phone}
                    onChange={(newPhone, meta) => {
                      setFormData((prev) => ({ ...prev, phone: newPhone }));
                      if (newPhone && !meta.isValid) {
                        setErrors((prev) => ({
                          ...prev,
                          phone: 'Please enter a valid international phone number.',
                        }));
                      } else if (errors.phone) {
                        setErrors((prev) => ({ ...prev, phone: undefined }));
                      }
                    }}
                    error={errors.phone}
                    placeholder="98765 43210"
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-[11px] text-red-400 mt-1.5 flex items-center space-x-1">
                      <AlertCircle className="w-3 h-3 flex-shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
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
                  className="w-full h-[48px] px-4 rounded-xl bg-[#08080A] border border-[#242428] text-xs sm:text-sm text-white focus:outline-none focus:border-scuba-orchid transition-colors cursor-pointer"
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
                  onChange={(e) => {
                    setFormData({ ...formData, projectDescription: e.target.value });
                    if (errors.projectDescription) setErrors({ ...errors, projectDescription: undefined });
                  }}
                  placeholder="Tell us about the idea, current bottlenecks, desired timeline, or key technical expectations..."
                  aria-required="true"
                  aria-invalid={!!errors.projectDescription}
                  aria-describedby={errors.projectDescription ? 'desc-error' : undefined}
                  className={`w-full p-4 rounded-xl bg-[#08080A] border text-xs sm:text-sm text-white placeholder-scuba-muted focus:outline-none transition-colors ${
                    errors.projectDescription ? 'border-red-500 focus:border-red-500' : 'border-[#242428] focus:border-scuba-orchid'
                  }`}
                />
                {errors.projectDescription && (
                  <p id="desc-error" className="text-[11px] text-red-400 mt-1.5 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3 flex-shrink-0" />
                    <span>{errors.projectDescription}</span>
                  </p>
                )}
              </div>

              {/* Budget & Timeline (Optional) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="budget" className="block text-xs font-semibold tracking-wider text-white uppercase mb-2">
                    Estimated Budget (Optional)
                  </label>
                  <input
                    type="text"
                    id="budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="e.g. $10,000 or ₹5,00,000"
                    className="w-full h-[48px] px-4 rounded-xl bg-[#08080A] border border-[#242428] text-xs sm:text-sm text-white placeholder-scuba-muted focus:outline-none focus:border-scuba-orchid transition-colors font-sora"
                  />
                </div>

                <div>
                  <label htmlFor="timeline" className="block text-xs font-semibold tracking-wider text-white uppercase mb-2">
                    Target Timeline (Optional)
                  </label>
                  <select
                    id="timeline"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full h-[48px] px-4 rounded-xl bg-[#08080A] border border-[#242428] text-xs sm:text-sm text-white focus:outline-none focus:border-scuba-orchid transition-colors cursor-pointer"
                  >
                    <option value="">Select expected timeline</option>
                    <option value="immediate">Immediate (&lt; 4 weeks)</option>
                    <option value="1-3-months">1 – 3 months</option>
                    <option value="3-6-months">3 – 6 months</option>
                    <option value="flexible">Flexible / Planning stage</option>
                  </select>
                </div>
              </div>

              {/* Submit Button with WhatsApp Icon */}
              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-scuba-violet hover:bg-scuba-orchid text-white font-semibold text-xs tracking-[0.2em] rounded-xl transition-all duration-300 shadow-glow-violet hover:shadow-glow-orchid flex items-center justify-center space-x-2.5 disabled:opacity-50 disabled:cursor-not-allowed uppercase cursor-pointer group min-h-[52px]"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform flex-shrink-0" />
                  <span>SEND PROJECT ENQUIRY</span>
                </button>
                <p className="text-[11px] text-scuba-muted text-center mt-3">
                  Clicking will open WhatsApp with your pre-formatted enquiry. Your form inputs remain saved here.
                </p>
              </div>
            </form>
          </div>

          {/* Right Direct Details Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-4 sm:space-y-6">
            
            {/* WhatsApp Direct Card */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0E0E10] border border-[#242428] hover:border-scuba-orchid/60 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 sm:mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Instant WhatsApp Channel</h3>
              <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed mb-5 sm:mb-6">
                Need a rapid response or want to share documents directly? Chat live with our technical team.
              </p>
              <a
                href="https://wa.me/917205325430?text=Hello%20SCUBA!%20I%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-emerald-400 hover:text-emerald-300 transition-colors py-1 min-h-[44px]"
              >
                <span>OPEN WHATSAPP (+91 7205325430)</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Direct Email Card */}
            <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#0E0E10] border border-[#242428] hover:border-scuba-orchid/60 transition-colors">
              <div className="w-12 h-12 rounded-2xl bg-scuba-violet/20 border border-scuba-orchid/40 flex items-center justify-center text-scuba-orchid mb-5 sm:mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Direct Agency Communications</h3>
              <p className="text-xs sm:text-sm text-[#A6A6A6] leading-relaxed mb-5 sm:mb-6">
                For RFP submissions, NDA signing requests, and formal vendor evaluations.
              </p>
              <a
                href="mailto:contact@scuba.agency"
                className="inline-flex items-center space-x-2 text-xs font-semibold tracking-wider text-scuba-orchid hover:text-white transition-colors py-1 min-h-[44px]"
              >
                <span>contact@scuba.agency</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Response Promise */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#08080A] border border-[#1F1F24] text-xs text-scuba-muted space-y-2">
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
