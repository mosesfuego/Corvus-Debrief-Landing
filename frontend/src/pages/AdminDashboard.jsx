import React, { useState, useEffect } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { 
  Loader2, 
  RefreshCw, 
  Trash2, 
  CheckCircle, 
  Clock, 
  XCircle,
  Mail,
  Building2,
  User,
  Calendar
} from 'lucide-react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const AdminDashboard = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const navigate = useNavigate();

  const fetchRequests = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/demo-requests`);
      setRequests(response.data.data || []);
    } catch (error) {
      console.error('Error fetching requests:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  const updateStatus = async (requestId, newStatus) => {
    setUpdating(true);
    try {
      await axios.patch(`${API}/demo-requests/${requestId}/status?status=${newStatus}`);
      await fetchRequests();
    } catch (error) {
      console.error('Error updating status:', error);
    } finally {
      setUpdating(false);
    }
  };

  const deleteRequest = async (requestId) => {
    if (!window.confirm('Are you sure you want to delete this request?')) return;
    
    setUpdating(true);
    try {
      await axios.delete(`${API}/demo-requests/${requestId}`);
      await fetchRequests();
    } catch (error) {
      console.error('Error deleting request:', error);
    } finally {
      setUpdating(false);
    }
  };

  const getStatusBadge = (status) => {
    const variants = {
      pending: { color: 'bg-yellow-100 text-yellow-800 border-yellow-300', icon: Clock },
      contacted: { color: 'bg-blue-100 text-blue-800 border-blue-300', icon: Mail },
      completed: { color: 'bg-green-100 text-green-800 border-green-300', icon: CheckCircle },
      cancelled: { color: 'bg-red-100 text-red-800 border-red-300', icon: XCircle }
    };
    
    const variant = variants[status] || variants.pending;
    const Icon = variant.icon;
    
    return (
      <Badge className={`${variant.color} border px-3 py-1 font-medium`}>
        <Icon className="h-3.5 w-3.5 mr-1.5" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return 'N/A';
    try {
      const date = new Date(timestamp);
      return date.toLocaleString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch {
      return timestamp;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage demo requests from Corvus MFG</p>
            </div>
            <div className="flex gap-3">
              <Button
                onClick={fetchRequests}
                variant="outline"
                disabled={updating}
                className="flex items-center gap-2"
              >
                <RefreshCw className={`h-4 w-4 ${updating ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
              <Button
                onClick={() => navigate('/')}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Back to Site
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white border-2 border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Total Requests</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">{requests.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white border-2 border-yellow-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Pending</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {requests.filter(r => r.status === 'pending').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                <Clock className="h-6 w-6 text-yellow-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white border-2 border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Contacted</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {requests.filter(r => r.status === 'contacted').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Mail className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-white border-2 border-green-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Completed</p>
                <p className="text-3xl font-bold text-gray-900 mt-2">
                  {requests.filter(r => r.status === 'completed').length}
                </p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
            </div>
          </Card>
        </div>

        {/* Requests List */}
        <div className="space-y-4">
          {requests.length === 0 ? (
            <Card className="p-12 text-center bg-white">
              <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No requests yet</h3>
              <p className="text-gray-600">Demo requests will appear here when submitted</p>
            </Card>
          ) : (
            requests.map((request) => (
              <Card key={request.id} className="p-6 bg-white border-2 border-gray-200 hover:border-blue-300 transition-colors duration-200">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{request.name}</h3>
                          {getStatusBadge(request.status)}
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-3 mt-3">
                          <div className="flex items-center gap-2 text-gray-600">
                            <Mail className="h-4 w-4" />
                            <a href={`mailto:${request.email}`} className="hover:text-blue-600 transition-colors">
                              {request.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Building2 className="h-4 w-4" />
                            <span>{request.company}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <span>{formatDate(request.timestamp)}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-600">
                            <span className="text-sm font-medium">Type:</span>
                            <span className="capitalize">{request.request_type || 'demo'}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateStatus(request.id, 'contacted')}
                        disabled={updating || request.status === 'contacted'}
                        className="text-blue-600 border-blue-300 hover:bg-blue-50"
                      >
                        Mark Contacted
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateStatus(request.id, 'completed')}
                        disabled={updating || request.status === 'completed'}
                        className="text-green-600 border-green-300 hover:bg-green-50"
                      >
                        Mark Completed
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateStatus(request.id, 'cancelled')}
                        disabled={updating || request.status === 'cancelled'}
                        className="text-gray-600 border-gray-300 hover:bg-gray-50"
                      >
                        Cancel
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => deleteRequest(request.id)}
                        disabled={updating}
                        className="text-red-600 border-red-300 hover:bg-red-50 ml-auto"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
