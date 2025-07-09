
import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ArrowRight,
  TrendingUp,
  DollarSign,
  Clock,
  Shield,
  Zap,
  Database
} from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      title: "FinTech Startup Reduces AWS Costs by 40%",
      company: "Series A Financial Technology Company",
      challenge: "Rapidly growing transaction volume was causing cloud costs to spiral out of control while data processing became unreliable.",
      solution: "Re-architected data pipelines with cost-optimized infrastructure, implemented auto-scaling, and added comprehensive monitoring.",
      results: [
        "40% reduction in monthly AWS costs",
        "99.9% pipeline reliability achieved", 
        "3x faster data processing speeds",
        "Eliminated weekend outages"
      ],
      icon: DollarSign,
      metrics: {
        cost: "40%",
        reliability: "99.9%",
        speed: "3x"
      }
    },
    {
      title: "E-commerce Platform Launches ML in 3 Weeks",
      company: "Seed Stage E-commerce Startup",
      challenge: "Needed to implement personalized recommendations and fraud detection but had no data infrastructure or ML capabilities.",
      solution: "Built end-to-end ML pipeline from scratch including feature store, model training automation, and real-time serving infrastructure.",
      results: [
        "Production ML system in 3 weeks",
        "15% increase in conversion rates",
        "90% reduction in fraudulent transactions",
        "Scalable architecture for future models"
      ],
      icon: Zap,
      metrics: {
        timeline: "3 weeks",
        conversion: "+15%",
        fraud: "-90%"
      }
    },
    {
      title: "SaaS Company Transforms Dashboard Reliability",
      company: "Series B B2B Software Company",
      challenge: "Customer-facing analytics dashboards were frequently broken, causing support tickets and churn risk.",
      solution: "Implemented comprehensive observability stack with data quality monitoring, automated testing, and proactive alerting.",
      results: [
        "Zero dashboard downtime in 6 months",
        "95% reduction in data-related support tickets",
        "Real-time data quality monitoring",
        "Automated incident response"
      ],
      icon: Shield,
      metrics: {
        uptime: "100%",
        tickets: "-95%",
        monitoring: "24/7"
      }
    }
  ];

  const painPoints = [
    {
      icon: TrendingUp,
      title: "Unreliable Data Pipelines",
      description: "Systems that break frequently, causing data delays and business disruption"
    },
    {
      icon: DollarSign,
      title: "High Cloud Costs",
      description: "Inefficient architectures leading to unsustainable infrastructure expenses"
    },
    {
      icon: Shield,
      title: "Lack of Monitoring",
      description: "No visibility into system health until things break in production"
    },
    {
      icon: Clock,
      title: "Slow ML Deployment",
      description: "Months to get models from experimentation to production value"
    },
    {
      icon: Database,
      title: "Broken Dashboards",
      description: "Analytics that can't be trusted, causing decision-making delays"
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
              Real Solutions.
              <span className="text-teal-400 block">Real Impact.</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              See how we've helped startups transform their data infrastructure and accelerate their growth 
              with production-ready systems that deliver immediate business value.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points We Solve */}
      <section className="py-20 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Common Problems We Solve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These are the data infrastructure challenges that keep startup teams up at night.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {painPoints.map((pain, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-500">
                <pain.icon className="w-8 h-8 text-red-500 mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{pain.title}</h3>
                <p className="text-gray-600">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How we've transformed data infrastructure challenges into competitive advantages.
            </p>
          </div>
          
          <div className="space-y-16">
            {stories.map((story, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="lg:w-1/2">
                  <div className="bg-white rounded-xl p-8 shadow-xl border border-gray-100">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mr-4">
                        <story.icon className="w-6 h-6 text-teal-600" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900">{story.title}</h3>
                        <p className="text-gray-600">{story.company}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Challenge:</h4>
                        <p className="text-gray-600">{story.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-slate-900 mb-2">Solution:</h4>
                        <p className="text-gray-600">{story.solution}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl p-8">
                    <h4 className="text-xl font-semibold text-slate-900 mb-6">Results Achieved:</h4>
                    <ul className="space-y-3 mb-8">
                      {story.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="grid grid-cols-3 gap-4">
                      {Object.entries(story.metrics).map(([key, value], metricIndex) => (
                        <div key={metricIndex} className="text-center bg-white rounded-lg p-4">
                          <div className="text-2xl font-bold text-teal-600">{value}</div>
                          <div className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How We Deliver These Results
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven methodology ensures consistent, measurable outcomes for every client.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Deep Discovery",
                description: "We analyze your current infrastructure, understand your pain points, and identify opportunities for immediate impact."
              },
              {
                step: "2",
                title: "Strategic Architecture",
                description: "We design systems that solve today's problems while scaling for tomorrow's growth with cost-efficiency in mind."
              },
              {
                step: "3",
                title: "Hands-On Implementation",
                description: "We build, deploy, and monitor production-ready systems with comprehensive testing and documentation."
              },
              {
                step: "4",
                title: "Knowledge Transfer",
                description: "We ensure your team can maintain and extend the systems with proper training and documentation."
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
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can transform your data infrastructure challenges into competitive advantages.
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
              <Link to="/what-we-do">
                <span>Explore Our Services</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
