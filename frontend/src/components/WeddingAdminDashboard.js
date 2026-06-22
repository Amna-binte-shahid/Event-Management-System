'use client';

import React, { useState, useEffect } from 'react';
import { Trash2, Edit, Plus, X, Calendar, Users, MapPin, DollarSign, AlertCircle } from 'lucide-react';


const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}/weddings`
  : 'http://localhost:3000/weddings';

export default function WeddingAdminDashboard() {

  const [isMounted, setIsMounted] = useState(false);
  
  const [weddings, setWeddings] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingWedding, setEditingWedding] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const [formData, setFormData] = useState({
    brideName: '',
    groomName: '',
    weddingDate: '',
    venue: '',
    city: '',
    country: '',
    description: '',
    estimatedGuests: '',
    budget: '',
    status: 'planning',
    contactEmail: '',
    contactPhone: '',
    specialRequests: '',
    Superior: ""
  });


  useEffect(() => {
    setIsMounted(true);
  }, []);

  
  useEffect(() => {
    if (isMounted) {
      console.log("Component mounted. Attempting to fetch from:", API_URL);
      fetchWeddings();
    }
  }, [isMounted]);

  const fetchWeddings = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(API_URL);
      console.log("Fetch response status:", response.status);

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      console.log("Data received:", data);
      setWeddings(data);
    } catch (error) {
      console.error('Error fetching weddings:', error);
      setError(`Failed to load weddings. Is the API route created at app/api/weddings/route.js? Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    console.log("Submit button clicked"); // Debug log

    if (!formData.brideName || !formData.groomName || !formData.weddingDate) {
      setError('Please fill in all required fields (Bride Name, Groom Name, Wedding Date)');
      return;
    }

    setLoading(true);
    setError(null);

    const payload = {
      brideName: formData.brideName,
      groomName: formData.groomName,
      weddingDate: formData.weddingDate,
      venue: formData.venue || undefined,
      city: formData.city || undefined,
      country: formData.country || undefined,
      description: formData.description || undefined,
      estimatedGuests: formData.estimatedGuests ? parseInt(formData.estimatedGuests) : undefined,
      budget: formData.budget ? parseFloat(formData.budget) : undefined,
      status: formData.status,
      contactEmail: formData.contactEmail || undefined,
      contactPhone: formData.contactPhone || undefined,
      specialRequests: formData.specialRequests || undefined,
      Superior: formData.Superior || undefined
    };

    try {
      const url = editingWedding ? `${API_URL}/${editingWedding.id}` : API_URL;
      const method = editingWedding ? 'PATCH' : 'POST';
      
      console.log(`Sending ${method} request to ${url}`);

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Failed to save: ${response.status} - ${errText}`);
      }

      console.log("Save successful");
      await fetchWeddings();
      closeModal();
    } catch (error) {
      console.error('Error saving wedding:', error);
      setError(`Failed to save wedding: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this wedding?')) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      await fetchWeddings();
    } catch (error) {
      console.error('Error deleting wedding:', error);
      setError(`Failed to delete wedding: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const openModal = (wedding = null) => {
    console.log("Opening modal", wedding ? "Edit Mode" : "New Mode");
    setError(null);
    if (wedding) {
      setEditingWedding(wedding);
      setFormData({
        brideName: wedding.brideName || '',
        groomName: wedding.groomName || '',
        weddingDate: wedding.weddingDate ? wedding.weddingDate.split('T')[0] : '',
        venue: wedding.venue || '',
        city: wedding.city || '',
        country: wedding.country || '',
        description: wedding.description || '',
        estimatedGuests: wedding.estimatedGuests || '',
        budget: wedding.budget || '',
        status: wedding.status || 'planning',
        contactEmail: wedding.contactEmail || '',
        contactPhone: wedding.contactPhone || '',
        specialRequests: wedding.specialRequests || '',
        Superior: wedding.Superior || ''
      });
    } else {
      setEditingWedding(null);
      setFormData({
        brideName: '',
        groomName: '',
        weddingDate: '',
        venue: '',
        city: '',
        country: '',
        description: '',
        estimatedGuests: '',
        budget: '',
        status: 'planning',
        contactEmail: '',
        contactPhone: '',
        specialRequests: '',
        Superior: ''
      });
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingWedding(null);
    setError(null);
  };

  const getStatusColor = (status) => {
    const colors = {
      planning: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-green-100 text-green-800',
      completed: 'bg-blue-100 text-blue-800',
      cancelled: 'bg-red-100 text-red-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-pink-50">
      <div className="bg-pink-900 text-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-2">Wedding Management Dashboard</h1>
          <p className="text-pink-200">Manage all your wedding events in one place</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {error && (
          <div className="mb-6 bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-2">
            <AlertCircle size={20} />
            <span>{error}</span>
            <button onClick={() => setError(null)} className="ml-auto">
              <X size={18} />
            </button>
          </div>
        )}

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-pink-900">All Weddings</h2>
          <button
  onClick={() => openModal()}
  className="bg-pink-900 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-pink-800 transition shadow-md hover:shadow-lg transform active:scale-95 
  hidden md:flex"
>
  <Plus size={20} />
  Add New Wedding
</button>

        </div>

        {loading && !isModalOpen && (
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-pink-900 border-r-transparent"></div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {weddings.map((wedding) => (
            <div key={wedding.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="bg-gradient-to-r from-pink-900 to-pink-700 p-4">
                <h3 className="text-xl font-bold text-white truncate">
                  {wedding.brideName} & {wedding.groomName}
                </h3>
                <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(wedding.status)}`}>
                  {wedding.status}
                </span>
              </div>
              
              <div className="p-4 space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <Calendar size={18} className="text-pink-900 shrink-0" />
                  <span className="text-sm">
                    {/* Safe date rendering to prevent hydration mismatches */}
                    {wedding.weddingDate ? new Date(wedding.weddingDate).toLocaleDateString() : 'No Date'}
                  </span>
                </div>
                
                {wedding.venue && (
                  <div className="flex items-center gap-2 text-gray-700">
                    <MapPin size={18} className="text-pink-900 shrink-0" />
                    <span className="text-sm truncate">{wedding.venue}, {wedding.city}</span>
                  </div>
                )}
                
                {wedding.estimatedGuests && (
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users size={18} className="text-pink-900 shrink-0" />
                    <span className="text-sm">{wedding.estimatedGuests} Guests</span>
                  </div>
                )}
                
                {wedding.budget && (
                  <div className="flex items-center gap-2 text-gray-700">
                    <DollarSign size={18} className="text-pink-900 shrink-0" />
                    <span className="text-sm">${Number(wedding.budget).toLocaleString()}</span>
                  </div>
                )}

                {wedding.description && (
                  <p className="text-sm text-gray-600 line-clamp-2 mt-2">{wedding.description}</p>
                )}
              </div>

              <div className="px-4 pb-4 flex gap-2">
                <button
                  onClick={() => openModal(wedding)}
                  className="flex-1 bg-pink-100 text-pink-900 px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-pink-200 transition"
                >
                  <Edit size={16} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(wedding.id)}
                  className="flex-1 bg-red-100 text-red-900 px-4 py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-red-200 transition"
                >
                  <Trash2 size={16} />
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {weddings.length === 0 && !loading && (
          <div className="text-center py-12 text-gray-500 bg-white rounded-xl border border-gray-100 shadow-sm">
            <p className="text-xl">No weddings found.</p>
            <button onClick={openModal} className="text-pink-900 font-semibold hover:underline mt-2">
              Create your first event
            </button>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-xl max-w-2xl w-full my-8 shadow-2xl animate-fadeIn">
            <div className="bg-pink-900 text-white p-6 flex justify-between items-center rounded-t-xl">
              <h2 className="text-2xl font-bold">
                {editingWedding ? 'Edit Wedding' : 'Add New Wedding'}
              </h2>
              <button onClick={closeModal} className="hover:bg-pink-800 p-2 rounded transition">
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg flex items-center gap-2">
                  <AlertCircle size={20} />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-pink-900 mb-1">Bride Name *</label>
                  <input
                    type="text"
                    value={formData.brideName}
                    onChange={(e) => setFormData({...formData, brideName: e.target.value})}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-pink-900 mb-1">Groom Name *</label>
                  <input
                    type="text"
                    value={formData.groomName}
                    onChange={(e) => setFormData({...formData, groomName: e.target.value})}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                    placeholder="Enter name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-pink-900 mb-1">Wedding Date *</label>
                  <input
                    type="date"
                    value={formData.weddingDate}
                    onChange={(e) => setFormData({...formData, weddingDate: e.target.value})}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-pink-900 mb-1">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  >
                    <option value="planning">Planning</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="completed">Completed</option>
                    <option value="cancelled">Cancelled</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-pink-900 mb-1">Venue</label>
                  <input
                    type="text"
                    value={formData.venue}
                    onChange={(e) => setFormData({...formData, venue: e.target.value})}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-pink-900 mb-1">City</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({...formData, city: e.target.value})}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-pink-900 mb-1">Country</label>
                  <input
                    type="text"
                    value={formData.country}
                    onChange={(e) => setFormData({...formData, country: e.target.value})}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-pink-900 mb-1">Estimated Guests</label>
                  <input
                    type="number"
                    value={formData.estimatedGuests}
                    onChange={(e) => setFormData({...formData, estimatedGuests: e.target.value})}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-pink-900 mb-1">Budget</label>
                  <input
                    type="number"
                    step="0.01"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-pink-900 mb-1">Contact Email</label>
                  <input
                    type="email"
                    value={formData.contactEmail}
                    onChange={(e) => setFormData({...formData, contactEmail: e.target.value})}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-pink-900 mb-1">Contact Phone</label>
                  <input
                    type="tel"
                    value={formData.contactPhone}
                    onChange={(e) => setFormData({...formData, contactPhone: e.target.value})}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-pink-900 mb-1">Description</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-pink-900 mb-1">Special Requests</label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({...formData, specialRequests: e.target.value})}
                  rows={2}
                  className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>

              <div>
                  <label className="block text-sm font-semibold text-pink-900 mb-1">Superior</label>
                  <input
                    type="text"
                    value={formData.Superior}
                    onChange={(e) => setFormData({...formData, Superior: e.target.value})}
                    className="w-full px-3 py-2 border border-pink-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 border border-pink-300 text-pink-900 rounded-lg hover:bg-pink-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={loading}
                  className="flex-1 px-4 py-2 bg-pink-900 text-white rounded-lg hover:bg-pink-800 transition disabled:opacity-50"
                >
                  {loading ? 'Saving...' : editingWedding ? 'Update Wedding' : 'Create Wedding'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}