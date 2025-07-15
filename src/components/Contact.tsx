// src/components/Contact.tsx or a similar path

'use client' // Add this if you're using the Next.js App Router

import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import emailjs from '@emailjs/browser';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';

// Define the simplified structure of your form data
interface FormDataState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const Contact = () => {
  // --- STATE MANAGEMENT ---
  const [formData, setFormData] = useState<FormDataState>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // --- REPLACE WITH YOUR ACTUAL EmailJS CREDENTIALS ---
  const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';      // Paste your Service ID here
  const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';    // Paste your Template ID here
  const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';      // Paste your Public Key here
  // --- ------------------------------------------- ---

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) {
      console.error("Form reference is not set.");
      alert("An error occurred. Please try again later.");
      return;
    }

    setIsSubmitting(true);
    setIsSubmitted(false);
    
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID, 
        EMAILJS_TEMPLATE_ID, 
        form.current, 
        EMAILJS_PUBLIC_KEY
      );
      
      console.log('SUCCESS! Email sent from boutique contact page.');
      setIsSubmitted(true); // Show success message
      setFormData({ // Reset form to its initial empty state
        name: '',
        phone: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('FAILED to send email...', error);
      alert('Failed to send message. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a question or a special request? We'd love to hear from you. 
            Fill out the form below, and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Card */}
          <Card className="p-8 shadow-card bg-gradient-card border-none animate-fade-in">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center h-full min-h-[400px]">
                <CheckCircle className="w-20 h-20 text-green-500 mb-6" />
                <h3 className="text-3xl font-display font-semibold text-foreground mb-4">
                  Thank You!
                </h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Your message has been sent successfully. We'll get back to you soon.
                </p>
                <Button 
                  onClick={() => setIsSubmitted(false)}
                  variant="elegant" 
                  size="lg"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-display font-semibold text-foreground mb-6">
                  Send Us a Message
                </h3>
                
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        type="text"
                        name="user_name" // Name for EmailJS
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="shadow-soft"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number *
                      </label>
                      <Input
                        type="tel"
                        name="user_phone" // Name for EmailJS
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+91 98765 43210"
                        required
                        className="shadow-soft"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address (Optional)
                    </label>
                    <Input
                      type="email"
                      name="user_email" // Name for EmailJS
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your.email@example.com"
                      className="shadow-soft"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your Message *
                    </label>
                    <Textarea
                      name="message" // Name for EmailJS
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements, ask a question, or leave a note..."
                      rows={5}
                      required
                      className="shadow-soft"
                    />
                  </div>

                  <Button type="submit" variant="elegant" size="lg" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-5 w-5" />
                          Send Message
                        </>
                      )}
                  </Button>
                </form>
              </>
            )}
          </Card>

          {/* Contact Information (Remains the same) */}
          <div className="space-y-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <Card className="p-6 shadow-card bg-card border-none">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Visit Our Boutique</h4>
                  <p className="text-muted-foreground">
                  Sri Bathula Boutique, beside Sri veda school, Road No 6,<br/> 
                  KRCR Colony Rd, Bachupally, Hyderabad, Telangana 500090.
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 shadow-card bg-card border-none">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                   <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Call Us</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:+919502833302" className="hover:text-primary transition-colors">+91 9502833302</a>
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 shadow-card bg-card border-none">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Email Us</h4>
                  <p className="text-muted-foreground">
                    <a href="mailto:info@bathulaboutique.com" className="hover:text-primary transition-colors">info@bathulaboutique.com</a>
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6 shadow-card bg-card border-none">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                  <p className="text-muted-foreground">Mon - Sat: 10:00 AM - 9:00 PM</p>
                  <p className="text-muted-foreground">Sun: 4:00 PM - 8:00 PM</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
