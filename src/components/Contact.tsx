import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, Beaker } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'manujchaudhari123@gmail.com',
      href: 'mailto:manujchaudhari123@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 84329 97835',
      href: 'tel:+918432997835',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Maharashtra, India',
      href: '#',
    },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/webcrafter011', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/manujchaudhari', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/ProgressFlex_', label: 'Twitter' }, // Replace '#' with your actual Twitter link if available
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-bb-dark via-bb-gray to-bb-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-oswald tracking-wider">
            <span className="bg-gradient-to-r from-bb-green via-bb-yellow to-bb-orange bg-clip-text text-transparent">
              MAKE CONTACT
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto font-mono">
            I'm always open to freelance projects, collaborations, or anything exciting in full-stack development.
            Let’s build something powerful together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-bb-gray/30 border border-bb-green/30 rounded-xl p-8">
            <h3 className="text-3xl font-semibold mb-6 font-oswald text-bb-green">ESTABLISH CONNECTION</h3>
            <p className="text-gray-300 mb-8 font-mono">
              Whether you're launching a side project or scaling a startup, I'm ready to code, collaborate, and contribute.
              Let's talk ideas, timelines, and technology.
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-bb-dark/50 rounded-lg border border-bb-green/20 hover:border-bb-yellow hover:bg-bb-gray/50 transition-all duration-300"
                  >
                    <Icon className="h-6 w-6 text-bb-green" />
                    <div>
                      <p className="text-sm text-gray-400 font-mono">{info.label}</p>
                      <p className="text-white font-medium font-mono">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 font-oswald text-bb-yellow">NETWORK CONNECTIONS</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-bb-dark/50 text-bb-green rounded-lg border border-bb-green/30 hover:border-bb-yellow hover:text-bb-yellow hover:bg-bb-gray/50 transition-all duration-300 transform hover:scale-110"
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 p-6 bg-bb-green/10 border border-bb-green/30 rounded-lg">
              <p className="text-bb-green font-mono text-sm mb-2">
                I am the one who codes!
              </p>
              <p className="text-gray-400 font-mono text-xs">
                - Available for freelance projects, collaborations, and development teams.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-bb-gray/30 border border-bb-green/30 rounded-xl p-8">
            <h3 className="text-3xl font-semibold mb-6 font-oswald text-bb-green">INITIATE OPERATION</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-bb-yellow mb-2 font-oswald">
                    CODENAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bb-dark/50 border border-bb-green/30 rounded-lg text-white placeholder-gray-500 focus:border-bb-yellow focus:ring-1 focus:ring-bb-yellow transition-colors font-mono"
                    placeholder="Enter your alias"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-bb-yellow mb-2 font-oswald">
                    SECURE EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-bb-dark/50 border border-bb-green/30 rounded-lg text-white placeholder-gray-500 focus:border-bb-yellow focus:ring-1 focus:ring-bb-yellow transition-colors font-mono"
                    placeholder="your.email@secure.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-bb-yellow mb-2 font-oswald">
                  OPERATION TYPE
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bb-dark/50 border border-bb-green/30 rounded-lg text-white placeholder-gray-500 focus:border-bb-yellow focus:ring-1 focus:ring-bb-yellow transition-colors font-mono"
                  placeholder="Website, Consultation, Collaboration..."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-bb-yellow mb-2 font-oswald">
                  OPERATION DETAILS
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-bb-dark/50 border border-bb-green/30 rounded-lg text-white placeholder-gray-500 focus:border-bb-yellow focus:ring-1 focus:ring-bb-yellow transition-colors resize-none font-mono"
                  placeholder="Describe your project or idea..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-gradient-to-r from-bb-green to-bb-yellow text-bb-dark rounded-lg font-bold font-oswald hover:from-bb-yellow hover:to-bb-orange transition-all duration-300 transform hover:scale-105 shadow-lg animate-glow"
              >
                <Send className="h-5 w-5" />
                <span>TRANSMIT MESSAGE</span>
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16">
          <div className="bg-bb-gray/30 border border-bb-yellow/30 rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-2xl text-bb-yellow font-mono mb-4">
              We're done when I say we're done.
            </p>
            <p className="text-gray-300 font-mono">
              I build digital experiences with care, consistency, and clean code.
              Let’s work together to create something great.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
