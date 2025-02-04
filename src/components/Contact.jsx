import { useState } from "react";

const Contact = () => {
    // State management
    const [isSending, setIsSending] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState({});

    // Form input change handler
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Form validation logic
    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.firstName.trim()) {
            newErrors.firstName = 'First name is required';
        }
        
        if (!formData.lastName.trim()) {
            newErrors.lastName = 'Last name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            setIsSending(true);
            e.target.submit();
        }
    };

  return (
    <section id="contact" className="pt-16 bg-black/50 ">
      {/* Main container */}
      <div className="mx-auto bg-black/50 p-16 py-24 space-y-6 rounded-tl-[15rem] rounded-br-[15rem]">
        {/* Section heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
          Contact Us
        </h2>
        
        {/* Contact information cards */}
        <div className="flex flex-col md:flex-row gap-8 mb-8 max-w-6xl mx-auto">
          {/* Email contact card */}
          <div className="flex items-center justify-evenly gap-3 bg-black/35 shadow-lg shadow-white/5 p-6 rounded-tl-[2rem] rounded-br-[2rem] flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <div>
              <a href="mailto:info@businessfacilitators.net" className="text-gray-300 hover:text-white transition-colors">
                info@abc.com
              </a>
            </div>
          </div>
          
          {/* Phone contact card */}
          <div className="flex items-center justify-evenly gap-3 bg-black/35 shadow-lg shadow-white/5 p-6 rounded-tl-[2rem] rounded-br-[2rem] flex-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            <div>
              <a href="tel:+18764124444" className="text-gray-300 hover:text-white transition-colors">
                +1 (876) 412-4444
              </a>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <form action={import.meta.env.VITE_FORM_SUBMIT_URL} method="POST" onSubmit={handleSubmit}>
          <div className="space-y-6 bg-black/35 shadow-lg shadow-white/5 p-6 mb-16 rounded-tl-[3rem] rounded-br-[3rem] max-w-6xl mx-auto">
            {/* Name fields container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First name field */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-white mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#84444b] focus:border-[#84444b] ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your first name"
                />
                {errors.firstName && (
                  <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>
                )}
              </div>
              {/* Last name field */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-white mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#84444b] focus:border-[#84444b] ${
                    errors.lastName ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your last name"
                />
                {errors.lastName && (
                  <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>
                )}
              </div>
            </div>

            {/* Email field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#84444b] focus:border-[#84444b] ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            {/* Message field */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-white mb-1">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#84444b] focus:border-[#84444b] ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your message"
              ></textarea>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              className="w-full md:w-auto bg-[#203e4f] hover:bg-gray-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isSending}
            >
              {isSending ? "✓" : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
