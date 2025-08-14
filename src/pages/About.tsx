
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
            About Rapid Test Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A Centralized System for Health Appointments, Lab Tests, and Digital Medical Records
          </p>
        </div>

        {/* Core Purpose & Objective */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-card p-8 rounded-lg border">
            <Target className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Core Purpose</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              To build a non-AI, database-driven platform that serves as a central system for patients, clinics, and diagnostic labs to:
            </p>
            <ul className="text-muted-foreground space-y-2">
              <li>• Book doctor appointments</li>
              <li>• Schedule lab tests</li>
              <li>• Access and manage digital medical records</li>
              <li>• Receive timely alerts/reminders about appointments and reports</li>
            </ul>
          </div>
          
          <div className="bg-card p-8 rounded-lg border">
            <Award className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
            <p className="text-muted-foreground leading-relaxed">
              Rapid Test Hub offers a scalable, secure, and user-friendly solution for modern healthcare 
              operations. By keeping it database-driven and avoiding AI complexity, it's ideal for 
              real-world deployment in clinics and diagnostic centers.
            </p>
          </div>
        </div>

        {/* Security & Data Integrity */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Security & Data Integrity</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Authentication & Access</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• JWT for secure authentication</li>
                  <li>• RBAC (Role-Based Access Control)</li>
                  <li>• Multi-role support (Patient, Doctor, Lab Staff, Admin)</li>
                </ul>
              </div>
              <div className="bg-card p-6 rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• File encryption for sensitive documents</li>
                  <li>• Full system audit logs (transaction tracking)</li>
                  <li>• Secure data transmission and storage</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Workflow */}
        <div className="bg-primary/5 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Sample Workflow</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Patient Journey</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                  <span>Registers and logs in</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <span>Searches for labs/tests and books an appointment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                  <span>Sample is collected; lab uploads the report</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">4</div>
                  <span>Patient views/downloads their report</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Clinic/Lab Staff</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-semibold">1</div>
                  <span>Logs into the lab portal</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-semibold">2</div>
                  <span>Manages upcoming appointments</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center text-sm font-semibold">3</div>
                  <span>Uploads test results upon completion</span>
                </div>
              </div>
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
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Healthcare Operations?</h2>
          <p className="text-muted-foreground mb-6">
            Discover how Rapid Test Hub can streamline your diagnostic processes and improve patient care.
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
