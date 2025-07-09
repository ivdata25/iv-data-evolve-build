
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Mail,
  MessageSquare,
  Calendar,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Zap
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours to schedule your discovery call.",
    });
    
    // Reset form
    setFormData({ name: '', company: '', email: '', message: '' });
  };

  const benefits = [
    {
      icon: CheckCircle,
      title: "Free Discovery Call",
      description: "30-minute consultation to understand your data infrastructure needs and challenges"
    },
    {
      icon: Clock,
      title: "Quick Response",
      description: "We respond to all inquiries within 24 hours, usually much faster"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Direct access to senior data engineers with startup experience"
    },
    {
      icon: Zap,
      title: "Fast Implementation",
      description: "Get started on solutions within days, not weeks or months"
    }
  ];

  const faqs = [
    {
      question: "How quickly can we get started?",
      answer: "After our discovery call, we can typically begin implementation within 1-2 weeks. For urgent needs, we can start even faster."
    },
    {
      question: "What's included in the discovery call?",
      answer: "We'll assess your current data infrastructure, understand your goals, identify pain points, and provide initial recommendations — all free of charge."
    },
    {
      question: "Do you work with early-stage startups?",
      answer: "Absolutely! We specialize in helping startups from seed to Series B scale their data infrastructure cost-effectively."
    },
    {
      question: "What if we already have some data infrastructure?",
      answer: "We can audit your existing systems, optimize performance, reduce costs, and fill any gaps to ensure reliability and scalability."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's Build Your
              <span className="text-teal-400 block">Data Backbone</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Whether you need to clean up legacy architecture or launch a product with scalable 
              infrastructure, we're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Benefits */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                    <MessageSquare className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">Get Started Today</h2>
                    <p className="text-gray-600">Tell us about your data infrastructure needs</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <Input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full"
                      placeholder="your.email@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      What are you looking to build?
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full h-32"
                      placeholder="Tell us about your data infrastructure challenges, goals, or specific projects you have in mind..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white"
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>Book a Free Discovery Call</span>
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Button>
                </form>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Mail className="w-4 h-4" />
                    <span>Or email us directly at:</span>
                    <a href="mailto:hello@ivdatasolutions.com" className="text-teal-600 hover:text-teal-700 font-medium">
                      hello@ivdatasolutions.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-8">Why Start with a Discovery Call?</h2>
              <div className="space-y-6 mb-12">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">What Happens Next?</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <p className="text-gray-700"><strong>We respond</strong> within 24 hours to schedule your call</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <p className="text-gray-700"><strong>30-minute discovery call</strong> to understand your needs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <p className="text-gray-700"><strong>Custom proposal</strong> with timeline and next steps</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't Let Data Infrastructure Hold You Back
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Every day without proper data infrastructure is a day of missed opportunities. 
            Let's fix that together.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 text-lg font-semibold"
          >
            <a href="#contact-form" className="flex items-center space-x-2">
              <span>Start Your Transformation Today</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;
