import { useState } from "react";
import { motion } from "framer-motion";
import BackgroundGrid from "../background/BackgroundGrid";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", purpose: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: "✉️",
      title: "Email",
      value: "hello@amitkumar.com",
      link: "mailto:aatc4410.business@gmail.com",
      gradient: "from-blue-500 to-cyan-400"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "+91 96239 24460",
      link: "https://wa.me/919623924460",
      gradient: "from-green-500 to-emerald-400"
    }
  ];

  const socialPlatforms = [
    {
      name: "Instagram",
      icon: "📷",
      handle: "@the_amitkumar",
      url: "https://instagram.com/the_amitkumar_official",
      color: "from-pink-500 to-rose-500"
    },
    {
      name: "YouTube",
      icon: "▶️",
      handle: "Amit Kumar",
      url: "https://www.youtube.com/@amolvlogmore",
      color: "from-red-500 to-orange-500"
    },
  ];

  return (
    <section id="contact" className="relative py-10 md:py-14 overflow-hidden bg-white">
      <BackgroundGrid />
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-40 h-40 bg-gradient-to-br from-indigo-50/15 to-purple-50/15 rounded-full blur-xl" />
        <div className="absolute bottom-1/3 left-0 w-48 h-48 bg-gradient-to-tr from-orange-50/10 to-pink-50/10 rounded-full blur-xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-5">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full border border-indigo-200/40 mb-3">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" />
            <span className="text-xs font-semibold text-indigo-700">CONTACT</span>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Create</span>
          </h2>
          
          <p className="text-gray-600 text-xs max-w-sm mx-auto">
            Ready to collaborate? Reach out below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-4 md:gap-5 mb-6">
          {/* Contact Form - More Compact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-lg p-4 md:p-5 border border-gray-200 shadow-xs">
              <div className="mb-4">
                <div className="flex items-center gap-2.5 mb-2">
                  <div className="w-8 h-8 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white text-xs">✏️</span>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-gray-900">Start a Project</h3>
                    <p className="text-gray-600 text-xs md:text-sm">Share your vision with me</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid md:grid-cols-2 gap-2.5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-100 outline-none transition-all text-sm md:text-base"
                      placeholder="Your Name"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-100 outline-none transition-all text-sm md:text-base"
                      placeholder="Email Address"
                    />
                  </div>
                </div>

                <div>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-100 outline-none transition-all text-sm md:text-base"
                  >
                    <option value="">Select Project Type</option>
                    <option value="collaboration">Brand Collaboration</option>
                    <option value="content">Content Creation</option>
                    <option value="marketing">Marketing Campaign</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={3}
                    className="w-full px-3 py-2 rounded-md border border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-100 outline-none transition-all resize-none text-sm md:text-base"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-md hover:shadow-xs transition-all text-sm md:text-base"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-1.5">
                      <svg className="w-3.5 h-3.5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-2.5 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-md"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-green-800 text-[11px]">Message sent!</p>
                        <p className="text-[10px] text-green-600">Will respond within 24h.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info - More Compact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-lg p-4 md:p-5 border border-gray-200 shadow-xs h-full">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 rounded-md bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                  <span className="text-white text-xs">📞</span>
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-gray-900">Contact Info</h3>
                  <p className="text-gray-600 text-xs md:text-sm">Get in touch directly</p>
                </div>
              </div>
              
              <div className="space-y-2.5 mb-5">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target={info.link.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -1 }}
                    className="flex items-center gap-2.5 p-2.5 rounded-md border border-gray-200 hover:border-indigo-300 hover:shadow-xs transition-all group"
                  >
                    <div className={`w-8 h-8 rounded-md bg-gradient-to-r ${info.gradient} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-sm text-white">{info.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-[11px] group-hover:text-indigo-600 transition-colors">
                        {info.title}
                      </h4>
                      <p className="text-gray-900 font-medium text-xs truncate">{info.value}</p>
                    </div>
                    <div className="text-gray-400 group-hover:text-indigo-500 transition-colors">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Quick Stats - Compact */}
              <div className="mb-5">
                <h4 className="font-semibold text-gray-900 text-[11px] mb-2">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-2">
                  <div className="text-center p-2 rounded-md border border-indigo-100 bg-indigo-50">
                    <div className="text-sm font-bold text-gray-900">100K+</div>
                    <div className="text-[10px] text-gray-600">Views</div>
                  </div>
                  <div className="text-center p-2 rounded-md border border-pink-100 bg-pink-50">
                    <div className="text-sm font-bold text-gray-900">24h</div>
                    <div className="text-[10px] text-gray-600">Response</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Follow Me & Quick Response - Compact & Side by Side */}
        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-6">
          {/* Follow Me - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-4 md:p-5 border border-gray-200 shadow-xs"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-md bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center">
                <span className="text-white text-xs">🌟</span>
              </div>
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">Follow Me</h3>
                <p className="text-gray-600 text-xs md:text-sm">Stay connected</p>
              </div>
            </div>
            
            <div className="space-y-2">
              {socialPlatforms.map((platform, index) => (
                <motion.a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -3 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 2 }}
                  className="flex items-center gap-2.5 p-2.5 rounded-md border border-gray-200 hover:border-gray-300 hover:shadow-xs transition-all group"
                >
                  <div className="w-8 h-8 rounded-md bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm">{platform.icon}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-gray-900 truncate">{platform.name}</div>
                    <div className="text-[11px] text-gray-600 truncate">{platform.handle}</div>
                  </div>
                  <div className="text-gray-400 group-hover:text-indigo-500 transition-colors">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Response - Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-4 md:p-5 border border-indigo-500/20"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2.5">
                <span className="text-white text-lg">⚡</span>
              </div>
              
              <div className="mb-3">
                <h3 className="font-bold text-white text-base mb-1">Quick Response</h3>
                <p className="text-indigo-100 text-[11px]">Usually within hours</p>
              </div>
              
              <div className="text-[10px] text-indigo-100 mb-3">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>Active now</span>
                </div>
                <div>24/7 WhatsApp available</div>
              </div>
              
              <motion.a
                href="https://wa.me/919623924460"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center gap-1.5 w-full py-2 bg-white text-indigo-600 text-xs font-semibold rounded-md hover:shadow-xs transition-all border border-white"
              >
                <span className="text-sm">💬</span>
                WhatsApp Now
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center pt-5 border-t border-gray-200"
        >
          <p className="text-gray-500 text-[10px]">
            Creator & Restaurateur • Based in Solapur • Available for collaborations
          </p>
        </motion.div>
      </div>
    </section>
  );
}