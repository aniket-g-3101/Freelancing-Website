import { useState } from "react";
import { motion } from "framer-motion";

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
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", purpose: "", message: "" });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactWays = [
    {
      icon: "📧",
      title: "Email",
      value: "amitkumar@example.com",
      link: "mailto:amitkumar@example.com",
      color: "bg-gradient-to-br from-blue-50 to-blue-100",
      textColor: "text-blue-600"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "+91 98765 43210",
      link: "https://wa.me/919876543210",
      color: "bg-gradient-to-br from-green-50 to-green-100",
      textColor: "text-green-600"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Solapur, Maharashtra",
      link: "#",
      color: "bg-gradient-to-br from-purple-50 to-purple-100",
      textColor: "text-purple-600"
    }
  ];

  const socialPlatforms = [
    {
      name: "Instagram",
      icon: "📷",
      handle: "@the_amitkumar_official",
      url: "https://instagram.com/the_amitkumar_official",
      gradient: "from-pink-500 to-orange-400"
    },
    {
      name: "YouTube",
      icon: "▶️",
      handle: "Amit Kumar",
      url: "https://youtube.com/@amitkumar",
      gradient: "from-red-500 to-red-600"
    },
    {
      name: "Facebook",
      icon: "👥",
      handle: "Amit Kumar",
      url: "https://facebook.com/amitkumar",
      gradient: "from-blue-600 to-blue-500"
    }
  ];

  const collaborationTypes = [
    { icon: "🤝", text: "Brand Collaborations" },
    { icon: "🎬", text: "Content Creation" },
    { icon: "📢", text: "Social Media Marketing" },
    { icon: "💼", text: "Business Partnerships" }
  ];

  return (
    <section id="contact" className="py-12 md:py-20 relative overflow-hidden bg-white">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-orange-50 to-pink-50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-indigo-700">CONTACT</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Work Together</span>
          </h2>
          
          <p className="text-gray-600 max-w-md mx-auto">
            Have a project in mind? Let's create something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send a Message</h3>
                <p className="text-gray-600">Fill out the form and I'll get back to you soon.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Purpose
                  </label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all"
                  >
                    <option value="">Select purpose</option>
                    <option value="collaboration">Brand Collaboration</option>
                    <option value="content">Content Creation</option>
                    <option value="marketing">Marketing</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                        <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-green-800">Message sent successfully!</p>
                        <p className="text-sm text-green-600">I'll get back to you within 24 hours.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1 space-y-8"
          >
            {/* Contact Methods */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-4">
                {contactWays.map((method, index) => (
                  <motion.a
                    key={index}
                    href={method.link}
                    target={method.link.startsWith('http') ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-lg ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <span className="text-xl">{method.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className={`font-semibold ${method.textColor}`}>{method.title}</h4>
                      <p className="text-gray-900 font-medium">{method.value}</p>
                    </div>
                    <div className="text-gray-400 group-hover:text-indigo-500 transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Collaboration Types */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">I Work On</h3>
              
              <div className="grid grid-cols-2 gap-3">
                {collaborationTypes.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-white/80 rounded-xl border border-white/50 backdrop-blur-sm"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
                      <span className="text-sm">{item.icon}</span>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Me</h3>
              
              <div className="grid grid-cols-3 gap-3">
                {socialPlatforms.map((platform, index) => (
                  <motion.a
                    key={index}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`relative overflow-hidden rounded-xl p-4 text-center border border-gray-100 hover:shadow-lg transition-all group`}
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${platform.gradient} opacity-0 group-hover:opacity-10 transition-opacity`} />
                    
                    <div className="relative">
                      <div className="text-2xl mb-2">{platform.icon}</div>
                      <div className="text-sm font-semibold text-gray-900">{platform.name}</div>
                      <div className="text-xs text-gray-600 mt-1 truncate">{platform.handle}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quick Response Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 md:p-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-left">
                <h3 className="text-xl font-bold text-white mb-2">Quick Response Guaranteed</h3>
                <p className="text-indigo-100">Usually respond within 24 hours</p>
              </div>
              
              <div className="flex gap-3">
                <motion.a
                  href="mailto:amitkumar@example.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 bg-white text-indigo-600 font-semibold rounded-lg hover:shadow-lg transition-all"
                >
                  Email Now
                </motion.a>
                
                <motion.a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-5 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 hover:shadow-lg transition-all"
                >
                  WhatsApp
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}