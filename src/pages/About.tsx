
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About MediLine
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pioneering the future of healthcare technology with innovative solutions 
            that put patients first and empower healthcare providers.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-card p-8 rounded-lg border">
            <Target className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              To revolutionize healthcare delivery by providing comprehensive, 
              user-friendly technology solutions that enhance patient care, 
              streamline operations, and improve health outcomes for communities worldwide.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg border">
            <Award className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground leading-relaxed">
              To be the leading healthcare technology platform that bridges the gap 
              between traditional medical practices and modern digital solutions, 
              making quality healthcare accessible to everyone.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Founded in 2020 by a team of healthcare professionals and technology experts, 
              MediLine was born from the recognition that healthcare systems needed a 
              comprehensive digital transformation. We witnessed firsthand the challenges 
              faced by medical practitioners, patients, and administrators in managing 
              complex healthcare workflows.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our journey began with a simple question: "How can we make healthcare 
              more efficient, accessible, and patient-centered?" This led us to develop 
              a suite of integrated solutions that address every aspect of healthcare 
              management, from patient records to billing, scheduling to analytics.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, MediLine serves healthcare providers across the globe, helping them 
              deliver better care while reducing administrative burden and operational costs.
            </p>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">MediLine by Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Healthcare Providers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50K+</div>
              <div className="text-muted-foreground">Patients Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime Reliability</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Patient First</h3>
              <p className="text-muted-foreground">
                Every decision we make is guided by what's best for patient care and outcomes.
              </p>
            </div>
            
            <div className="text-center">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously evolve our platform with cutting-edge technology and features.
              </p>
            </div>
            
            <div className="text-center">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for the highest standards in everything we do, from code to customer service.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-card p-8 rounded-lg border">
          <h2 className="text-2xl font-bold mb-4">Ready to Join the MediLine Family?</h2>
          <p className="text-muted-foreground mb-6">
            Discover how our platform can transform your healthcare practice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/features">Explore Features</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
