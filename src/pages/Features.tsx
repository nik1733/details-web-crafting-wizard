
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Heart, 
  Calendar, 
  FileText, 
  CreditCard, 
  BarChart3, 
  Shield, 
  Smartphone, 
  Clock,
  Users,
  Database,
  Bell,
  Stethoscope
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Heart,
      title: "Electronic Health Records (EHR)",
      description: "Comprehensive patient records with real-time updates, medical history tracking, and secure data management.",
      benefits: ["Complete patient history", "Real-time updates", "HIPAA compliant"]
    },
    {
      icon: Calendar,
      title: "Appointment Management",
      description: "Smart scheduling system with automated reminders, waitlist management, and calendar synchronization.",
      benefits: ["Online booking", "Automated reminders", "Resource optimization"]
    },
    {
      icon: FileText,
      title: "Clinical Documentation",
      description: "Streamlined documentation with templates, voice-to-text, and integrated medical coding assistance.",
      benefits: ["Pre-built templates", "Voice recognition", "ICD-10 coding"]
    },
    {
      icon: CreditCard,
      title: "Billing & Insurance",
      description: "Automated billing processes, insurance claim management, and financial reporting tools.",
      benefits: ["Automated claims", "Payment tracking", "Financial analytics"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive dashboards with patient analytics, operational metrics, and custom reporting.",
      benefits: ["Real-time dashboards", "Custom reports", "Performance metrics"]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security with role-based access, audit trails, and compliance monitoring.",
      benefits: ["End-to-end encryption", "Audit logs", "Compliance tracking"]
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Full-featured mobile app for healthcare providers and patients with offline capabilities.",
      benefits: ["Cross-platform app", "Offline access", "Push notifications"]
    },
    {
      icon: Clock,
      title: "24/7 Monitoring",
      description: "Continuous system monitoring with automated backups and disaster recovery protocols.",
      benefits: ["System uptime", "Data backup", "Disaster recovery"]
    },
    {
      icon: Users,
      title: "Patient Portal",
      description: "Self-service portal for patients to access records, book appointments, and communicate with providers.",
      benefits: ["Online access", "Secure messaging", "Appointment booking"]
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Seamless integration with existing systems, labs, pharmacies, and medical devices.",
      benefits: ["API connectivity", "Lab integration", "Device compatibility"]
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Intelligent alert system for critical events, medication reminders, and follow-up care.",
      benefits: ["Critical alerts", "Medication reminders", "Care coordination"]
    },
    {
      icon: Stethoscope,
      title: "Telemedicine",
      description: "Built-in telemedicine platform with video consultations, screen sharing, and digital prescriptions.",
      benefits: ["Video consultations", "Digital prescriptions", "Remote monitoring"]
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
            Discover the comprehensive suite of tools designed to streamline your healthcare 
            operations and enhance patient care quality.
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
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Section */}
        <div className="bg-card p-8 rounded-lg border mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Seamless Integrations</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              MediLine integrates with your existing healthcare ecosystem to provide a unified experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Lab Systems</h3>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <CreditCard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Insurance APIs</h3>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Medical Devices</h3>
            </div>
            <div className="p-4">
              <div className="w-16 h-16 bg-primary/10 rounded-lg mx-auto mb-3 flex items-center justify-center">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-medium">Pharmacy Systems</h3>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-primary/5 p-12 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience MediLine?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            See how our features can transform your healthcare practice. 
            Schedule a personalized demo today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Schedule Demo</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/modules">View Modules</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
