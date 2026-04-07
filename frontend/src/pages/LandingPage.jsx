import React, { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ChevronRight, Upload, Cog, FileText, ArrowRight, AlertCircle, Clock, CheckCircle, ArrowUpRight } from 'lucide-react';
import DemoModal from '../components/DemoModal';
import { sampleReport, howItWorksSteps, valueProps } from '../data/mock';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const LandingPage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalType, setModalType] = useState('demo');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openModal = (type) => {
    setModalType(type);
    setIsDemoModalOpen(true);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'critical':
        return 'border-l-red-500 bg-red-50';
      case 'warning':
        return 'border-l-amber-500 bg-amber-50';
      case 'action':
        return 'border-l-green-500 bg-green-50';
      default:
        return 'border-l-gray-300 bg-gray-50';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'critical':
        return <AlertCircle className="h-5 w-5 text-red-600" />;
      case 'warning':
        return <Clock className="h-5 w-5 text-amber-600" />;
      case 'action':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full bg-white z-50 transition-all duration-300 ${
        isScrolled ? 'border-b border-gray-200 shadow-sm' : 'border-b border-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="/images/corvus-logo.png" 
                alt="Corvus Debrief Logo" 
                className="h-10 w-10 object-contain"
              />
              <div className="text-2xl font-bold tracking-tight text-gray-900">
                Corvus MFG<span className="text-blue-600">.</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-10">
              <button
                onClick={() => scrollToSection('product')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Product
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200"
              >
                Contact
              </button>
              <Button
                onClick={() => openModal('demo')}
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow-md transition-all duration-200"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-6 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-70 via-white to-white opacity-70"></div>
        
        <div className="bg-gradient-to-br from-blue-60 to-blue-400 max-w-5xl mx-auto relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            ✨ Early Access
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-[1.1] mb-8 tracking-tighter">
            Turn messy production data into {' '}
            <span className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter ">
              clear daily decisions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl leading-relaxed font-light">
            Corvus helps manufacturing teams see what's blocked, at risk, and what needs action without digging through multiple systems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => openModal('demo')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-7 text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              Request a Demo
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Button>
            <Button
              onClick={() => openModal('report')}
              variant="outline"
              className="px-8 py-7 text-lg border-2 border-gray-300 hover:border-blue-600 hover:bg-gray-50 transition-all duration-200"
            >
              See Sample Report
            </Button>
          </div>

          <div className="mt-16 flex items-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span>Setup in minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="product" className="py-32 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wide">
            The Problem
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-slate-950 mt-6 leading-tight tracking-normal font-serif max-w-4xl">
            Manufacturing teams waste hours figuring out what’s actually happening.
          </h2>
          <div className="grid md:grid-cols-2 gap-5 mt-12"></div>
          <div className="space-y-4 text-sm md:text-base text-slate-500 leading-relaxed max-w-2xl">
            <p>
              Production data is scattered teams spend hours each day figuring out:
            </p>
            <p className="border-l-4 border-red-500 pl-6">
              What’s blocked
            </p>
            <p className="border-l-4 border-orange-300 pl-6">
              What’s slipping
            </p>
            <p className="border-l-4 border-green-500 pl-6">
              What needs action
            </p>
          </div>
        </div>
        
      </section>

      {/* Solution Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wide">
            The Solution
          </div>
  
          
          <h2 className="text-3xl md:text-4xl font-black text-slate-950 mt-6 leading-tight tracking-normal font-serif max-w-4xl">
            Corvus Debrief transforms production data into decision-ready insights.
          </h2>
          
          <div className="grid md:grid-cols-2 gap-9 mt-9">
            <div>
              <div className="space-y-4 text-sm md:text-base text-slate-500 leading-relaxed">
                <p>
                  By analyzing work orders and operational signals, it surfaces:
                </p>
                <p className="border-l-4 border-red-500 pl-6">
                  What’s blocked
                </p>
                <p className="border-l-4 border-orange-300 pl-6">
                  What’s slipping
                </p>
                <p className="border-l-4 border-green-500 pl-6">
                  What needs a decision
                </p>
                <p>
                  Instead of hunting through ERP, MES,QMS and spreadsheets, you get simple reports that show teams all they need to know to make important decisons.
                </p>
          
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl transform rotate-3"></div>
              <img 
                src="/images/team-meeting.png" 
                alt="Manufacturing team collaboration" 
                className="relative rounded-2xl shadow-2xl border-4 border-white object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Automatically identify blockers and risks</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Daily reports delivered to your team</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Start standups with clear priorities</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-200 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wide">
              How it Works
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 mt-6 leading-tight tracking-normal font-serif max-w-4xl">
              Simple, powerful workflow
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <Card className="p-8 bg-white border-2 border-gray-200 hover:border-blue-600 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="flex flex-col items-center text-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center text-2xl font-bold mb-6 shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {step.description}
                    </p>
                  </div>
                </Card>
                
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-4 text-gray-300">
                    <ArrowRight className="h-8 w-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Output Example Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wide">
              Sample Output
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 mt-6 leading-tight tracking-normal font-serif max-w-4xl">
              What you get before standup meetings
            </h2>
            
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 md:p-12 shadow-xl">
            {sampleReport.sections.map((section, idx) => (
              <div key={idx} className="mb-10 last:mb-0">
                <div className="flex items-center gap-3 mb-6">
                  {getStatusIcon(section.status)}
                  <h3 className="text-2xl font-bold text-gray-900">
                    {section.title}
                  </h3>
                  <span className="ml-auto text-sm text-gray-500 font-medium">
                    {section.items.length} {section.items.length === 1 ? 'item' : 'items'}
                  </span>
                </div>
                
                <div className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`border-l-4 ${getStatusColor(section.status)} p-6 rounded-r-lg hover:shadow-md transition-shadow duration-200`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 text-lg mb-2 font-mono">
                            {item.id}
                          </div>
                          <div className="text-gray-800 font-medium mb-2">
                            {item.description}
                          </div>
                          <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                            {item.blockedFor && (
                              <span className="inline-flex items-center gap-1">
                                <Clock className="h-3.5 w-3.5" />
                                Blocked for: {item.blockedFor}
                              </span>
                            )}
                            {item.impact && (
                              <span className="inline-flex items-center gap-1">
                                <AlertCircle className="h-3.5 w-3.5" />
                                {item.impact}
                              </span>
                            )}
                            {item.decision && (
                              <span className="inline-flex items-center gap-1">
                                <CheckCircle className="h-3.5 w-3.5" />
                                {item.decision}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-32 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-6 px-4 py-2 bg-blue-200 text-blue-700 rounded-full text-sm font-semibold uppercase tracking-wide">
              Benefits
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 mt-6 leading-tight tracking-normal font-serif max-w-4xl">
              Why teams use Corvus
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {valueProps.map((prop, index) => (
              <Card 
                key={index} 
                className="p-8 border-2 border-gray-200 bg-white hover:border-blue-600 hover:shadow-xl transition-all duration-300 group"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-200">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {prop.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-50 to-blue-200 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-serif">
              Try it with your data
            </h2>
            <p className="text-xl md:text-2xl mb-10 opacity-90 font-light">
              See how Corvus can help your team make better decisions, faster.
            </p>
            <Button
              onClick={() => openModal('demo')}
              className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-7 text-lg shadow-lg hover:shadow-xl transition-all duration-200 group"
            >
              Request a demo
              <ArrowUpRight className="ml-2 h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-3">
              <img 
                src="/images/corvus-logo.png" 
                alt="Corvus Debrief Logo" 
                className="h-8 w-8 object-contain"
              />
              <div className="text-2xl font-bold tracking-tight text-gray-900">
                Corvus Debrief<span className="text-blue-600">.</span>
              </div>
            </div>
            <div className="flex gap-10 text-gray-600">
              <button 
                onClick={() => scrollToSection('product')}
                className="hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                Product
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                How it works
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-gray-900 transition-colors duration-200 font-medium"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm border-t border-gray-200 pt-8">
            © 2025 Corvus MFG. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Demo Modal */}
      <DemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        type={modalType}
      />
    </div>
  );
};

export default LandingPage;
