import React from 'react';
import Section from './Section';
import Button from './Button';

const ContactSection = () => {
  return (
    <Section id="contact" className="bg-secondary/30" withDivider>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 animate-fade-in">Get in Touch</h2>
        <p className="text-foreground/70 mb-8 animate-fade-in">
          Interested in our research or potential collaborations? We'd love to hear from you.
        </p>
        
        <div className="glass-panel p-8 md:p-12 rounded-lg animate-fade-in">
          {/* Form integrated with Formspree */}
          <form
            action="https://formspree.io/f/mdkenreg" // Your Formspree form endpoint
            method="POST"
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-medium text-foreground/80">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name" // Add name attribute to match Formspree fields
                  className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-foreground/80">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email" // Add name attribute to match Formspree fields
                  className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="block text-sm font-medium text-foreground/80">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject" // Add name attribute to match Formspree fields
                className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-foreground/80">Message</label>
              <textarea
                id="message"
                name="message" // Add name attribute to match Formspree fields
                rows={4}
                className="w-full px-4 py-2 bg-secondary/50 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/40"
                required
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <Button size="lg" type="submit">Send Message</Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
