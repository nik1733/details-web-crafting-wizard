
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  TestTube, 
  Calendar, 
  FileText, 
  Share, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Clock,
  Users,
  Database,
  Bell,
  Globe,
  Upload,
  Wallet,
  Activity,
  CheckCircle,
  Zap
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: TestTube,
      title: "Smart Test Recommendations",
      description: "Intelligent system that suggests appropriate tests based on symptoms and medical history",
      benefits: ["AI-powered diagnostic suggestions", "Personalized test recommendations", "Evidence-based medical protocols", "Reduced diagnostic errors"]
    },
    {
      icon: Activity,
      title: "Live Report Tracking",
      description: "Real-time status tracking from sample collection to report delivery",
      benefits: ["Show real-time status: Sample Collected → In Process → Report Ready", "Automated status updates", "Patient notification system", "Progress transparency"]
    },
    {
      icon: Share,
      title: "Email/WhatsApp App's Share Reports",
      description: "Seamless sharing of test reports through multiple communication channels",
      benefits: ["Direct email delivery", "WhatsApp integration", "Secure document sharing", "Multi-platform accessibility"]
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Comprehensive language support for diverse patient populations",
      benefits: ["Hindi and Tamil support", "Local language interfaces", "Cultural adaptation", "Improved accessibility"]
    },
    {
      icon: Upload,
      title: "Prescription Upload",
      description: "Easy uploading and management of medical prescriptions and documents",
      benefits: ["Digital prescription storage", "OCR text recognition", "Secure document management", "Quick access to medical history"]
    },
    {
      icon: Users,
      title: "Family Health Management",
      description: "Manage health records for parents, kids, and spouse under one account",
      benefits: ["Unified family dashboard", "Individual health profiles", "Shared medical history", "Family health insights"]
    },
    {
      icon: Wallet,
      title: "Health Wallet",
      description: "Collect money to reduce final price and manage healthcare expenses",
      benefits: ["Prepaid health credits", "Discounted test packages", "Expense tracking", "Budget management"]
    },
    {
      icon: Bell,
      title: "Auto Reminders & Retest Suggestions",
      description: "Automated notifications for follow-ups and retesting schedules",
      benefits: ["Intelligent reminder system", "Retest recommendations", "Health milestone tracking", "Preventive care alerts"]
    },
    {
      icon: FileText,
      title: "Digital Medical Records",
      description: "Secure storage and management of complete medical history and documents",
      benefits: ["HIPAA compliant storage", "Easy access and retrieval", "Document version control", "Comprehensive health timeline"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with RBAC and comprehensive audit trails",
      benefits: ["JWT secure authentication", "Role-based access control", "File encryption for sensitive documents", "Full system audit logs"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Support",
      description: "Full-featured mobile application for Android with offline capabilities",
      benefits: ["Kotlin/Java development", "Retrofit for API integration", "SQLite for offline caching", "Firebase push notifications"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Comprehensive analytics dashboard for monitoring trends and performance",
      benefits: ["Test volumes per week", "Lab/doctor performance metrics", "Demand trend analysis", "User activity monitoring"]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features for Modern Healthcare
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Discover the comprehensive suite of features that make Rapid Test Hub the ideal choice 
            for healthcare providers looking to streamline operations and enhance patient care.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Request a Demo</Link>
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <feature.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technology Integration */}
        <div className="bg-muted/30 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Smartphone className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Mobile App (Android)</h3>
              <p className="text-muted-foreground mb-4">Kotlin/Java with comprehensive offline support</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Retrofit for API integration</li>
                <li>• SQLite for offline caching</li>
                <li>• Firebase for push notifications</li>
              </ul>
            </div>
            
            <div className="text-center">
              <Database className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web App (Admin/Lab Portal)</h3>
              <p className="text-muted-foreground mb-4">React.js with modern UI design</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Axios for HTTP calls</li>
                <li>• TailwindCSS for UI design</li>
                <li>• Responsive web interface</li>
              </ul>
            </div>
            
            <div className="text-center">
              <Database className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend & Database</h3>
              <p className="text-muted-foreground mb-4">Node.js with MySQL database</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Express or Spring Boot (Java)</li>
                <li>• MySQL database</li>
                <li>• RESTful APIs</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Future Scope */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Future Scope</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border text-center">
              <Zap className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Telemedicine Integration</h3>
              <p className="text-muted-foreground text-sm">Integration with telemedicine or pharmacy delivery services</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <FileText className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Insurance Claim Tracking</h3>
              <p className="text-muted-foreground text-sm">Health insurance claim tracking and management</p>
            </div>
            <div className="bg-card p-6 rounded-lg border text-center">
              <Activity className="h-10 w-10 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">QR-Code Digital Health ID</h3>
              <p className="text-muted-foreground text-sm">QR-code based digital health ID for seamless access</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-primary/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground mb-6">
            Experience the power of Rapid Test Hub and transform your healthcare operations today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/contact">Schedule a Demo</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/modules">View All Modules</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
