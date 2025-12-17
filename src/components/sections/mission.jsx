import React from "react";
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Shield, TrendingUp } from 'lucide-react';


const Mission = () => {
      return (
            <>
             <section className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/30">
                    <div className="max-w-6xl mx-auto">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                          <div className="inline-block mb-4 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
                            <span className="text-yellow-500 text-sm font-semibold">Our Mission</span>
                          </div>
                          <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Spreading Bitcoin Adoption Across <span className="text-yellow-500">Africa</span>
                          </h2>
                          <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                            For the past 2 years, I've been on a mission to educate Africans about Bitcoin and its 
                            transformative power. From local meetups to online workshops, we're building a community 
                            of empowered individuals who understand the importance of financial self-sovereignty.
                          </p>
                          <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Bitcoin isn't just technology—it's hope for millions seeking economic freedom. Together, 
                            we're creating a future where everyone has access to sound money and financial opportunity.
                          </p>
                          <Link 
                            to="/about" 
                            className="inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-400 transition-colors duration-200"
                          >
                            Read Our Full Story
                            <ArrowRight className="ml-2" size={20} />
                          </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-4">
                            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
                              <BookOpen className="text-yellow-500 mb-3" size={32} />
                              <h3 className="text-lg font-semibold mb-2">Education First</h3>
                              <p className="text-sm text-gray-400">Comprehensive Bitcoin courses for all levels</p>
                            </div>
                            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
                              <Shield className="text-yellow-500 mb-3" size={32} />
                              <h3 className="text-lg font-semibold mb-2">Security Focus</h3>
                              <p className="text-sm text-gray-400">Learn to protect your Bitcoin safely</p>
                            </div>
                          </div>
                          <div className="space-y-4 mt-8">
                            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
                              <Users className="text-yellow-500 mb-3" size={32} />
                              <h3 className="text-lg font-semibold mb-2">Community Driven</h3>
                              <p className="text-sm text-gray-400">Join a network of Bitcoin enthusiasts</p>
                            </div>
                            <div className="p-6 bg-gray-900 border border-gray-800 rounded-xl">
                              <TrendingUp className="text-yellow-500 mb-3" size={32} />
                              <h3 className="text-lg font-semibold mb-2">Practical Skills</h3>
                              <p className="text-sm text-gray-400">Real-world Bitcoin usage and strategies</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
            </>
      );
}
export default Mission;