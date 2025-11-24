
import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, Send, MapPin, Clock, Heart, Copy, Check, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Button } from './ui/button';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const Contact = () => {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [messageLen, setMessageLen] = useState(0);
  const formRef = useRef<HTMLFormElement | null>(null);

  // Validation schema
  const schema = z.object({
    name: z.string().min(2, 'Please enter at least 2 characters.'),
    email: z.string().email('Enter a valid email address.'),
    subject: z.string().min(3, 'Please enter a subject.'),
    message: z.string().min(10, 'Please write at least 10 characters.').max(1000, 'Keep it under 1000 characters.'),
    // Honeypot field (should remain empty)
    website: z.string().max(0).optional().or(z.literal('')),
  });

  type FormValues = z.infer<typeof schema>;

  const { register, handleSubmit, reset, formState, watch } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: '', email: '', subject: '', message: '', website: '' },
    mode: 'onTouched',
  });

  const isSubmitting = formState.isSubmitting;

  useEffect(() => {
    const sub = watch((values) => {
      setMessageLen(values.message?.length || 0);
    });
    return () => sub.unsubscribe();
  }, [watch]);

  const onSubmit = async (data: FormValues) => {
    // Honeypot guard
    if (data.website) {
      toast({ title: 'Submission blocked', description: 'Please try again.' });
      return;
    }
    
  try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('Email service is not configured. Add VITE_EMAILJS_* env variables.');
      }

      // EmailJS template fields must match your configured template variables
      const templateParams = {
    from_name: data.name,
    reply_to: data.email,
    subject: data.subject,
        // Include subject at the top of the message body for templates that don't render subject explicitly
    message: `Subject: ${data.subject}\n\n${data.message}`,
      };

    await emailjs.send(serviceId, templateId, templateParams, { publicKey });

      toast({
        title: 'Message sent!',
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
    reset();
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Please try again later or email me directly.';
      toast({
        title: 'Failed to send',
        description: message,
      });
    } finally {
    // react-hook-form manages isSubmitting
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-coral/5 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="bg-coral/10 p-3 rounded-full">
                <Heart className="w-8 h-8 text-coral" />
              </div>
              <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-coral to-coral-dark">Let's Connect</h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together!
            </p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Contact Information */}
              <div className="bg-gradient-to-br from-coral via-coral to-coral-dark text-white p-8 md:p-12 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/5 rounded-full"></div>
                
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-3">Get In Touch</h3>
                  <p className="text-white/90 mb-10 text-lg">Let's discuss your next project or just say hello!</p>
                  
                  <div className="space-y-8">
                    <div className="group flex items-start hover:translate-x-2 transition-transform duration-300">
                      <div className="bg-white/20 p-4 rounded-2xl mr-5 group-hover:bg-white/30 transition-colors duration-300">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white/90 text-sm uppercase tracking-wide mb-1">Email Address</p>
                        <p className="text-white text-lg font-medium">deepakmaheta49@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="group flex items-start hover:translate-x-2 transition-transform duration-300">
                      <div className="bg-white/20 p-4 rounded-2xl mr-5 group-hover:bg-white/30 transition-colors duration-300">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white/90 text-sm uppercase tracking-wide mb-1">Phone Number</p>
                        <p className="text-white text-lg font-medium">8849719200</p>
                      </div>
                    </div>
                    
                    <div className="group flex items-start hover:translate-x-2 transition-transform duration-300">
                      <div className="bg-white/20 p-4 rounded-2xl mr-5 group-hover:bg-white/30 transition-colors duration-300">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white/90 text-sm uppercase tracking-wide mb-1">Location</p>
                        <p className="text-white text-lg font-medium">Rajkot, Gujarat, India</p>
                      </div>
                    </div>
                    
                    <div className="group flex items-start hover:translate-x-2 transition-transform duration-300">
                      <div className="bg-white/20 p-4 rounded-2xl mr-5 group-hover:bg-white/30 transition-colors duration-300">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="font-semibold text-white/90 text-sm uppercase tracking-wide mb-1">Response Time</p>
                        <p className="text-white text-lg font-medium">Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-16">
                    <h4 className="text-xl font-semibold mb-6 text-white">Follow Me</h4>
                    <div className="flex gap-4">
                      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="group bg-white/20 p-3 rounded-2xl hover:bg-white/30 hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform duration-300"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                      </a>
                      <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="group bg-white/20 p-3 rounded-2xl hover:bg-white/30 hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform duration-300"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                      </a>
                      <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="group bg-white/20 p-3 rounded-2xl hover:bg-white/30 hover:scale-110 transition-all duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:rotate-12 transition-transform duration-300"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            
              {/* Contact Form */}
              <div className="p-8 md:p-12 bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-700/30 dark:to-gray-800">
                <h3 className="text-3xl font-bold mb-3 text-gray-800 dark:text-white">Send a Message</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-8">Ready to start a conversation? Fill out the form below!</p>
              
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        {...register('name')}
                        className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-all duration-300 group-hover:border-coral/30"
                        aria-invalid={!!formState.errors.name}
                      />
                      {formState.errors.name && (
                        <p className="mt-2 text-sm text-red-500">{formState.errors.name.message}</p>
                      )}
                    </div>
                    
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john@example.com"
                        {...register('email')}
                        className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-all duration-300 group-hover:border-coral/30"
                        aria-invalid={!!formState.errors.email}
                      />
                      {formState.errors.email && (
                        <p className="mt-2 text-sm text-red-500">{formState.errors.email.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="group">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      placeholder="What would you like to discuss?"
                      {...register('subject')}
                      className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-all duration-300 group-hover:border-coral/30"
                      aria-invalid={!!formState.errors.subject}
                    />
                    {formState.errors.subject && (
                      <p className="mt-2 text-sm text-red-500">{formState.errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div className="group">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Your Message</label>
                    <textarea
                      id="message"
                      placeholder="Tell me more about your project, ideas, or just say hello! I'd love to hear from you..."
                      rows={6}
                      {...register('message')}
                      className="w-full p-4 rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-coral/50 focus:border-coral transition-all duration-300 resize-none group-hover:border-coral/30"
                      aria-invalid={!!formState.errors.message}
                    ></textarea>
                    <div className="mt-1 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>{messageLen}/1000</span>
                      {formState.errors.message && (
                        <span className="text-red-500">{formState.errors.message.message}</span>
                      )}
                    </div>
                  </div>

                  {/* Honeypot field (hidden from users) */}
                  <div className="hidden">
                    <label htmlFor="website">Website</label>
                    <input id="website" type="text" autoComplete="off" {...register('website')} />
                  </div>
                  
                  <div className="pt-2 flex flex-col gap-3">
                    {/* Quick actions */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-3">
                        <a href="mailto:deepakmaheta49@gmail.com" className="inline-flex items-center gap-1 text-coral hover:underline">
                          <ExternalLink className="w-4 h-4" />
                          Open mail app
                        </a>
                        <button
                          type="button"
                          className="inline-flex items-center gap-1 text-gray-600 dark:text-gray-300 hover:text-coral"
                          onClick={async () => {
                            await navigator.clipboard.writeText('deepakmaheta49@gmail.com');
                            setCopied(true);
                            setTimeout(() => setCopied(false), 1500);
                          }}
                        >
                          {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                          {copied ? 'Copied' : 'Copy email'}
                        </button>
                      </div>
                      <span className="text-gray-500 dark:text-gray-400">Avg. response within 24h</span>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="group bg-gradient-to-r from-coral to-coral-dark hover:from-coral-dark hover:to-coral text-white py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 w-full text-lg font-semibold shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
