
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Zap, TestTube, Activity, FileText } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/10 via-primary/5 to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Welcome to <span className="text-primary">Rapid Test Hub</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Revolutionizing healthcare testing with cutting-edge diagnostic technology. 
              Streamline your testing operations, enhance patient care, and boost efficiency with rapid, accurate results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/features">
                  Explore Features <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Rapid Test Hub?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the future of healthcare testing with our comprehensive diagnostic solution
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-card border">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Secure & Compliant</h3>
              <p className="text-muted-foreground">
                HIPAA compliant with enterprise-grade security to protect sensitive testing data and patient information
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card border">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Patient-Centered</h3>
              <p className="text-muted-foreground">
                Designed with patients in mind to improve testing experience and deliver faster results
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-card border">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
              <p className="text-muted-foreground">
                Rapid testing capabilities with results in minutes, not hours or days
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Complete Testing Management Solution
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                From rapid diagnostics to result management, inventory tracking to analytics - 
                Rapid Test Hub handles it all with precision and speed.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <TestTube className="h-5 w-5 text-primary" />
                  <span>Rapid Diagnostic Testing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Real-time Result Monitoring</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Automated Reporting & Analytics</span>
                </div>
              </div>
              <Button className="mt-6" asChild>
                <Link to="/modules">View All Modules</Link>
              </Button>
            </div>
            
            <div className="bg-card p-8 rounded-lg border shadow-sm">
              <h3 className="text-2xl font-semibold mb-4">Ready to Transform Your Testing?</h3>
              <p className="text-muted-foreground mb-6">
                Join thousands of healthcare providers who trust Rapid Test Hub for their diagnostic operations.
              </p>
              <Button asChild className="w-full">
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
