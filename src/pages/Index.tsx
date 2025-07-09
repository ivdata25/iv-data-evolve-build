
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Code, 
  Cloud, 
  Database, 
  Shield, 
  Zap, 
  Users,
  Building2,
  Target
} from 'lucide-react';

const Index = () => {
  const services = [
    {
      icon: Code,
      title: "Data Pipelines",
      description: "ETL/ELT, Spark, and event-driven architectures"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure", 
      description: "AWS, GCP, and Azure implementations"
    },
    {
      icon: Database,
      title: "Data Warehouses",
      description: "Modern lakehouse with Iceberg and Delta"
    },
    {
      icon: Shield,
      title: "CI/CD & Monitoring",
      description: "Production-grade observability and deployment"
    },
    {
      icon: Zap,
      title: "ML Operations",
      description: "Model training, serving, and MLOps pipelines"
    },
    {
      icon: Target,
      title: "Data Quality",
      description: "Governance and validation frameworks"
    }
  ];

  const differentiators = [
    {
      icon: Code,
      title: "We Build, Not Just Advise",
      description: "Hands-on implementation that delivers working systems from day one."
    },
    {
      icon: Zap,
      title: "Fast ROI",
      description: "See results in weeks, not months. We focus on immediate business impact."
    },
    {
      icon: Cloud,
      title: "Modern Stack",
      description: "Cloud-native, cost-efficient architecture that scales with your growth."
    }
  ];

  const clientTypes = [
    {
      icon: Building2,
      title: "Startups",
      description: "Seed to Series B companies building their data foundation"
    },
    {
      icon: Users,
      title: "Tech Leads",
      description: "Engineering leaders who need expert data infrastructure support"
    },
    {
      icon: Target,
      title: "Founders",
      description: "Visionaries who need data to drive product and business decisions"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      
      {/* What We Do Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What We Do
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From data pipelines to ML operations, we build the infrastructure that powers data-driven startups.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <FeatureCard key={index} {...service} />
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4"
            >
              <Link to="/what-we-do" className="flex items-center space-x-2">
                <span>Explore All Services</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Who We Help Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Who We Help
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We partner with ambitious teams who need scalable data infrastructure without the overhead.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <FeatureCard key={index} {...client} />
            ))}
          </div>
        </div>
      </section>

      {/* Why IV Data Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why IV Data Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just consultants — we're your execution partners who deliver results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {differentiators.map((diff, index) => (
              <div key={index} className="text-center p-6">
                <div className="w-16 h-16 bg-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <diff.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{diff.title}</h3>
                <p className="text-gray-300 leading-relaxed">{diff.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button 
              asChild
              size="lg"
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4"
            >
              <Link to="/why-us" className="flex items-center space-x-2">
                <span>Learn More About Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Data Infrastructure?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Let's discuss how we can help you scale your data operations and accelerate your growth.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            <Link to="/contact" className="flex items-center space-x-2">
              <span>Book a Free Discovery Call</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">IV</span>
              </div>
              <span className="text-white font-semibold text-lg">Data Solutions</span>
            </div>
            <div className="flex space-x-8">
              <Link to="/what-we-do" className="text-gray-400 hover:text-white transition-colors">Services</Link>
              <Link to="/why-us" className="text-gray-400 hover:text-white transition-colors">About</Link>
              <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 IV Data Solutions. Building the future of data infrastructure.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
