
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Calendar, 
  FileText, 
  CreditCard, 
  BarChart3, 
  Pill, 
  Stethoscope, 
  Building,
  UserCheck,
  ClipboardList,
  Phone,
  Shield
} from 'lucide-react';

const Modules = () => {
  const modules = [
    {
      icon: Users,
      title: "Patient Management",
      description: "Complete patient lifecycle management from registration to discharge",
      features: ["Patient registration", "Demographics management", "Contact tracking", "Insurance information"],
      category: "Core",
      popular: true
    },
    {
      icon: Calendar,
      title: "Appointment Scheduler",
      description: "Advanced scheduling system with resource management and automated workflows",
      features: ["Multi-provider scheduling", "Resource booking", "Waitlist management", "Automated reminders"],
      category: "Core",
      popular: true
    },
    {
      icon: FileText,
      title: "Electronic Health Records",
      description: "Comprehensive EHR system with clinical documentation and care coordination",
      features: ["Medical history", "Clinical notes", "Care plans", "Document management"],
      category: "Clinical",
      popular: true
    },
    {
      icon: CreditCard,
      title: "Billing & Revenue Cycle",
      description: "End-to-end revenue cycle management with automated billing and collections",
      features: ["Insurance claims", "Payment processing", "Revenue tracking", "Collections management"],
      category: "Financial",
      popular: false
    },
    {
      icon: Pill,
      title: "Pharmacy Management",
      description: "Integrated pharmacy system with prescription management and inventory control",
      features: ["E-prescribing", "Drug interactions", "Inventory management", "Dispensing records"],
      category: "Clinical",
      popular: false
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Business intelligence platform with customizable dashboards and reports",
      features: ["Custom dashboards", "Performance metrics", "Financial reports", "Clinical analytics"],
      category: "Analytics",
      popular: true
    },
    {
      icon: Stethoscope,
      title: "Telemedicine",
      description: "Complete telehealth solution with video consultations and remote monitoring",
      features: ["Video consultations", "Screen sharing", "Digital prescriptions", "Remote monitoring"],
      category: "Digital Health",
      popular: true
    },
    {
      icon: Building,
      title: "Practice Management",
      description: "Comprehensive practice administration tools for multi-location healthcare organizations",
      features: ["Multi-location support", "Staff management", "Workflow automation", "Compliance tracking"],
      category: "Administrative",
      popular: false
    },
    {
      icon: UserCheck,
      title: "Patient Portal",
      description: "Self-service portal empowering patients to manage their healthcare experience",
      features: ["Online scheduling", "Medical records access", "Secure messaging", "Bill payment"],
      category: "Patient Engagement",
      popular: true
    },
    {
      icon: ClipboardList,
      title: "Clinical Decision Support",
      description: "AI-powered clinical decision support system with evidence-based recommendations",
      features: ["Clinical alerts", "Drug interactions", "Treatment protocols", "Best practices"],
      category: "Clinical",
      popular: false
    },
    {
      icon: Phone,
      title: "Communication Hub",
      description: "Centralized communication platform for staff, patients, and external providers",
      features: ["Secure messaging", "Voice calls", "Broadcast notifications", "Care team collaboration"],
      category: "Communication",
      popular: false
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security framework ensuring HIPAA compliance and data protection",
      features: ["Access controls", "Audit logs", "Compliance monitoring", "Risk assessment"],
      category: "Security",
      popular: false
    }
  ];

  const categories = ["All", "Core", "Clinical", "Financial", "Analytics", "Digital Health", "Administrative", "Patient Engagement", "Communication", "Security"];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            MediLine Modules
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Modular healthcare solutions that grow with your practice. Choose the modules 
            that fit your needs or implement the complete suite for maximum efficiency.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Badge 
              key={category} 
              variant="secondary" 
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {modules.map((module, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow relative">
              {module.popular && (
                <Badge className="absolute -top-2 -right-2 bg-primary">
                  Popular
                </Badge>
              )}
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <module.icon className="h-12 w-12 text-primary" />
                  <Badge variant="outline">{module.category}</Badge>
                </div>
                <CardTitle className="text-xl">{module.title}</CardTitle>
                <CardDescription className="text-base">
                  {module.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-medium text-sm text-foreground">Key Features:</h4>
                  <ul className="space-y-2">
                    {module.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Implementation Options */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="text-center p-6">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">Starter Package</CardTitle>
              <CardDescription>Essential modules for small practices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="text-sm text-muted-foreground">✓ Patient Management</div>
                <div className="text-sm text-muted-foreground">✓ Appointment Scheduler</div>
                <div className="text-sm text-muted-foreground">✓ Basic EHR</div>
                <div className="text-sm text-muted-foreground">✓ Patient Portal</div>
              </div>
              <Button variant="outline" className="w-full">Learn More</Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6 border-primary">
            <CardHeader>
              <Badge className="mb-4">Most Popular</Badge>
              <CardTitle className="text-2xl mb-2">Professional Package</CardTitle>
              <CardDescription>Complete solution for growing practices</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="text-sm text-muted-foreground">✓ All Starter features</div>
                <div className="text-sm text-muted-foreground">✓ Billing & Revenue Cycle</div>
                <div className="text-sm text-muted-foreground">✓ Analytics & Reporting</div>
                <div className="text-sm text-muted-foreground">✓ Telemedicine</div>
              </div>
              <Button className="w-full">Get Started</Button>
            </CardContent>
          </Card>

          <Card className="text-center p-6">
            <CardHeader>
              <CardTitle className="text-2xl mb-2">Enterprise Package</CardTitle>
              <CardDescription>Full suite for large healthcare organizations</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 mb-6">
                <div className="text-sm text-muted-foreground">✓ All Professional features</div>
                <div className="text-sm text-muted-foreground">✓ Advanced Analytics</div>
                <div className="text-sm text-muted-foreground">✓ Multi-location Support</div>
                <div className="text-sm text-muted-foreground">✓ Custom Integrations</div>
              </div>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card p-12 rounded-lg border">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Perfect Solution?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our modular approach means you can start with what you need today and expand 
            as your practice grows. Let's discuss the perfect combination for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/features">View All Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modules;
