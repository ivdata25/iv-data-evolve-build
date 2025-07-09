
import Navigation from '@/components/Navigation';
import FeatureCard from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Code,
  DollarSign,
  Zap,
  Users,
  Shield,
  Layers,
  CheckCircle
} from 'lucide-react';

const WhyUs = () => {
  const advantages = [
    {
      icon: Code,
      title: "Execution-First Approach",
      description: "We don't just consult — we deliver working systems. Our hands-on approach means you get production-ready infrastructure, not just recommendations."
    },
    {
      icon: DollarSign,
      title: "Cost-Efficient Excellence", 
      description: "You get top-tier results without the overhead of a full-time team. Pay for expertise when you need it, scale when you're ready."
    },
    {
      icon: Layers,
      title: "Tailored to Scale",
      description: "Our architecture grows with you — from MVP to millions of users. We build systems that adapt to your changing needs and growth trajectory."
    },
    {
      icon: Users,
      title: "Flexible Engagement",
      description: "We work project-based, retained, or embedded within your team. Choose the collaboration model that fits your timeline and budget."
    },
    {
      icon: Shield,
      title: "Modern Best Practices",
      description: "From versioning to monitoring — we build with reliability in mind. Your systems are production-ready from day one with enterprise-grade practices."
    },
    {
      icon: Zap,
      title: "Rapid Time-to-Value",
      description: "See results in weeks, not months. Our proven methodologies and pre-built frameworks accelerate your data infrastructure deployment."
    }
  ];

  const differentiators = [
    {
      title: "We Build, Others Just Talk",
      points: [
        "Hands-on coding and implementation",
        "Production deployments, not just designs", 
        "Working systems you can use immediately",
        "No handoff delays or integration issues"
      ]
    },
    {
      title: "Startup-Focused Expertise",
      points: [
        "Understanding of resource constraints",
        "Experience with rapid scaling challenges",
        "Cost-optimization without sacrificing quality",
        "Modern stack expertise for competitive advantages"
      ]
    },
    {
      title: "End-to-End Ownership",
      points: [
        "From architecture to monitoring",
        "Complete responsibility for system performance",
        "Ongoing support and optimization",
        "Knowledge transfer to your team"
      ]
    }
  ];

  const stats = [
    { number: "3x", label: "Faster Implementation", description: "vs. building in-house teams" },
    { number: "60%", label: "Cost Reduction", description: "compared to full-time hires" },
    { number: "99.9%", label: "System Reliability", description: "with our monitoring stack" },
    { number: "<2wk", label: "Time to Production", description: "for most initial deployments" }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Why Teams Choose
              <span className="text-teal-400 block">IV Data Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              We're not just another consulting firm. We're your execution partners who deliver 
              production-ready systems that scale with your success.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-teal-100 font-semibold mb-1">{stat.label}</div>
                <div className="text-teal-200 text-sm">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The IV Data Advantage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine deep technical expertise with startup-focused execution to deliver results that matter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <FeatureCard key={index} {...advantage} />
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Three core principles that define how we work and deliver value to our clients.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {differentiators.map((diff, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">{diff.title}</h3>
                <ul className="space-y-3">
                  {diff.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Flexible Engagement Models
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the collaboration style that works best for your team and timeline.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Project-Based",
                description: "Fixed-scope projects with clear deliverables and timelines",
                features: ["Defined scope and timeline", "Fixed pricing", "Complete delivery", "Knowledge transfer"]
              },
              {
                title: "Retained Partnership", 
                description: "Ongoing collaboration with dedicated capacity allocation",
                features: ["Monthly retainer model", "Priority access to expertise", "Strategic planning support", "Continuous optimization"]
              },
              {
                title: "Embedded Team Member",
                description: "Deep integration with your team for complex, ongoing work",
                features: ["Daily collaboration", "Sprint participation", "Direct team integration", "Long-term partnership"]
              }
            ].map((model, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-8 hover:border-teal-500 transition-colors duration-300">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{model.title}</h3>
                <p className="text-gray-600 mb-6">{model.description}</p>
                <ul className="space-y-2">
                  {model.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our approach can accelerate your data infrastructure goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <span>Book a Free Discovery Call</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-gray-400 text-gray-300 hover:bg-white hover:text-slate-900 px-8 py-4"
            >
              <Link to="/success-stories">
                <span>See Success Stories</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
