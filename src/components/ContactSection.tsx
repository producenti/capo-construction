import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const fullName = `${formData.firstName} ${formData.lastName}`.trim();

    try {
      await fetch('https://formsubmit.co/ajax/capoconstruction@yahoo.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          name: fullName,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          _subject: `New Capo Construction Inquiry: ${fullName}`
        })
      });
    } catch (err) {
      // Fallback open direct email client to capoconstruction@yahoo.com
      const mailSubject = encodeURIComponent(`Capo Construction Inquiry: ${fullName}`);
      const mailBody = encodeURIComponent(
        `Emri / Name: ${fullName}\nEmail: ${formData.email}\nTelefon / Phone: ${formData.phone}\n\nMesazhi / Message:\n${formData.message}`
      );
      window.location.href = `mailto:capoconstruction@yahoo.com?subject=${mailSubject}&body=${mailBody}`;
    } finally {
      setLoading(false);
      setSubmitted(true);

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FFFFFF', '#A1A1AA', '#3F3F46']
      });
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-8 border-t border-white/5 bg-[#0A0A0C]">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            {/* Header with Monumental Outline Number 06 */}
            <div className="flex items-start sm:items-center gap-4 sm:gap-6 mb-4">
              <span className="text-6xl sm:text-8xl md:text-9xl font-condensed text-outline-white select-none shrink-0 leading-none">
                06
              </span>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-6 h-px bg-white/30" />
                  <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
                    {lang === 'AL' ? 'KËRKESË PËR PROJEKT & KONTAKT' : 'PROJECT INQUIRY & CONTACT'}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter uppercase leading-[1.02]">
                  {t.contact.titleMain} <br />
                  <span className="text-gradient">{t.contact.titleAccent}</span>
                </h2>
              </div>
            </div>

            {/* Direct Contact Info - Pure Text */}
            <div className="flex flex-col gap-6 pt-2">
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] text-neutral-400 uppercase font-mono tracking-widest">
                  {lang === 'AL' ? 'Qendra Kryesore' : 'Headquarters'}
                </span>
                <span className="text-base sm:text-lg font-semibold text-white">
                  {t.contact.headquarters}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] text-neutral-400 uppercase font-mono tracking-widest">
                  {lang === 'AL' ? 'Telefon Inxhinierik' : 'Engineering Phone'}
                </span>
                <span className="text-base sm:text-lg font-semibold text-white">
                  {t.contact.phone}
                </span>
              </div>

              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] text-neutral-400 uppercase font-mono tracking-widest">
                  {lang === 'AL' ? 'Email Zyrtar' : 'Official Email'}
                </span>
                <a
                  href={`mailto:${t.contact.email}`}
                  className="text-base sm:text-lg font-semibold text-white hover:text-neutral-300 transition-colors w-fit"
                >
                  {t.contact.email}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="w-full">
              
              {submitted ? (
                <div className="flex flex-col items-start py-10 gap-4 animate-in fade-in duration-500">
                  <div className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
                    <CheckCircle2 className="w-7 h-7 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">{t.contact.form.successTitle}</h3>
                  <p className="text-sm text-neutral-300 max-w-md font-light leading-relaxed">
                    {t.contact.form.successDesc}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full border border-neutral-600 hover:border-white text-xs font-mono text-white uppercase tracking-wider hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {t.contact.form.anotherInquiry}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6">
                  
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-normal text-neutral-300">
                        {t.contact.form.firstName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white/[0.03] border border-neutral-700/80 focus:border-neutral-400 text-white text-base focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-sm font-normal text-neutral-300">
                        {t.contact.form.lastName}
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        className="w-full px-4 py-3 rounded-md bg-white/[0.03] border border-neutral-700/80 focus:border-neutral-400 text-white text-base focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-normal text-neutral-300">
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-white/[0.03] border border-neutral-700/80 focus:border-neutral-400 text-white text-base focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-normal text-neutral-300">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-white/[0.03] border border-neutral-700/80 focus:border-neutral-400 text-white text-base focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-normal text-neutral-300">
                      {t.contact.form.message}
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-md bg-white/[0.03] border border-neutral-700/80 focus:border-neutral-400 text-white text-base focus:outline-none transition-colors resize-y min-h-[140px]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="self-start px-7 py-2.5 rounded-full border border-neutral-600/80 hover:border-neutral-400 bg-white/[0.03] hover:bg-white/[0.08] text-neutral-300 hover:text-white text-sm sm:text-base font-medium transition-all flex items-center gap-2 mt-2 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
                  >
                    <span>{loading ? (lang === 'AL' ? 'Dërgimi...' : 'Sending...') : t.contact.form.submitBtn}</span>
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </button>

                </form>
              )}

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
