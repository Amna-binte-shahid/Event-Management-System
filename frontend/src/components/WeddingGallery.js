'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

const API_URL = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}/weddings`
  : 'http://localhost:3000/weddings';

function WeddingsGallery() {
  const [weddings, setWeddings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchWeddings();
  }, []);

  const fetchWeddings = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      setWeddings(data);
    } catch (error) {
      console.error('Error fetching weddings:', error);
    } finally {
      setLoading(false);
    }
  };

  const getFilteredWeddings = () => {
    if (filter === 'all') return weddings;
    if (filter === 'upcoming') {
      return weddings.filter(w => new Date(w.weddingDate) >= new Date());
    }
    return weddings.filter(w => w.status === filter);
  };

  const filteredWeddings = getFilteredWeddings();

  return (
    <div className="bg-pink-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-pink-900 font-bold text-lg mb-2">Our Weddings</p>
          <h2 className="font-extrabold text-4xl text-pink-900 mb-4">
            Celebrating Love Stories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the beautiful weddings we've had the honor to be part of. 
            Each celebration tells a unique love story.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              filter === 'all'
                ? 'bg-pink-900 text-white'
                : 'bg-white text-pink-900 hover:bg-pink-100'
            }`}
          >
            All Weddings
          </button>
          <button
            onClick={() => setFilter('upcoming')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              filter === 'upcoming'
                ? 'bg-pink-900 text-white'
                : 'bg-white text-pink-900 hover:bg-pink-100'
            }`}
          >
            Upcoming
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              filter === 'completed'
                ? 'bg-pink-900 text-white'
                : 'bg-white text-pink-900 hover:bg-pink-100'
            }`}
          >
            Completed
          </button>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-pink-900 border-r-transparent"></div>
            <p className="mt-4 text-pink-900 font-semibold">Loading weddings...</p>
          </div>
        )}

        {/* Weddings Grid */}
        {!loading && filteredWeddings.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWeddings.map((wedding) => (
              <div
                key={wedding.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Wedding Header with Gradient */}
                <div className="h-48 bg-gradient-to-br from-pink-900 via-pink-700 to-pink-500 relative">
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-6">
                    <h3 className="text-2xl font-extrabold text-center mb-2">
                      {wedding.brideName} & {wedding.groomName}
                    </h3>
                    <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                      <Calendar size={16} />
                      <span className="text-sm font-semibold">
                        {new Date(wedding.weddingDate).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Wedding Details */}
                <div className="p-6 space-y-4">
                  {wedding.venue && (
                    <div className="flex items-start gap-3">
                      <MapPin size={20} className="text-pink-900 mt-1 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-800">{wedding.venue}</p>
                        <p className="text-sm text-gray-600">
                          {wedding.city}{wedding.country && `, ${wedding.country}`}
                        </p>
                      </div>
                    </div>
                  )}

                  {wedding.estimatedGuests && (
                    <div className="flex items-center gap-3">
                      <Users size={20} className="text-pink-900 flex-shrink-0" />
                      <p className="text-gray-700">
                        <span className="font-semibold">{wedding.estimatedGuests}</span> Guests
                      </p>
                    </div>
                  )}

                  {wedding.description && (
                    <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                      {wedding.description}
                    </p>
                  )}

                  {/* Status Badge */}
                  <div className="pt-2">
                    <span
                      className={`inline-block px-4 py-1 rounded-full text-xs font-bold ${
                        wedding.status === 'completed'
                          ? 'bg-green-100 text-green-800'
                          : wedding.status === 'confirmed'
                          ? 'bg-blue-100 text-blue-800'
                          : wedding.status === 'planning'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {wedding.status.charAt(0).toUpperCase() + wedding.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && filteredWeddings.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">💍</div>
            <h3 className="text-2xl font-bold text-pink-900 mb-2">No Weddings Found</h3>
            <p className="text-gray-600">
              {filter === 'all'
                ? 'No weddings to display yet.'
                : `No ${filter} weddings at the moment.`}
            </p>
          </div>
        )}

        {/* Call to Action */}
        {!loading && weddings.length > 0 && (
          <div className="mt-16 text-center">
            <div className="bg-pink-900 text-white py-12 px-6 rounded-2xl">
              <h3 className="text-3xl font-extrabold mb-4">
                Ready to Plan Your Dream Wedding?
              </h3>
              <p className="text-pink-200 mb-6 max-w-2xl mx-auto">
                Let us make your special day unforgettable with our expert planning 
                and graceful themes.
              </p>
              <button className="bg-white text-pink-900 px-8 py-3 rounded-full font-bold hover:bg-pink-50 transition">
                Contact Us Today
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeddingsGallery;