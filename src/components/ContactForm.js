import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import { useForm, ValidationError } from '@formspree/react';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({ show: false, type: '', message: '' });
  const formRef = useRef(null);
  // Initialize Formspree
  const [state, handleFormspreeSubmit] = useForm("mblyzyba");
  
  // Track form submission state
  const isSubmitting = state.submitting;

  // Handle form data changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Watch for formspree state changes
  useEffect(() => {
    if (state.succeeded) {
      // Show success message
      setFormStatus({ 
        show: true, 
        type: 'success', 
        message: "Message sent successfully! I'll get back to you soon." 
      });
      
      // Also show a toast
      toast.success("Message sent successfully! I'll get back to you soon.");
      
      // Reset form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Scroll to the form to show the status message
      if (formRef.current) {
        formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    } else if (state.errors && state.errors.length > 0) {
      // Show error message
      setFormStatus({
        show: true,
        type: 'error',
        message: "There was a problem sending your message. Please try again."
      });
      
      toast.error("Failed to send message. Please try again.");
    }
  }, [state.succeeded, state.errors]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ show: false, type: '', message: '' });
    // Let Formspree handle the submission
    handleFormspreeSubmit(e);
  };

  return (
    <>
      <ToastContainer 
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ zIndex: 9999 }}
        toastStyle={{
          background: "rgba(13, 17, 23, 0.8)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(59, 130, 246, 0.2)",
          borderRadius: "12px",
          boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.3)"
        }}
      />      <div className="relative" ref={formRef}>
        {/* Form success message */}
        <AnimatePresence>
          {formStatus.show && (
            <motion.div
              className={`absolute -top-20 left-0 right-0 z-20 ${
                formStatus.type === 'success' 
                  ? 'bg-gradient-to-r from-blue-600/20 to-blue-400/20 border border-blue-500/30' 
                  : 'bg-gradient-to-r from-red-600/20 to-red-400/20 border border-red-500/30'
              } backdrop-blur-md p-4 rounded-xl shadow-lg`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-start">
                {formStatus.type === 'success' ? (
                  <svg className="w-6 h-6 text-blue-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-red-400 mt-0.5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                )}
                <div>
                  <h4 className={`font-medium text-lg ${formStatus.type === 'success' ? 'text-blue-300' : 'text-red-300'}`}>
                    {formStatus.type === 'success' ? 'Message Sent!' : 'Error'}
                  </h4>
                  <p className="text-gray-300">{formStatus.message}</p>
                </div>
                <button 
                  onClick={() => setFormStatus({...formStatus, show: false})}
                  className="ml-auto text-gray-400 hover:text-gray-200 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
          <motion.form 
          onSubmit={handleSubmit}
          className="backdrop-blur-md bg-gradient-to-b from-blue-950/30 to-black/40 p-8 rounded-xl border border-blue-500/20 shadow-xl hover:shadow-blue-500/5 transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Form header */}
          <div className="mb-6 pb-6 border-b border-blue-500/20">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Get in Touch</h3>
            <p className="text-gray-400">I'll get back to you as soon as possible</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-blue-300 mb-2">Your Name</label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-blue-900/10 border border-blue-500/30 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                  placeholder="John Doe"
                />
                <ValidationError 
                  prefix="Name" 
                  field="name"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-400"
                />
                <div className="absolute inset-0 rounded-lg pointer-events-none bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-blue-300 mb-2">Your Email</label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-blue-900/10 border border-blue-500/30 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                  placeholder="john@example.com"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  className="mt-1 text-sm text-red-400"
                />
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-blue-300 mb-2">Subject</label>
            <div className="relative">
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-blue-900/10 border border-blue-500/30 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300"
                placeholder="Project Inquiry"
              />
              <ValidationError 
                prefix="Subject" 
                field="subject"
                errors={state.errors}
                className="mt-1 text-sm text-red-400"
              />
            </div>
          </div>
          
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-blue-300 mb-2">Your Message</label>
            <div className="relative">
              <textarea
                id="message"
                name="message"
                rows="6"
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-blue-900/10 border border-blue-500/30 rounded-lg px-4 py-3 text-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500/50 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
              <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
                className="mt-1 text-sm text-red-400"
              />
            </div>
          </div>
          
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 px-6 rounded-lg font-semibold text-white disabled:opacity-70 relative overflow-hidden group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Button background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 group-hover:from-blue-500 group-hover:to-cyan-500 transition-all duration-300"></div>
            
            {/* Button shine effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-1000 overflow-hidden">
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-20 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></div>
            </div>
            
            {/* Button content */}
            <span className="relative z-10 flex items-center justify-center">
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending Message...
                </>
              ) : (
                <>
                  <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </>
              )}
            </span>
          </motion.button>
          <ValidationError errors={state.errors} className="mt-4 text-red-400" />
        </motion.form>
      </div>    </>
  );
};

// Add animation for shine effect
if (document.head && !document.querySelector('style#shine-animation')) {
  const styleElement = document.createElement('style');
  styleElement.id = 'shine-animation';
  styleElement.innerHTML = `
    @keyframes shine {
      100% {
        left: 125%;
      }
    }
    .animate-shine {
      animation: shine 1.5s;
    }
  `;
  document.head.appendChild(styleElement);
}

export default ContactForm;
