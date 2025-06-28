import React, { useState } from 'react';
import { Mail, Phone, Facebook, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

    // Replace these with your EmailJS credentials
    const SERVICE_ID = 'your_service_id';
    const TEMPLATE_ID = 'your_template_id';
    const USER_ID = 'your_user_id';

    const handleChange = (e) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus('sending');

        const templateParams = {
            from_name: form.name,
            reply_to: form.email,
            message: form.message,
        };

        try {
            const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    service_id: SERVICE_ID,
                    template_id: TEMPLATE_ID,
                    user_id: USER_ID,
                    template_params: templateParams,
                }),
            });

            if (res.ok) {
                setStatus('success');
                setForm({ name: '', email: '', message: '' }); // reset form
            } else {
                throw new Error('Email send failed');
            }
        } catch (err) {
            console.error(err);
            setStatus('error');
        }
    };

    return (
        <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-20">
            <div className="max-w-6xl mx-auto border-2 border-cyan-500 rounded-xl p-6 sm:p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-cyan-400 text-center">
                    Get in Touch
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold text-cyan-300 mb-4">Contact Info</h3>

                        {[
                            {
                                icon: <Phone className="text-white" size={20} />,
                                text: '+880-151505639',
                                bg: 'bg-cyan-600',
                            },
                            {
                                icon: <Facebook className="text-white" size={20} />,
                                text: 'facebook.com/mdmhamudul.alam',
                                href: 'https://www.facebook.com/mdmhamudul.alam',
                                bg: 'bg-blue-600',
                            },
                            {
                                icon: <MessageSquare className="text-white" size={20} />,
                                text: 'telegram.me/yourusername',
                                href: 'https://t.me/yourusername',
                                bg: 'bg-cyan-500',
                            },
                            {
                                icon: <Send className="text-white" size={20} />,
                                text: 'WhatsApp Chat',
                                href: 'https://wa.me/8801753214597',
                                bg: 'bg-green-600',
                            },
                            {
                                icon: <Mail className="text-white" size={20} />,
                                text: 'mdmahmudul.dev@gmail.com',
                                href: 'mailto:mdmahmudul.dev@gmail.com',
                                bg: 'bg-red-600',
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className={`p-3 rounded-full ${item.bg}`}>{item.icon}</div>
                                {item.href ? (
                                    <a
                                        href={item.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline text-base sm:text-lg break-words inline-block px-1 py-1 leading-snug"
                                        style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                                    >
                                        {item.text}
                                    </a>
                                ) : (
                                    <span
                                        className="text-base sm:text-lg break-words inline-block px-1 py-1 leading-snug"
                                        style={{ wordBreak: 'break-word', overflowWrap: 'anywhere' }}
                                    >
                                        {item.text}
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Email Form */}
                    <form className="space-y-5" onSubmit={handleSubmit}>
                        <div>
                            <label className="block mb-1 text-sm" htmlFor="name">
                                Your Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-900 text-white border border-cyan-500 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm" htmlFor="email">
                                Your Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-900 text-white border border-cyan-500 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm" htmlFor="message">
                                Your Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full px-4 py-2 bg-gray-900 text-white border border-cyan-500 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                required
                                disabled={status === 'sending'}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full md:w-auto px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold rounded-md shadow-md transition"
                            disabled={status === 'sending'}
                        >
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && (
                            <p className="mt-4 text-green-400">Message sent successfully!</p>
                        )}
                        {status === 'error' && (
                            <p className="mt-4 text-red-500">
                                Sorry, something went wrong. Please try again later.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
