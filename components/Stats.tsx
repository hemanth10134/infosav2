import React from 'react';
import { STATS } from '../constants';

const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-white relative z-20 -mt-10 mx-4 sm:mx-8 lg:mx-auto max-w-7xl rounded-2xl shadow-xl border border-slate-100">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-6 lg:px-12">
        {STATS.map((stat) => (
          <div key={stat.id} className="text-center group">
            <div className="flex justify-center mb-3">
              <div className="p-3 bg-primary-50 rounded-full group-hover:bg-primary-100 transition-colors">
                <stat.icon className="h-6 w-6 text-primary-600" />
              </div>
            </div>
            <div className="text-3xl font-extrabold text-slate-900 mb-1">{stat.value}</div>
            <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;