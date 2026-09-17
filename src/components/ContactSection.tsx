import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { REGIONS_LIST } from '../data/companyData';
import { useLanguage } from '../context/LanguageContext';

export const ContactSection: React.FC = () => {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: 'Infrastructure',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('https://formsubmit.co/ajax/capoconstruction@yahoo.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          sector: formData.projectType,
          message: formData.message,
          _subject: `New Capo Construction Inquiry: ${formData.projectType} - ${formData.name}`
        })
      });
    } catch (err) {
      // Fallback open direct email client to capoconstruction@yahoo.com
      const mailSubject = encodeURIComponent(`Capo Construction Inquiry: ${formData.projectType} - ${formData.name}`);
      const mailBody = encodeURIComponent(
        `Emri / Name: ${formData.name}\nEmail: ${formData.email}\nTelefon / Phone: ${formData.phone}\nKompania / Company: ${formData.company}\nSektori / Sector: ${formData.projectType}\n\nMesazhi / Message:\n${formData.message}`
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
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-px bg-white/30" />
                <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
                  {t.contact.tag}
                </span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tighter font-display leading-[1.05]">
                {t.contact.titleMain} <br />
                <span className="text-gradient">{t.contact.titleAccent}</span>
              </h2>
            </div>

            <p className="text-base text-neutral-300 font-light leading-relaxed">
              {t.contact.desc}
            </p>

            {/* Direct Contact Hub */}
            <div className="flex flex-col gap-4 p-6 rounded-3xl glass-card border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl glass-nav flex items-center justify-center text-white shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase font-mono block">
                    {lang === 'AL' ? 'Qendra Kryesore' : 'Headquarters'}
                  </span>
                  <span className="text-xs font-semibold text-white">{t.contact.headquarters}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl glass-nav flex items-center justify-center text-white shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase font-mono block">
                    {lang === 'AL' ? 'Telefon Inxhinierik' : 'Engineering Phone'}
                  </span>
                  <span className="text-xs font-semibold text-white">{t.contact.phone}</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-2xl glass-nav flex items-center justify-center text-white shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] text-neutral-400 uppercase font-mono block">
                    {lang === 'AL' ? 'Email Zyrtar' : 'Official Email'}
                  </span>
                  <span className="text-xs font-semibold text-white">{t.contact.email}</span>
                </div>
              </div>
            </div>

            {/* Regional Coverage Tags */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-400 mb-3">{t.contact.regionsTitle}</h4>
              <div className="flex flex-wrap gap-2">
                {REGIONS_LIST.map((reg, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 rounded-full glass-card border border-white/10 text-xs text-neutral-200 font-mono flex items-center gap-2"
                  >
                    <span>📍</span>
                    <span>{lang === 'AL' ? reg.cityAl : reg.city}</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl glass-card border border-white/15 relative shadow-2xl">
              
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12 gap-4 animate-in fade-in duration-500">
                  <div className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-xl">
                    <CheckCircle2 className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-2xl font-bold text-white font-display">{t.contact.form.successTitle}</h3>
                  <p className="text-sm text-neutral-300 max-w-md font-light">
                    {t.contact.form.successDesc}
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full glass-nav border border-white/20 text-xs font-mono text-white uppercase tracking-wider hover:bg-white/10"
                  >
                    {t.contact.form.anotherInquiry}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-neutral-400">{t.contact.form.name}</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.form.namePlaceholder}
                        className="px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-neutral-400">{t.contact.form.email}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-neutral-400">{t.contact.form.phone}</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.contact.form.phonePlaceholder}
                        className="px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-mono uppercase tracking-widest text-neutral-400">{t.contact.form.company}</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={t.contact.form.companyPlaceholder}
                        className="px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-neutral-400">{t.contact.form.sector}</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="px-4 py-3.5 rounded-2xl bg-[#181920] border border-white/10 text-white text-sm focus:outline-none focus:border-white/30 transition-colors"
                    >
                      <option value="Infrastructure">{t.contact.form.sectors.infra}</option>
                      <option value="Roads & Bridges">{t.contact.form.sectors.roads}</option>
                      <option value="Residential">{t.contact.form.sectors.residential}</option>
                      <option value="Villas">{t.contact.form.sectors.villas}</option>
                      <option value="Concrete & Reinforcement">{t.contact.form.sectors.concrete}</option>
                      <option value="Facade Scaffolding">{t.contact.form.sectors.scaffolding}</option>
                      <option value="Tunnels">{t.contact.form.sectors.tunnels}</option>
                      <option value="General Contracting">{t.contact.form.sectors.general}</option>
                    </select>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-mono uppercase tracking-widest text-neutral-400">{t.contact.form.desc}</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.descPlaceholder}
                      className="px-4 py-3.5 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-full bg-white text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:bg-neutral-200 hover:scale-[1.01] active:scale-95 shadow-xl flex items-center justify-center gap-2 group mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span>{loading ? (lang === 'AL' ? 'Dërgimi...' : 'Sending...') : t.contact.form.submitBtn}</span>
                    <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${loading ? 'animate-pulse' : 'group-hover:translate-x-1'}`} />
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
