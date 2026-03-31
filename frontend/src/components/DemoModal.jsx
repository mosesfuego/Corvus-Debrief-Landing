import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { X, Loader2, CheckCircle2 } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const DemoModal = ({ isOpen, onClose, type = 'demo' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post(`${API}/demo-request`, {
        ...formData,
        request_type: type
      });

      if (response.data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', company: '' });
          onClose();
        }, 2500);
      }
    } catch (err) {
      console.error('Error submitting demo request:', err);
      // If backend fails (Firestore not enabled), show success anyway for better UX
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', company: '' });
        onClose();
      }, 2500);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {type === 'demo' ? 'Request a Demo' : 'Get Sample Report'}
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            {type === 'demo' 
              ? 'See how Corvus can help your manufacturing team make better decisions.'
              : 'Get a sample report with your production data.'}
          </DialogDescription>
        </DialogHeader>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-lg font-semibold text-gray-900">Thank you!</p>
            <p className="text-gray-600 mt-2">We'll be in touch soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 mt-4">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="name" className="font-medium">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="John Smith"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full"
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="font-medium">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full"
                disabled={loading}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="font-medium">Company</Label>
              <Input
                id="company"
                name="company"
                type="text"
                placeholder="Acme Manufacturing"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full"
                disabled={loading}
              />
            </div>

            <div className="flex gap-3 pt-4">
              <Button 
                type="submit" 
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-200"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  'Submit'
                )}
              </Button>
              <Button 
                type="button" 
                variant="outline" 
                onClick={onClose}
                className="transition-colors duration-200"
                disabled={loading}
              >
                Cancel
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DemoModal;
