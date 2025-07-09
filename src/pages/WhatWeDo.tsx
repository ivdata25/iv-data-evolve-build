
import Navigation from '@/components/Navigation';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  Database,
  Cloud,
  GitBranch,
  Brain,
  Shield,
  Activity,
  Workflow
} from 'lucide-react';

const WhatWeDo = () => {
  const services = [
    {
      icon: Workflow,
      title: "Data Pipelines",
      description: "Build robust, scalable data pipelines that handle your growing data needs with reliability and efficiency.",
      features: [
        "ETL/ELT pipeline design and implementation",
        "Apache Spark for big data processing",
        "Event-driven and streaming architectures",
        "Data validation and error handling",
        "Performance optimization and monitoring"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      description: "Deploy modern, cost-effective cloud infrastructure that scales automatically with your business growth.",
      features: [
        "Multi-cloud deployments (AWS, GCP, Azure)",
        "Infrastructure as Code (Terraform, CloudFormation)",
        "Auto-scaling and cost optimization",
        "Security best practices and compliance",
        "Disaster recovery and backup strategies"
      ]
    },
    {
      icon: Database,
      title: "Data Lakes & Warehouses",
      description: "Modern data storage solutions that provide flexibility, performance, and cost-effectiveness at scale.",
      features: [
        "Apache Iceberg and Delta Lake implementations",
        "Data lake architecture and governance",
        "Real-time and batch data warehousing",
        "Schema evolution and versioning",
        "Query optimization and performance tuning"
      ]
    },
    {
      icon: GitBranch,
      title: "CI/CD for Data & ML",
      description: "Implement robust deployment pipelines that ensure reliable, repeatable data and ML model deployments.",
      features: [
        "Automated testing for data pipelines",
        "Version control for data and models",
        "Continuous integration and deployment",
        "Environment management and promotion",
        "Rollback strategies and blue-green deployments"
      ]
    },
    {
      icon: Brain,
      title: "ML Model Training & Serving",
      description: "End-to-end MLOps solutions that take your models from experimentation to production reliably.",
      features: [
        "Model training pipeline automation",
        "Feature store implementation",
        "Model serving and API development",
        "A/B testing and model monitoring",
        "Model performance tracking and retraining"
      ]
    },
    {
      icon: Shield,
      title: "Data Quality & Governance",
      description: "Ensure data reliability and compliance with comprehensive quality frameworks and governance policies.",
      features: [
        "Great Expectations implementation",
        "Data lineage and catalog management",
        "Privacy and compliance frameworks (GDPR, CCPA)",
        "Data access controls and security",
        "Automated data quality monitoring"
      ]
    },
    {
      icon: Activity,
      title: "Monitoring & Observability",
      description: "Complete visibility into your data systems with proactive monitoring and alerting capabilities.",
      features: [
        "End-to-end pipeline monitoring",
        "Custom dashboards and alerting",
        "Performance metrics and SLA tracking",
        "Cost monitoring and optimization alerts",
        "Incident response and troubleshooting tools"
      ]
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
              From Zero to Scalable —
              <span className="text-teal-400 block">We Engineer Your Data Foundation</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Our work is hands-on and implementation-driven. We build data infrastructure that enables 
              growth, reliability, and insights — all tailored to your scale and needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Implementation Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology that delivers results quickly while ensuring long-term scalability.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We analyze your current state, understand your goals, and design the optimal architecture."
              },
              {
                step: "02", 
                title: "MVP Implementation",
                description: "We build and deploy a minimum viable solution that delivers immediate business value."
              },
              {
                step: "03",
                title: "Scaling & Optimization", 
                description: "We enhance the system for performance, reliability, and cost-effectiveness as you grow."
              },
              {
                step: "04",
                title: "Knowledge Transfer",
                description: "We ensure your team can maintain and extend the systems we've built together."
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Building?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your data infrastructure needs and create a roadmap for success.
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
              <Link to="/why-us">
                <span>Why Choose Us</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
