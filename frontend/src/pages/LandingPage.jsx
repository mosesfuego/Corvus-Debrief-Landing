import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { ChevronRight, Upload, Cog, FileText, ArrowRight } from 'lucide-react';
import DemoModal from '../components/DemoModal';
import { sampleReport, howItWorksSteps, valueProps } from '../data/mock';

const LandingPage = () => {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [modalType, setModalType] = useState('demo');

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
        return 'border-l-red-500';
      case 'warning':
        return 'border-l-yellow-500';
      case 'action':
        return 'border-l-blue-500';
      default:
        return 'border-l-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-semibold text-gray-900">Corvus MFG</div>
            <div className="flex items-center gap-8">
              <button
                onClick={() => scrollToSection('product')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Product
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                How it works
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-semibold text-gray-900 leading-tight mb-6">
            Turn messy production data into clear daily decisions
          </h1>
          <p className="text-xl text-gray-600 mb-10 max-w-3xl leading-relaxed">
            Corvus helps manufacturing teams see what's blocked, at risk, and what needs action—without digging through spreadsheets.
          </p>
          <div className="flex gap-4">
            <Button
              onClick={() => openModal('demo')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-6 text-base transition-colors duration-200"
            >
              Request a Demo
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              onClick={() => openModal('report')}
              variant="outline"
              className="px-6 py-6 text-base border-gray-300 hover:border-gray-400 transition-colors duration-200"
            >
              See Sample Report
            </Button>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="product" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Manufacturing teams waste hours piecing together what's happening
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Production data lives in disconnected systems. Work orders in the MES, quality reports in spreadsheets, inventory in another tool.
            </p>
            <p>
              Every morning, operations teams manually dig through CSVs and dashboards to figure out what's blocked, what's at risk, and what needs a decision.
            </p>
            <p>
              By the time they have clarity, the standup is over and the day has started.
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">
            Corvus gives you a clear view of what needs attention
          </h2>
          <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              Corvus analyzes your production and work order data to identify issues automatically.
            </p>
            <p>
              Instead of hunting through spreadsheets, you get a simple daily report that shows what's blocked, what's at risk, and what needs a decision.
            </p>
            <p>
              Your team starts the day with shared context and can focus on solving problems instead of finding them.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
            How it works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {howItWorksSteps.map((step, index) => (
              <div key={step.step} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-semibold mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full">
                    <ArrowRight className="h-6 w-6 text-gray-300 ml-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Output Example Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-3 text-center">
            What you get
          </h2>
          <p className="text-gray-600 text-center mb-12">
            Daily report for {sampleReport.reportDate}
          </p>

          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 font-mono text-sm">
            {sampleReport.sections.map((section, idx) => (
              <div key={idx} className="mb-8 last:mb-0">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 font-sans">
                  {section.title}
                </h3>
                <div className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className={`bg-white border-l-4 ${getStatusColor(section.status)} p-4 rounded`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900 mb-1">
                            {item.id}
                          </div>
                          <div className="text-gray-700">
                            {item.description}
                          </div>
                          {item.blockedFor && (
                            <div className="text-gray-500 text-xs mt-1">
                              Blocked for: {item.blockedFor}
                            </div>
                          )}
                          {item.impact && (
                            <div className="text-gray-500 text-xs mt-1">
                              Impact: {item.impact}
                            </div>
                          )}
                          {item.decision && (
                            <div className="text-gray-500 text-xs mt-1">
                              {item.decision}
                            </div>
                          )}
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
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">
            Why teams use Corvus
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {valueProps.map((prop, index) => (
              <Card key={index} className="p-8 border border-gray-200 bg-white hover:border-blue-600 transition-colors duration-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {prop.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {prop.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-900 mb-6">
            Try it with your data
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            See how Corvus can help your team make better decisions, faster.
          </p>
          <Button
            onClick={() => openModal('demo')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg transition-colors duration-200"
          >
            Request a demo
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-semibold text-gray-900">Corvus MFG</div>
            <div className="flex gap-8 text-gray-600">
              <button 
                onClick={() => scrollToSection('product')}
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Product
              </button>
              <button 
                onClick={() => scrollToSection('how-it-works')}
                className="hover:text-gray-900 transition-colors duration-200"
              >
                How it works
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="hover:text-gray-900 transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-500 text-sm">
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
